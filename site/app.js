// Runtime only. Canonical content lives in content/records; generated catalog has no article bodies.
const codexCatalog = window.FENUMION_CATALOG;
const articles = codexCatalog.articles;
const archiveIndex = codexCatalog.archiveIndex;
const interactiveMaps = codexCatalog.interactiveMaps;
const navigationRegions = codexCatalog.navigationRegions;
const archiveLinks = codexCatalog.archiveLinks;
const fixedArticlePaths = new Map(codexCatalog.fixedArticlePaths);
const articlePaths = new Map();
const subchannelMap = codexCatalog.subchannelMap;
const relationshipMaps = {};
const questEventConsequences = codexCatalog.questEventConsequences;
const legacyCharacterProfiles = {};
const questTimelineAdditions = [];
const questPlayerAdditions = [];
const npcIslandGroups = codexCatalog.npcIslandGroups;
const factionDirectoryItems = codexCatalog.factionDirectoryItems;
const npcDiscoveries = window.FENUMION_NPC_DISCOVERIES || {entries:[]};
const routeAliases = new Map(codexCatalog.routeAliases);
const byId = new Map(articles.map(article => [article.id, article]));
let mappedLocationTitles = new Set();
// Browsing previews never replace the original artwork on records or in the art archive.
function browseImageSource(source) { return codexCatalog.browseImages?.[source]?.src || source; }

function mergeMedia(record, media) {
  if (!record || !media) return;
  const { aliases = [], gallery = [], ...fields } = media;
  Object.assign(record, fields);
  if (aliases.length) record.aliases = [...new Set([...(record.aliases || []), ...aliases])];
  if (gallery.length) {
    const existingGallery = record.gallery || [];
    record.gallery = [...existingGallery, ...gallery.filter(item => !existingGallery.some(existing => existing.image === item.image))];
  }
}

function applyMediaCatalog(catalog = window.FENUMION_MEDIA || {}) {
  const people = [...questPlayerAdditions, ...archiveIndex.characters, ...archiveIndex.npcs];
  Object.entries(catalog.characters || {}).forEach(([title, media]) => {
    people.filter(person => person.title === title).forEach(person => mergeMedia(person, media));
  });
  Object.entries(catalog.locations || {}).forEach(([title, media]) => {
    archiveIndex.islands.filter(place => place.title === title).forEach(place => mergeMedia(place, media));
  });
  Object.entries(catalog.articles || {}).forEach(([id, media]) => mergeMedia(byId.get(id), media));
}


const restrictedArticleIds = new Set([
  ...articles.filter(article=>article.discoveryProtected).map(article=>article.id),
  "cosmology-guide",
  "great-fracture",
  "wyrm-worlds-end",
  "death-dumuzi",
  "cala",
  "mya",
  "namoo",
  "kurayami",
  "delerium",
  "the-gate",
  "the-before-melian",
  "papirak-paloma",
  "strange-talon-statecraft",
  "sophina-statecraft"
]);
const AUTH_ORIGIN = "https://auth.fenumion.com";
const VAULT_LOCK_KEY = "fenumion-vault-locked";
let vaultUnlocked = false;
let vaultData = null;
let vaultIdentity = null;

function rebuildDerivedData() {
  searchTextCache = new WeakMap();
  searchNameCache.clear();
  mappedLocationTitles = new Set(interactiveMaps.flatMap(map => map.pins.map(pin => pin.title)));
  articlePaths.clear();
  navigationRegions.forEach(region => {
    const regionTitle = byId.get(region.article)?.title || region.title;
    articlePaths.set(region.article, [regionTitle]);
    region.branches.forEach(branch => branch.items.forEach(item => {
      const itemTitle = byId.get(item.article)?.title || item.label;
      if (!articlePaths.has(item.article)) articlePaths.set(item.article, [regionTitle, branch.title, itemTitle]);
    }));
  });
  archiveLinks.forEach(item => articlePaths.set(item.article, ["Archive", item.label]));
  fixedArticlePaths.forEach((path, id) => articlePaths.set(id, path));
}

function mergeVaultRecords(group, records = []) {
  const current = archiveIndex[group] || (archiveIndex[group] = []);
  records.forEach(record => {
    const stubIndex = current.findIndex(item => item.veiled && item.article === record.article);
    if (stubIndex >= 0) current.splice(stubIndex, 1);
    const duplicate = current.some(item => item.title === record.title && item.article === record.article);
    if (!duplicate) current.push(record);
  });
}

function applyVault(data) {
  if (!data || typeof data !== "object" || !Array.isArray(data.articles)) {
    throw new TypeError("The vault payload is missing its article collection.");
  }
  for (const full of data.articles || []) {
    const stub = byId.get(full.id);
    if (stub) Object.assign(stub, full, {bodyLoaded:true});
    else { full.bodyLoaded=true; articles.push(full); byId.set(full.id, full); }
  }
  for (const [id, body] of Object.entries(data.bodies || {})) {
    const article = byId.get(id);
    if (article) { article.body = body; article.bodyLoaded=true; }
  }
  for (const [id, body] of Object.entries(data.bodyAppends || {})) {
    const article = byId.get(id);
    if (article && !article.body.includes(body)) article.body += body;
  }
  for (const [group, records] of Object.entries(data.index || {})) mergeVaultRecords(group, records);
  for (const record of data.quest?.timelineAdditions || []) {
    if (!questTimelineAdditions.some(item => item.title === record.title && item.sort === record.sort)) questTimelineAdditions.push(record);
  }
  Object.assign(questEventConsequences, data.quest?.eventConsequences || {});
  for (const [mapId, pins] of Object.entries(data.mapPins || {})) {
    const map = interactiveMaps.find(candidate => candidate.id === mapId);
    if (!map) continue;
    pins.forEach(pin => {
      if (!map.pins.some(existing => existing.title === pin.title)) map.pins.push(pin);
    });
  }
  Object.assign(legacyCharacterProfiles, data.profiles || {});
  Object.assign(subchannelMap, data.subchannels || {});
  applyMediaCatalog();
  rebuildDerivedData();
}

async function fetchVault() {
  try {
    const response = await fetch(`${AUTH_ORIGIN}/vault/data`, { credentials: "include" });
    if (response.ok) return { data: await response.json() };
    return { error: (await response.json().catch(() => ({}))).error || "unknown" };
  } catch {
    return { error: "network" };
  }
}

async function fetchVaultIdentity() {
  try {
    const response = await fetch(`${AUTH_ORIGIN}/me`, { credentials: "include" });
    if (response.ok) vaultIdentity = await response.json();
  } catch {
    vaultIdentity = null;
  }
  updateVaultState();
}

const VAULT_MESSAGES = {
  member: "Your Discord account isn’t in the Fenumion server. Join it, then try again.",
  role: "Your account doesn’t have vault access. Ask the Alpha Team if you think it should.",
  storage: "The vault is being updated. Try again in a few minutes.",
  empty: "The vault is being updated. Try again in a few minutes.",
  network: "Couldn’t reach the vault. Check your connection and try again.",
  unknown: "The vault couldn’t be opened. Try again shortly."
};
const hubPages = [
  { id: "people-directory", label: "Characters", detail: "Heroes · NPCs · Gods", image: "assets/archive/wrath.gif" },
  { id: "living-timeline", label: "Timeline", detail: "Causes · Events · Consequences", image: "assets/archive/abyss.png" },
  { id: "visual-archive", label: "Locations", detail: "Regions · Settlements · Landmarks", image: "assets/archive/world-map.jpeg" },
  { id: "factions", label: "Factions", detail: "Companies · Orders · Alliances", image: "assets/archive/fein-uaill.jpeg" },
  { id: "memorable-quotes", label: "Quotes", detail: "Words the world remembers", image: "assets/archive/throne.png" },
  { id: "ethos-of-fenumion", label: "Guide", detail: "World · Play · Principles", image: "assets/archive/pristinia.webp" }
];
const hubPageById = new Map(hubPages.map(page => [page.id, page]));
const navigation = document.querySelector("#navigation");
const articleContent = document.querySelector("#article-content");
const breadcrumbs = document.querySelector("#breadcrumbs");
const contents = document.querySelector("#contents");
const search = document.querySelector("#search");
const searchPanel = document.querySelector("#search-panel");
const searchResults = document.querySelector("#search-results");
const searchCount = document.querySelector("#search-count");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menu-button");
const searchToggle = document.querySelector("#search-toggle");
const scrim = document.querySelector("#scrim");
const vaultButton = document.querySelector("#vault-button");
const vaultDialog = document.querySelector("#vault-dialog");
const vaultMessage = document.querySelector("#vault-message");
const vaultSignin = document.querySelector("#vault-signin");
const vaultAccount = document.querySelector("#vault-account");
const campaignToolsButtons = [...document.querySelectorAll(".campaign-tools-button")];
const recordDialog = document.querySelector("#record-dialog");
const recordDialogContent = document.querySelector("#record-dialog-content");
const recordDialogClose = document.querySelector("#record-dialog-close");
let ambientVideoObserver = null;
let featuredContentTimer = null;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}

function timelineDetailParagraphs(item) {
  return [item.summary, window.codexReadingText(questEventConsequences[item.title])];
}

let eventStoryOrigin = null;
function timelineStory(item) {
  if (!item) return null;
  const story = item?.story && byId.get(item.story);
  return !isRestrictedTimelineEvent(item) && story && isPlayerSafeArticle(story.id) && story.eventChronicle?.events.includes(item.title) ? story : null;
}
function openEventStory(item) {
  const story = timelineStory(item);
  if (!story) return;
  eventStoryOrigin = { article: story.id, route: location.hash };
  closeRecordDialog();
  renderArticle(story.id);
}
function eventStoryReturnRoute(article) {
  return eventStoryOrigin?.article === article.id ? eventStoryOrigin.route : '#living-timeline';
}

function characterRecordKind(person) { return person.characterKind === 'pet' ? 'pet' : 'player'; }
function characterRecordLabel(person) { return person.characterKind === 'pet' ? 'Player-character pet' : 'Player character'; }

function npcRegionLabel(person) {
  const group = npcIslandGroups.find(group=>group.people.some(record=>record.name===person.title));
  return group && group.id !== 'unplaced' ? `Region · ${group.title}` : 'Region unestablished';
}

function characterProfileParagraphs(person) {
  const profile = legacyCharacterProfiles[person.title] || byId.get(person.article)?.profile;
  return profile ? [profile.personality, profile.achievements, profile.relationships] : [person.summary, '', ''];
}

function closeRecordDialog() {
  if (!recordDialog) return;
  if (typeof recordDialog.close === "function" && recordDialog.open) recordDialog.close();
  else recordDialog.removeAttribute("open");
}

