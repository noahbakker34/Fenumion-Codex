const musicStyles = [
  { id: "all", label: "All styles", description: "The complete Fenumion soundtrack." },
  { id: "adventure", label: "Adventure & Wonder", description: "Journeys, discoveries, heroes, and radiant places." },
  { id: "battle", label: "Battle & Pursuit", description: "Combat, chases, sieges, and rising stakes." },
  { id: "dark", label: "Darkness & Horror", description: "Dread, corruption, death, and dangerous realms." },
  { id: "mystery", label: "Mystery & Intrigue", description: "Secrets, schemes, betrayals, and veiled truths." },
  { id: "emotion", label: "Reflection & Sorrow", description: "Memory, sacrifice, grief, and quiet character moments." },
  { id: "magic", label: "Magic & Ceremony", description: "Gods, ancient rites, wonder, and the arcane." },
  { id: "exploration", label: "Ruins & Exploration", description: "Dungeons, wilderness, forgotten halls, and uneasy travel." }
];

const musicStyleRules = [
  ["battle", /assault|aggressive|apocalypse|battlefield|chokepoint|combat|conflict|daring|destruction|dramatic drums|dramatic legatos|eleventh hour|gulch drums|harsh brass|legion|massive epic|no time left|showdown|vigor|viking drum|viking war/i],
  ["dark", /blackrock|corruption|descent|horror|lord of destruction|necrotic|omen|outbreak|rot ambience|\bshadow\b|tarnished|terror|trapped|unholy|anxious/i],
  ["mystery", /conspiracy|cryptic|deceit|deception|detective|entropy|etropy|foreshadow|infiltrate|plot twist|politically dramatic|spiraling|stray|veil/i],
  ["emotion", /alice guitar|cello atmos|desperate prayer|emotional|lacrimosa|longing|moor|out of time|outplayed|somber|sour piano/i],
  ["magic", /choir|dulcimer|genesis|improvisation|olympus|paragon|sanctum|starfield/i],
  ["adventure", /alterac|assemble|dragonflight|embers|exodus|hightower|inspirational seeker|intervention|middle earth|meta heroic|outskirts|stepstones|viking encampment/i]
];

function classifyMusicStyle(title) {
  return musicStyleRules.find(([, pattern]) => pattern.test(title))?.[0] || "exploration";
}

