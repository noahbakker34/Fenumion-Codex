/* On-demand scene playback. Private descriptors arrive only in the authenticated vault.
   The owner-approved public preview uses an ordinary public HLS URL. */
(() => {
  'use strict';
  const players = new Set();
  let library;
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  const mediaBase = local
    ? new URL('assets/protected-media/', document.baseURI).href
    : 'https://raw.githubusercontent.com/noahbakker34/Fenumion-Codex/main/site/assets/protected-media/';

  function loadLibrary() {
    if (window.Hls) return Promise.resolve(window.Hls);
    if (!library) library = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'vendor/hls.light.min.js?v=1.7.3';
      script.onload = () => window.Hls ? resolve(window.Hls) : reject(new Error('Player unavailable'));
      script.onerror = () => { script.remove(); reject(new Error('Player unavailable')); };
      document.head.append(script);
    }).catch(error => { library = null; throw error; });
    return library;
  }

  function prepare(source) {
    if (source?.version !== 1 || typeof source.key !== 'string' || typeof source.playlist !== 'string') throw new Error('Invalid protected media');
    const key = Uint8Array.from(atob(source.key), char => char.charCodeAt(0));
    if (key.length !== 16 || !source.playlist.startsWith('#EXTM3U\n')) throw new Error('Invalid protected media');
    // The manifest may reference only local key blobs and immutable encrypted objects.
    const lines = source.playlist.trim().split('\n');
    for (const line of lines) {
      if (line.startsWith('#EXT-X-KEY:')) {
        if (!/^#EXT-X-KEY:METHOD=AES-128,URI="\{KEY\}",IV=0x[a-f0-9]{32}$/.test(line)) throw new Error('Invalid media key');
      } else if (!line.startsWith('#') && !/^[a-f0-9]{64}\.bin$/.test(line)) throw new Error('Invalid media object');
      else if (line.startsWith('#') && !/^#(?:EXTM3U|EXT-X-(?:VERSION|TARGETDURATION|MEDIA-SEQUENCE|PLAYLIST-TYPE|ENDLIST)|EXTINF)(?::.*)?$/.test(line)) throw new Error('Invalid media tag');
    }
    const keyUrl = URL.createObjectURL(new Blob([key], {type: 'application/octet-stream'}));
    const playlist = lines.map(line => line.startsWith('#EXT-X-KEY:')
      ? line.replace('{KEY}', keyUrl)
      : line.startsWith('#') ? line : new URL(line, mediaBase).href).join('\n') + '\n';
    const playlistUrl = URL.createObjectURL(new Blob([playlist], {type: 'application/vnd.apple.mpegurl'}));
    return {keyUrl, playlistUrl};
  }

  function cleanup() {
    for (const close of players) close();
    players.clear();
  }

  function setup(root, article, mayPlay) {
    root.querySelectorAll('[data-protected-scene], [data-public-scene]').forEach(figure => {
      const publicScene = figure.hasAttribute('data-public-scene');
      const kind = publicScene ? 'public' : 'protected';
      const scene = article.scenes?.[Number(figure.getAttribute(`data-${kind}-scene`))];
      const video = figure.querySelector('video');
      const button = figure.querySelector(`[data-load-${kind}-scene]`);
      const status = figure.querySelector(`[data-${kind}-scene-status]`);
      if (!(publicScene ? scene?.hls : scene?.protectedHls) || !video || !button || !status) return;
      let closed = false, hls, urls, focusAfterLoad = false;
      video.tabIndex = 0;
      // Apple enables ManagedMediaSource when remote playback has no alternate source.
      video.disableRemotePlayback = true;
      const authorized = () => !closed && figure.isConnected && mayPlay();
      const dispose = () => {
        hls?.destroy(); hls = null;
        video.pause(); video.removeAttribute('src'); video.load();
        if (urls) {
          URL.revokeObjectURL(urls.playlistUrl); URL.revokeObjectURL(urls.keyUrl); urls = null;
        }
      };
      const close = () => { closed = true; dispose(); };
      players.add(close);
      video.addEventListener('play', () => {
        document.getElementById('music-audio')?.pause();
        document.querySelectorAll('video[data-ambient-video]').forEach(ambient => ambient.pause());
      });
      const start = () => {
        if (!authorized()) { dispose(); return; }
        const focusVideo = focusAfterLoad && [button, document.body].includes(document.activeElement);
        button.hidden = true; status.textContent = '';
        if (focusVideo) video.focus({preventScroll: true});
        video.play().catch(() => {});
      };
      const fail = (message = 'The video could not be loaded. Please try again.') => {
        dispose();
        if (!authorized()) return;
        status.textContent = message;
        button.disabled = false; button.hidden = false;
        if (focusAfterLoad && [button, document.body].includes(document.activeElement)) button.focus({preventScroll: true});
      };
      video.addEventListener('error', () => { if ((urls || video.hasAttribute('src')) && authorized()) fail(); });
      if (publicScene) video.addEventListener('loadedmetadata', () => { if (!hls && authorized()) start(); });
      button.addEventListener('click', async () => {
        if (!authorized() || button.disabled) return;
        focusAfterLoad = document.activeElement === button;
        button.disabled = true; status.textContent = 'Preparing video…';
        try {
          dispose();
          let playlistUrl;
          if (publicScene) {
            playlistUrl = new URL(scene.hls, document.baseURI).href;
          } else {
            urls = prepare(scene.protectedHls);
            playlistUrl = urls.playlistUrl;
          }
          const Hls = await loadLibrary();
          if (!authorized()) { dispose(); return; }
          if (Hls.isSupported()) {
            hls = new Hls({maxBufferLength: 18, maxMaxBufferLength: 30, backBufferLength: 12, maxBufferSize: 48 * 1024 * 1024, lowLatencyMode: false});
            hls.on(Hls.Events.MANIFEST_PARSED, start);
            hls.on(Hls.Events.ERROR, (_event, data) => { if (data.fatal) fail(); });
            hls.loadSource(playlistUrl); hls.attachMedia(video);
          } else if (publicScene && video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = playlistUrl;
            video.load();
          } else {
            // Native HLS cannot reliably read these private, memory-only manifests/keys.
            fail(`This browser cannot play this ${publicScene ? '' : 'protected '}video. Please update your browser and try again.`);
          }
        } catch { fail(); }
      });
    });
  }
  window.CodexProtectedMedia = Object.freeze({setup, cleanup});
})();