function openTimelineRecord(item) {
  if (!recordDialog || !recordDialogContent || isRestrictedTimelineEvent(item)) return;
  recordDialogContent.classList.remove('chronicle-character-panel');
  delete recordDialogContent.dataset.character;
  const [whatHappened, whyItMatters] = timelineDetailParagraphs(item);
  const context = timelineBrowseContext?.route === location.hash && timelineBrowseContext.items.includes(item) ? timelineBrowseContext.items : null;
  const readableTimeline = context ? context.filter(readableTimelineEvent) : archiveIndex.timeline.filter(readableTimelineEvent).sort((a, b) => compareTimelineEvents(a, b, 'oldest'));
  const currentIndex = readableTimeline.findIndex(candidate => candidate.title === item.title);
  const previousItem = currentIndex > 0 ? readableTimeline[currentIndex - 1] : null;
  const nextItem = currentIndex >= 0 && currentIndex < readableTimeline.length - 1 ? readableTimeline[currentIndex + 1] : null;
  const reviewSources = [...new Set([...(item.reviewSources || []), ...(item.dating?.calendarAdjustment?.sources || [])])];
  const story = timelineStory(item);
  const relatedButton = story
    ? `<a class="record-dialog-link" href="#${escapeHtml(story.id)}" data-event-story="${escapeHtml(story.id)}" data-event-title="${escapeHtml(item.title)}">Read the full story →</a>`
    : item.article && item.article !== "living-timeline"
      ? `<button class="record-dialog-link" type="button" data-record-article="${escapeHtml(item.article)}">Explore context: ${escapeHtml(byId.get(item.article)?.title || 'related record')} →</button>` : '';
  const timelineNavigation = previousItem || nextItem ? `
    <nav class="record-dialog-nav" aria-label="Browse timeline records">
      ${previousItem ? `<button type="button" data-timeline-title="${escapeHtml(previousItem.title)}"><small>Previous event</small><strong>← ${escapeHtml(previousItem.title)}</strong></button>` : `<span></span>`}
      ${nextItem ? `<button type="button" data-timeline-title="${escapeHtml(nextItem.title)}"><small>Next event</small><strong>${escapeHtml(nextItem.title)} →</strong></button>` : ""}
    </nav>` : "";
  recordDialogContent.innerHTML = `
    <p class="record-dialog-kicker">Timeline record · ${escapeHtml(item.kind)}</p>
    <h2 id="record-dialog-title">${escapeHtml(item.title)}</h2>
    <div class="record-dialog-dek">${timelineDateMarkup(item)} · ${escapeHtml(item.location)}</div>
    ${relatedButton}
    <p class="timeline-dating-note">${escapeHtml(item.dating?.note || 'The date basis has not yet received a separate review.')}</p>
    <div class="record-dialog-body">
      <p><strong>Importance · ${timelineImportanceLabel(item)}</strong>${escapeHtml(item.importanceReason || timelineImportance(item)?.description || 'This event has not yet been assigned an importance level.')}</p>
      <p><strong>What happened</strong>${escapeHtml(whatHappened)}</p>
      ${whyItMatters ? `<p><strong>Consequences</strong>${escapeHtml(whyItMatters)}</p>` : ""}
    </div>
    <div class="record-dialog-meta"><span>People · ${escapeHtml(item.people || "Unrecorded")}</span>${(item.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    ${reviewSources.length ? `<p class="timeline-review-sources"><strong>Checked quest evidence</strong> ${reviewSources.map((url,index) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Receipt ${index+1}</a>`).join(' · ')}</p>` : ''}
    ${renderEventConnections(item)}
    ${window.CodexReader.eventChains(item)}
    ${timelineNavigation}`;
  window.FenumionCalendar.render(recordDialogContent);
  if (!recordDialog.open && typeof recordDialog.showModal === "function") recordDialog.showModal();
  else if (!recordDialog.open) recordDialog.setAttribute("open", "");
  recordDialog.scrollTop = 0;
  requestAnimationFrame(() => recordDialogClose?.focus());
}

function openCharacterRecord(person, personLabel = "Character") {
  if (!recordDialog || !recordDialogContent) return;
  recordDialogContent.dataset.character=person.article;
  const canonical=byId.get(person.article);
  if(canonical && !canonical.bodyLoaded && isPlayerSafeArticle(canonical.id)) window.CodexReader.load(canonical).then(()=>{
    if(recordDialog.open && recordDialogContent.dataset.character===person.article) openCharacterRecord(person,personLabel);
  }).catch(()=>{});
  const [personality, achievements, relationships] = characterProfileParagraphs(person);
  const profileMedia = person.image
    ? `<figure class="record-dialog-media"><img src="${escapeHtml(person.image)}" alt="Portrait of ${escapeHtml(person.title)}"></figure>`
    : person.video
      ? `<figure class="record-dialog-media"><video data-ambient-video muted loop playsinline preload="metadata"><source src="${escapeHtml(person.video)}" type="video/mp4"></video></figure>`
      : "";
  const relatedButton = person.article && person.article !== "people-directory"
    ? `<button class="record-dialog-link" type="button" data-record-article="${escapeHtml(person.article + (person.mediaScene ? "?section=" + encodeURIComponent("scene-" + person.mediaScene) : ""))}">Open related Codex record →</button>`
    : "";
  const npcGroup = archiveIndex.npcs.some(item=>item.title===person.title)
    ? npcIslandGroups.find(group=>group.people.some(item=>item.name===person.title)) || npcIslandGroups.find(group=>group.id==='unplaced')
    : null;
  const islandButton = npcGroup ? `<button class="record-dialog-link" type="button" data-record-article="npcs-${escapeHtml(npcGroup.id)}">${escapeHtml(npcGroup.title)} · NPCs →</button>` : '';
  recordDialogContent.innerHTML = `
    ${profileMedia}
    <p class="record-dialog-kicker">${escapeHtml(personLabel)} · Expanded profile</p>
    <h2 id="record-dialog-title">${escapeHtml(person.title)}</h2>
    <p class="record-dialog-dek">${escapeHtml(person.meta)}</p>${npcGroup ? `<p class="npc-region-label">${escapeHtml(npcRegionLabel(person))}</p>` : ""}
    <div class="record-dialog-body">
      <p>${escapeHtml(personality)}</p>
      ${achievements ? `<p><strong>Achievements &amp; deeds</strong>${escapeHtml(achievements)}</p>` : ""}
      ${relationships ? `<p><strong>Relationships</strong>${escapeHtml(relationships)}</p>` : ""}
    </div>
    ${canonical?.brief ? `<div class="record-dialog-body"><p><strong>Last established status</strong>${escapeHtml(canonical.brief.status)}</p></div>` : ""}
    ${person.prominence ? `<div class="record-dialog-body"><p><strong>Documented prominence · ${person.prominence.score}/100 · ${escapeHtml(person.prominence.confidence)}</strong>${escapeHtml(person.prominence.reason)}</p></div>` : ""}${relatedButton}${islandButton}`;
  window.CodexVisual?.decorateDialog(recordDialogContent,person,canonical,personLabel,codexVisualContext());
  window.FenumionCalendar.render(recordDialogContent);
  if (!recordDialog.open && typeof recordDialog.showModal === "function") recordDialog.showModal();
  else if (!recordDialog.open) recordDialog.setAttribute("open", "");
  recordDialog.scrollTop = 0;
  setupAmbientVideos(recordDialogContent);
  requestAnimationFrame(() => recordDialogClose?.focus());
}

function openLocationRecord(place) {
  if (!recordDialog || !recordDialogContent) return;
  delete recordDialogContent.dataset.character;
  recordDialogContent.classList.remove('chronicle-character-panel');
  const relatedLabel = place.article === "visual-archive" ? "Open the Location Atlas" : "Open related location history";
  const related=byId.get(place.article);
  const relatedRoute=related?.hasRegionHub||related?.regionHub?place.article+'?section='+place.article+'-regional-history':place.article;
  const aliases = (place.aliases || []).length
    ? `<span>Also recorded as · ${escapeHtml(place.aliases.join(" · "))}</span>`
    : "";
  const media = place.image
    ? `<figure class="record-dialog-media"><img src="${escapeHtml(place.image)}" alt="${escapeHtml(place.title)}"></figure>`
    : place.video
      ? `<figure class="record-dialog-media"><video data-ambient-video muted loop playsinline preload="metadata"><source src="${escapeHtml(place.video)}" type="video/mp4"></video></figure>`
      : "";
  recordDialogContent.innerHTML = `
    ${media}
    <p class="record-dialog-kicker">Location record · ${escapeHtml(place.type || "Recovered place")}</p>
    <h2 id="record-dialog-title">${escapeHtml(place.title)}</h2>
    <p class="record-dialog-dek">${escapeHtml(place.meta || `${place.region} · ${place.parent}`)}</p>
    <div class="record-dialog-body">
      <p>${escapeHtml(place.summary)}</p>

    </div>
    <div class="record-dialog-meta"><span>Region · ${escapeHtml(place.region || "Unresolved")}</span><span>Parent · ${escapeHtml(place.parent || "Unresolved")}</span>${aliases}</div>
    ${window.CodexReader.placeContext(place)}
    ${place.mediaScene ? `<button class="record-dialog-link" type="button" data-record-article="${escapeHtml((place.mediaArticle || place.article) + "?section=" + encodeURIComponent("scene-" + place.mediaScene))}">Watch this place →</button>` : ""}
    <button class="record-dialog-link" type="button" data-record-article="${escapeHtml(relatedRoute)}">${relatedLabel} →</button>`;
  setupAmbientVideos(recordDialogContent);
  window.FenumionCalendar.render(recordDialogContent);
  if (!recordDialog.open && typeof recordDialog.showModal === "function") recordDialog.showModal();
  else if (!recordDialog.open) recordDialog.setAttribute("open", "");
  recordDialog.scrollTop = 0;
  requestAnimationFrame(() => recordDialogClose?.focus());
}

function setupAmbientVideos(root = document) {
  ambientVideoObserver?.disconnect();
  ambientVideoObserver = null;
  const videos = [...root.querySelectorAll("video[data-ambient-video]")];
  if (!videos.length) return;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const conserveData=Boolean(navigator.connection?.saveData || ['slow-2g','2g'].includes(navigator.connection?.effectiveType));
  videos.forEach(video => {
    video.controls = false;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.disablePictureInPicture = true;
    video.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback");
    video.setAttribute("tabindex", "-1");
    video.setAttribute("aria-hidden", "true");
    if (reduceMotion || conserveData) video.pause();
  });
  if (reduceMotion || conserveData || [...document.querySelectorAll("video[data-story-scene]")].some(video => !video.paused && !video.ended)) { videos.forEach(video => video.pause()); return; }
  if (!("IntersectionObserver" in window)) {
    videos.forEach(video => { activateAmbientSource(video); if(!document.hidden)video.play().catch(() => {}); });
    return;
  }
  ambientVideoObserver = new IntersectionObserver(entries => {
    const scenePlaying = [...document.querySelectorAll("video[data-story-scene]")].some(scene => !scene.paused && !scene.ended);
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting && !document.hidden && !scenePlaying) {activateAmbientSource(video);video.play().catch(() => {});}
      else video.pause();
    });
  }, { rootMargin: "120px 0px", threshold: .08 });
  videos.forEach(video => ambientVideoObserver.observe(video));
}

function activateAmbientSource(video) {
  const sources=video.querySelectorAll('source[data-src]');
  if(!sources.length)return;
  sources.forEach(source=>{source.src=source.dataset.src;source.removeAttribute('data-src');});
  video.load();
}

document.addEventListener('visibilitychange',()=>{
  if(document.hidden)document.querySelectorAll('video[data-ambient-video], video[data-story-scene]').forEach(video=>video.pause());
  else setupAmbientVideos(document);
});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>setupAmbientVideos(document));

function isRestrictedArticle(id) {
  return restrictedArticleIds.has(id);
}

function isPlayerSafeArticle(id) {
  return vaultUnlocked || !isRestrictedArticle(id);
}

function isRestrictedTimelineEvent(item) {
  return !vaultUnlocked && (item.vaultOnly || item.era === "Ancient world" || isRestrictedArticle(item.article));
}

function restrictedMark(id) {
  return !isPlayerSafeArticle(id) ? '<i class="nav-lock" aria-hidden="true">◆</i>' : "";
}

function protectedRecordTitle(title, protectedRecord) {
  return protectedRecord
    ? '<span class="veiled-title">Veiled record</span><i class="nav-lock" aria-hidden="true">◆</i>'
    : escapeHtml(title);
}

function protectedRecordAria(label, protectedRecord) {
  return escapeHtml(protectedRecord ? "Protected spoiler record. Unlock the vault to reveal its title." : label);
}

function updateVaultState() {
  document.body.classList.toggle("vault-open", vaultUnlocked);
  campaignToolsButtons.forEach(button => { button.hidden = !vaultUnlocked; });
  vaultButton.classList.toggle("unlocked", vaultUnlocked);
  vaultButton.setAttribute("aria-label", vaultUnlocked ? "Lock the spoiler vault" : "Open the spoiler vault");
  vaultButton.setAttribute("aria-haspopup", vaultUnlocked ? "false" : "dialog");
  vaultButton.querySelector("strong").textContent = "Spoiler vault";
  vaultButton.querySelector("small").textContent = vaultUnlocked ? "Unlocked · lock" : "Locked";
  if (vaultAccount) {
    vaultAccount.innerHTML = vaultIdentity?.signedIn
      ? `Signed in as <strong>${escapeHtml(vaultIdentity.name || "Discord member")}</strong> · <a href="${AUTH_ORIGIN}/logout?next=${encodeURIComponent(vaultReturnUrl())}">Sign out</a>`
      : "Access is checked through the Fenumion Discord server.";
  }
}

function vaultReturnUrl() {
  if (location.protocol === "https:" && /(^|\.)fenumion\.com$/i.test(location.hostname)) return location.href;
  return `https://fenumion.com/${location.hash || "#world-index"}`;
}

function showVaultMessage(message = "Sign in with Discord to request keeper access.") {
  vaultMessage.textContent = message;
  vaultSignin.hidden = false;
  if (typeof vaultDialog.showModal === "function") vaultDialog.showModal();
  else vaultDialog.setAttribute("open", "");
}

function closeVaultDialog() {
  if (typeof vaultDialog.close === "function") vaultDialog.close();
  else vaultDialog.removeAttribute("open");
}

async function unlockVault({ interactive = false } = {}) {
  if (!vaultData) {
    const { data, error } = await fetchVault();
    if (error) {
      if (!interactive) return;
      if (error === "signin" || error === "refresh") {
        location.assign(`${AUTH_ORIGIN}/login?next=${encodeURIComponent(vaultReturnUrl())}`);
        return;
      }
      showVaultMessage(VAULT_MESSAGES[error] || VAULT_MESSAGES.unknown);
      return;
    }
    vaultData = data;
    applyVault(data);
  }
  vaultUnlocked = true;
  try { sessionStorage.removeItem(VAULT_LOCK_KEY); } catch {}
  closeVaultDialog();
  updateVaultState();
  renderNavigation();
  renderArticle(location.hash.slice(1) || "world-index", false);
  fetchVaultIdentity();
}

function lockVault() {
  vaultUnlocked = false;
  try { sessionStorage.setItem(VAULT_LOCK_KEY, "1"); } catch {}
  updateVaultState();
  renderNavigation();
  renderArticle(location.hash.slice(1) || "world-index", false);
}

function renderSceneFigure(scene, index, publicPreview = false) {
  const stream = Boolean(scene.protectedHls || scene.hls);
  const kind = publicPreview ? 'public' : 'protected';
  return `<figure class="gallery-wide"${scene.id ? ` id="scene-${escapeHtml(scene.id)}"` : ""}${stream ? ` data-${kind}-scene="${index}"` : ''}><video data-story-scene controls playsinline disableremoteplayback preload="none" poster="${escapeHtml(scene.poster || '')}" aria-label="${escapeHtml(scene.title)}">${stream ? '' : `<source src="${escapeHtml(scene.video || '')}" type="video/mp4">`}</video>${stream ? `<div class="protected-scene-controls"><button type="button" data-load-${kind}-scene>Play video</button><span data-${kind}-scene-status role="status" aria-live="polite"></span></div>` : ''}<figcaption><strong>${escapeHtml(scene.title)}</strong><span>${escapeHtml(scene.caption)}</span></figcaption></figure>`;
}

function renderVaultGate(article) {
  // This single owner-approved film is public; never select scenes from vault data here.
  const preview = article.id === 'death-dumuzi' ? article.publicPreview : null;
  if (preview) {
    articleContent.innerHTML = `
      <header class="article-header"><p class="article-kicker">A recorded account</p><h1>${escapeHtml(preview.title)}</h1></header>
      <section class="character-scenes public-record-preview" aria-label="${escapeHtml(preview.title)}"><div class="image-gallery">${renderSceneFigure(preview, 0, true)}</div></section>
      <section class="vault-gate vault-gate-preview locked-record" aria-labelledby="protected-record-title">
        <h2 id="protected-record-title">Death’s full record</h2>
        <p>Open the spoiler vault to read the full history and explore the remaining scenes.</p>
        <button type="button" data-open-vault>Sign in with Discord to open the vault</button>
      </section>`;
    contents.innerHTML = '';
    window.CodexProtectedMedia?.setup(articleContent, {scenes: [preview]}, () => !vaultUnlocked);
    return;
  }
  articleContent.innerHTML = `
    <section class="vault-gate locked-record" aria-labelledby="protected-record-title">
      <span class="vault-gate-sigil" aria-hidden="true">◆</span>
      <p class="article-kicker">Protected spoiler record</p>
      <h1 id="protected-record-title" class="veiled-title">Veiled record</h1>
      <p>This page contains hidden lore, secret motives, future consequences, or information that player characters may not know.</p>
      <button type="button" data-open-vault>Sign in with Discord to open the vault</button>
      <small>The public index and maps remain available in player-safe mode.</small>
    </section>`;
  contents.innerHTML = "";
}

function normalizePlaceName(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[’‘]/g, "'")
    .replace(/^the\s+/i, "")
    .replace(/[^a-z0-9'&]+/gi, " ")
    .trim()
    .toLocaleLowerCase();
}

function renderTimelineEventList(events) {
  return `<ol class="location-timeline-list">${events.map(event => `<li>
      <button type="button" class="location-timeline-event" data-timeline-title="${escapeHtml(event.title)}">
        <span class="location-timeline-date">${timelineDateMarkup(event)}</span>
        <strong>${escapeHtml(event.title)}</strong>
        <span>${escapeHtml(event.summary)}</span>
        <small>${escapeHtml(event.kind)} · Open detailed record <b aria-hidden="true">→</b></small>
      </button>
    </li>`).join('')}</ol>`;
}

function renderLocationTimeline(article) {
  if (!isLocationArticle(article)) return "";
  const timelineItems = locationTimelineItems(article);
  const lockedNote = !vaultUnlocked
    ? `<p class="location-timeline-note"><span aria-hidden="true">◆</span> Protected ancient records remain veiled in player-safe view.</p>`
    : "";
  const events = timelineItems.length
    ? renderTimelineEventList(timelineItems)
    : `<div class="timeline-empty location-timeline-empty"><strong>No dated events recovered for this place.</strong><span>The location remains indexed, and its chronology will appear here as new primary-source evidence is added.</span></div>`;
  return `
    <section class="location-history-timeline" aria-labelledby="location-timeline-${escapeHtml(article.id)}">
      <header class="location-timeline-heading">
        <div><p class="eyebrow">Place chronology</p><h2 id="location-timeline-${escapeHtml(article.id)}">${escapeHtml(article.title)} through time</h2></div>
        <span>${timelineItems.length} recovered event${timelineItems.length === 1 ? "" : "s"}</span>
      </header>
      <p class="location-timeline-intro">Select an event for its full two-part account, people involved, historical meaning, and linked Codex record.</p>
      ${events}
      ${lockedNote}
    </section>`;
}

function renderInteractionFields(node) {
  if (!node.resource) return "";
  return `<dl class="interaction-exchange">
    <div><dt>Resources & knowledge</dt><dd>${escapeHtml(node.resource)}</dd></div>
    <div><dt>Contribution to the faction</dt><dd>${escapeHtml(node.consequence)}</dd></div>
    <div><dt>Faction response</dt><dd>${escapeHtml(node.receives)}</dd></div>
  </dl>`;
}

Object.assign(relationshipMaps, window.FENUMION_FACTION_MAPS || {});

function renderRelationshipMap(article) {
  const map = relationshipMaps[article.id];
  if (!map) return "";
  const interaction = map.kind === "interaction";
  const arrowId = `interaction-arrow-${article.id}`;
  const edge = (from, to, attributes, mutual = false, label = "") => {
    const dx = to.x - from.x, dy = to.y - from.y;
    return `<line ${attributes} x1="${from.x + dx * .22}" y1="${from.y + dy * .22}" x2="${to.x - dx * .22}" y2="${to.y - dy * .22}" marker-end="url(#${arrowId})"${mutual ? ` marker-start="url(#${arrowId})"` : ""} vector-effect="non-scaling-stroke"><title>${escapeHtml(label)}</title></line>`;
  };
  const lines = map.nodes.map(node => {
    const attributes = `data-relationship-edge="${escapeHtml(node.id)}" data-relationship-category="${escapeHtml(node.category)}" class="relationship-edge relationship-${escapeHtml(node.category)} strength-${node.strength}${node.direction === "toward" ? " directed" : ""}"`;
    return interaction ? edge({ x: 50, y: 50 }, node, attributes, true)
      : `<line ${attributes} x1="50" y1="50" x2="${node.x}" y2="${node.y}" vector-effect="non-scaling-stroke" />`;
  }).join("") + (map.connections || []).map(connection => {
    const from = map.nodes.find(node => node.id === connection.from);
    const to = map.nodes.find(node => node.id === connection.to);
    return edge(from, to, `data-interaction-from="${connection.from}" data-interaction-to="${connection.to}" class="relationship-edge interaction-cross-edge"`, connection.mutual, connection.label);
  }).join("");
  const nodes = map.nodes.map((node, index) => `<button type="button" class="relationship-node relationship-${escapeHtml(node.category)}${index === 0 ? " active" : ""}" data-relationship-node="${escapeHtml(node.id)}" data-relationship-category="${escapeHtml(node.category)}" style="--node-x:${node.x}%;--node-y:${node.y}%" aria-pressed="${index === 0}"><strong>${escapeHtml(node.title)}</strong><small>${escapeHtml(node.subtitle)}</small></button>`).join("");
  const first = map.nodes[0];
  return `<section class="relationship-atlas${interaction ? " faction-interaction-atlas" : ""}" data-relationship-map="${escapeHtml(article.id)}" aria-labelledby="relationship-map-${escapeHtml(article.id)}">
    <header class="relationship-atlas-heading">
      <div><p class="eyebrow">Interactive relationship map</p><h2 id="relationship-map-${escapeHtml(article.id)}">${escapeHtml(map.title)}</h2></div>
      <p>${escapeHtml(map.intro)}</p>
    </header>
    <div class="relationship-filters" role="toolbar" aria-label="Filter relationships by type">${map.filters.map((filter, index) => `<button type="button" data-relationship-filter="${escapeHtml(filter.id)}" class="${index === 0 ? "active" : ""}" aria-pressed="${index === 0}">${escapeHtml(filter.label)}</button>`).join("")}</div>
    <div class="relationship-map-layout">
      <div class="relationship-map-stage">
        <svg class="relationship-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${interaction ? `<defs><marker id="${arrowId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse" markerUnits="strokeWidth"><path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#d9b95f" stroke-width="1.5" /></marker></defs>` : ""}${lines}</svg>
        <div class="relationship-center"><strong>${escapeHtml(map.center.title)}</strong><small>${escapeHtml(map.center.subtitle)}</small></div>
        ${nodes}
      </div>
      <aside class="relationship-detail" aria-live="polite">
        <p class="relationship-detail-kicker">${escapeHtml(first.relation)}</p>
        <h3>${escapeHtml(first.title)}</h3>
        <p>${escapeHtml(first.history)}</p>
        ${renderRelationshipMoments(first)}
        ${interaction ? renderInteractionFields(first) : `<p>${escapeHtml(first.consequence)}</p>`}
        <div><strong>What is known</strong><span>${escapeHtml(first.evidence)}</span></div>
        <button type="button" data-article="${escapeHtml(first.article)}">Open linked record <span aria-hidden="true">→</span></button>
      </aside>
    </div>
    <div class="relationship-insights">${map.insights.map(item => `<article><small>${escapeHtml(item.label)}</small><strong>${escapeHtml(item.value)}</strong><p>${escapeHtml(item.note)}</p></article>`).join("")}</div>
    ${interaction ? `<div class="interaction-connections"><strong>Documented interactions between nodes</strong><ul>${map.connections.map(connection => `<li>${escapeHtml(map.nodes.find(node => node.id === connection.from).title)} ${connection.mutual ? "↔" : "→"} ${escapeHtml(map.nodes.find(node => node.id === connection.to).title)}: ${escapeHtml(connection.label)}</li>`).join("")}</ul></div>
      <p class="relationship-method-note"><strong>How to read it:</strong> two-way lines connect the faction to a contribution and response described in the selected card. Gold arrows show the documented interactions listed above. They do not imply command, current availability, or interaction frequency. Filters distinguish participation, resources, civic links, and scrutiny.</p>
      <p class="relationship-method-note">Adapted from <a href="https://www.nngroup.com/articles/relationship-mapping/" target="_blank" rel="noopener noreferrer">NN/G’s relationship-mapping method</a>: roles, resources, reciprocal support, and gaps. Lore comes from the linked Codex records; incomplete exchanges remain explicit.</p>` : `<p class="relationship-method-note"><strong>How to read it:</strong> line weight represents the relationship’s historical force, not affection. Arrowed lines mark primarily one-way influence or power. Filters reveal different systems around the same person.</p>`}
  </section>`;
}

function setupRelationshipMap(article) {
  const map = relationshipMaps[article.id];
  const atlas = articleContent.querySelector(`[data-relationship-map="${article.id}"]`);
  if (!map || !atlas) return;
  const detail = atlas.querySelector(".relationship-detail");
  let activeFilter = "all";

  const selectNode = id => {
    const node = map.nodes.find(candidate => candidate.id === id);
    if (!node) return;
    atlas.querySelectorAll("[data-relationship-node]").forEach(button => {
      const active = button.dataset.relationshipNode === id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    atlas.querySelectorAll("[data-relationship-edge], [data-interaction-from]").forEach(line => line.classList.toggle("active", line.dataset.relationshipEdge === id || line.dataset.interactionFrom === id || line.dataset.interactionTo === id));
    detail.innerHTML = `
      <p class="relationship-detail-kicker">${escapeHtml(node.relation)}</p>
      <h3>${escapeHtml(node.title)}</h3>
      <p>${escapeHtml(node.history)}</p>
      ${renderRelationshipMoments(node)}
      ${map.kind === "interaction" ? renderInteractionFields(node) : `<p>${escapeHtml(node.consequence)}</p>`}
      <div><strong>What is known</strong><span>${escapeHtml(node.evidence)}</span></div>
      <button type="button" data-article="${escapeHtml(node.article)}">Open linked record <span aria-hidden="true">→</span></button>`;
  };

  atlas.addEventListener("change", event => { if(!event.target.matches("[data-atlas-date]"))return;throughDate=event.target.value;syncMapRoute();renderDetail(activeLocationTitle); });
  atlas.addEventListener("click", event => {
    if(event.target.closest("[data-atlas-current]")){throughDate="";syncMapRoute();renderMap();return;}
    const filter = event.target.closest("[data-relationship-filter]");
    if (filter) {
      activeFilter = filter.dataset.relationshipFilter;
      atlas.querySelectorAll("[data-relationship-filter]").forEach(button => {
        const active = button.dataset.relationshipFilter === activeFilter;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      atlas.querySelectorAll("[data-relationship-category]").forEach(element => {
        const filtered = activeFilter !== "all" && element.dataset.relationshipCategory !== activeFilter;
        element.classList.toggle("filtered-out", filtered);
        if (element.matches("button")) element.disabled = filtered;
      });
      atlas.querySelectorAll("[data-interaction-from]").forEach(line => {
        const from = map.nodes.find(node => node.id === line.dataset.interactionFrom);
        const to = map.nodes.find(node => node.id === line.dataset.interactionTo);
        line.classList.toggle("filtered-out", activeFilter !== "all" && (from.category !== activeFilter || to.category !== activeFilter));
      });
      const current = atlas.querySelector("[data-relationship-node].active:not(.filtered-out)");
      const fallback = atlas.querySelector("[data-relationship-node]:not(.filtered-out)");
      if (!current && fallback) selectNode(fallback.dataset.relationshipNode);
      return;
    }
    const node = event.target.closest("[data-relationship-node]");
    if (node && !node.classList.contains("filtered-out")) selectNode(node.dataset.relationshipNode);
  });
}

function updateNavigationHighlight(article) {
  const region = isPlayerSafeArticle(article.id) ? navigationRegions.find(region => region.article === article.id || region.branches.some(branch => branch.items.some(item => item.article === article.id))) : null;
  const context = region?.article || (isPlayerSafeArticle(article.id) && searchCategory(article) === 'character' ? 'people-directory' : isLocationArticle(article) ? 'visual-archive' : null);
  document.querySelectorAll('[data-nav-article]').forEach(link => {
    const active = link.dataset.navArticle === article.id || (link.classList.contains('nav-region-link') && link.dataset.navArticle === context);
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', link.dataset.navArticle === article.id ? 'page' : 'true');
    else link.removeAttribute('aria-current');
  });
}

function renderNavigation() {
  navigation.innerHTML = `<button type="button" class="nav-link starter-nav-link" data-article="start-here" data-nav-article="start-here" title="Start Here · New readers" data-label="Start Here · New readers" aria-label="Start Here · Guide for new readers"><span class="starter-nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5C9 3.7 5.7 3.4 2.5 4.5v15c3.2-1.1 6.5-.8 9.5 1 3-1.8 6.3-2.1 9.5-1v-15c-3.2-1.1-6.5-.8-9.5 1Z"/><path d="M12 5.5v15M6 8h2.5M6 11h2.5M15.5 8H18M15.5 11H18"/></svg></span><span class="starter-nav-copy"><strong>Start Here</strong><small>New readers</small></span><span class="starter-nav-arrow" aria-hidden="true">›</span></button>
    <button type="button" class="ethos-sidebar-link nav-only-ethos" data-article="ethos-of-fenumion" data-nav-article="ethos-of-fenumion" data-label="Begin the Chronicle · The Ethos of Fenumion">
      <span class="ethos-sidebar-glyph" aria-hidden="true">✦</span>
      <span class="ethos-sidebar-copy"><strong>The Ethos of Fenumion</strong><small>Player ethos &amp; chronicle guide</small></span>
      <span aria-hidden="true">›</span>
    </button>` + navigationRegions.map(region => `
    <section class="nav-region">
      <button type="button" class="nav-region-link${isPlayerSafeArticle(region.article) ? "" : " restricted-link"}" data-article="${region.article}" data-nav-article="${region.article}" data-label="${isPlayerSafeArticle(region.article) ? escapeHtml(region.title) : "Veiled record"}" title="${isPlayerSafeArticle(region.article) ? escapeHtml(region.title) : "Veiled record"}" aria-label="${protectedRecordAria(`Browse ${region.title}`, !isPlayerSafeArticle(region.article))}">
        <span class="nav-region-glyph" aria-hidden="true">${region.glyph}</span><strong>${protectedRecordTitle(region.title, !isPlayerSafeArticle(region.article))}</strong><span>›</span>
      </button>
      <div class="nav-region-tree">${region.branches.map(branch => `
        <details class="nav-branch">
          <summary>${branch.title}<span>${branch.items.length}</span></summary>
          <div>${branch.items.map(item => `
            <button class="nav-link ${item.parent ? "nav-parent" : "nav-child"}${isPlayerSafeArticle(item.article) ? "" : " restricted-link"}" data-article="${item.article}" data-nav-article="${item.article}" aria-label="${protectedRecordAria(byId.get(item.article)?.title || item.label, !isPlayerSafeArticle(item.article))}"><span>${protectedRecordTitle(byId.get(item.article)?.title || item.label, !isPlayerSafeArticle(item.article))}</span><span>›</span></button>`).join("")}</div>
        </details>`).join("")}</div>
    </section>`).join("") + `
    <section class="nav-group archive-links"><h2 class="nav-group-title">Archive reference</h2>${archiveLinks.map(item => `
      <button class="nav-link${isPlayerSafeArticle(item.article) ? "" : " restricted-link"}" data-article="${item.article}" data-nav-article="${item.article}" aria-label="${protectedRecordAria(item.label, !isPlayerSafeArticle(item.article))}"><span>${protectedRecordTitle(item.label, !isPlayerSafeArticle(item.article))}</span><span>›</span></button>`).join("")}</section>`;
  window.FenumionCalendar.render(navigation);
}

let memorableQuoteCache = null;
function memorableQuoteRecords() {
  if (!byId.get("memorable-quotes")?.bodyLoaded) return codexCatalog.quotes;
  const body = byId.get("memorable-quotes")?.body || "";
  if (memorableQuoteCache?.body === body) return memorableQuoteCache.records;
  const template = document.createElement("template");
  template.innerHTML = body;
  let group = "Memorable quotes";
  let groupId = "";
  const records = [];
  template.content.querySelectorAll("h2, .quote-card").forEach(element => {
    if (element.matches("h2")) {
      group = element.textContent.trim();
      groupId = element.id;
    } else {
      const text = element.querySelector("blockquote")?.textContent.trim();
      const speaker = element.querySelector("cite")?.textContent.trim();
      if (text && speaker) records.push({ title: text, speaker, group, groupId, article: element.dataset.article, quoteId: element.id || `memorable-quote-${records.length}`, ...(element.dataset.quoteSource ? {source:element.dataset.quoteSource,date:element.dataset.quoteDate} : {}) });
    }
  });
  memorableQuoteCache = { body, records };
  return records;
}

function setupQuoteGroups() {
  const records = memorableQuoteRecords();
  articleContent.querySelectorAll(".quote-card").forEach((card, index) => {
    const record = records[index];
    if (!record) return;
    card.id = record.quoteId;
    const label = document.createElement("span");
    label.className = "quote-group";
    label.textContent = record.group;
    card.prepend(label);
  });
  const jump = articleContent.querySelector(".quote-jump");
  if (jump) {
    const groups = [...new Map(records.map(record => [record.groupId, record.group])).entries()];
    jump.innerHTML = groups.map(([id, title]) => `<button type="button" data-section="${escapeHtml(id)}">${escapeHtml(title)}</button>`).join("");
  }
}

const magnusQuoteVoice = new Audio("assets/voices/magnus-hope-is-dead.mp3");
const melianQuoteVoice = new Audio("assets/voices/melian-what-light-they-leave-behind.mp3");
const melianWalkQuoteVoice = new Audio("assets/voices/melian-i-walk.mp3");
const melianDayQuoteVoice = new Audio("assets/voices/melian-this-day-would-come.mp3");
const ariaEndureQuoteVoice = new Audio("assets/voices/aria-pain-must-be-endured.mp3");
const ariaImageQuoteVoice = new Audio("assets/voices/aria-in-our-image.mp3");
const quoteVoiceRecordings = [
  { text: "thenmakethisyourpeoplebringhumanitytonewheightssowecanreshapethisworldinourimage", speaker: "Aria", label: "Then make this your people. Bring humanity to new heights, so we can reshape this world, in our image", audio: ariaImageQuoteVoice },
  { text: "sometimespainmustbeenduredtoensurevictoryiunderstandthatdoyou", speaker: "Aria", label: "Sometimes pain must be endured to ensure victory. I understand that. Do you?", audio: ariaEndureQuoteVoice },
  { text: "hopeisdeadonlyambitionremains", speaker: "Magnus Niriin", label: "Hope is dead, only ambition remains", audio: magnusQuoteVoice },
  { text: "whatlighttheyleavebehindnowliveswithinmyhands", speaker: "Melian Starguard", label: "What light they leave behind now lives within my hands", audio: melianQuoteVoice },
  { text: "iwalkbecausetheycannotandishinewheretheyaregone", speaker: "Melian Starguard", label: "I walk because they cannot, and I shine where they are gone", audio: melianWalkQuoteVoice },
  { text: "iknewthisdaywouldcomeletusseewhatcomesofit", speaker: "Melian Starguard", label: "I knew this day would come. Let us see what comes of it", audio: melianDayQuoteVoice }
];
quoteVoiceRecordings.forEach(record => { record.audio.preload = "none"; });
let activeQuoteVoice = null;
let quoteVoiceDisposers=[],quotePausedMusic=null;
document.querySelector('#music-audio')?.addEventListener('play',()=>{if(activeQuoteVoice){quotePausedMusic=null;stopQuoteVoice(false);}});

function stopQuoteVoice(resumeMusic=true) {
  quoteVoiceRecordings.forEach(({ audio }) => { audio.pause(); audio.currentTime = 0; });
  if (activeQuoteVoice) {
    activeQuoteVoice.classList.remove("voice-playing");
    const control = activeQuoteVoice.querySelector(".quote-voice-play");
    if (control) { control.textContent = "▶ Play voice"; control.setAttribute("aria-pressed", "false"); }
  }
  activeQuoteVoice = null;
  if(resumeMusic!==false&&quotePausedMusic){const previous=quotePausedMusic;quotePausedMusic=null;if(previous.audio.paused&&previous.audio.currentSrc===previous.src)previous.audio.play().catch(()=>{});}
}
quoteVoiceRecordings.forEach(({ audio }) => audio.addEventListener("ended", stopQuoteVoice));
document.addEventListener("visibilitychange", () => { if (document.hidden) stopQuoteVoice(); });

function setupQuoteVoices() {
  quoteVoiceDisposers.forEach(dispose=>dispose());quoteVoiceDisposers=[];
  // Rebuild the featured quote’s controls when its hourly text changes.
  articleContent.querySelectorAll(".quote-voice").forEach(wrapper => {
    if (wrapper === activeQuoteVoice) stopQuoteVoice();
    const quote = wrapper.firstElementChild;
    quote.querySelectorAll(".quote-voice-tools,.quote-voice-play").forEach(control => control.remove());
    wrapper.replaceWith(quote);
  });
  const normalize = text => text.toLowerCase().replace(/[^a-z]/g, "");
  const candidates = articleContent.querySelectorAll(".quote-card, .feature-quote, .article-body > blockquote, .article-body strong, .article-body .quote");
  candidates.forEach(quote => {
    const words = quote.matches(".quote-card, .feature-quote") ? quote.querySelector("blockquote") : quote;
    const text = quote.matches("blockquote") ? quote.querySelector("p") || quote : words;
    if (!text) return;
    const spoken = text.cloneNode(true);
    spoken.querySelectorAll("cite, .quote-voice-play").forEach(element => element.remove());
    const recording = quoteVoiceRecordings.find(record => normalize(spoken.textContent) === record.text);
    if (!recording) return;
    const audio = recording.audio;
    if (quote.matches("button.quote-card")) {
      const card = document.createElement("div");
      card.className = quote.className;
      card.id = quote.id;
      card.dataset.article = quote.dataset.article;
      card.tabIndex = -1;
      quote.removeAttribute("id");
      quote.className = "quote-voice-open";
      quote.before(card);
      card.append(quote);
      quote = card;
    }
    const wrapper = document.createElement("span");
    wrapper.className = `quote-voice${quote.matches("strong") ? " quote-voice-inline" : quote.matches(".quote-card, .feature-quote") ? " quote-voice-card" : ""}`;
    quote.before(wrapper);
    if (quote.matches(".quote-card")) wrapper.classList.add("quote-voice-gallery");
    wrapper.append(quote);
    const control = document.createElement("button");
    control.type = "button";
    control.className = "quote-voice-play";
    control.textContent = "▶ Play voice";
    control.setAttribute("aria-label", `Play ${recording.speaker}’s voice: ${recording.label}`);
    control.setAttribute("aria-pressed", "false");
    control.title = `Play or stop ${recording.speaker}’s recorded voice`;
    const tools=document.createElement('div');tools.className='quote-voice-tools';
    tools.innerHTML='<label class="quote-seek-label"><span class="sr-only">Recording position</span><input type="range" class="quote-voice-seek" aria-label="Seek voice recording" min="0" max="1" step="0.1" value="0" disabled></label><div class="quote-voice-meta"><span class="quote-voice-time">0:00</span><label>Voice volume <input type="range" class="quote-voice-volume" aria-label="Voice volume" min="0" max="1" step="0.05"></label></div>';
    tools.prepend(control);tools.addEventListener('click',event=>event.stopPropagation());
    if (quote.matches(".quote-card, .quote")) quote.append(tools);else wrapper.append(tools);
    const seek=tools.querySelector('.quote-voice-seek'),volume=tools.querySelector('.quote-voice-volume'),time=tools.querySelector('.quote-voice-time');
    let savedVolume=1;try{const saved=localStorage.getItem('fenumion-quote-voice-volume');if(saved!==null)savedVolume=Math.min(1,Math.max(0,Number(saved)||0));}catch{}
    audio.volume=savedVolume;volume.value=String(savedVolume);
    const stamp=value=>`${Math.floor((value||0)/60)}:${String(Math.floor((value||0)%60)).padStart(2,'0')}`;
    const syncTime=()=>{const duration=Number.isFinite(audio.duration)?audio.duration:0;seek.disabled=!duration;seek.max=String(duration||1);seek.value=String(audio.currentTime);seek.setAttribute('aria-valuetext',stamp(audio.currentTime)+' of '+stamp(duration));time.textContent=stamp(audio.currentTime)+(duration?' / '+stamp(duration):'');};
    for(const name of ['timeupdate','loadedmetadata','durationchange']){audio.addEventListener(name,syncTime);quoteVoiceDisposers.push(()=>audio.removeEventListener(name,syncTime));}
    seek.addEventListener('input',()=>{if(Number.isFinite(audio.duration))audio.currentTime=Number(seek.value);});
    volume.addEventListener('input',()=>{quoteVoiceRecordings.forEach(record=>record.audio.volume=Number(volume.value));document.querySelectorAll('.quote-voice-volume').forEach(input=>input.value=volume.value);try{localStorage.setItem('fenumion-quote-voice-volume',volume.value);}catch{}});syncTime();
    let hoverPlayback=false;
    const play = (fromHover=false) => {
      stopQuoteVoice(false);
      hoverPlayback=fromHover;
      const music=document.querySelector('#music-audio');if(music&&!music.paused){quotePausedMusic={audio:music,src:music.currentSrc};music.pause();}
      activeQuoteVoice = wrapper;
      wrapper.classList.add("voice-playing");
      control.textContent = "■ Stop voice";
      control.setAttribute("aria-pressed", "true");
      // Browsers can require a click before permitting hover audio.
      audio.play().catch(() => { if (activeQuoteVoice === wrapper) {stopQuoteVoice();time.textContent='The recording could not play. Try again.';time.setAttribute('role','status');} });
    };
    wrapper.addEventListener("pointerenter", event => {
      if (activeQuoteVoice!==wrapper&&window.CodexQuotes?.hoverEnabled()&&event.pointerType === "mouse" && !document.elementFromPoint(event.clientX, event.clientY)?.closest(".quote-voice-tools")) play(true);
    });
    wrapper.addEventListener("pointerleave", event => { if (hoverPlayback && event.pointerType === "mouse" && activeQuoteVoice === wrapper) stopQuoteVoice(); });
    control.addEventListener("click", event => {
      event.stopPropagation();
      if (activeQuoteVoice === wrapper && !audio.paused) stopQuoteVoice();
      else play();
    });
  });
}

let articleRenderEpoch = 0;
const readingScrollPositions = new Map();
if('scrollRestoration' in history)history.scrollRestoration='manual';
function renderArticle(route, pushHash = true) {
  window.CodexQuotes?.close();
  const previousScroll=window.scrollY;
  const renderEpoch = ++articleRenderEpoch;
  delete document.body.dataset.codexRegion;
  articleContent.classList.remove('chronicle-person');
  window.cleanupFenumionArt?.();
  window.CodexProtectedMedia?.cleanup();
  // Preserve existing bookmarks after Vaerik’s world correction.
  if (String(route).split("?")[0] === "vaerik") { location.replace("/gedankin/#vaerik"); return; }
  stopQuoteVoice();
  articleContent.querySelectorAll("video").forEach(video=>video.pause());
  clearTimeout(featuredContentTimer);
  const [requestedId, routeQuery = ""] = String(route || "").split("?");
  const id = routeAliases.get(requestedId) || requestedId;
  const routeParams = new URLSearchParams(routeQuery);
  const requestedMapId = routeParams.get("map") || "";
  const requestedPersonId = routeParams.get("person") || "";
  const requestedSection = routeParams.get("section") || "";
  const article = byId.get(id) || byId.get("world-index");
  const protectedArticle = !isPlayerSafeArticle(article.id);
  const hubPage = hubPageById.get(article.id);
  const hubImage = hubPage ? (article.id === 'people-directory' ? browseImageSource(hubPage.image) : hubPage.image) : '';
  const backgroundCatalog=window.FENUMION_CHARACTER_BACKGROUNDS;
  const characterBackgroundTheme=!protectedArticle ? backgroundCatalog?.themes[backgroundCatalog.articles[article.id]] : null;
  const deathRelated = !characterBackgroundTheme && !protectedArticle && !['world-index','people-directory','factions','living-timeline','visual-archive','memorable-quotes','ethos-of-fenumion','reading-the-codex','start-here'].includes(article.id) && (
    /\b(?:Death|Dumuzi)\b/.test([article.title,article.type,...(article.tags || []),...Object.values(article.facts || {})].join(' ')) ||
    (article.relatedRecords || []).includes('death-dumuzi') || /href=["']#death-dumuzi["']/.test(article.body || '') || /\b(?:Death|Dumuzi)\b/.test(String(article.body || '').replace(/<[^>]*>/g,' '))
  );
  document.body.classList.toggle('death-view',deathRelated);
  document.body.classList.toggle('character-background-view',Boolean(characterBackgroundTheme));
  document.body.classList.toggle("home-view", article.id === "world-index");
  document.body.classList.toggle("art-view", article.id === "art-of-fenumion");
  document.body.classList.remove("record-layout-view", "atlas-workspace-view");
  document.body.classList.toggle("hub-view", Boolean(hubPage));
  document.body.classList.toggle("atlas-view", article.id === "visual-archive");
  document.body.classList.toggle("factions-view", article.id === "factions");
  document.body.classList.toggle("narrative-history-view", article.id === "living-timeline");
  document.body.classList.toggle("quotes-view", article.id === "memorable-quotes");
  document.body.classList.toggle("ethos-view", article.id === "ethos-of-fenumion");
  document.body.classList.toggle("starter-view", article.id === "start-here");
  document.body.classList.toggle("blessings-view", article.tags.includes("Blessings"));
  document.body.classList.toggle("player-perspectives-view", article.id === "player-perspectives");
  const routeHash = `#${article.id}${routeQuery ? "?" + routeParams.toString() : ""}`;
  if(articleContent.dataset.route && articleContent.dataset.route!==routeHash){
    readingScrollPositions.set(articleContent.dataset.route,previousScroll);
    delete articleContent.dataset.route;
  }
  if (requestedId !== id && location.hash !== routeHash) history.replaceState(null, "", routeHash);
  else if (pushHash && location.hash !== routeHash) history.pushState(null, "", routeHash);
  else if (!pushHash && article.id === "living-timeline" && location.hash !== routeHash) history.replaceState(null, "", routeHash);
  const publicPreview = protectedArticle && article.id === 'death-dumuzi' && article.publicPreview;
  articleContent.classList.remove('biography-layout','region-hub-layout','chronicle-layout');
  document.title = window.FenumionCalendar.text(`${publicPreview ? publicPreview.title : protectedArticle ? "Veiled Record" : article.title} — The Fenumion Codex`);
  const path = articlePaths.get(article.id) || [article.category, article.title];
  breadcrumbs.innerHTML = protectedArticle ? `Codex <span>·</span> ${publicPreview ? 'Death' : 'Protected record'}` : `Codex <span>·</span> ${path.join(' <span>·</span> ')}`;
  window.FenumionCalendar.render(breadcrumbs);
  if (protectedArticle) {
    articleContent.removeAttribute('aria-busy');
    renderVaultGate(article);
    updateNavigationHighlight(article);
    closePanels();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  if (!article.bodyLoaded) {
    articleContent.setAttribute('aria-busy','true');
    articleContent.innerHTML='<p class="record-loading" role="status">Opening '+escapeHtml(article.title)+'…</p>';
    return window.CodexReader.load(article).then(()=>{
      if(renderEpoch===articleRenderEpoch) return renderArticle(route,pushHash);
    }).catch(error=>{
      if(renderEpoch!==articleRenderEpoch)return;
      articleContent.removeAttribute('aria-busy');
      articleContent.innerHTML='<div class="record-load-error" role="alert"><p>'+escapeHtml(error.message)+' Your place in the archive is preserved.</p><button data-article="'+escapeHtml(article.id)+'">Try again</button> <button type="button" data-refresh-codex>Refresh archive</button></div>';
    });
  }
  articleContent.removeAttribute('aria-busy');
  const facts = Object.entries(article.facts || {}).map(([label, value]) => `<div class="fact"><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const heroCaption = (caption, fallback) => {
    const text = caption || fallback;
    const isName = Boolean(caption && caption.length <= 80 && !/[.!?]/.test(caption));
    return `<figcaption${isName ? ' class="media-name-caption"' : ''}><span>${text}</span></figcaption>`;
  };
  const heroClass = `article-hero${article.imageLayout ? ` ${article.imageLayout}` : ""}`;
  const videoHeroClass = `article-hero${article.videoLayout ? ` ${article.videoLayout}` : article.imageLayout ? ` ${article.imageLayout}` : ""}`;
  const mapHero = article.image && article.mapId
    ? `<figure class="${heroClass} map-linked-hero"><button type="button" class="article-map-link" data-open-map="${escapeHtml(article.mapId)}" aria-label="${escapeHtml(article.mapLinkLabel || `Explore the interactive ${article.title} map`)}"><img src="${article.image}" alt="${article.imageAlt || ""}"><span class="article-map-cta"><small>Interactive map</small><strong>${escapeHtml(article.mapLinkLabel || `Explore ${article.title}`)} <span aria-hidden="true">→</span></strong></span></button>${heroCaption(article.imageCaption, "Image preserved in the Fenumion archive.")}</figure>`
    : "";
  const videoHero = article.video
    ? `<figure class="${videoHeroClass}"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="${article.image || ""}" aria-hidden="true" tabindex="-1"><source data-src="${article.video}" type="${article.videoType || "video/mp4"}">Your browser does not support this video.</video>${heroCaption(article.videoCaption, "Video preserved in the Fenumion archive.")}</figure>`
    : "";
  const hero = article.video
    ? `${mapHero}${videoHero}`
    : mapHero || (article.image ? `<figure class="${heroClass}"><img src="${article.image}" alt="${article.imageAlt || ""}">${heroCaption(article.imageCaption, "Image preserved in the Fenumion archive.")}</figure>` : "");
  const scenes = article.scenes?.length ? `<section class="character-scenes" aria-labelledby="character-scenes-title"><h2 id="character-scenes-title">${escapeHtml(article.sceneHeading || "Scenes from the story")}</h2><div class="image-gallery">${article.scenes.map((scene, index) => renderSceneFigure(scene, index)).join('')}</div></section>` : '';
  const gallery = article.gallery?.length ? `<div class="image-gallery article-gallery">${article.gallery.map(item => `<figure class="gallery-wide"><a href="${item.image}" target="_blank"><img src="${item.image}" alt="${escapeHtml(item.alt || "")}" loading="lazy"></a><figcaption><strong>${escapeHtml(item.title || "Archive image")}</strong><span>${escapeHtml(item.caption || "Visual record preserved in the Fenumion archive.")}</span></figcaption></figure>`).join("")}</div>` : "";

  const subchannels = renderSubchannels(article.id);
  const relationshipMap = renderRelationshipMap(article);
  const locationTimeline = renderLocationTimeline(article);
  const hubSwitcher = hubPage ? `
    <nav class="hub-switcher" aria-label="Explore the Codex">
      ${hubPages.map(page => `<button class="gateway-tile${page.id === article.id ? " active" : ""}${isPlayerSafeArticle(page.id) ? "" : " locked-record"}" data-article="${page.id}" style="--tile-image:url('${browseImageSource(page.image)}')" aria-label="${protectedRecordAria(page.label, !isPlayerSafeArticle(page.id))}"${page.id === article.id ? ' aria-current="page"' : ""}><span>${protectedRecordTitle(page.label, !isPlayerSafeArticle(page.id))}</span><small>${isPlayerSafeArticle(page.id) ? page.detail : "Protected record"}</small></button>`).join("")}
    </nav>` : "";
  const atlasBanner = article.id === "visual-archive" ? `
    <section class="atlas-banner" aria-label="Interactive world atlas">
      <div id="interactive-atlas" class="interactive-atlas"></div>
    </section>` : "";
  const peopleGallery = article.id === "people-directory" ? `
    <section class="people-gallery-shell" aria-labelledby="people-gallery-title">
      <div class="people-gallery-heading">
        <div><p class="eyebrow">Visual character archive</p><h2 id="people-gallery-title">Meet the people of Fenumion</h2><p>Browse every indexed hero, ally, ruler, witness, god, and recurring figure. Open a portrait to read their story.</p></div>
        <label class="people-gallery-search" for="people-gallery-query"><span>Search characters</span><input id="people-gallery-query" type="search" placeholder="Name, role, or story…" autocomplete="off"></label>
      </div>
      <div class="people-gallery-filters" id="people-gallery-filters" role="toolbar" aria-label="Filter people by character type"></div>
      <div class="people-kind-banner" id="people-kind-banner"></div>
      <p class="browser-summary" id="people-gallery-count" role="status" aria-live="polite"></p>
      <div class="browser-grid people-gallery" id="people-gallery" tabindex="-1" aria-label="Character results"></div>
      <nav class="people-pagination" aria-label="Character result pages" hidden>
        <button type="button" data-people-previous>← Previous</button>
        <span data-people-page></span>
        <button type="button" data-people-next>Next →</button>
      </nav>
    </section>` : "";
  const quotesBackdrop = article.id === "memorable-quotes" ? `
    <div class="quotes-water-backdrop" aria-hidden="true">
      <video data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="metadata" tabindex="-1">
        <source src="assets/archive/quotes-water-ripples.mp4" type="video/mp4">
      </video>
    </div>` : "";
  const ethosBackdrop = article.id === "ethos-of-fenumion" ? `
    <div class="ethos-video-backdrop" aria-hidden="true">
      <video data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="assets/archive/ethos-eye-poster.webp" tabindex="-1">
        <source data-src="assets/archive/ethos-eye-background.mp4" type="video/mp4">
      </video>
    </div>` : "";
  const locationsBackdrop = article.id === 'visual-archive' ? `<div class="locations-video-backdrop" aria-hidden="true"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="assets/archive/locations-background-poster.webp" tabindex="-1"><source data-src="assets/archive/locations-background.mp4" type="video/mp4"></video></div>` : '';
  const factionsBackdrop = article.id === 'factions' ? `<div class="factions-video-backdrop" aria-hidden="true"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="assets/archive/factions-background-poster.webp" tabindex="-1"><source data-src="assets/archive/factions-background.mp4" type="video/mp4"></video></div>` : '';
  const historyBackdrop = article.id === 'living-timeline' ? `<div class="history-video-backdrop" aria-hidden="true"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="assets/archive/narrative-history-background-poster.webp" tabindex="-1"><source data-src="assets/archive/narrative-history-background.mp4" type="video/mp4"></video></div>` : '';
  const characterBackdrop=characterBackgroundTheme ? `<div class="character-video-backdrop" aria-hidden="true" style="--character-poster:url('${characterBackgroundTheme.poster}')"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="${characterBackgroundTheme.poster}" tabindex="-1"><source data-src="${characterBackgroundTheme.video}" type="video/mp4"></video></div>` : '';
  const deathBackdrop = deathRelated ? `<div class="death-video-backdrop" aria-hidden="true"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" poster="assets/archive/death-background-poster.webp" tabindex="-1"><source data-src="assets/archive/death-background.mp4" type="video/mp4"></video></div>` : '';
  articleContent.innerHTML = `
    ${characterBackdrop}${quotesBackdrop}${ethosBackdrop}${deathBackdrop}${locationsBackdrop}${factionsBackdrop}${historyBackdrop}
    <header class="article-header"${hubPage ? ` style="--hub-image:url('${hubImage}')"` : ""}>
      <p class="article-kicker">${article.type}</p>
      <h1>${article.title}</h1>
      <p class="dek">${article.dek}</p>
      <div class="article-meta">${article.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </header>
    ${hubSwitcher}
    ${atlasBanner}
    ${hubPage ? "" : hero}
    ${hubPage ? "" : gallery}
    ${peopleGallery}
    <div class="lead-grid">
      <div class="article-body">${renderCharacterNavigation(article)}${article.body}${scenes}${renderIslandNpcCollection(article)}${renderCharacterCollection(article)}${locationTimeline}${renderLocationConnections(article)}${relationshipMap}${subchannels}${renderRelated(article)}</div>
      <dl class="infobox"><h2 class="infobox-title">At a glance</h2>${facts}</dl>
    </div>`;
  const visualConnections = (relationshipMaps[article.id]?.nodes || [])
    .filter(node => node.article && node.article !== article.id && isPlayerSafeArticle(node.article))
    .map(node => ({ node, record: byId.get(node.article) }))
    .filter(({ record }) => record)
    .map(({ node, record }) => ({ id: record.id, title: record.title, subtitle: node.subtitle, image: record.image }));
  const linkedIds = [...(article.relatedRecords || []), ...[...articleContent.querySelectorAll('.article-body a[href^="#"], .subchannels [data-article]')].map(link => link.dataset.article || link.getAttribute('href').slice(1).split('?')[0])];
  linkedIds.forEach(id => {
    const record=byId.get(id);
    if(record && record.id!==article.id && isPlayerSafeArticle(id) && !visualConnections.some(connection=>connection.id===id)) visualConnections.push({id,title:record.title,subtitle:record.type,image:record.image});
  });
  const hasConnections=visualConnections.length>0;
  if(!hasConnections && !hubPage) hubPages.filter(page=>page.id!==article.id).slice(0,4).forEach(page=>visualConnections.push({id:page.id,title:page.label,subtitle:page.detail,image:page.image}));
  const hubArtwork = { 'living-timeline':'assets/archive/narrative-history-background-poster.webp', 'visual-archive':'assets/archive/locations-background-poster.webp', factions:'assets/archive/factions-background-poster.webp', 'ethos-of-fenumion':'assets/archive/ethos-eye-poster.webp' };
  if (article.id !== "art-of-fenumion") window.organizeCodexPage?.(articleContent, { id:article.id, home:article.id==='world-index', atlasWorkspace:article.id==='visual-archive', workspace:article.id==='living-timeline', quoteWorkspace:article.id==='memorable-quotes', directory:article.id==='art-of-fenumion' || article.id==='npc-discovery-registry' || Boolean(article.npcIsland || article.npcIslandOverview) || (Boolean(hubPage) && article.id!=='ethos-of-fenumion') || article.id==='player-perspectives', image:hubPage ? hubArtwork[article.id] || hubImage : '', connections:hubPage ? [] : visualConnections.slice(0,4), connectionsLabel:hasConnections ? 'Connected stories' : 'Explore the Codex' });
  window.CodexVisual?.decorateArticle(articleContent,article,codexVisualContext());
  if (article.id === "world-index") {
    setupWorldBrowser();
    setupFeaturedContent();
    window.CodexVisual?.home(articleContent,codexVisualContext());
  }
  if (article.id === "people-directory") setupPeopleGallery();
  if (article.id === "art-of-fenumion") window.setupFenumionArt?.(articleContent);
  if (article.id === "npc-discovery-registry") window.setupNpcDiscoveries?.(articleContent);
  if (article.id === "factions") setupFactionDirectory();
  if (article.id === "player-perspectives") window.setupPlayerPerspectives?.(articleContent);
  if (article.id === "visual-archive") { setupInteractiveAtlas(requestedMapId, routeParams.get("date") || "", routeParams.get("place") || ""); setupLocationExplorer(); }
  if (article.id === "living-timeline") setupTimelineExplorer(requestedPersonId, routeParams);
  setupRelationshipMap(article);
  setupReadingPath();
  window.CodexProtectedMedia?.setup(articleContent, article, () => vaultUnlocked && isRestrictedArticle(article.id));
  articleContent.querySelectorAll('video[data-story-scene]').forEach(video => {
    video.addEventListener('play', () => document.querySelectorAll('video[data-ambient-video]').forEach(ambient => ambient.pause()));
    video.addEventListener('pause', () => { if (video.isConnected) setupAmbientVideos(document); });
    video.addEventListener('ended', () => { if (video.isConnected) setupAmbientVideos(document); });
  });
  setupAmbientVideos(articleContent);
  applyPlayerSafeRedactions();
  if (article.id === "memorable-quotes") setupQuoteGroups();
  setupQuoteVoices();
  updateNavigationHighlight(article);
  document.querySelectorAll(".nav-branch").forEach(branch => { branch.open = Boolean(branch.querySelector(`[data-nav-article="${article.id}"]`)); });
  window.CodexReader.afterRender(article, articleContent);
  window.CodexRegions?.setup(article,articleContent);
  if(article.id==='memorable-quotes')window.CodexQuotes.setup(articleContent,{records:memorableQuoteRecords(),byId,allowed:isPlayerSafeArticle,person:resolvePublicPerson,recording:text=>quoteVoiceRecordings.find(record=>record.text===text.toLowerCase().replace(/[^a-z]/g,'')),setupVoices:setupQuoteVoices,stopVoices:stopQuoteVoice,contents:buildContents,openArticle:renderArticle,openEvent:openTimelineRecord,events:archiveIndex.timeline.filter(item=>readableTimelineEvent(item)&&!item.vaultOnly&&item.era!=='Ancient world'&&!isRestrictedArticle(item.article)),consequences:title=>questEventConsequences[title]||'',sources:article.sources||[],reference:window.CodexReader.referenceMarkup,load:window.CodexReader.load},routeParams);
  window.CodexVisual?.decorateCards(articleContent,codexVisualContext());
  window.FenumionCalendar.render(articleContent);
  buildContents();
  closePanels();
  articleContent.dataset.route=routeHash;
  if(requestedSection) window.CodexReader.jump(requestedSection);
  else {
    if(pushHash){const heading=articleContent.querySelector('.article-header h1');heading.tabIndex=-1;heading.focus({preventScroll:true});}
    const restored=!pushHash&&readingScrollPositions.has(routeHash);
    window.scrollTo({top:restored?readingScrollPositions.get(routeHash):0,behavior:restored||matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  }
}

function setupFactionDirectory() {
  const query = articleContent.querySelector('#faction-query');
  const records = factionDirectoryItems.map(item=>byId.get(item.article)).filter(record=>record && isPlayerSafeArticle(record.id));
  const render = () => {
    const needle=query.value.trim().toLocaleLowerCase();
    const matches=records.filter(record=>`${record.title} ${record.dek} ${record.tags.join(' ')}`.toLocaleLowerCase().includes(needle));
    articleContent.querySelector('#faction-count').textContent=`${matches.length} factions`;
    articleContent.querySelector('#faction-records').innerHTML=matches.map(record=>`<button class="index-card" data-article="${escapeHtml(record.id)}">${record.image ? `<span class="index-glyph faction-symbol"><img src="${escapeHtml(record.image)}" alt="${escapeHtml(record.imageAlt || `${record.title} symbol`)}" loading="lazy"></span>` : '<span class="index-glyph" aria-hidden="true">⚑</span>'}<span class="index-card-copy"><strong>${escapeHtml(record.title)}</strong><span>${escapeHtml(record.dek)}</span></span></button>`).join('') || '<p>No matching factions.</p>';
    window.FenumionCalendar.render(articleContent.querySelector('#faction-records'));
  };
  query.addEventListener('input',render);
  render();
}

function setupPeopleGallery() {
  const gallery = document.querySelector("#people-gallery");
  const queryInput = document.querySelector("#people-gallery-query");
  const count = document.querySelector("#people-gallery-count");
  const filters = document.querySelector("#people-gallery-filters");
  const kindBanner = document.querySelector("#people-kind-banner");
  if (!gallery || !queryInput || !count || !filters || !kindBanner) return;
  const people = [
    ...archiveIndex.characters.map(person => ({ ...person, personKind: characterRecordKind(person), personLabel: characterRecordLabel(person) })),
    ...archiveIndex.npcs.map(person => ({ ...person, personKind: "npc", personLabel: "NPC" }))
  ]
    .sort((left, right) => left.title.localeCompare(right.title));
  // Normalize the searchable text once, rather than once per character per keystroke.
  const searchText = new Map(people.map(person => [person,
    window.FenumionCalendar.searchText(!isPlayerSafeArticle(person.article) ? "protected veiled record" : `${person.title} ${(person.aliases || []).join(" ")} ${person.meta} ${person.summary} ${person.personKind === "npc" ? npcRegionLabel(person) : ""}`).toLocaleLowerCase()
  ]));
  const pageSize = 24;
  const pagination = gallery.parentElement.querySelector(".people-pagination");
  const previous = pagination.querySelector("[data-people-previous]");
  const next = pagination.querySelector("[data-people-next]");
  const pageLabel = pagination.querySelector("[data-people-page]");
  let page = 0;
  let searchTimer;
  let bannerKind;
  let activeKind = "all";

  const kindOptions = [
    { id: "all", label: "All people", count: people.length },
    { id: "player", label: "Players", count: archiveIndex.characters.filter(person=>characterRecordKind(person)==='player').length },
    { id: "pet", label: "Pets", count: archiveIndex.characters.filter(person=>characterRecordKind(person)==='pet').length },
    { id: "npc", label: "NPCs", count: archiveIndex.npcs.length }
  ];

  filters.innerHTML = kindOptions.map(option => `<button type="button" class="people-kind-filter${option.id === activeKind ? " active" : ""}" data-people-kind="${option.id}" aria-pressed="${option.id === activeKind}">${option.label}<span>${option.count}</span></button>`).join("");

  const islandLink = document.createElement('p');
  islandLink.className = 'exploration-links';
  islandLink.innerHTML = '<a href="#npc-islands">Browse NPCs by island →</a>';
  filters.after(islandLink);
  const render = () => {
    islandLink.hidden = activeKind !== 'npc';
    const query = queryInput.value.trim().toLocaleLowerCase();
    const scopedPeople = activeKind === "all" ? people : people.filter(person => person.personKind === activeKind);
    const matches = query
      ? scopedPeople.filter(person => searchText.get(person).includes(query))
      : scopedPeople;
    const scopeLabel = activeKind === "player" ? "player characters" : activeKind === "npc" ? "NPC records" : "people records";
    if (bannerKind !== activeKind) {
      kindBanner.querySelectorAll("video").forEach(video => video.pause());
      kindBanner.innerHTML = activeKind === "npc" ? `<figure class="people-kind-banner-frame"><video class="ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" aria-hidden="true" tabindex="-1"><source src="assets/archive/aria-npc-banner.mp4" type="video/mp4"></video><figcaption>NPC archive · Aria / Pride, Knight II of Death.</figcaption></figure>` : "";
      bannerKind = activeKind;
    }
    const pages = Math.max(1, Math.ceil(matches.length / pageSize));
    page = Math.min(page, pages - 1);
    const start = page * pageSize;
    const visiblePeople = matches.slice(start, start + pageSize);
    count.innerHTML = `<strong>${matches.length}</strong> of ${scopedPeople.length} ${scopeLabel}${query ? ` matching “${escapeHtml(queryInput.value.trim())}”` : ""}${matches.length ? ` · Showing ${start + 1}–${start + visiblePeople.length}` : ""}`;
    pagination.hidden = pages === 1;
    previous.disabled = page === 0;
    next.disabled = page === pages - 1;
    pageLabel.textContent = `Page ${page + 1} of ${pages}`;
    gallery.querySelectorAll("video").forEach(video => video.pause());
    gallery.innerHTML = matches.length ? visiblePeople.map(person => {
      const protectedRecord = !isPlayerSafeArticle(person.article);
      const preview = codexCatalog.browseImages?.[person.image];
      const media = person.image
        ? `<img src="${escapeHtml(browseImageSource(person.image))}"${preview ? ` width="${preview.width}" height="${preview.height}"` : ''} alt="" loading="lazy" decoding="async">`
        : person.video
          ? `<video class="ambient-video" data-ambient-video src="${escapeHtml(person.video)}" muted loop playsinline disablepictureinpicture disableremoteplayback preload="none" aria-hidden="true" tabindex="-1"></video>`
          : `<span class="index-glyph" aria-hidden="true">✦</span>`;
      return `<button class="index-card character-card ${person.personKind}-record${protectedRecord ? " locked-record" : ""}" data-article="${person.article}"${protectedRecord ? "" : ` data-character-title="${escapeHtml(person.title)}"`} aria-label="${protectedRecordAria(`${person.personLabel}: ${person.title}`, protectedRecord)}">
        ${media}
        <span class="index-card-copy"><span class="character-card-kicker"><i class="character-kind ${person.personKind}">${person.personLabel}</i><small>${protectedRecord ? "Protected record" : escapeHtml(person.meta)}</small></span><strong>${protectedRecordTitle(person.title, protectedRecord)}</strong>${!protectedRecord && person.personKind === "npc" ? `<small class="npc-region-label">${escapeHtml(npcRegionLabel(person))}</small>` : ""}${!protectedRecord && person.prominence ? `<small>Prominence ${person.prominence.score}/100 · ${escapeHtml(person.prominence.confidence)}</small>` : ""}<span>${protectedRecord ? "Unlock the spoiler vault to read this history." : escapeHtml(person.summary)}</span></span>
      </button>`;
    }).join("") : `<div class="timeline-empty"><strong>No character matches that search.</strong><span>Try a name, role, faction, or region.</span></div>`;
    window.CodexVisual?.decorateCards(gallery,codexVisualContext());
    window.FenumionCalendar.render(gallery);
    setupAmbientVideos(kindBanner.closest(".people-gallery-shell"));
  };

  queryInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      if (!gallery.isConnected) return;
      page = 0;
      render();
    }, 100);
  });
  pagination.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button || button.disabled) return;
    clearTimeout(searchTimer);
    page += button === next ? 1 : -1;
    render();
    gallery.focus({ preventScroll: true });
    gallery.scrollIntoView({ block: "start" });
  });
  filters.addEventListener("click", event => {
    const filter = event.target.closest("[data-people-kind]");
    if (!filter) return;
    clearTimeout(searchTimer);
    page = 0;
    activeKind = filter.dataset.peopleKind;
    filters.querySelectorAll("[data-people-kind]").forEach(button => {
      const active = button.dataset.peopleKind === activeKind;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    render();
  });
  render();
}

function renderSubchannels(id) {
  const items = subchannelMap[id];
  if (!items?.length) return "";
  const label = id === "prima-pristinia" ? "Within Prima" : id === "pristinia" ? "Within Pristinia" : "Subchannels";
  return `<section class="subchannels" aria-label="${label}"><p class="eyebrow">${label}</p><div>${items.map(item => `
    <button class="subchannel-card${isPlayerSafeArticle(item.article) ? "" : " locked-record"}" data-article="${item.article}" aria-label="${protectedRecordAria(byId.get(item.article)?.title || item.label, !isPlayerSafeArticle(item.article))}"><strong>${protectedRecordTitle(byId.get(item.article)?.title || item.label, !isPlayerSafeArticle(item.article))}</strong><span>${isPlayerSafeArticle(item.article) ? (item.summary || byId.get(item.article)?.dek || "") : "Protected record · unlock the spoiler vault to read."}</span><i aria-hidden="true">›</i></button>`).join("")}</div></section>`;
}

function applyPlayerSafeRedactions() {
  if (vaultUnlocked) return;
  articleContent.querySelectorAll("[data-vault-only]").forEach(element => element.remove());
  articleContent.querySelectorAll("[data-article]").forEach(button => {
    const id = button.dataset.article;
    if (!isRestrictedArticle(id)) return;
    button.classList.add("locked-record");
    button.setAttribute("aria-label", protectedRecordAria("", true));
    if (button.classList.contains("feature-card")) {
      button.innerHTML = `<span class="feature-label">Protected record</span><span class="feature-copy"><strong>${protectedRecordTitle("", true)}</strong><small>Unlock the spoiler vault to view this history.</small></span>`;
    } else if (button.classList.contains("gateway-tile")) {
      const detail = button.querySelector("small");
      if (detail) detail.textContent = "Protected record";
      const heading = button.querySelector("span");
      if (heading) heading.innerHTML = protectedRecordTitle("", true);
    } else {
      const heading = button.querySelector("strong");
      if (heading) heading.innerHTML = protectedRecordTitle("", true);
    }
  });
}

function setupFeaturedContent() {
  clearTimeout(featuredContentTimer);
  const featured = articleContent.querySelector(".feature-quote");
  const source = byId.get("memorable-quotes");
  if (!featured || !source) return;

  // The cache follows the source body, including newly added quotations.
  const quotes = memorableQuoteRecords().map(record => ({
    text: record.title, speaker: record.speaker, articleId: record.article
  }));
  if (!quotes.length) return;

  const hour = 60 * 60 * 1000;
  const now = Date.now();
  // Two distinct locations advance through the requested order each hour.
  const locations = ["prima-pristinia", "babel-ashur", "gael", "voraketh", "fein-uaill"]
    .map(id => byId.get(id)).filter(Boolean);
  articleContent.querySelectorAll(".gateway-featured .feature-image").forEach((card, index) => {
    const location = locations[(Math.floor(now / hour) + index) % locations.length];
    if (!location) return;
    card.dataset.article = location.id;
    card.querySelector("strong").textContent = location.title;
    card.querySelector("small").textContent = location.dek;
    card.style.setProperty("--feature-image", `url(${JSON.stringify(location.image || "assets/archive/world-map.jpeg")})`);
  });

  // A shared hourly slot stays consistent across refreshes and visits.
  const quote = quotes[Math.floor(now / hour) % quotes.length];
  featured.querySelector("blockquote").textContent = quote.text;
  featured.querySelector("cite").textContent = quote.speaker;
  const quoteGroup = memorableQuoteRecords().find(record => record.title === quote.text && record.speaker === quote.speaker)?.group;
  featured.querySelector(".feature-label").textContent = quoteGroup ? `Memorable quote · ${quoteGroup}` : "Memorable quote";
  const speaker = byId.get(quote.articleId);
  const image = quote.articleId === "olokun"
    ? "assets/archive/olokun-memorable-quote.png"
    : (isPlayerSafeArticle(quote.articleId) && speaker?.image) || "assets/archive/world-map.jpeg";
  featured.style.setProperty("--featured-quote-image", `url(${JSON.stringify(image)})`);
  setupQuoteVoices();
  featuredContentTimer = setTimeout(setupFeaturedContent, hour - (now % hour) + 25);
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) setupFeaturedContent();
});