const fenumionSoundtrack = [
  ["Alterac", "alterac.mp3"],
  ["Assault", "assault.mp3"],
  ["Blackrock", "blackrock.mp3"],
  ["Conflict Braam Loop", "conflict-braam-loop.mp3"],
  ["Conspiracy Theme B", "conspiracy-theme-b.mp3"],
  ["Conspiracy Theme", "conspiracy-theme.mp3"],
  ["Cryptic Strings", "cryptic-strings.mp3"],
  ["Daring Strings", "daring-strings.mp3"],
  ["Dragonflight Mix B", "dragonflight-mix-b.mp3"],
  ["Dragonflight", "dragonflight.mp3"],
  ["Dramatic Drums B", "dramatic-drums-b.mp3"],
  ["Dramatic Drums", "dramatic-drums.mp3"],
  ["Dramatic Legatos", "dramatic-legatos.mp3"],
  ["Dungeon Ambience", "dungeon-ambience.mp3"],
  ["Elven Corruption", "elven-corruption.mp3"],
  ["Embers", "embers.mp3"],
  ["Emotional Atmos Mix B", "emotional-atmos-mix-b.mp3"],
  ["Emotional Atmos", "emotional-atmos.mp3"],
  ["Gulch Drums Slower", "gulch-drums-slower.mp3"],
  ["Gulch Drums", "gulch-drums.mp3"],
  ["Harsh Brass", "harsh-brass.mp3"],
  ["Hightower Evolved", "hightower-evolved.mp3"],
  ["Hightower", "hightower.mp3"],
  ["Intervention", "intervention.mp3"],
  ["Legion Mix B", "legion-mix-b.mp3"],
  ["Legion", "legion.mp3"],
  ["Massive Epic Ensemble", "massive-epic-ensemble.mp3"],
  ["Middle Earth B", "middle-earth-b.mp3"],
  ["Middle Earth", "middle-earth.mp3"],
  ["Olympus", "olympus.mp3"],
  ["Plot Twist Quartet", "plot-twist-quartet.mp3"],
  ["Politically Dramatic Piano", "politically-dramatic-piano.mp3"],
  ["Shadow Atmos", "shadow-atmos.mp3"],
  ["Stepstones B", "stepstones-b.mp3"],
  ["Stepstones C", "stepstones-c.mp3"],
  ["Stepstones Drums", "stepstones-drums.mp3"],
  ["Stepstones", "stepstones.mp3"],
  ["Tarnished Atmos Mix B", "tarnished-atmos-mix-b.mp3"],
  ["Tarnished Atmos", "tarnished-atmos.mp3"],
  ["Unholy", "unholy.mp3"],
  ["A Desperate Prayer", "a-desperate-prayer.mp3"],
  ["Assemble", "assemble.mp3"],
  ["Chokepoint", "chokepoint.mp3"],
  ["Descent", "descent.mp3"],
  ["Hostile Jungle", "hostile-jungle.mp3"],
  ["Infiltrate", "infiltrate.mp3"],
  ["No Time Left", "no-time-left.mp3"],
  ["Percussion Soft", "percussion-soft.mp3"],
  ["The Moor", "the-moor.mp3"],
  ["Vigor", "vigor.mp3"],
  ["Aggressive Maneuvers", "aggressive-maneuvers.mp3"],
  ["Alice Guitar", "alice-guitar.mp3"],
  ["Anxious Atmos", "anxious-atmos.mp3"],
  ["Apocalypse Loop", "apocalypse-loop.mp3"],
  ["Battlefield B", "battlefield-b.mp3"],
  ["Battlefield Drum Loop", "battlefield-drum-loop.mp3"],
  ["Battlefield", "battlefield.mp3"],
  ["Buried Halls B", "buried-halls-b.mp3"],
  ["Buried Halls C", "buried-halls-c.mp3"],
  ["Buried Halls D", "buried-halls-d.mp3"],
  ["Buried Halls", "buried-halls.mp3"],
  ["Cello Atmos", "cello-atmos.mp3"],
  ["Choir Ensemble", "choir-ensemble.mp3"],
  ["Cinematic Horror B", "cinematic-horror-b.mp3"],
  ["Cinematic Horror", "cinematic-horror.mp3"],
  ["Combat Drum Loop", "combat-drum-loop.mp3"],
  ["Corruption B", "corruption-b.mp3"],
  ["Corruption", "corruption.mp3"],
  ["Deception", "deception.mp3"],
  ["Destruction Loop", "destruction-loop.mp3"],
  ["Destruction", "destruction.mp3"],
  ["Detective Synths B", "detective-synths-b.mp3"],
  ["Detective Synths", "detective-synths.mp3"],
  ["Downward", "downward.mp3"],
  ["Dulcimer Full Loop", "dulcimer-full-loop.mp3"],
  ["Dulcimer Loop", "dulcimer-loop.mp3"],
  ["Dungeon A", "dungeon-a.mp3"],
  ["Dungeon B", "dungeon-b.mp3"],
  ["Dungeon C", "dungeon-c.mp3"],
  ["Dungeon D", "dungeon-d.mp3"],
  ["Eleventh Hour", "eleventh-hour.mp3"],
  ["Entropy", "entropy.mp3"],
  ["Etropy B", "etropy-b.mp3"],
  ["Exodus", "exodus.mp3"],
  ["Foreshadow B Atmos", "foreshadow-b-atmos.mp3"],
  ["Foreshadow B", "foreshadow-b.mp3"],
  ["Foreshadow", "foreshadow.mp3"],
  ["Genesis", "genesis.mp3"],
  ["Hybrid Intermission", "hybrid-intermission.mp3"],
  ["Hybrid Terror Textures", "hybrid-terror-textures.mp3"],
  ["Improvisation Choir", "improvisation-choir.mp3"],
  ["Lacrimosa Harp", "lacrimosa-harp.mp3"],
  ["Light Cinematic Synth A", "light-cinematic-synth-a.mp3"],
  ["Light Cinematic Synth B", "light-cinematic-synth-b.mp3"],
  ["Longing B", "longing-b.mp3"],
  ["Longing", "longing.mp3"],
  ["Lord of Destruction", "lord-of-destruction.mp3"],
  ["Meta Heroic Ensemble", "meta-heroic-ensemble.mp3"],
  ["Mother of Deceit Reprise", "mother-of-deceit-reprise.mp3"],
  ["Mother of Deceit Synths", "mother-of-deceit-synths.mp3"],
  ["Necrotic Strings B", "necrotic-strings-b.mp3"],
  ["Necrotic Strings", "necrotic-strings.mp3"],
  ["Omen Atmos", "omen-atmos.mp3"],
  ["Out of Time Atmos", "out-of-time-atmos.mp3"],
  ["Outbreak Piano B", "outbreak-piano-b.mp3"],
  ["Outbreak Piano C", "outbreak-piano-c.mp3"],
  ["Outbreak Piano", "outbreak-piano.mp3"],
  ["Outplayed Choir", "outplayed-choir.mp3"],
  ["Outplayed Piano", "outplayed-piano.mp3"],
  ["Outplayed", "outplayed.mp3"],
  ["Outskirts", "outskirts.mp3"],
  ["Paragon Dark Dulcimers", "paragon-dark-dulcimers.mp3"],
  ["Paragon", "paragon.mp3"],
  ["Renaissance Combat B", "renaissance-combat-b.mp3"],
  ["Renaissance Combat", "renaissance-combat.mp3"],
  ["Rot Ambience B", "rot-ambience-b.mp3"],
  ["Rot Ambience", "rot-ambience.mp3"],
  ["Sanctum Loop", "sanctum-loop.mp3"],
  ["Showdown B", "showdown-b.mp3"],
  ["Simple Combat Atmos", "simple-combat-atmos.mp3"],
  ["Simple Combat B", "simple-combat-b.mp3"],
  ["Simple Combat", "simple-combat.mp3"],
  ["Simple Hybrid Combat", "simple-hybrid-combat.mp3"],
  ["Somber Cello", "somber-cello.mp3"],
  ["Sour Piano Improvisation B", "sour-piano-improvisation-b.mp3"],
  ["Sour Piano Improvisation", "sour-piano-improvisation.mp3"],
  ["Spiraling", "spiraling.mp3"],
  ["Starfield", "starfield.mp3"],
  ["Stray B", "stray-b.mp3"],
  ["Stray", "stray.mp3"],
  ["The Inspirational Seeker", "the-inspirational-seeker.mp3"],
  ["Trapped", "trapped.mp3"],
  ["Veil", "veil.mp3"],
  ["Viking Combat", "viking-combat.mp3"],
  ["Viking Drum Loop", "viking-drum-loop.mp3"],
  ["Viking Encampment B Vocals", "viking-encampment-b-vocals.mp3"],
  ["Viking Encampment C", "viking-encampment-c.mp3"],
  ["Viking Encampment", "viking-encampment.mp3"],
  ["Viking War", "viking-war.mp3"]
].map(([title, file]) => ({ title, file, style: classifyMusicStyle(title), src: `assets/music/action-drama/${file}` }))
  .sort((a, b) => {
    const styleOrder = musicStyles.findIndex(style => style.id === a.style) - musicStyles.findIndex(style => style.id === b.style);
    return styleOrder || a.title.localeCompare(b.title);
  });

