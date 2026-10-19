/* Long scene playback. Keys and playlists arrive only in the authenticated vault. */
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
    root.querySelectorAll('[data-protected-scene]').forEach(figure => {
      const scene = article.scenes?.[Number(figure.dataset.protectedScene)];
      const video = figure.querySelector('video');
      const button = figure.querySelector('[data-load-protected-scene]');
      const status = figure.querySelector('[data-protected-scene-status]');
      if (!scene?.protectedHls || !video || !button || !status) return;
      let closed = false, hls, urls, focusAfterLoad = false;
      video.tabIndex = 0;
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
      video.addEventListener('play', () => document.getElementById('music-audio')?.pause());
      const start = () => {
        if (!authorized()) { dispose(); return; }
        const focusVideo = focusAfterLoad && [button, document.body].includes(document.activeElement);
        button.hidden = true; status.textContent = '';
        if (focusVideo) video.focus({preventScroll: true});
        video.play().catch(() => {});
      };
      const fail = () => {
        dispose();
        if (!authorized()) return;
        status.textContent = 'The video could not be loaded. Please try again.';
        button.disabled = false; button.hidden = false;
      };
      video.addEventListener('error', () => { if (urls && authorized()) fail(); });
      button.addEventListener('click', async () => {
        if (!authorized() || button.disabled) return;
        focusAfterLoad = document.activeElement === button;
        button.disabled = true; status.textContent = 'Preparing video…';
        try {
          dispose(); urls = prepare(scene.protectedHls);
          const Hls = await loadLibrary();
          if (!authorized()) { dispose(); return; }
          if (Hls.isSupported()) {
            hls = new Hls({maxBufferLength: 18, maxMaxBufferLength: 30, backBufferLength: 12, maxBufferSize: 48 * 1024 * 1024, lowLatencyMode: false});
            hls.on(Hls.Events.MANIFEST_PARSED, start);
            hls.on(Hls.Events.ERROR, (_event, data) => { if (data.fatal) fail(); });
            hls.loadSource(urls.playlistUrl); hls.attachMedia(video);
          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = urls.playlistUrl;
            video.addEventListener('loadedmetadata', start, {once: true});
            video.load();
          } else {
            dispose(); button.disabled = false;
            status.textContent = 'This browser cannot play this video. Please use a current browser.';
          }
        } catch { fail(); }
      });
    });
  }
  window.CodexProtectedMedia = Object.freeze({setup, cleanup});
})();