function setupWorldBrowser() {
  const browser = document.querySelector("#world-browser");
  if (!browser) return;
  const browserData = {
    characters: [
      ...archiveIndex.characters.map(person => ({ ...person, personKind: characterRecordKind(person), personLabel: characterRecordLabel(person) })),
      ...archiveIndex.npcs.map(person => ({ ...person, personKind: "npc", personLabel: "NPC" }))
    ],
    timeline: archiveIndex.timeline.filter(readableTimelineEvent),
    locations: archiveIndex.islands
  };
  let activeView = "characters";
  let direction = "asc";
  let characterPage = 0;
  const characterPageSize = 24;
  const timelineState = { importance: 0, match: 'minimum', order: 'oldest', region: '' };

  const render = () => {
    const items = [...browserData[activeView]].filter(item => activeView !== 'timeline' || (timelineMatchesImportance(item, timelineState) && (!timelineState.region || timelineRegionIds(item).includes(timelineState.region)))).sort((a, b) =>
      activeView === 'timeline' ? compareTimelineEvents(a, b, timelineState.order) : a.title.localeCompare(b.title) * (direction === 'asc' ? 1 : -1));
    if (activeView === 'timeline') timelineBrowseContext = { route: location.hash, items };
    const characterPages = Math.max(1, Math.ceil(items.length / characterPageSize));
    characterPage = Math.min(characterPage, characterPages - 1);
    const start = characterPage * characterPageSize;
    const visibleItems = activeView === 'characters' ? items.slice(start, start + characterPageSize) : items;
    const labels = { characters: "Characters", timeline: "Timeline", locations: "Locations" };
    browser.innerHTML = `
      <div class="browser-toolbar" role="toolbar" aria-label="Choose an archive view">
        <div class="browser-tabs">${Object.keys(labels).map(key => `<button class="browser-tab ${key === activeView ? "active" : ""}" data-view="${key}" aria-pressed="${key === activeView}">${labels[key]}<span>${browserData[key].length}</span></button>`).join("")}</div>
        ${activeView === 'timeline' ? '' : `<button class="sort-direction" data-sort-direction="${direction}" aria-label="Reverse sort order">A–Z <span>${direction === 'asc' ? '↑' : '↓'}</span></button>`}
      </div>
      ${activeView === 'timeline' ? `<div class="timeline-controls">${timelineImportanceControls(timelineState, browserData.timeline)}</div><p class="timeline-browser-link"><a href="#living-timeline?${new URLSearchParams({ importance: timelineState.importance, match: timelineState.match, order: timelineState.order, ...(timelineState.region ? { region: timelineState.region } : {}) })}">Open full timeline with search and era filters →</a></p>` : ''}
      <div class="browser-summary" role="status" aria-live="polite"><strong>${items.length}</strong> ${labels[activeView].toLowerCase()} records · ${activeView === "timeline" ? `${timelineImportanceSummary(timelineState)} · ${timelineOrders[timelineState.order].toLowerCase()}` : "ordered by name"}${activeView === 'characters' ? ` · Showing ${start + 1}–${start + visibleItems.length}` : ''}</div>
      <div id="world-browser-results" class="browser-grid ${activeView === "timeline" ? "timeline-view" : ""}"${activeView === 'characters' ? ' tabindex="-1" aria-label="Character results" style="scroll-margin-top:6rem"' : ''}>${visibleItems.map(item => {
        const protectedRecord = activeView === "timeline" ? isRestrictedTimelineEvent(item) : !isPlayerSafeArticle(item.article);
        const preview = activeView === 'characters' && codexCatalog.browseImages?.[item.image];
        return `
        <button class="index-card${protectedRecord ? " locked-record" : ""}" data-article="${item.article}" aria-label="${protectedRecordAria(item.title, protectedRecord)}"${protectedRecord ? "" : activeView === "timeline" ? ` data-timeline-title="${escapeHtml(item.title)}" data-importance="${item.importance || 0}"` : activeView === "characters" ? ` data-character-title="${escapeHtml(item.title)}"` : ""}>
          ${item.image ? `<img src="${preview ? preview.src : item.image}"${preview ? ` width="${preview.width}" height="${preview.height}"` : ''} alt="" loading="lazy" decoding="async">` : item.video ? `<video class="ambient-video" data-ambient-video src="${item.video}" muted loop playsinline disablepictureinpicture disableremoteplayback preload="${activeView === 'characters' ? 'none' : 'metadata'}" aria-hidden="true" tabindex="-1"></video>` : `<span class="index-glyph" aria-hidden="true">${activeView === "timeline" ? "◷" : activeView === "characters" ? "✦" : "⌖"}</span>`}
          <span class="index-card-copy">${activeView === "characters" ? `<span class="character-card-kicker"><i class="character-kind ${item.personKind}">${item.personLabel}</i><small>${protectedRecord ? "Protected record" : item.meta}</small></span>` : `<small>${protectedRecord ? "Protected record" : activeView === "timeline" ? timelineDateMarkup(item) : item.meta}</small>`}<strong>${protectedRecordTitle(item.title, protectedRecord)}</strong>${activeView === 'timeline' && !protectedRecord ? `<span class="event-importance">${timelineImportanceMarkup(item)}</span>` : ''}<span>${protectedRecord ? "Unlock the spoiler vault to read this history." : item.summary}</span></span>
        </button>`; }).join("")}</div>
      ${activeView === 'characters' && characterPages > 1 ? `<nav class="people-pagination" aria-label="Homepage character result pages"><button type="button" data-world-previous${characterPage === 0 ? ' disabled' : ''}>← Previous</button><span>Page ${characterPage + 1} of ${characterPages}</span><button type="button" data-world-next${characterPage === characterPages - 1 ? ' disabled' : ''}>Next →</button></nav>` : ''}`;
    window.CodexVisual?.decorateCards(browser,codexVisualContext());
    window.FenumionCalendar.render(browser);
    setupAmbientVideos(articleContent);
  };

  browser.addEventListener("click", event => {
    const pageButton = event.target.closest('[data-world-previous],[data-world-next]');
    if (pageButton && !pageButton.disabled) {
      characterPage += pageButton.hasAttribute('data-world-next') ? 1 : -1;
      render();
      const results = browser.querySelector('#world-browser-results');
      results.focus({preventScroll:true});results.scrollIntoView({block:'start',behavior:'auto'});
      return;
    }
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) { activeView = viewButton.dataset.view; direction = "asc"; characterPage = 0; render(); return; }
    const sortButton = event.target.closest("[data-sort-direction]");
    if (sortButton) { direction = direction === "asc" ? "desc" : "asc"; characterPage = 0; render(); }
  });
  browser.addEventListener('change', event => {
    const control = event.target;
    let attribute;
    if (control.matches('[data-timeline-region]')) { timelineState.region = control.value; attribute = 'data-timeline-region'; }
    else if (control.matches('[data-timeline-importance]')) { timelineState.importance = Number(control.value); attribute = 'data-timeline-importance'; }
    else if (control.matches('[data-timeline-match]')) { timelineState.match = control.value; attribute = 'data-timeline-match'; }
    else if (control.matches('[data-timeline-order]')) { timelineState.order = control.value; attribute = 'data-timeline-order'; }
    else return;
    render(); browser.querySelector('['+attribute+']').focus();
  });
  const gatewaySearch = document.querySelector("#gateway-search");
  if (gatewaySearch) gatewaySearch.addEventListener("input", event => {
    search.value = event.target.value;
    runSearch(event.target.value);
  });
  render();
}