const musicPlayer = document.querySelector("#music-player");
const musicToggle = document.querySelector("#music-toggle");
const musicToggleNow = document.querySelector("#music-toggle-now");
const musicPanel = document.querySelector("#music-panel");
const musicClose = document.querySelector("#music-close");
const musicAudio = document.querySelector("#music-audio");
const musicTitle = document.querySelector("#music-title");
const musicStyleLabel = document.querySelector("#music-style-label");
const musicStyleSelect = document.querySelector("#music-style");
const musicTrackSelect = document.querySelector("#music-track-select");
const musicRecommendation = document.querySelector("#music-recommendation");
const musicRecommendationTitle = document.querySelector("#music-recommendation-title");
const musicRecommendationReason = document.querySelector("#music-recommendation-reason");
const musicPlay = document.querySelector("#music-play");
const musicPrevious = document.querySelector("#music-previous");
const musicNext = document.querySelector("#music-next");
const musicLoop = document.querySelector("#music-loop");
const musicProgress = document.querySelector("#music-progress");
const musicCurrentTime = document.querySelector("#music-current-time");
const musicDuration = document.querySelector("#music-duration");
const musicTrackNumber = document.querySelector("#music-track-number");
const musicVolume = document.querySelector("#music-volume");
const musicStatus = document.querySelector("#music-status");