function setupInteractiveAtlas(initialMapId = "", initialDate = "", initialPlace = "") {
  let throughDate=/^\d{4}-\d{2}-\d{2}$/.test(initialDate)?initialDate:"";
  const atlas = document.querySelector("#interactive-atlas");
  if (!atlas) return;
  const mapIndex = new Map(interactiveMaps.map(map => [map.id, map]));
  const regionMaps = interactiveMaps.filter(map => !map.parentId || map.parentId === 'world');
  const mapPath = map => {
    const path = [], seen = new Set();
    for (let current=map; current && !seen.has(current.id); current=mapIndex.get(current.parentId)) {
      path.unshift(current);seen.add(current.id);
    }
    return path;
  };
  const mapRegion = map => mapPath(map).find(parent => parent.parentId === 'world') || map;
  const localMaps = region => interactiveMaps.filter(map => map.id === region.id || map.parentId === region.id);
  const markerLabel = map => `${map.pins.length} ${map.pins.length === 1 ? 'marker' : 'markers'}`;
  const initialMap = interactiveMaps.find(map => map.id === initialMapId) || interactiveMaps[0];
  let activeMapId = initialMap.id;
  let activeLocationTitle = initialMap.pins.some(pin=>pin.title===initialPlace)?initialPlace:initialMap.pins[0]?.title || "";
  let hoverTimer = null;

  const findLocation = title => {
    const map=interactiveMaps.find(map=>map.id===activeMapId);
    const pin=map?.pins.find(pin=>pin.title===title);
    const indexed=archiveIndex.islands.find(item=>item.title===title);
    if(!pin?.article) return indexed;
    const article=byId.get(pin.article);
    if(!article) return null;
    return {...indexed,title,article:article.id,meta:indexed?.meta || `${map.title} · ${article.type}`,summary:pin.summary || indexed?.summary || article.dek};
  };
  const linkedMapIds = new Map([["Gael", "gael"], ["Prima", "prima"], ["Pristinia", "pristinia"], ["Fein Uaill", "fein-uaill"], ["Gates of Aelthor", "fein-uaill"], ["The Shining Shores", "fein-uaill"], ["Babel-Ashur", "babel-ashur"], ["Luminar Spires", "luminar-spires"], ["Greyward Littoral", "greyward"], ["Voraketh", "voraketh"], ["Eovar Harbor", "eovar"]]);
  const syncMapRoute = () => { const params=new URLSearchParams({map:activeMapId});if(throughDate)params.set("date",throughDate);if(activeLocationTitle)params.set("place",activeLocationTitle);history.replaceState(null,"","#visual-archive?"+params); };

  const renderDetail = title => {
    const locationRecord = findLocation(title);
    if (!locationRecord) return;
    activeLocationTitle = title;
    syncMapRoute();
    atlas.querySelectorAll("[data-map-location]").forEach(button => {
      const active = button.dataset.mapLocation === title;
      button.classList.toggle("active", active);
    });
    const detail = atlas.querySelector(".map-detail");
    const linkedMapId = linkedMapIds.get(locationRecord.title);
    const protectedRecord = !isPlayerSafeArticle(locationRecord.article);
    const mapLayerLink = !protectedRecord && linkedMapId && linkedMapId !== activeMapId
      ? `<button type="button" class="map-layer-link" data-map-id="${linkedMapId}">Explore ${locationRecord.title === "Prima" ? "Prima" : escapeHtml(locationRecord.title)} map <span aria-hidden="true">⌖</span></button>`
      : "";
    detail.classList.toggle("locked-record", protectedRecord);
    detail.setAttribute("aria-label", protectedRecordAria(locationRecord.title, protectedRecord));
    detail.innerHTML = `
      <span class="map-detail-kicker">${protectedRecord ? "Protected location history" : escapeHtml(locationRecord.meta)}</span>
      <h3>${protectedRecordTitle(locationRecord.title, protectedRecord)}</h3>
      <p>${protectedRecord ? "This map marker is public. Its history and evidence are kept inside the spoiler vault." : escapeHtml(locationRecord.summary)}</p>

      ${!protectedRecord ? window.CodexReader.placeContext(locationRecord,throughDate) : ""}
      ${mapLayerLink}
      <button type="button" class="map-history-link${protectedRecord ? " locked-record" : ""}" data-article="${locationRecord.article}">${protectedRecord ? "Unlock location history" : "Open location history"} <span aria-hidden="true">${protectedRecord ? "◆" : "→"}</span></button>`;
    window.FenumionCalendar.render(detail);
  };

  const renderMap = () => {
    const map = interactiveMaps.find(candidate => candidate.id === activeMapId) || interactiveMaps[0];
    const region = mapRegion(map), path = mapPath(map), children = localMaps(region);
    const context = map.level === 'world' ? 'World map' : map.parentId === 'world' ? 'Regional map' : `${map.level === 'settlement' ? 'Settlement' : 'Area'} within ${mapIndex.get(map.parentId)?.title || region.title}`;
    const pins = map.pins.map(pin => ({ ...pin, record: findLocation(pin.title) })).filter(pin => pin.record);
    if (!pins.some(pin => pin.title === activeLocationTitle)) activeLocationTitle = pins[0]?.title || "";
    atlas.innerHTML = `
      <div class="map-switcher" role="tablist" aria-label="Choose a region">
        ${regionMaps.map(candidate => `<button type="button" role="tab" id="map-tab-${candidate.id}" class="map-switch ${candidate.id === region.id ? "active" : ""}" data-map-id="${candidate.id}" data-map-scope="region" aria-controls="atlas-map-panel" aria-selected="${candidate.id === region.id}" tabindex="${candidate.id === region.id ? "0" : "-1"}" aria-label="${escapeHtml(candidate.title)} · ${candidate.level === 'world' ? 'world' : 'regional'} map, ${markerLabel(candidate)}">${escapeHtml(candidate.shortTitle)}<span>${candidate.pins.length}</span></button>`).join("")}
      </div>
      <nav class="map-breadcrumbs" aria-label="Map hierarchy"><ol>${path.map((parent,index) => `<li>${index === path.length-1 ? `<span aria-current="location">${escapeHtml(parent.title)}</span>` : `<button type="button" data-map-id="${parent.id}" aria-label="Up to ${escapeHtml(parent.title)} map">${escapeHtml(parent.title)}</button>`}</li>`).join('')}</ol></nav>
      ${region.id !== 'world' && children.length > 1 ? `<section class="map-local-navigation" aria-label="Local maps in ${escapeHtml(region.title)}"><strong>Within ${escapeHtml(region.title)}</strong><div class="map-local-switcher" role="group" aria-label="Maps within ${escapeHtml(region.title)}">${children.map(candidate => `<button type="button" data-map-id="${candidate.id}" data-map-scope="local" aria-pressed="${candidate.id === map.id}"><strong>${escapeHtml(candidate.id === region.id ? region.title+' overview' : candidate.title)}</strong><small>${candidate.id === region.id ? 'Regional map' : candidate.level === 'settlement' ? 'Settlement map' : 'Local map'} · ${markerLabel(candidate)}</small></button>`).join('')}</div></section>` : ''}
      <div class="map-heading">
        <div>${map.level === 'world' ? '' : `<span class="eyebrow">${escapeHtml(context)}</span>`}<h3>${escapeHtml(map.title)}</h3></div>
        <div class="map-heading-actions"><button type="button" data-section="place-directory">Find a place <span aria-hidden="true">↓</span></button><a href="${map.image}" target="_blank" rel="noreferrer">Open source map <span aria-hidden="true">↗</span></a></div>
      </div>
      <div class="map-workspace" id="atlas-map-panel" role="tabpanel" aria-labelledby="map-tab-${region.id}">
        <div class="map-frame">
          <div class="map-canvas" style="aspect-ratio:${map.width} / ${map.height}">
            <img src="${map.image}" width="${map.width}" height="${map.height}" alt="${escapeHtml(map.alt)}" loading="eager">
            <div class="map-pin-layer" aria-label="Mapped locations in ${escapeHtml(map.title)}">
              ${pins.map((pin, index) => { const protectedRecord = !isPlayerSafeArticle(pin.record.article); return `<button type="button" class="map-pin ${pin.title === activeLocationTitle ? "active" : ""}${protectedRecord ? " veiled-map-marker" : ""}" style="--pin-x:${pin.x}%;--pin-y:${pin.y}%" data-map-location="${escapeHtml(pin.title)}" aria-label="${protectedRecordAria(`Open ${pin.title} record. ${pin.record.summary}`, protectedRecord)}"><span class="map-pin-number" aria-hidden="true"><span class="map-pin-index">${index + 1}</span></span><span class="map-pin-label">${protectedRecord ? "Veiled marker" : escapeHtml(pin.title)}</span></button>`; }).join("")}
            </div>
          </div>
        </div>
        <p class="map-description">${escapeHtml(map.description)}</p>
        <div class="atlas-date-control"><label>Records through <input type="date" data-atlas-date value="${escapeHtml(throughDate)}"></label><button type="button" data-atlas-current>All recorded history</button><small>Map artwork stays fixed; the date selects historical records. A missing record does not establish that a place was absent.</small></div>
        <aside class="map-detail" aria-live="polite"></aside>
      </div>
      <div class="map-location-list" aria-label="Locations marked on ${escapeHtml(map.title)}">
        ${pins.map((pin, index) => { const protectedRecord = !isPlayerSafeArticle(pin.record.article); return `<button type="button" class="map-location-chip ${pin.title === activeLocationTitle ? "active" : ""}${protectedRecord ? " restricted-link" : ""}" data-map-location="${escapeHtml(pin.title)}" aria-label="${protectedRecordAria(`Open ${pin.title} record`, protectedRecord)}"><span>${index + 1}</span>${protectedRecord ? "Veiled marker" : escapeHtml(pin.title)}</button>`; }).join("")}
      </div>`;
    window.FenumionCalendar.dateControl(atlas.querySelector('[data-atlas-date]'));
    if (activeLocationTitle) renderDetail(activeLocationTitle);
    window.FenumionCalendar.render(atlas);
  };

  atlas.addEventListener("change", event => { if(!event.target.matches("[data-atlas-date]"))return;throughDate=event.target.value;syncMapRoute();renderDetail(activeLocationTitle); });
  atlas.addEventListener("click", event => {
    if(event.target.closest("[data-atlas-current]")){throughDate="";syncMapRoute();renderMap();return;}
    const mapButton = event.target.closest("[data-map-id]");
    if (mapButton) {
      activeMapId = mapButton.dataset.mapId;
      activeLocationTitle = interactiveMaps.find(map => map.id === activeMapId)?.pins[0]?.title || "";
      syncMapRoute();
      renderMap();
      return;
    }
    const locationButton = event.target.closest("[data-map-location]");
    if (locationButton) {
      const locationRecord = findLocation(locationButton.dataset.mapLocation);
      if (locationRecord) renderDetail(locationRecord.title);
    }
  });
  atlas.addEventListener("pointerover", event => {
    const locationButton = event.target.closest(".map-pin[data-map-location]");
    if (!locationButton || locationButton.contains(event.relatedTarget)) return;
    clearTimeout(hoverTimer);
    const title = locationButton.dataset.mapLocation;
    hoverTimer = setTimeout(() => renderDetail(title), 140);
  });
  atlas.addEventListener("pointerout", event => {
    const locationButton = event.target.closest(".map-pin[data-map-location]");
    if (!locationButton || locationButton.contains(event.relatedTarget)) return;
    clearTimeout(hoverTimer);
    hoverTimer = null;
  });
  atlas.addEventListener("focusin", event => {
    const locationButton = event.target.closest("[data-map-location]");
    if (locationButton) renderDetail(locationButton.dataset.mapLocation);
  });
  atlas.addEventListener("keydown", event => {
    const mapButton = event.target.closest("[data-map-id]");
    if (mapButton && ['region','local'].includes(mapButton.dataset.mapScope) && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const scope = mapButton.dataset.mapScope;
      const choices = scope === 'region' ? regionMaps : localMaps(mapRegion(mapIndex.get(activeMapId)));
      const index = choices.findIndex(map => map.id === mapButton.dataset.mapId);
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? choices.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + choices.length) % choices.length;
      activeMapId = choices[nextIndex].id;
      activeLocationTitle = choices[nextIndex].pins[0]?.title || "";
      syncMapRoute();
      renderMap();
      atlas.querySelector(`[data-map-scope="${scope}"][data-map-id="${activeMapId}"]`)?.focus();
      return;
    }
    const pinButton = event.target.closest(".map-pin[data-map-location]");
    if (pinButton && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
      const pins = [...atlas.querySelectorAll(".map-pin[data-map-location]")];
      const index = pins.indexOf(pinButton);
      const step = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = pins[(index + step + pins.length) % pins.length];
      next.focus();
      renderDetail(next.dataset.mapLocation);
    }
  });
  renderMap();
}

function setupLocationExplorer() {
  const explorer = document.querySelector("#location-explorer");
  if (!explorer) return;
  const regionOrder = ["Prima", "Fein Uaill", "Gael", "Voraketh", "Babel-Ashur", "World", "Other regions"];
  const regions = [...new Set(archiveIndex.islands.map(item => item.region))].sort((a, b) => regionOrder.indexOf(a) - regionOrder.indexOf(b));
  let activeRegion = "All regions";
  let direction = "asc";
  let query = "";
  let mappedOnly = false;

  explorer.innerHTML = `
    <div class="location-controls">
      <label class="location-search-shell">
        <span class="location-search-label">Search places</span>
        <span class="location-search-field"><span aria-hidden="true">⌕</span><input type="search" placeholder="Try Caisleán, Caselean, Gael, library…" autocomplete="off"></span>
      </label>
      <button class="location-mapped-toggle" type="button" aria-pressed="false"><span aria-hidden="true">⌖</span> On a map</button>
      <button class="location-sort" type="button" aria-label="Reverse alphabetical order">A–Z <span>↑</span></button>
    </div>
    <div class="location-filter-row" aria-label="Filter locations by region">
      ${["All regions", ...regions].map(region => `<button class="location-filter ${region === activeRegion ? "active" : ""}" type="button" data-region="${escapeHtml(region)}" aria-pressed="${region === activeRegion}">${escapeHtml(region)}</button>`).join("")}
    </div>
    <div class="location-results-summary" role="status" aria-live="polite"></div>
    <div class="location-results"></div>`;

  const input = explorer.querySelector("input");
  const results = explorer.querySelector(".location-results");
  const summary = explorer.querySelector(".location-results-summary");
  const sortButton = explorer.querySelector(".location-sort");
  const mappedToggle = explorer.querySelector(".location-mapped-toggle");

  const renderResults = () => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = archiveIndex.islands
      .filter(item => activeRegion === "All regions" || item.region === activeRegion)
      .filter(item => !mappedOnly || mappedLocationTitles.has(item.title))
      .filter(item => {
        const haystack = window.FenumionCalendar.searchText(!isPlayerSafeArticle(item.article) ? `protected veiled record ${item.region}` : `${item.title} ${item.region} ${item.parent} ${item.type} ${item.meta} ${item.summary} ${item.source} ${(item.aliases || []).join(" ")}`).toLowerCase();
        return terms.every(term => haystack.includes(term));
      })
      .sort((a, b) => {
        const levelDifference = (a.level === "region" ? 0 : 1) - (b.level === "region" ? 0 : 1);
        if (levelDifference) return levelDifference;
        return a.title.localeCompare(b.title) * (direction === "asc" ? 1 : -1);
      });
    const grouped = filtered.reduce((groups, item) => {
      if (!groups.has(item.region)) groups.set(item.region, []);
      groups.get(item.region).push(item);
      return groups;
    }, new Map());
    const orderedGroups = [...grouped.entries()].sort((a, b) => {
      const aIndex = regionOrder.indexOf(a[0]);
      const bIndex = regionOrder.indexOf(b[0]);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });

    summary.innerHTML = `<strong>${filtered.length}</strong> place${filtered.length === 1 ? "" : "s"}${activeRegion === "All regions" ? ` across ${grouped.size} region${grouped.size === 1 ? "" : "s"}` : ` in ${escapeHtml(activeRegion)}`}${mappedOnly ? " · shown on an interactive map" : ""} · ${direction === "asc" ? "A–Z" : "Z–A"}`;
    results.innerHTML = filtered.length ? orderedGroups.map(([region, items]) => `
      <section class="location-region" aria-label="${escapeHtml(region)}">
        <header class="location-region-header"><h3>${escapeHtml(region)}</h3><span>${items.length} place${items.length === 1 ? "" : "s"}</span></header>
        <div class="location-grid">${items.map(item => {
          const protectedRecord = !isPlayerSafeArticle(item.article);
          const media = item.video
            ? `<video class="place-card-image ambient-video" data-ambient-video muted loop playsinline disablepictureinpicture disableremoteplayback preload="none"${item.image ? ` poster="${item.image}"` : ""} aria-hidden="true" tabindex="-1"><source data-src="${item.video}"></video>`
            : item.image
              ? `<img class="place-card-image" src="${item.image}" alt="" loading="lazy">`
              : `<span class="place-glyph" aria-hidden="true">⌖</span>`;
          return `
          <button class="place-card ${item.level === "region" ? "region-card" : ""}${protectedRecord ? " locked-record" : ""}" type="button" data-article="${item.article}" aria-label="${protectedRecordAria(item.title, protectedRecord)}">
            ${media}
            <span class="place-copy">
              <span class="place-kicker">${protectedRecord ? "Protected location history" : escapeHtml(item.level === 'region' ? item.type : `${item.region}${item.parent && item.parent !== item.region ? ' › '+item.parent : ''} · ${item.type}`)}</span>
              <strong>${protectedRecordTitle(item.title, protectedRecord)}${!protectedRecord && mappedLocationTitles.has(item.title) ? `<i class="place-map-badge">Mapped</i>` : ""}</strong>
              <span class="place-summary">${protectedRecord ? "Unlock the spoiler vault to read its history." : escapeHtml(item.summary)}</span>

            </span>
          </button>`; }).join("")}</div>
      </section>`).join("") : `<div class="location-empty"><strong>No recovered place matches that search.</strong><span>Try a region, landmark, building type, or alternate spelling.</span></div>`;
    window.FenumionCalendar.render(results);
    setupAmbientVideos(results);
  };

  input.addEventListener("input", event => { query = event.target.value; renderResults(); });
  mappedToggle.addEventListener("click", () => {
    mappedOnly = !mappedOnly;
    mappedToggle.classList.toggle("active", mappedOnly);
    mappedToggle.setAttribute("aria-pressed", String(mappedOnly));
    renderResults();
  });
  sortButton.addEventListener("click", () => {
    direction = direction === "asc" ? "desc" : "asc";
    sortButton.innerHTML = `${direction === "asc" ? "A–Z" : "Z–A"} <span>${direction === "asc" ? "↑" : "↓"}</span>`;
    renderResults();
  });
  explorer.querySelector(".location-filter-row").addEventListener("click", event => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    activeRegion = button.dataset.region;
    explorer.querySelectorAll("[data-region]").forEach(candidate => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", active);
    });
    renderResults();
  });
  renderResults();
}