const musicRecommendations = [
  { match: /aria|pride/, title: "Mother of Deceit Reprise", reason: "A beautiful, treacherous theme for Aria and the pride that shadows her story." },
  { match: /world index|home|the fenumion codex/, title: "Middle Earth", reason: "A welcoming overture for entering the world of Fenumion." },
  { match: /magnus/, title: "Politically Dramatic Piano", reason: "Measured tension for Magnus, his authority, and the cost of betrayal." },
  { match: /wren/, title: "Longing", reason: "A reflective theme for Wren's bonds, burdens, and unfinished paths." },
  { match: /death|vain|citadel-of-sorrow|citadel of sorrow/, title: "Unholy", reason: "A grave, otherworldly atmosphere for death and its dominion." },
  { match: /the-before|before/, title: "Elven Corruption", reason: "Ancient beauty made uneasy among the ruins of the Before." },
  { match: /cala|namo|god|divine/, title: "Olympus", reason: "Ceremonial scale for the divine powers of Fenumion." },
  { match: /zarathis|melian/, title: "Hightower Evolved", reason: "Grandeur and unease for Zarathis and the history bound to it." },
  { match: /fein-uaill|shining-shore|shard/, title: "Hightower", reason: "A radiant, elevated theme for the wonders of Fein Uaill." },
  { match: /gael|tower-of-gael/, title: "Embers", reason: "Solitude, endurance, and a distant light for the Tower of Gael." },
  { match: /pristinia|pilgrim|common-man/, title: "Middle Earth B", reason: "A gentler road theme for settlements, hearths, and arriving travelers." },
  { match: /knight|wyrm|titanwall|war|battle/, title: "Massive Epic Ensemble", reason: "Heroic scale for battles, monsters, and impossible defenses." },
  { match: /ethos|chronicle|how-to-read/, title: "The Inspirational Seeker", reason: "A thoughtful beginning for learning how Fenumion remembers." },
  { match: /quote|memory|funeral/, title: "Emotional Atmos", reason: "A restrained bed for remembrance and the words that endure." }
];

function getMusicContext() {
  const route = decodeURIComponent(location.hash.replace(/^#/, "") || "world-index").replaceAll("-", " ");
  const recordDialog = document.querySelector("#record-dialog");
  const recordHeading = recordDialog?.open ? document.querySelector("#record-dialog-title")?.textContent || "" : "";
  const heading = recordHeading || document.querySelector("#article h1")?.textContent || "";
  return `${route} ${heading}`.toLowerCase();
}

function getMusicRecommendation() {
  const context = getMusicContext();
  return musicRecommendations.find(recommendation => recommendation.match.test(context)) || {
    title: "Middle Earth",
    reason: "A broad Fenumion theme suited to exploring this part of the Codex."
  };
}

function findMusicTrack(title) {
  return fenumionSoundtrack.findIndex(track => track.title === title);
}

let activeMusicStyle = localStorage.getItem("fenumion-music-style") || "all";
if (!musicStyles.some(style => style.id === activeMusicStyle)) activeMusicStyle = "all";
const savedMusicFile = localStorage.getItem("fenumion-music-file");
const firstRecommendation = getMusicRecommendation();
let musicIndex = savedMusicFile ? fenumionSoundtrack.findIndex(track => track.file === savedMusicFile) : findMusicTrack(firstRecommendation.title);
let musicLoops = localStorage.getItem("fenumion-music-loop") !== "false";
musicIndex = Number.isInteger(musicIndex) && musicIndex >= 0 && musicIndex < fenumionSoundtrack.length ? musicIndex : 0;

function musicStyle(styleId) {
  return musicStyles.find(style => style.id === styleId) || musicStyles[0];
}

function visibleMusicTracks() {
  return activeMusicStyle === "all" ? fenumionSoundtrack : fenumionSoundtrack.filter(track => track.style === activeMusicStyle);
}

function populateMusicStyles() {
  musicStyleSelect.replaceChildren(...musicStyles.map(style => {
    const option = document.createElement("option");
    option.value = style.id;
    option.textContent = style.label;
    return option;
  }));
  musicStyleSelect.value = activeMusicStyle;
}

function populateMusicTracks() {
  const tracks = visibleMusicTracks();
  musicTrackSelect.replaceChildren(...tracks.map(track => {
    const option = document.createElement("option");
    option.value = track.file;
    option.textContent = track.title;
    return option;
  }));
  const current = fenumionSoundtrack[musicIndex];
  if (tracks.includes(current)) musicTrackSelect.value = current.file;
}

function updateMusicRecommendation() {
  const recommendation = getMusicRecommendation();
  musicRecommendationTitle.textContent = recommendation.title;
  musicRecommendationReason.textContent = recommendation.reason;
  musicRecommendation.dataset.track = recommendation.title;
  musicRecommendation.setAttribute("aria-label", `Play suggested track: ${recommendation.title}`);
}

function formatMusicTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateMusicState() {
  const playing = !musicAudio.paused;
  musicPlay.textContent = playing ? "Ⅱ" : "▶";
  musicPlay.setAttribute("aria-label", playing ? "Pause" : "Play");
  musicToggle.classList.toggle("playing", playing);
  musicPlayer.classList.toggle("playing", playing);
}

function loadMusicTrack(index, { autoplay = false } = {}) {
  musicIndex = (index + fenumionSoundtrack.length) % fenumionSoundtrack.length;
  const track = fenumionSoundtrack[musicIndex];
  const tracks = visibleMusicTracks();
  const playlistIndex = tracks.indexOf(track);
  musicAudio.src = track.src;
  musicTitle.textContent = track.title;
  musicToggleNow.textContent = track.title;
  musicStyleLabel.textContent = musicStyle(track.style).label;
  musicTrackNumber.textContent = playlistIndex >= 0
    ? `Track ${playlistIndex + 1} of ${tracks.length} · ${fenumionSoundtrack.length} total`
    : `${fenumionSoundtrack.length} tracks`;
  populateMusicTracks();
  musicTrackSelect.value = track.file;
  musicProgress.value = 0;
  musicCurrentTime.textContent = "0:00";
  musicDuration.textContent = "0:00";
  musicStatus.textContent = autoplay ? `Loading ${track.title}` : "Ready to play";
  localStorage.setItem("fenumion-music-file", track.file);
  if (autoplay) musicAudio.play().catch(() => { musicStatus.textContent = "Press play to begin"; });
}

function stepMusicTrack(direction, { autoplay = false } = {}) {
  const tracks = visibleMusicTracks();
  const currentTrack = fenumionSoundtrack[musicIndex];
  const currentIndex = Math.max(0, tracks.indexOf(currentTrack));
  const nextIndex = (currentIndex + direction + tracks.length) % tracks.length;
  loadMusicTrack(fenumionSoundtrack.indexOf(tracks[nextIndex]), { autoplay });
}

function selectMusicStyle(styleId, { loadFirst = true } = {}) {
  activeMusicStyle = musicStyles.some(style => style.id === styleId) ? styleId : "all";
  musicStyleSelect.value = activeMusicStyle;
  localStorage.setItem("fenumion-music-style", activeMusicStyle);
  const tracks = visibleMusicTracks();
  const currentTrack = fenumionSoundtrack[musicIndex];
  populateMusicTracks();
  if (loadFirst && !tracks.includes(currentTrack) && tracks.length) {
    loadMusicTrack(fenumionSoundtrack.indexOf(tracks[0]), { autoplay: !musicAudio.paused });
  } else {
    const currentPlaylistIndex = tracks.indexOf(currentTrack);
    musicTrackNumber.textContent = currentPlaylistIndex >= 0
      ? `Track ${currentPlaylistIndex + 1} of ${tracks.length} · ${fenumionSoundtrack.length} total`
      : `${tracks.length} tracks · ${fenumionSoundtrack.length} total`;
  }
}

function openMusicPanel(open = true) {
  musicPanel.hidden = !open;
  musicToggle.setAttribute("aria-expanded", String(open));
  if (open) musicPlay.focus();
}

musicToggle.addEventListener("click", () => openMusicPanel(musicPanel.hidden));
musicClose.addEventListener("click", () => { openMusicPanel(false); musicToggle.focus(); });
musicRecommendation.addEventListener("click", () => {
  const index = findMusicTrack(musicRecommendation.dataset.track);
  if (index < 0) return;
  activeMusicStyle = fenumionSoundtrack[index].style;
  selectMusicStyle(activeMusicStyle, { loadFirst: false });
  loadMusicTrack(index, { autoplay: true });
});
musicStyleSelect.addEventListener("change", () => selectMusicStyle(musicStyleSelect.value));
musicTrackSelect.addEventListener("change", () => {
  const index = fenumionSoundtrack.findIndex(track => track.file === musicTrackSelect.value);
  if (index >= 0) loadMusicTrack(index, { autoplay: !musicAudio.paused });
});
musicPlay.addEventListener("click", () => {
  if (musicAudio.paused) {
    musicStatus.textContent = `Loading ${fenumionSoundtrack[musicIndex].title}`;
    musicAudio.play().catch(() => { musicStatus.textContent = "Playback could not start"; });
  } else {
    musicAudio.pause();
  }
});
musicPrevious.addEventListener("click", () => {
  if (musicAudio.currentTime > 3) {
    musicAudio.currentTime = 0;
    return;
  }
  stepMusicTrack(-1, { autoplay: !musicAudio.paused });
});
musicNext.addEventListener("click", () => stepMusicTrack(1, { autoplay: !musicAudio.paused }));
musicLoop.addEventListener("click", () => {
  musicLoops = !musicLoops;
  musicLoop.classList.toggle("active", musicLoops);
  musicLoop.setAttribute("aria-pressed", String(musicLoops));
  localStorage.setItem("fenumion-music-loop", String(musicLoops));
  musicStatus.textContent = musicLoops ? "Playlist loop on" : "Playlist loop off";
});
musicProgress.addEventListener("input", () => {
  if (Number.isFinite(musicAudio.duration)) musicAudio.currentTime = musicAudio.duration * (Number(musicProgress.value) / 1000);
});
musicVolume.addEventListener("input", () => {
  musicAudio.volume = Number(musicVolume.value);
  localStorage.setItem("fenumion-music-volume", musicVolume.value);
});
musicAudio.addEventListener("loadedmetadata", () => { musicDuration.textContent = formatMusicTime(musicAudio.duration); });
musicAudio.addEventListener("timeupdate", () => {
  musicCurrentTime.textContent = formatMusicTime(musicAudio.currentTime);
  musicProgress.value = Number.isFinite(musicAudio.duration) && musicAudio.duration > 0 ? String(Math.round((musicAudio.currentTime / musicAudio.duration) * 1000)) : "0";
});
musicAudio.addEventListener("play", () => { musicStatus.textContent = `Playing ${fenumionSoundtrack[musicIndex].title}`; updateMusicState(); });
musicAudio.addEventListener("pause", () => { if (!musicAudio.ended) musicStatus.textContent = "Paused"; updateMusicState(); });
musicAudio.addEventListener("ended", () => {
  const tracks = visibleMusicTracks();
  const currentPlaylistIndex = tracks.indexOf(fenumionSoundtrack[musicIndex]);
  const hasNext = currentPlaylistIndex >= 0 && currentPlaylistIndex < tracks.length - 1;
  if (hasNext || musicLoops) stepMusicTrack(1, { autoplay: true });
  else { musicStatus.textContent = "Playlist complete"; updateMusicState(); }
});
musicAudio.addEventListener("error", () => { musicStatus.textContent = "This track could not be loaded"; updateMusicState(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !musicPanel.hidden) openMusicPanel(false);
});
window.addEventListener("hashchange", () => setTimeout(updateMusicRecommendation, 0));
window.addEventListener("popstate", () => setTimeout(updateMusicRecommendation, 0));
document.addEventListener("click", event => {
  if (event.target.closest("button, [data-article], a[href^='#']")) setTimeout(updateMusicRecommendation, 60);
});

const savedMusicVolume = Number(localStorage.getItem("fenumion-music-volume"));
musicAudio.volume = Number.isFinite(savedMusicVolume) && savedMusicVolume >= 0 && savedMusicVolume <= 1 ? savedMusicVolume : 0.65;
musicVolume.value = String(musicAudio.volume);
musicLoop.classList.toggle("active", musicLoops);
musicLoop.setAttribute("aria-pressed", String(musicLoops));
populateMusicStyles();
selectMusicStyle(activeMusicStyle, { loadFirst: false });
updateMusicRecommendation();
loadMusicTrack(musicIndex);
updateMusicState();