// Importance measures documented reach, independently of an account's certainty.
const timelineImportanceLevels = [
  { level: 1, label: 'Relational', description: 'An individual life, close bonds or a small company.' },
  { level: 2, label: 'Local', description: 'A settlement, institution or immediate community.' },
  { level: 3, label: 'Regional', description: 'An island, region or major regional power.' },
  { level: 4, label: 'Interregional', description: 'Connections or consequences across regions and realms.' },
  { level: 5, label: 'World Changing', description: 'Major turning points in the Final War or the world’s structure, continuity or balance.' }
];
const timelineOrders = { oldest: 'Oldest first', newest: 'Newest first', highest: 'Highest importance first', lowest: 'Lowest importance first' };
let timelineBrowseContext = null;
function findTimelineRecord(title) {
  const aliases = codexCatalog.timelineAliases || {};
  const canonical = Object.hasOwn(aliases, title) ? aliases[title] : title;
  return archiveIndex.timeline.find(item => item.title === canonical);
}
function timelineImportance(item) { return timelineImportanceLevels.find(level => level.level === item.importance); }
function timelineImportanceLabel(item) { const level = timelineImportance(item); return level ? `${level.level}. ${level.label}` : 'Unrated'; }
function timelineImportanceMarkup(item) { return `${window.CodexVisual?.scopeIcon(item.importance) || ''}<span>${timelineImportanceLabel(item)}</span>`; }
function codexVisualContext() {
  return {byId,allowed:isPlayerSafeArticle,people:[...archiveIndex.characters,...archiveIndex.npcs],places:archiveIndex.islands,events:archiveIndex.timeline.filter(readableTimelineEvent),compare:compareTimelineEvents,date:timelineDateMarkup,namedDate:timelineCalendarDateLabel,window:timelineCalendarWindow,point:timelineCalendarPoint,personLabel:person=>archiveIndex.npcs.includes(person)?'NPC':characterRecordLabel(person)};
}
function readableTimelineEvent(item) {
  return !isRestrictedTimelineEvent(item) && item.title && item.meta && item.era && item.kind && item.location && item.people;
}
function timelineMatchesImportance(item, state) {
  return !state.importance || (timelineImportance(item) && (state.match === 'exact' ? item.importance === state.importance : item.importance >= state.importance));
}
function compareTimelineEvents(a, b, order) {
  const dateOrder = (a.dating?.calendarAdjustment?.date || a.sort).localeCompare(b.dating?.calendarAdjustment?.date || b.sort) || a.sort.localeCompare(b.sort) || a.title.localeCompare(b.title);
  if (order === 'newest') return -dateOrder;
  if (order === 'highest' || order === 'lowest') {
    // Future/unrated private payloads remain visible with All levels, after rated entries.
    const left = timelineImportance(a)?.level, right = timelineImportance(b)?.level;
    if (left === undefined || right === undefined) return (left === undefined) - (right === undefined) || dateOrder;
    return (left - right) * (order === 'highest' ? -1 : 1) || dateOrder;
  }
  return dateOrder;
}
const timelineDateKinds = { canon: 'Canon date', recorded: 'Recorded date', approximate: 'Approximate / bounded', recollection: 'Report / recollection date', unresolved: 'Date unresolved' };
function timelineRegionIds(item) { return item.regions?.length ? item.regions : ['unplaced']; }
function timelineRegionOptions(events) {
  const available = new Set(events.flatMap(timelineRegionIds));
  return (codexCatalog.timelineRegions || []).filter(region => available.has(region.id));
}
function timelineRegionControl(state, events) {
  return `<label class="timeline-select-shell"><span class="timeline-search-label">Region</span><select data-timeline-region><option value="">All regions</option>${timelineRegionOptions(events).map(region => `<option value="${escapeHtml(region.id)}"${state.region === region.id ? ' selected' : ''}>${escapeHtml(region.label)}</option>`).join('')}</select></label>`;
}
function timelineWarDateLabel(item) {
  const date = item.dating?.finalWar;
  const legacyDay = item.dating?.finalWarDay;
  if (!date) return Number.isInteger(legacyDay) && legacyDay > 0 ? `Day ${legacyDay} of the Final War` : '';
  if (!Number.isInteger(date.start) || !Number.isInteger(date.end) || date.start > date.end) return '';
  let label;
  if (date.start > 0) label = `${date.start === date.end ? 'Day '+date.start : 'Days '+date.start+'–'+date.end} of the Final War`;
  else if (date.end <= 0) {
    const near = 1 - date.end, far = 1 - date.start;
    label = `${near === far ? near : near+'–'+far} day${far === 1 ? '' : 's'} before the Final War`;
  } else label = `${1-date.start} day${date.start === 0 ? '' : 's'} before the Final War – Day ${date.end}`;
  const prefix = { by: 'By ', before: 'Before ', after: 'After ', around: 'Approx. ' }[date.qualifier] || '';
  return `${item.dating.kind === 'recollection' ? 'Record: ' : ''}${prefix}${label}`;
}
function timelineCalendarWindow(item) {
  const dating = item.dating;
  if (!dating?.postingWindow || !dating.finalWar) return null;
  return dating.calendarAdjustment ? { start: dating.calendarAdjustment.date, end: dating.calendarAdjustment.date, precision: 'day', qualifier: 'on' } : dating.postingWindow;
}
function timelineCalendarPoint(iso) {
  if(window.FenumionCalendar)return window.FenumionCalendar.point(iso);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return null;
  const parsed = new Date(iso+'T00:00:00Z');
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0,10) !== iso) return null;
  const calendar = codexCatalog.timelineCalendar;
  const month = calendar?.months?.find(month => month.number === parsed.getUTCMonth()+1);
  if (!month || !calendar.yearNumbering) return null;
  const sourceYear = parsed.getUTCFullYear();
  const before = iso < calendar.originDate;
  const year = sourceYear - calendar.yearNumbering.firstSourceYear + calendar.yearNumbering.firstYear;
  return { day: parsed.getUTCDate(), month: month.name, monthNumber: month.number, sourceYear, before, year, era: before ? 'before the Final War' : `Year ${year} of the Final War` };
}
function timelineCalendarDateLabel(item) {
  const window = timelineCalendarWindow(item);
  if (!window) return '';
  const start = timelineCalendarPoint(window.start), end = timelineCalendarPoint(window.end);
  if (!start || !end) return '';
  const sameYear = start.sourceYear === end.sourceYear && start.before === end.before;
  const sameMonth = sameYear && start.monthNumber === end.monthNumber;
  const date = point => `${point.day}, ${point.month}`;
  let label;
  if (window.precision === 'month' && sameMonth) label = `${start.month} · ${start.era}`;
  else if (window.start === window.end) label = `${date(start)} · ${start.era}`;
  else if (sameMonth) label = `${start.day}–${end.day}, ${start.month} · ${start.era}`;
  else if (sameYear) label = `${date(start)} – ${date(end)} · ${start.era}`;
  else label = `${date(start)} · ${start.era} – ${date(end)} · ${end.era}`;
  const prefix = { by: 'By ', before: 'Before ', after: 'After ', around: 'Approx. ' }[window.qualifier] || '';
  return `${item.dating.kind === 'recollection' ? 'Record: ' : ''}${prefix}${label}`;
}
function timelineCalendarYearGroup(item) {
  const window = timelineCalendarWindow(item), point = window && timelineCalendarPoint(window.start);
  if (point?.before) return point.era;
  const sourceYear = Number(item.sort.slice(0,4)), numbering = codexCatalog.timelineCalendar?.yearNumbering;
  return numbering && sourceYear >= numbering.firstSourceYear ? `Year ${sourceYear-numbering.firstSourceYear+numbering.firstYear} of the Final War` : sourceYear > 2000 ? FenumionCalendar.yearLabel(sourceYear) : item.era;
}
function timelineCalendarMonthGroup(item) {
  const window = timelineCalendarWindow(item), point = window && timelineCalendarPoint(window.start);
  return point ? point.month : 'Month unresolved';
}
function timelineMatchesCalendarQuery(item, query) {
  const text = normalizeSearchName(query), label = normalizeSearchName(timelineCalendarDateLabel(item));
  const months = (codexCatalog.timelineCalendar?.months || []).filter(month => text.includes(normalizeSearchName(month.name)));
  const years = [...text.matchAll(/\byear (\d+)\b/g)];
  return months.every(month => label.includes(normalizeSearchName(month.name))) && years.every(match => new RegExp(`\\byear ${match[1]}\\b`).test(label));
}
function timelineDateMarkup(item) {
  const label = timelineWarDateLabel(item), named = timelineCalendarDateLabel(item);
  const source=window.FenumionCalendar.text(item.meta);
  return `${named ? `<span class="timeline-calendar-date">${escapeHtml(named)}</span>` : ''}${label ? `<span class="timeline-war-day">${escapeHtml(label)}</span><span class="timeline-source-date">${escapeHtml(source)}</span>` : escapeHtml(source)}<small class="timeline-date-status" data-date-kind="${escapeHtml(item.dating?.kind || 'unreviewed')}">${escapeHtml(timelineDateKinds[item.dating?.kind] || 'Date basis unreviewed')}</small>${item.dating?.calendarAdjustment ? '<small class="timeline-date-status" data-calendar-adjusted>Calendar aligned · see event</small>' : ''}`;
}
function timelineImportanceControls(state, events = archiveIndex.timeline.filter(readableTimelineEvent)) {
  return `${timelineRegionControl(state, events)}<label class="timeline-select-shell"><span class="timeline-search-label">Importance</span><select data-timeline-importance><option value="0">All levels</option>${timelineImportanceLevels.map(level => `<option value="${level.level}"${state.importance === level.level ? ' selected' : ''}>${level.level}. ${level.label}</option>`).join('')}</select></label>
    <label class="timeline-select-shell"><span class="timeline-search-label">Show</span><select data-timeline-match${state.importance ? '' : ' disabled'}><option value="minimum"${state.match === 'minimum' ? ' selected' : ''}>Selected level and above</option><option value="exact"${state.match === 'exact' ? ' selected' : ''}>Only this level</option></select></label>
    <label class="timeline-select-shell"><span class="timeline-search-label">Order</span><select data-timeline-order>${Object.entries(timelineOrders).map(([value, label]) => `<option value="${value}"${state.order === value ? ' selected' : ''}>${label}</option>`).join('')}</select></label>`;
}
function timelineImportanceSummary(state) {
  const level = timelineImportanceLevels.find(level => level.level === state.importance);
  return level ? `${level.label}${state.match === 'exact' ? ' only' : ' and above'}` : 'all importance levels';
}
function setupTimelineExplorer(personId = '', params = new URLSearchParams()) {
  const explorer = document.querySelector('#timeline-explorer');
  if (!explorer) return;
  const person = [...archiveIndex.characters, ...archiveIndex.npcs].find(record => record.article === personId && isPlayerSafeArticle(record.article));
  const personEvents = person ? new Set(characterTimelineItems(person)) : null;
  const availableTimeline = archiveIndex.timeline.filter(item => readableTimelineEvent(item) && (!personEvents || personEvents.has(item)));
  const eras = [...new Set([...availableTimeline].sort((a,b) => compareTimelineEvents(a,b,'oldest')).map(item => item.era))];
  const state = {
    region: timelineRegionOptions(availableTimeline).some(region => region.id === params.get('region')) ? params.get('region') : '',
    importance: /^[1-5]$/.test(params.get('importance')) ? Number(params.get('importance')) : 0,
    match: params.get('match') === 'exact' ? 'exact' : 'minimum',
    order: Object.hasOwn(timelineOrders, params.get('order')) ? params.get('order') : 'oldest',
    era: eras.includes(params.get('era')) ? params.get('era') : 'All eras',
    query: (params.get('q') || '').slice(0, 200)
  };
  explorer.innerHTML = `
    <p class="timeline-sequences-link"><a href="#history-in-consequences">Follow connected histories →</a></p>
    <div class="timeline-calendar-note"><strong>4, Month of War, Year 1 · Day 1 of the Final War</strong><p>The first Called’s arrival through the Gate begins this reckoning. Each new year begins on the first day of the Month of Talan. Dates throughout the Codex use the Fenumion calendar. Days count elapsed posting dates; clear quest continuations share their established day, with adjustments explained in each event. Source dates remain preserved in the records and use Fenumion labels here. Ranges stay ranges, and a report’s day dates the report.</p></div>
    <details class="timeline-level-guide timeline-month-guide"><summary>The twelve months of the calendar</summary><ol>${(codexCatalog.timelineCalendar?.months || []).map(month => `<li><strong>${escapeHtml(month.name)}</strong> — month ${month.number}</li>`).join('')}</ol></details>
    ${person ? `<p class="timeline-person-filter">Events involving <a href="#${person.article}">${escapeHtml(person.title)}</a> · <a href="#living-timeline">Show all events</a></p>` : ''}
    <div class="timeline-controls">
      <label class="timeline-search-shell"><span class="timeline-search-label">Search events</span><span class="timeline-search-field"><span aria-hidden="true">⌕</span><input type="search" placeholder="Try Papirak, sacrifice, Prima…" value="${escapeHtml(state.query)}" maxlength="200" autocomplete="off"></span></label>
      ${timelineImportanceControls(state, availableTimeline)}
    </div>
    <details class="timeline-level-guide"><summary>What do the importance levels mean?</summary><p>Levels describe the reach of an event’s consequences. Statements and uncertain accounts keep their qualifications.</p><ol>${timelineImportanceLevels.map(level => `<li><strong>${level.label}</strong> — ${level.description}</li>`).join('')}</ol></details>
    <div class="timeline-filter-row" aria-label="Filter timeline by era">${['All eras', ...eras].map(era => `<button class="timeline-filter${era === state.era ? ' active' : ''}" type="button" data-era="${escapeHtml(era)}" aria-pressed="${era === state.era}">${escapeHtml(era)}</button>`).join('')}</div>
    <div class="timeline-result-tools"><div class="timeline-results-summary" role="status" aria-live="polite"></div><button class="timeline-reset" type="button">Reset filters</button></div>
    <div class="timeline-results"></div>`;
  const input = explorer.querySelector('input');
  const results = explorer.querySelector('.timeline-results');
  const summary = explorer.querySelector('.timeline-results-summary');
  const syncRoute = () => {
    const route = new URLSearchParams();
    if (person) route.set('person', person.article);
    if (state.region) route.set('region', state.region);
    if (state.importance) { route.set('importance', state.importance); if (state.match === 'exact') route.set('match', 'exact'); }
    if (state.order !== 'oldest') route.set('order', state.order);
    if (state.era !== 'All eras') route.set('era', state.era);
    if (state.query.trim()) route.set('q', state.query.trim());
    const hash = '#living-timeline' + (route.size ? '?' + route : '');
    history.replaceState(null, '', hash);
    articleContent.dataset.route = hash;
  };
  const renderResults = (updateRoute = false) => {
    if (updateRoute) syncRoute();
    const terms = normalizeSearchName(state.query).split(/\s+/).filter(Boolean);
    const filtered = availableTimeline.filter(item => state.era === 'All eras' || item.era === state.era)
      .filter(item => !state.region || timelineRegionIds(item).includes(state.region))
      .filter(item => timelineMatchesImportance(item, state))
      .filter(item => {
        if (!timelineMatchesCalendarQuery(item, state.query)) return false;
        const haystack = normalizeSearchName(window.FenumionCalendar.searchText(`${item.title} ${(item.aliases || []).join(' ')} ${timelineCalendarDateLabel(item)} ${timelineWarDateLabel(item)} ${item.meta} ${item.summary} ${window.codexReadingText(questEventConsequences[item.title])} ${item.era} ${item.kind} ${item.location} ${item.people} ${(item.tags || []).join(' ')}`));
        return terms.every(term => haystack.includes(term));
      }).sort((a, b) => compareTimelineEvents(a, b, state.order));
    timelineBrowseContext = { route: location.hash, items: filtered };
    const byImportance = ['highest', 'lowest'].includes(state.order);
    const grouped = filtered.reduce((groups, item) => {
      const key = byImportance ? timelineImportanceLabel(item) : timelineCalendarYearGroup(item);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
      return groups;
    }, new Map());
    summary.innerHTML = `<strong>${filtered.length}</strong> of ${availableTimeline.length} event${availableTimeline.length === 1 ? '' : 's'} · ${escapeHtml(timelineImportanceSummary(state))}${state.region ? ' · '+escapeHtml(codexCatalog.timelineRegions.find(region => region.id === state.region)?.label || '') : ''} · ${timelineOrders[state.order].toLowerCase()}`;
    results.innerHTML = filtered.length ? [...grouped.entries()].map(([group, items]) => `
      <section class="timeline-era" aria-label="${escapeHtml(group)}"><header class="timeline-era-header"><h3>${escapeHtml(group)}</h3><span>${items.length} event${items.length === 1 ? '' : 's'}</span></header>
      <div class="event-timeline">${items.map((item,index) => { const story=timelineStory(item), tag=story?'a':'button'; return `
        ${!byImportance && (!index || timelineCalendarMonthGroup(item) !== timelineCalendarMonthGroup(items[index-1])) ? `<h4 class="timeline-month-heading">${window.CodexVisual?.monthIcon(timelineCalendarPoint(timelineCalendarWindow(item)?.start)?.monthNumber) || ''}${escapeHtml(timelineCalendarMonthGroup(item))}</h4>` : ''}
        <${tag} class="event-card" ${story ? `href="#${escapeHtml(story.id)}" data-event-story="${escapeHtml(story.id)}"` : 'type="button"'} data-article="${escapeHtml(item.article)}" data-timeline-title="${escapeHtml(item.title)}" data-importance="${item.importance || 0}" data-region="${item.regions?.length===1?escapeHtml(item.regions[0]):''}">
          <span class="event-date">${timelineDateMarkup(item)}<span class="event-importance" title="${escapeHtml(item.importanceReason || '')}">${timelineImportanceMarkup(item)}</span></span>
          <span class="event-copy"><span class="event-kind">${escapeHtml(item.kind)} <i>·</i> ${escapeHtml(item.location)}</span><strong>${escapeHtml(item.title)}</strong><span class="event-summary">${escapeHtml(item.summary)}</span><span class="event-people"><b>People</b> ${escapeHtml(item.people)}</span><span class="event-tags">${(item.tags || []).map(tag => `<i>${escapeHtml(tag)}</i>`).join('')}</span><span class="event-expand">${story ? 'Read the full story' : 'View event summary'} <i aria-hidden="true">→</i></span></span>
        ${window.CodexVisual?.eventArt(item,codexVisualContext()) || ''}</${tag}>`; }).join('')}</div></section>`).join('') : '<div class="timeline-empty"><strong>No events match these filters.</strong><span>Try a lower importance level, another era or a broader search.</span></div>';
    window.CodexVisual?.calendarNavigator(explorer,filtered,codexVisualContext());
    window.FenumionCalendar.render(explorer);
  };
  input.addEventListener('input', event => { state.query = event.target.value; renderResults(true); });
  explorer.addEventListener('change', event => {
    if (event.target.matches('[data-timeline-region]')) state.region = event.target.value;
    else if (event.target.matches('[data-timeline-importance]')) { state.importance = Number(event.target.value); explorer.querySelector('[data-timeline-match]').disabled = !state.importance; }
    else if (event.target.matches('[data-timeline-match]')) state.match = event.target.value;
    else if (event.target.matches('[data-timeline-order]')) state.order = event.target.value;
    else return;
    renderResults(true);
  });
  const updateEraButtons = () => explorer.querySelectorAll('[data-era]').forEach(button => {
    const active = button.dataset.era === state.era; button.classList.toggle('active', active); button.setAttribute('aria-pressed', active);
  });
  explorer.querySelector('.timeline-filter-row').addEventListener('click', event => {
    const button = event.target.closest('[data-era]');
    if (button) { state.era = button.dataset.era; updateEraButtons(); renderResults(true); }
  });
  explorer.querySelector('.timeline-reset').addEventListener('click', () => {
    Object.assign(state, { importance: 0, match: 'minimum', order: 'oldest', era: 'All eras', query: '', region: '' });
    input.value = ''; explorer.querySelector('[data-timeline-region]').value = ''; explorer.querySelector('[data-timeline-importance]').value = '0';
    explorer.querySelector('[data-timeline-match]').value = 'minimum'; explorer.querySelector('[data-timeline-match]').disabled = true;
    explorer.querySelector('[data-timeline-order]').value = 'oldest'; updateEraButtons(); renderResults(true);
  });
  renderResults();
}

// Galleries use only supplied media and public quotation records.
const communityCharacterArt = [
  { article: 'gartina', image: 'gartina-chibi.png', title: 'Gartina', alt: 'Gartina holding a red heart' },
  { article: 'elenia', image: 'elenia-chibi.png', title: 'Elenia', alt: 'Elenia cheering with flowers in her hair' },
  { article: 'magnus', image: 'assets/community/ececilia/magnus-rip.png', title: 'Magnus · RIP', alt: 'Chibi Magnus with crossed-out eyes and flames' },
  { article: 'carmen', image: 'assets/community/ececilia/paco-pwease.png', title: 'Paco · Pwease', alt: 'Paco with wide pleading eyes and outstretched hands' },
  { article: 'scribonia', image: 'assets/community/ececilia/scribonia-chibi.png', title: 'Scribonia', alt: 'Scribonia with glasses and a glowing idea bulb' },
  { article: 'vessalia', image: 'assets/community/ececilia/vessalia-chibi.png', title: 'Vessalia', alt: 'Vessalia with sparkling star-shaped pupils' }
];

function islandNpcPeople(group) {
  const assignments = new Map(npcIslandGroups.flatMap(item => item.people.map(person => [person.name, {group:item.id,basis:person.basis}])));
  return [...new Map(archiveIndex.npcs.filter(person => isPlayerSafeArticle(person.article))
    .filter(person => group.id === 'unplaced' ? !assignments.has(person.title) : assignments.get(person.title)?.group === group.id)
    .map(person => [person.title,{...person,islandBasis:assignments.get(person.title)?.basis || 'Island affiliation not established in the public record'}])).values()]
    .sort((a,b)=>a.title.localeCompare(b.title));
}

function renderIslandNpcCollection(article) {
  if (article.npcIslandOverview) return '<section class="exploration-section"><h2 id="island-npc-groups">Choose an island</h2><div class="exploration-grid">'+npcIslandGroups.map(group=>`<a href="#npcs-${group.id}"><strong>${escapeHtml(group.title)}</strong><small>${islandNpcPeople(group).length} NPC records</small></a>`).join('')+'</div></section>';
  const group = npcIslandGroups.find(item=>item.id===article.npcIsland || item.article===article.id);
  if (!group) return '';
  const people = islandNpcPeople(group);
  return `<section class="exploration-section island-npc-collection"><p class="eyebrow">Island community</p><h2 id="island-npc-community">NPCs · ${escapeHtml(group.title)}</h2><p>${group.article ? 'Local residents, officials and other NPCs with documented ties to this island.' : 'These NPCs remain available without assigning them an unsupported home island.'}</p><div class="exploration-links"><a href="#npc-islands">Browse NPCs by island →</a>${article.npcIsland && group.article ? `<a href="#${group.article}">Explore ${escapeHtml(group.title)} →</a>` : ''}</div><p>${people.length} public NPC records</p><div class="browser-grid">${people.map(person=>`<button type="button" class="index-card character-card npc-record" data-character-title="${escapeHtml(person.title)}" data-article="${escapeHtml(person.article)}">${person.image?`<img src="${escapeHtml(person.image)}" alt="" loading="lazy" decoding="async">`:'<span class="index-glyph" aria-hidden="true">✦</span>'}<span class="index-card-copy"><strong>${escapeHtml(person.title)}</strong><small class="npc-region-label">${escapeHtml(npcRegionLabel(person))}</small><small>${escapeHtml(person.islandBasis)}</small><span>${escapeHtml(person.summary)}</span></span></button>`).join('')}</div></section>`;
}

function characterTimelineItems(person) {
  const resolved = new Map();
  const matches = name => {
    const key = name.trim();
    if (!resolved.has(key)) resolved.set(key, resolvePublicPerson(key));
    return resolved.get(key)?.title === person.title;
  };
  return archiveIndex.timeline.filter(event => event.title && event.meta && event.era && event.kind && event.location && event.people && !isRestrictedTimelineEvent(event) && isPlayerSafeArticle(event.article))
    .filter(event => String(event.people || '').split(';').some(matches))
    .filter((event, index, events) => events.findIndex(other => other.title === event.title && other.sort === event.sort) === index)
    .sort((a, b) => String(a.sort).localeCompare(String(b.sort)));
}

function renderCharacterNavigation(article) {
  const person = [...archiveIndex.characters, ...archiveIndex.npcs].find(record => record.article === article.id &&
    [record.title, ...(record.aliases || [])].some(name => normalizePlaceName(name) === normalizePlaceName(article.title)));
  if (!person) return '';
  const group = npcIslandGroups.find(group => group.people.some(record => record.name === person.title));
  const ids = new Set([...(article.relatedRecords || []), ...(subchannelMap[article.id] || []).map(link => link.article)]);
  for (const match of article.body.matchAll(/href=["']#([^"']+)["']/g)) ids.add(match[1].split('?')[0]);
  for (const node of relationshipMaps[article.id]?.nodes || []) if (node.article) ids.add(node.article);
  const records = [...ids].map(id => byId.get(id)).filter(record => record && record.id !== article.id && isPlayerSafeArticle(record.id));
  const places = records.filter(isLocationArticle).slice(0, 6);
  const people = records.filter(record => searchCategory(record) === 'character').slice(0, 8);
  const histories = records.filter(record => !isLocationArticle(record) && searchCategory(record) !== 'character').slice(0, 6);
  const events = characterTimelineItems(person);
  const linkList = (label, records) => records.length ? `<div class="character-path-group"><h3>${label}</h3><div class="exploration-links">${records.map(record => `<a href="#${record.id}">${escapeHtml(record.title)}</a>`).join('')}</div></div>` : '';
  return `<section class="character-reading-path exploration-section" aria-labelledby="character-path-${article.id}">
    <h2 id="character-path-${article.id}">Follow ${escapeHtml(person.title)}</h2>
    <div class="exploration-links">${group ? `<a href="#${group.article}">${escapeHtml(group.title)} · island connection</a><a href="#npcs-${group.id}">All ${escapeHtml(group.title)} NPCs</a>` : archiveIndex.npcs.includes(person) ? '<a href="#npcs-unplaced">Island not established</a>' : ''}
      ${relationshipMaps[article.id] ? `<button type="button" data-section="relationship-map-${article.id}">Explore relationships</button>` : ''}
      ${events.length ? `<a href="#living-timeline?person=${encodeURIComponent(article.id)}">All ${events.length} recorded events</a>` : ''}</div>
    ${linkList('Places in their history', places)}${linkList('Connected people', people)}${linkList('Quests & histories', histories)}
    ${events.length ? `<details class="character-event-links"><summary>Recent recorded events</summary><ol>${events.slice(-5).reverse().map(event => `<li><button type="button" data-timeline-title="${escapeHtml(event.title)}" data-article="${escapeHtml(event.article)}"><small>${escapeHtml(event.meta)}</small>${escapeHtml(event.title)}</button></li>`).join('')}</ol></details>` : ''}
  </section>`;
}

function renderCharacterCollection(article) {
  const artwork = communityCharacterArt.filter(item => item.article === article.id);
  const person = [...archiveIndex.characters, ...archiveIndex.npcs].some(item => item.article === article.id && normalizePlaceName(item.title) === normalizePlaceName(article.title));
  if ((!person && article.category !== 'People' && !artwork.length) || ['people-directory', 'ececilia-emojis'].includes(article.id)) return '';
  const quotes = memorableQuoteRecords().filter(record => isPlayerSafeArticle(record.article) && (record.article === article.id || normalizePlaceName(record.speaker) === normalizePlaceName(article.title)));
  const media = [
    ...(article.image ? [{ image: article.image, title: article.title, alt: article.imageAlt || article.title, caption: article.imageCaption || 'Portrait preserved in the Codex archive.' }] : []),
    ...artwork.map(item => ({ ...item, caption: 'Character artwork by Ececilia.' }))
  ];
  if (!media.length && !quotes.length) return '';
  return `<section class="character-collection exploration-section" aria-labelledby="collection-${article.id}">
    <p class="eyebrow">Portraits, community art & remembered words</p><h2 id="collection-${article.id}">Art & words · ${escapeHtml(article.title)}</h2>
    ${media.length ? `<div class="character-art-grid">${media.map(item => `<figure><a href="${escapeHtml(item.image)}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(item.title)} artwork at full size"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy"></a><figcaption><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.caption)}</span></figcaption></figure>`).join('')}</div>` : ''}
    ${artwork.length ? '<p class="collection-credit"><a href="#ececilia-emojis">Explore Ececilia’s complete emoji gallery →</a></p>' : ''}
    ${quotes.length ? `<h3>In their own words</h3><div class="character-quote-grid">${quotes.map(record => `<div class="quote-card character-quote"><span class="quote-group">${escapeHtml(record.group)}</span><blockquote>${escapeHtml(record.title)}</blockquote><cite>${escapeHtml(record.speaker)}</cite></div>`).join('')}</div><p><a href="#memorable-quotes">Explore all memorable quotes →</a></p>` : ''}
  </section>`;
}

function isLocationArticle(article) {
  return ['Places', 'Locations'].includes(article.category) && article.id !== 'visual-archive';
}

function locationTimelineItems(article) {
  const records = archiveIndex.islands.filter(place => place.article === article.id);
  const names = new Set([article.title, ...records.flatMap(place => [place.title, ...(place.aliases || [])])].map(normalizePlaceName).filter(Boolean));
  return archiveIndex.timeline.filter(item => !isRestrictedTimelineEvent(item) && isPlayerSafeArticle(item.article))
    .filter(item => item.article === article.id || String(item.location || '').split(/[;,/·]|\s+›\s+/).map(normalizePlaceName).some(part => names.has(part)))
    .filter((item, index, items) => items.findIndex(candidate => candidate.title === item.title && candidate.sort === item.sort) === index)
    .sort((a, b) => a.sort.localeCompare(b.sort));
}

function resolvePublicPerson(name) {
  const normalized = normalizePlaceName(name);
  const people = [...archiveIndex.characters, ...archiveIndex.npcs].filter(person => isPlayerSafeArticle(person.article));
  const exact = people.find(person => [person.title, ...(person.aliases || []), byId.get(person.article)?.title].filter(Boolean).some(title => normalizePlaceName(title) === normalized));
  if (exact) return exact;
  const expanded = people.filter(person => normalizePlaceName(person.title).startsWith(normalized + ' '));
  return expanded.length === 1 ? expanded[0] : null;
}

function renderLocationConnections(article) {
  if (!isLocationArticle(article)) return '';
  const places = archiveIndex.islands.filter(place => place.article === article.id);
  const names = new Set([article.title, ...places.flatMap(place => [place.title, ...(place.aliases || [])])]);
  const maps = interactiveMaps.filter(map => map.pins.some(pin => pin.article === article.id || names.has(pin.title)));
  const people = [...new Map(locationTimelineItems(article).flatMap(event => String(event.people || '').split(';').map(name => resolvePublicPerson(name.trim())).filter(Boolean)).map(person => [person.title, person])).values()];
  const children = archiveIndex.islands.filter(place => names.has(place.parent) && !names.has(place.title) && isPlayerSafeArticle(place.article));
  const parents = [...new Set(places.map(place => place.parent).filter(parent => parent && !names.has(parent)))].map(name => archiveIndex.islands.find(place => place.title === name && isPlayerSafeArticle(place.article))).filter(Boolean);
  if (!maps.length && !people.length && !children.length && !parents.length) return '';
  return `<section class="location-connections exploration-section" aria-labelledby="connections-${article.id}"><p class="eyebrow">Follow the place’s history</p><h2 id="connections-${article.id}">People & places connected here</h2>
    ${maps.length ? `<div class="exploration-links">${maps.map(map => `<button type="button" data-open-map="${map.id}">Explore the ${escapeHtml(map.title)} map →</button>`).join('')}</div>` : ''}
    ${parents.length ? `<p class="location-parent">Part of ${parents.map(parent => `<button type="button" data-location-title="${escapeHtml(parent.title)}">${escapeHtml(parent.title)}</button>`).join(' · ')}</p>` : ''}
    ${people.length ? `<details class="connection-group" open><summary>People in the recovered events <span>${people.length}</span></summary><div class="exploration-grid">${people.map(person => `<button type="button" data-character-title="${escapeHtml(person.title)}"><strong>${escapeHtml(person.title)}</strong><small>${escapeHtml(person.meta)}</small></button>`).join('')}</div></details>` : ''}
    ${children.length ? `<details class="connection-group"><summary>Explore places within ${escapeHtml(article.title)} <span>${children.length}</span></summary><div class="exploration-grid">${children.map(place => `<button type="button" data-location-title="${escapeHtml(place.title)}"><strong>${escapeHtml(place.title)}</strong><small>${escapeHtml(place.type || place.meta)}</small></button>`).join('')}</div></details>` : ''}
  </section>`;
}

function renderEventConnections(item) {
  const people = [...new Map(String(item.people || '').split(';').map(name => resolvePublicPerson(name.trim())).filter(Boolean).map(person => [person.title, person])).values()];
  const locationNames = String(item.location || '').split(/[;,/·]|\s+›\s+/).map(normalizePlaceName);
  const places = archiveIndex.islands.filter(place => isPlayerSafeArticle(place.article) && [place.title, ...(place.aliases || [])].some(name => locationNames.includes(normalizePlaceName(name))));
  if (!people.length && !places.length) return '';
  return `<nav class="record-connections" aria-label="People and places in this event"><h3>Follow this event</h3><div class="exploration-links">${people.map(person => `<button type="button" data-character-title="${escapeHtml(person.title)}">${escapeHtml(person.title)}</button>`).join('')}${places.map(place => `<button type="button" data-location-title="${escapeHtml(place.title)}">${escapeHtml(place.title)}</button>`).join('')}</div></nav>`;
}

function renderRelationshipMoments(node) {
  if (!node.moments?.length) return '';
  return `<ol class="relationship-moments" aria-label="How this relationship changes over time">${node.moments.map(moment => `<li><strong>${escapeHtml(moment.when)}</strong><span>${escapeHtml(moment.text)}</span></li>`).join('')}</ol>`;
}

function searchCategory(article) {
  if (isLocationArticle(article)) return 'location';
  if ([...archiveIndex.characters, ...archiveIndex.npcs].some(person => person.article === article.id && [person.title, ...(person.aliases || [])].some(name => normalizePlaceName(name) === normalizePlaceName(article.title)))) return 'character';
  return 'article';
}

function setupReadingPath() {
  const path = articleContent.querySelector('[data-reading-path]');
  if (!path) return;
  const storageKey = 'fenumion-reading-path-v1';
  let completed = [];
  try { completed = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (!Array.isArray(completed)) completed = []; } catch {}
  const inputs = [...path.querySelectorAll('[data-reading-step]')];
  inputs.forEach(input => { input.checked = completed.includes(input.dataset.readingStep); });
  const update = () => {
    const done = inputs.filter(input => input.checked).map(input => input.dataset.readingStep);
    path.querySelector('[data-reading-progress]').textContent = `${done.length} of ${inputs.length} steps marked as read`;
    try { localStorage.setItem(storageKey, JSON.stringify(done)); } catch {}
  };
  path.addEventListener('change', update);
  update();
}

function renderRelated(article) {
  const related = articles
    .filter(candidate => candidate.id !== article.id && isPlayerSafeArticle(candidate.id))
    .map(candidate => ({ article: candidate, score: candidate.tags.filter(tag => article.tags.includes(tag)).length + (candidate.category === article.category ? 1 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(({ article: item }) => `<button data-article="${item.id}"><small>Continue reading</small>${item.title}</button>`)
    .join("");
  return `<div class="related">${related}</div>`;
}

function buildContents() {
  const selector=articleContent.classList.contains('biography-layout')?'.article-body .biography-section > h2':'.article-body h2';
  const headings = [...articleContent.querySelectorAll(selector)].filter(heading=>!heading.closest('.region-history')||heading.matches('.region-history > summary > h2'));
  contents.innerHTML = headings.map(heading => `<button type="button" class="toc-link" data-section="${heading.id}">${heading.textContent}</button>`).join("");
  const mobileContents = document.querySelector("#mobile-contents");
  mobileContents.hidden = headings.length === 0;
  mobileContents.open = false;
  document.querySelector("#mobile-contents-links").innerHTML = contents.innerHTML;
}

let searchReturnFocus=null;
function openSearch() {
  if(searchPanel.hidden && document.activeElement!==search)searchReturnFocus=document.activeElement;
  sidebar.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  searchPanel.hidden = false;
  scrim.hidden = false;
  document.body.classList.toggle("panels-open", innerWidth <= 760);
  if (innerWidth <= 760) document.querySelector(".search-shell").classList.add("open");
}

let activeSearchCategory = "all";
let searchRequestEpoch = 0;

function normalizeSearchName(value) {
  return String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['’]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

// Reuse normalized archive text; rebuilding vault-derived data invalidates it.
let searchTextCache = new WeakMap();
const searchNameCache = new Map();
function cachedSearchText(record, kind, build) {
  let cached = searchTextCache.get(record);
  if (!cached || cached.body !== record.body) {
    cached = { body: record.body, values: new Map() };
    searchTextCache.set(record, cached);
  }
  if (!cached.values.has(kind)) cached.values.set(kind, build());
  return cached.values.get(kind);
}

function searchNameScore(query, names, phrase = normalizeSearchName(query)) {
  const terms = phrase.split(' ');
  return Math.max(0, ...names.filter(Boolean).flatMap(name => {
    let cached = searchNameCache.get(name);
    if (!cached) {
      cached = { full: normalizeSearchName(name), parts: String(name).split(/[/·]/).map(normalizeSearchName) };
      searchNameCache.set(name, cached);
    }
    const { full, parts } = cached;
    if (full === phrase) return 1200;
    if (parts.includes(phrase)) return 1100;
    if ((' ' + full + ' ').includes(' ' + phrase + ' ')) return 700 + (full.startsWith(phrase + ' ') ? 100 : 0);
    if (full.includes(phrase)) return 250;
    return terms.every(term => (' ' + full + ' ').includes(' ' + term + ' ')) ? 500 : 0;
  }));
}

function runSearch(query) {
  const requestEpoch=++searchRequestEpoch;
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    searchPanel.hidden = true;
    if (!document.querySelector(".search-shell").classList.contains("open")) closePanels();
    return;
  }
  let searchCompletion=null;
  const catalogOnly=!window.CodexReader.searchReady;
  if(catalogOnly){
    const pendingQuery=query;
    searchCompletion=window.CodexReader.ensureSearch().then(()=>{
      searchTextCache=new WeakMap();
      if(requestEpoch===searchRequestEpoch)return runSearch(pendingQuery);
    }).catch(()=>{if(requestEpoch===searchRequestEpoch)searchResults.insertAdjacentHTML('beforeend','<p role="alert">Full-text search could not load. Catalog matches remain available; type again to retry.</p>');});
  }
  const phrase = normalizeSearchName(normalized);
  if (!phrase) { closePanels(); return; }
  const terms = phrase.split(/\s+/).filter(Boolean);
  const articleResults = articles.filter(article => isPlayerSafeArticle(article.id)).map(article => {
    const path = articlePaths.get(article.id) || [article.category, article.title];
    const names = [article.title, ...(article.aliases || [])];
    const haystack = cachedSearchText(article, "article", () => normalizeSearchName(window.FenumionCalendar.searchText(`${path.join(" ")} ${names.join(' ')} ${article.category} ${article.type} ${article.dek} ${article.tags.join(" ")} ${window.CodexReader.searchText(article)}`)));
    const titleMatch = searchNameScore(normalized, names, phrase);
    const tagMatch = cachedSearchText(article, "tags", () => article.tags.map(normalizeSearchName)).some(tag => tag.includes(phrase)) ? 30 : 0;
    const allTermsMatch = terms.every(term => haystack.includes(term));
    return { article, path, kind: "article", record: article, section: titleMatch ? null : window.CodexReader.matchSection(article,terms), filterKind: searchCategory(article), score: allTermsMatch ? titleMatch + tagMatch + (haystack.includes(phrase) ? 20 : 0) + 10 : 0 };
  }).filter(result => result.score);
  const indexGroups = [
    ["Characters", archiveIndex.characters],
    ["NPCs & divine figures", archiveIndex.npcs],
    ["Timeline", archiveIndex.timeline],
    ["Locations", archiveIndex.islands]
  ];
  const indexResults = indexGroups.flatMap(([group, items]) => items.filter(item => item?.title && (group !== "Timeline" || (!isRestrictedTimelineEvent(item) && timelineMatchesCalendarQuery(item, query)))).map(item => {
    const haystack = cachedSearchText(item, group, () => normalizeSearchName(window.FenumionCalendar.searchText(`${group} ${item.title} ${(item.aliases || []).join(' ')} ${timelineCalendarDateLabel(item)} ${timelineWarDateLabel(item)} ${item.meta} ${item.summary} ${item.era || ""} ${item.kind || ""} ${item.location || ""} ${item.people || ""} ${item.region || ""} ${item.parent || ""} ${item.type || ""} ${item.source || ""} ${(item.aliases || []).join(" ")} ${(item.tags || []).join(" ")}`)));
    const titleMatch = searchNameScore(normalized, [item.title, ...(item.aliases || [])], phrase);
    const allTermsMatch = terms.every(term => haystack.includes(term));
    return {
      article: { id: item.article, title: item.title, type: item.meta, dek: item.summary },
      path: [group, item.title],
      kind: group === "Timeline" ? "timeline" : group === "Locations" ? "location" : "character",
      record: item,
      score: allTermsMatch ? titleMatch + (haystack.includes(phrase) ? 20 : 0) + 10 : 0
    };
  })).filter(result => result.score && isPlayerSafeArticle(result.article.id));
  const quoteTerms = terms;
  const quoteResults = memorableQuoteRecords().filter(record => isPlayerSafeArticle(record.article)).map(record => {
    const haystack = cachedSearchText(record, "quote", () => normalizeSearchName(window.FenumionCalendar.searchText(`${record.title} ${record.speaker} ${record.group}`)));
    const matches = quoteTerms.length && quoteTerms.every(term => haystack.includes(term));
    const nameMatch = Math.min(400, searchNameScore(normalized, [record.speaker], phrase));
    const wordsMatch = Math.min(600, searchNameScore(normalized, [record.title], phrase));
    return { article: { id: "memorable-quotes", title: record.title, type: "Memorable quote", dek: record.speaker }, path: ["Quotes", record.group], kind: "quote", record, score: matches ? Math.max(nameMatch, wordsMatch) + 20 : 0 };
  }).filter(result => result.score);
  const seen = new Set();
  const results = [...articleResults, ...indexResults, ...quoteResults]
    .filter(result => activeSearchCategory === "all" || (result.filterKind || result.kind) === activeSearchCategory)
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title))
    .filter(result => {
      const key = `${result.article.title.toLowerCase()}|${result.article.id}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  searchCount.textContent = `${results.length} result${results.length === 1 ? "" : "s"}`;
  document.querySelectorAll("[data-search-filter]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.searchFilter === activeSearchCategory)));
  const focusedResult=document.activeElement?.matches('.search-result')?{...document.activeElement.dataset}:null;
  searchResults.innerHTML = results.length ? results.map(({ article, path, kind, record, section }) => `
    <button class="search-result" data-search-category="${kind === "article" ? searchCategory(byId.get(article.id)) : kind}" data-search-kind="${kind}" data-search-title="${escapeHtml(record.title)}"${section ? ` data-search-section="${escapeHtml(section.id)}"` : ""} data-article="${escapeHtml(article.id)}"><small>${path.map(escapeHtml).join(" → ")} · ${escapeHtml(article.type)}</small><strong>${highlight(article.title, normalized)}</strong><span>${highlight(article.dek, normalized)}</span>${section ? `<span class="search-section-match">In ${escapeHtml(section.title)}</span><span class="search-snippet">${highlight(section.snippet,normalized)}</span>` : ""}</button>`).join("") : catalogOnly?'':`<div class="empty-search">No character, quote, event, or location matches “${escapeHtml(query)}”.</div>`;
  if(catalogOnly)searchResults.insertAdjacentHTML('beforeend','<p class="search-index-status" role="status">Catalog matches are available. Opening full-text search…</p>');
  window.FenumionCalendar.render(searchResults);
  openSearch();
  if(focusedResult){
    const buttons=[...searchResults.querySelectorAll('.search-result')];
    const replacement=buttons.find(button=>button.dataset.searchKind===focusedResult.searchKind&&button.dataset.searchTitle===focusedResult.searchTitle&&button.dataset.article===focusedResult.article)||buttons[0];
    (replacement||search).focus({preventScroll:true});
  }
  return searchCompletion;
}

function highlight(text, query) {
  const escaped = escapeHtml(text);
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${safeQuery})`, "ig"), "<mark>$1</mark>");
}

function closePanels({restoreFocus=false}={}) {
  searchRequestEpoch++;
  document.body.classList.remove("panels-open");
  searchPanel.hidden = true;
  scrim.hidden = true;
  sidebar.classList.remove("open");
  document.querySelector(".search-shell").classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if(restoreFocus){
    const target=searchReturnFocus?.isConnected&&searchReturnFocus.getClientRects().length?searchReturnFocus:innerWidth<=760?searchToggle:search;
    target.focus({preventScroll:true});searchReturnFocus=null;
  }
}

matchMedia("(max-width: 760px)").addEventListener("change", closePanels);

function clearSearchQuery() {
  searchRequestEpoch++;
  search.value = "";
  activeSearchCategory = "all";
  document.querySelectorAll("[data-search-filter]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.searchFilter === "all")));
  const gatewaySearch = document.querySelector("#gateway-search");
  if (gatewaySearch) gatewaySearch.value = "";
  closePanels();
}

recordDialogClose?.addEventListener("click", closeRecordDialog);
recordDialog?.addEventListener("click", event => {
  if (event.target === recordDialog) closeRecordDialog();
});

document.addEventListener("click", event => {
  if(event.target.closest("[data-refresh-codex]")){location.reload();return;}
  const storyTrigger = event.target.closest('[data-event-story]');
  if (storyTrigger) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const item = findTimelineRecord(storyTrigger.dataset.eventTitle || storyTrigger.dataset.timelineTitle);
    if (timelineStory(item)?.id === storyTrigger.dataset.eventStory) {
      event.preventDefault(); openEventStory(item); return;
    }
  }
  const locationTrigger = event.target.closest('[data-location-title]');
  if (locationTrigger) {
    const place = archiveIndex.islands.find(item => item.title === locationTrigger.dataset.locationTitle);
    if (place && isPlayerSafeArticle(place.article)) openLocationRecord(place);
    return;
  }
  const relatedRecord = event.target.closest("[data-record-article]");
  if (relatedRecord) {
    closeRecordDialog();
    renderArticle(relatedRecord.dataset.recordArticle);
    return;
  }
  if (event.target.closest("[data-open-vault]")) {
    unlockVault({ interactive: true });
    return;
  }
  const mapTrigger = event.target.closest("[data-open-map]");
  if (mapTrigger) {
    renderArticle(`visual-archive?map=${encodeURIComponent(mapTrigger.dataset.openMap)}`);
    return;
  }
  const searchTrigger = event.target.closest(".search-result[data-search-kind]");
  if (searchTrigger) {
    const kind = searchTrigger.dataset.searchKind;
    const title = searchTrigger.dataset.searchTitle;
    const articleId = searchTrigger.dataset.article;
    clearSearchQuery();
    if(searchTrigger.dataset.searchSection){
      closeRecordDialog();renderArticle(articleId+'?section='+encodeURIComponent(searchTrigger.dataset.searchSection));return;
    }
    if (kind === "quote") {
      const record = memorableQuoteRecords().find(quote => quote.title === title && isPlayerSafeArticle(quote.article));
      if (record) {
        closeRecordDialog();
        Promise.resolve(renderArticle("memorable-quotes")).then(()=>window.CodexReader.jump(record.quoteId));
      }
      return;
    }
    if (kind === "timeline") {
      const item = findTimelineRecord(title);
      if (item && !isRestrictedTimelineEvent(item)) openTimelineRecord(item);
      return;
    }
    if (kind === "character") {
      const player = archiveIndex.characters.find(person => person.title === title);
      const npc = archiveIndex.npcs.find(person => person.title === title);
      const person = player || npc;
      if (person && isPlayerSafeArticle(person.article)) openCharacterRecord(person, player ? characterRecordLabel(person) : "NPC");
      return;
    }
    if (kind === "location") {
      const place = archiveIndex.islands.find(item => item.title === title);
      if (place && isPlayerSafeArticle(place.article)) openLocationRecord(place);
      return;
    }
    closeRecordDialog();
    renderArticle(articleId);
    return;
  }
  const timelineTrigger = event.target.closest("[data-timeline-title]");
  if (timelineTrigger) {
    const timelineItem = findTimelineRecord(timelineTrigger.dataset.timelineTitle);
    if (timelineItem && (!isRestrictedTimelineEvent(timelineItem) || vaultUnlocked)) {
      if (timelineTrigger.closest('.location-timeline-list') && timelineStory(timelineItem)) {
        openEventStory(timelineItem); return;
      }
      openTimelineRecord(timelineItem);
      return;
    }
  }
  const characterTrigger = event.target.closest("[data-character-title]");
  if (characterTrigger) {
    const title = characterTrigger.dataset.characterTitle;
    const player = archiveIndex.characters.find(person => person.title === title);
    const npc = archiveIndex.npcs.find(person => person.title === title);
    const person = player || npc;
    if (person && (isPlayerSafeArticle(person.article) || vaultUnlocked)) {
      openCharacterRecord(person, player ? characterRecordLabel(person) : "NPC");
      return;
    }
  }
  const trigger = event.target.closest("[data-article]");
  if (trigger) {
    renderArticle(trigger.dataset.article);
  }
  const sectionTrigger = event.target.closest("[data-section]");
  if (sectionTrigger) {
    document.querySelector("#mobile-contents").open = false;
    const params=new URLSearchParams(location.hash.split('?')[1]||'');params.set('section',sectionTrigger.dataset.section);
    history.replaceState(null,'',location.hash.split('?')[0]+'?'+params);
    window.CodexReader.jump(sectionTrigger.dataset.section);
  }
});
document.querySelector('#search-filters').addEventListener('click', event => {
  const button = event.target.closest('[data-search-filter]');
  if (!button) return;
  activeSearchCategory = button.dataset.searchFilter;
  runSearch(search.value);
});
search.addEventListener("input", event => runSearch(event.target.value));
search.addEventListener("focus", () => { if (search.value) runSearch(search.value); });
document.querySelector("#close-search").addEventListener("click", () => closePanels({restoreFocus:true}));
scrim.addEventListener("click", () => closePanels({restoreFocus:true}));
menuButton.addEventListener("click", () => {
  const open = !sidebar.classList.contains("open");
  closePanels();
  sidebar.classList.toggle("open", open);
  document.body.classList.toggle("panels-open", open && innerWidth <= 760);
  scrim.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
});
searchToggle.addEventListener("click", () => { openSearch(); search.focus(); });
vaultButton.addEventListener("click", () => (vaultUnlocked ? lockVault() : unlockVault({ interactive: true })));
document.querySelector("#vault-close").addEventListener("click", closeVaultDialog);
vaultDialog.addEventListener("click", event => {
  if (event.target === vaultDialog) closeVaultDialog();
});
vaultSignin.addEventListener("click", () => {
  location.assign(`${AUTH_ORIGIN}/login?next=${encodeURIComponent(vaultReturnUrl())}`);
});
document.addEventListener("keydown", event => {
  if(!searchPanel.hidden && !recordDialog.open && !vaultDialog.open){
    const results=[...searchResults.querySelectorAll('.search-result')];
    const index=results.indexOf(document.activeElement);
    if((event.key==='ArrowDown'||event.key==='ArrowUp')&&(document.activeElement===search||index>=0)){
      event.preventDefault();
      if(event.key==='ArrowUp'&&index<=0)search.focus();
      else results[Math.min(results.length-1,event.key==='ArrowDown'?index+1:index-1)]?.focus();
      return;
    }
    if(event.key==='Tab'&&innerWidth<=760){
      const controls=[search,...searchPanel.querySelectorAll('button,a,input,select')].filter(el=>!el.disabled&&el.getClientRects().length);
      const at=controls.indexOf(document.activeElement);
      event.preventDefault();controls[(at+(event.shiftKey?-1:1)+controls.length)%controls.length]?.focus();return;
    }
  }
  if (event.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
    event.preventDefault();
    const gatewaySearch = document.querySelector("#gateway-search");
    if (gatewaySearch) gatewaySearch.focus();
    else { openSearch(); search.focus(); }
  }
  if (event.key === "Escape") {
    searchRequestEpoch++;
    search.value = "";
    const gatewaySearch = document.querySelector("#gateway-search");
    if (gatewaySearch) gatewaySearch.value = "";
    closePanels({restoreFocus:true});
  }
});
window.addEventListener("popstate", () => renderArticle(location.hash.slice(1), false));
window.addEventListener("hashchange", () => {
  const route = location.hash.slice(1);
  renderArticle(route || "world-index", false);
});

// Canonical records were cleaned once during migration; do not rewrite them on startup.
rebuildDerivedData();
updateVaultState();
renderNavigation();
renderArticle(location.hash.slice(1) || "world-index", false);
fetchVaultIdentity();
let lockedThisTab = false;
try { lockedThisTab = sessionStorage.getItem(VAULT_LOCK_KEY) === "1"; } catch {}
if (!lockedThisTab) unlockVault({ interactive: false });
