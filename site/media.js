// Central media registry.
//
// Add a portrait, GIF, or ambient video here instead of editing the large
// content index. `image` accepts PNG, JPEG, WebP, and GIF files. `video`
// accepts browser-playable video such as MP4 or M4V; pair it with `image`
// when a poster/fallback is available.
window.FENUMION_MEDIA = {
  characters: {
    "Akarian": {
      image: "assets/characters/akarian.png",
      video: "assets/archive/akarian.mp4"
    },
    "Alyhotep bin Baladin": {
      image: "assets/archive/alyhotep-portrait.jpg",
      aliases: ["Alyhotep", "Aly"]
    },
    "Aurélia / Night": {
      image: "assets/archive/aurelia-portrait.jpg",
      aliases: ["Aurelia", "Night"]
    },
    "Bitoshi Nakamoto": {
      image: "assets/archive/bitoshi-nakamoto-portrait.jpg",
      aliases: ["Bitoshi"]
    },
    "Casimir": {
      image: "assets/archive/casimir-portrait.jpg"
    },
    "Cobble": {
      image: "assets/archive/cobble-portrait.png"
    },
    "Di’Trillio": {
      image: "assets/archive/ditrillio-portrait.jpg",
      aliases: ["Di'trillio", "Ditrillio"]
    },
    "Dumuzi / Death": {
      image: "assets/characters/death.gif",
      aliases: ["Death", "Dumuzi"]
    },
    "Draygar WarSmash": {
      image: "assets/characters/draygar-warsmash.png",
      aliases: ["Dragyar", "Draygar"]
    },
    "Endora": {
      image: "assets/characters/endora.png"
    },
    "Fenwick": {
      video: "assets/characters/fenwick.mp4"
    },
    "Melian Starguard": {
      image: "assets/characters/melian.png",
      aliases: ["Melian"]
    },
    "Roderick / Wrath": {
      image: "assets/archive/wrath.gif"
    },
    "Vessalia": {
      image: "assets/characters/vessalia.png"
    },
    "Vain": {
      video: "assets/archive/vain-knight-of-death.mp4"
    }
  },
  locations: {
    "The Last Grove": { image: "assets/locations/last-grove.png" },
    "Citadel of Sorrow": {
      image: "assets/locations/citadel-of-sorrow.gif"
    },
    "Old Earth Hills": {
      video: "assets/locations/old-earth-hills.mp4"
    },
    "The Before Survey Entrance": {
      image: "assets/locations/the-before-ruins.png",
      video: "assets/locations/the-before.mp4"
    },
    "The Shining Shores": {
      image: "assets/archive/shining-shores-alternate.webp",
      video: "shining-shores.m4v"
    }
  },
  articles: {
    "akarian": {
      image: "assets/characters/akarian.png",
      video: "assets/archive/akarian.mp4"
    },
    "before-survey": {
      image: "assets/locations/the-before-ruins.png",
      video: "assets/locations/the-before.mp4",
      imageAlt: "Ancient elven palace ruins overtaken by a luminous violet forest in The Before",
      imageCaption: "The Before — living forest gathered around the remains of an older world."
    },
    "cala": {
      gallery: [
        {
          image: "assets/characters/cala-alternate.gif",
          title: "Cala · alternate visual",
          alt: "Cala standing in radiant stormlight with a luminous spear",
          caption: "An alternate animated visual record of Cala."
        }
      ]
    },
    "draygar-warsmash": {
      image: "assets/characters/draygar-warsmash.png",
      imageAlt: "Portrait of Draygar WarSmash, a broad warrior in dark furs holding a heavy axe",
      imageCaption: "Draygar WarSmash — strength placed in service of rescue and fellowship.",
      aliases: ["Dragyar", "Draygar"]
    },
    "death-dumuzi": {
      image: "assets/characters/death.gif",
      imageAlt: "A shadowed figure representing Death emerging through luminous teal mist",
      imageCaption: "Dumuzi / Death — supplied animated visual record."
    },
    "melian-starguard": {
      image: "assets/characters/melian.png",
      imageAlt: "Melian Starguard, a pale-haired elven civic leader in silver armor and a rose-colored cloak",
      imageCaption: "Melian Starguard — keeper of Pristinia’s civic continuity."
    },
    "roderick-wrath": {
      image: "assets/archive/wrath.gif"
    },
    "shining-shores": {
      image: "assets/archive/shining-shores-alternate.webp",
      video: "shining-shores.m4v",
      videoType: "video/mp4"
    },
    "vain": {
      video: "assets/archive/vain-knight-of-death.mp4"
    }
  }
};

const thunderingCoastMedia = {image:'assets/archive/thundering-coast-poster.webp',video:'assets/archive/thundering-coast.mp4',imageAlt:'Aerial landscape of the Thundering Coast on Prima',imageCaption:'The Thundering Coast · Prima',videoCaption:'The Thundering Coast · Prima'};
window.FENUMION_MEDIA.locations['The Thundering Coast'] = thunderingCoastMedia;
window.FENUMION_MEDIA.articles['thundering-coast'] = thunderingCoastMedia;

const tobiasMedia = {
  image: 'assets/characters/tobias-poster.webp',
  video: 'assets/characters/tobias.mp4',
  imageAlt: 'Tobias, a stout halfling with a shaved head and dark beard, wearing ornate armor and a green cloak',
  imageCaption: 'Tobias',
  videoCaption: 'Tobias'
};
window.FENUMION_MEDIA.characters.Tobias = tobiasMedia;
window.FENUMION_MEDIA.articles.tobias = tobiasMedia;

window.FENUMION_MEDIA.characters['Tobias Goodbarrel'] = tobiasMedia;
tobiasMedia.imageCaption = 'Tobias Goodbarrel';
tobiasMedia.videoCaption = 'Tobias Goodbarrel';
const fenwickMedia = {
  image: 'assets/characters/fenwick-poster.webp',
  video: 'assets/characters/fenwick.mp4',
  imageAlt: 'Fenwick d’Jorasco, wearing round glasses and a green cloak, holding a glowing spell',
  imageCaption: 'Fenwick d’Jorasco',
  videoCaption: 'Fenwick d’Jorasco'
};
window.FENUMION_MEDIA.characters.Fenwick = fenwickMedia;
window.FENUMION_MEDIA.characters["Fenwick d'Jorasco"] = fenwickMedia;
window.FENUMION_MEDIA.articles.fenwick = fenwickMedia;

const silverSpireMedia = {
  image: 'assets/locations/silver-spire-poster.webp',
  video: 'assets/locations/silver-spire.mp4',
  imageAlt: 'Fenwick’s clock tower rising above Eovar’s waterfront',
  imageCaption: 'The Silver Spire',
  videoCaption: 'The Silver Spire',
  imageLayout: 'landscape-hero'
};
window.FENUMION_MEDIA.articles['fenwicks-tower'] = silverSpireMedia;
window.FENUMION_MEDIA.locations['The Silver Spire'] = silverSpireMedia;
window.FENUMION_MEDIA.locations['Fenwick’s Tower'] = silverSpireMedia;

// Portrait identities supplied by the user on 11 October 2026.
const sophinaPortrait = {
  image: 'assets/characters/sophina.png',
  imageAlt: 'Sophina in dark robes holding a sheathed sword beneath a red and white moon',
  imageCaption: 'Ambassador Sophina'
};
window.FENUMION_MEDIA.characters['Ambassador Sophina'] = sophinaPortrait;
window.FENUMION_MEDIA.articles.sophina = sophinaPortrait;
window.FENUMION_MEDIA.characters['Farmer Frank'] = {
  image: 'assets/characters/farmer-frank.png',
  imageAlt: 'Farmer Frank carrying an axe over his shoulder beside fields',
  imageCaption: 'Farmer Frank'
};
window.FENUMION_MEDIA.characters['Farmer Scarlett'] = {
  image: 'assets/characters/farmer-scarlett.png',
  imageAlt: 'Farmer Scarlett wearing a straw hat and blue overalls in a sunlit field',
  imageCaption: 'Farmer Scarlett'
};

// Additional portraits identified by the user on 11 October 2026.
const hildethraxPortrait = {
  image: 'assets/characters/hildethrax.webp',
  imageAlt: 'Hildethrax in a monochrome portrait wearing a dark coat and chains',
  imageCaption: 'Captain Hildethrax'
};
window.FENUMION_MEDIA.characters['Captain Hildethrax'] = hildethraxPortrait;
window.FENUMION_MEDIA.articles['captain-hildethrax'] = hildethraxPortrait;
window.FENUMION_MEDIA.characters['Erebus Duskforge'] = {
  image: 'assets/characters/erebus-duskforge.jpeg',
  imageAlt: 'Erebus with a dark beard and braided hair, surrounded by glowing magic',
  imageCaption: 'Erebus Duskforge'
};
window.FENUMION_MEDIA.characters['Eldin Stormheart'] = {
  image: 'assets/characters/eldin-stormheart.png',
  imageAlt: 'Eldin with long blond hair, a beard and a dark fur-lined cloak',
  imageCaption: 'Eldin Stormheart'
};

// User-supplied Aerrow, Alessio, Alioth and Animak portraits, 11 October 2026.
const aerrowPortrait = {
  image: 'assets/characters/aerrow.webp',
  imageAlt: 'Aerrow with long pale hair, a dark cloak and a large sword',
  imageCaption: 'Aerrow'
};
window.FENUMION_MEDIA.characters.Aerrow = aerrowPortrait;
window.FENUMION_MEDIA.articles.aerrow = aerrowPortrait;
window.FENUMION_MEDIA.characters.Alessio = {
  image: 'assets/characters/alessio.png',
  imageAlt: 'Alessio with pink hair, green eyes and dark ornamental jewelry',
  imageCaption: 'Alessio'
};
window.FENUMION_MEDIA.characters.Alioth = {
  image: 'assets/characters/alioth.jpg',
  imageAlt: 'Alioth with dark hair, blue armor and blue gemstone jewelry',
  imageCaption: 'Alioth'
};
window.FENUMION_MEDIA.articles['casimir-alioth'] = {
  gallery: [{
    image: 'assets/characters/alioth.jpg',
    title: 'Alioth',
    alt: 'Alioth with dark hair, blue armor and blue gemstone jewelry',
    caption: 'Alioth'
  }]
};
const animakPortrait = {
  image: 'assets/characters/animak.jpg',
  imageAlt: 'Animak, a cloaked figure carrying a glowing lantern near a distant lighthouse',
  imageCaption: 'Animak'
};
window.FENUMION_MEDIA.characters.Animak = animakPortrait;
window.FENUMION_MEDIA.articles.animak = animakPortrait;

// User-identified Bari, Dez, Dorian Ashwood and Eli Voss portraits, 11 October 2026.
window.FENUMION_MEDIA.characters.Bari = {
  image: 'assets/characters/bari.jpeg',
  imageAlt: 'Bari with pale hair in a close-up portrait',
  imageCaption: 'Bari'
};
window.FENUMION_MEDIA.characters.Dez = {
  image: 'assets/characters/dez.jpg',
  imageAlt: 'Dez wearing a hood and crouching on a rooftop lantern at sunset',
  imageCaption: 'Dez'
};
const dorianAshwoodPortrait = {
  image: 'assets/characters/dorian-ashwood.jpeg',
  imageAlt: 'Dorian Ashwood with brown hair and a stringed instrument over his shoulder',
  imageCaption: 'Dorian Ashwood'
};
window.FENUMION_MEDIA.characters['Dorian Ashwood'] = dorianAshwoodPortrait;
window.FENUMION_MEDIA.articles['dorian-ashwood'] = dorianAshwoodPortrait;
window.FENUMION_MEDIA.characters['Elysian ‘Eli’ Voss'] = {
  image: 'assets/characters/eli-voss.jpeg',
  imageAlt: 'Eli Voss wearing a green hood and carrying a sword in a town street',
  imageCaption: 'Elysian ‘Eli’ Voss'
};

// Gudlaug, Goo, Fulmin and Empty portraits identified by the user, 11 October 2026.
window.FENUMION_MEDIA.characters.Gudlaug = {
  image: 'assets/characters/gudlaug.jpeg',
  imageAlt: 'Gudlaug in dark armor carrying a sword in a snowy landscape',
  imageCaption: 'Gudlaug'
};
const gooPortrait = {
  image: 'assets/characters/goo.jpeg',
  imageAlt: 'Goo depicted as a blue translucent figure',
  imageCaption: 'Goo'
};
window.FENUMION_MEDIA.characters.Goo = gooPortrait;
window.FENUMION_MEDIA.articles.goo = gooPortrait;
window.FENUMION_MEDIA.characters.Fulmin = {
  image: 'assets/characters/fulmin.jpeg',
  imageAlt: 'Fulmin in armor with blue lightning and a long weapon',
  imageCaption: 'Fulmin'
};
window.FENUMION_MEDIA.characters.Empty = {
  image: 'assets/characters/empty.jpg',
  imageAlt: 'Empty with spiked dark hair and black and red clothing against a dark red background',
  imageCaption: 'Empty'
};

// Hana, Jiangshi, Huoth and Icarus portraits identified by the user, 11 October 2026.
const hanaPortrait = {
  image: 'assets/characters/hana.png',
  imageAlt: 'Hana with pale hair carrying a flower basket along a woodland path',
  imageCaption: 'Hana'
};
window.FENUMION_MEDIA.characters.Hana = hanaPortrait;
window.FENUMION_MEDIA.articles.hana = hanaPortrait;
const jiangshiPortrait = {
  image: 'assets/characters/jiangshi.jpeg',
  imageAlt: 'Jiangshi in dark robes holding a decorated fan beneath pale blossoms',
  imageCaption: 'Jiangshi'
};
window.FENUMION_MEDIA.characters.Jiangshi = jiangshiPortrait;
window.FENUMION_MEDIA.articles.jiangshi = jiangshiPortrait;
const huothPortrait = {
  image: 'assets/characters/huoth.png',
  imageAlt: 'Huoth in an ornate dark hood with luminous markings beneath his eyes',
  imageCaption: 'Huoth'
};
window.FENUMION_MEDIA.characters['Huoth, Emissary of Nuru'] = huothPortrait;
window.FENUMION_MEDIA.articles.huoth = huothPortrait;
const icarusPortrait = {
  image: 'assets/characters/icarus.jpeg',
  imageAlt: 'Icarus as a robed rooster figure surrounded by chickens',
  imageCaption: 'Icarus'
};
window.FENUMION_MEDIA.characters.Icarus = icarusPortrait;
window.FENUMION_MEDIA.articles.icarus = icarusPortrait;

// Kaiya, Karnak, Kasiri and Kazhinju portraits identified by the user, 11 October 2026.
const kaiyaPortrait = {
  image: 'assets/characters/kaiya.png',
  imageAlt: 'Kaiya with pale hair wearing dark armor and a pointed mask with blue glowing eyes',
  imageCaption: 'Kaiya Dragonsister'
};
window.FENUMION_MEDIA.characters['Kaiya Dragonsister'] = kaiyaPortrait;
window.FENUMION_MEDIA.articles['kaiya-dragonsister'] = kaiyaPortrait;
window.FENUMION_MEDIA.characters.Karnak = {
  image: 'assets/characters/karnak.jpg',
  imageAlt: 'Karnak surrounded by golden light, carrying a large golden weapon',
  imageCaption: 'Karnak'
};
window.FENUMION_MEDIA.characters['Kasiri Ruza'] = {
  image: 'assets/characters/kasiri-ruza.png',
  imageAlt: 'Kasiri with silver hair, freckles and layered armor',
  imageCaption: 'Kasiri Ruza'
};
const kazhinjuPortrait = {
  image: 'assets/characters/kazhinju.jpg',
  imageAlt: 'Kazhinju with long gray hair, a tooth-adorned headband and a carved wooden staff',
  imageCaption: 'Kazhinju'
};
window.FENUMION_MEDIA.characters.Kazhinju = kazhinjuPortrait;
window.FENUMION_MEDIA.articles.kazhinju = kazhinjuPortrait;

// Portraits identified by the user; optimized for directory and article display.
window.FENUMION_MEDIA.characters["Kvethe"] = {"image": "assets/characters/kvethe.jpg", "imageAlt": "Kvethe in a forest, with dark hair and feathered adornments", "imageCaption": "Kvethe", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.articles["kvethe"] = {"image": "assets/characters/kvethe.jpg", "imageAlt": "Kvethe in a forest, with dark hair and feathered adornments", "imageCaption": "Kvethe", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Kyrin the Lost"] = {"image": "assets/characters/kyrin.jpg", "imageAlt": "Kyrin with blue skin, horns and a gold forehead ornament", "imageCaption": "Kyrin the Lost", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.articles["kyrin-the-lost"] = {"image": "assets/characters/kyrin.jpg", "imageAlt": "Kyrin with blue skin, horns and a gold forehead ornament", "imageCaption": "Kyrin the Lost", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Krasteline"] = {"image": "assets/characters/krasteline.jpeg", "imageAlt": "Krasteline with blue skin, orange hair and illuminated goggles", "imageCaption": "Krasteline", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.articles["krasteline"] = {"image": "assets/characters/krasteline.jpeg", "imageAlt": "Krasteline with blue skin, orange hair and illuminated goggles", "imageCaption": "Krasteline", "imageLayout": "portrait-hero"};

window.FENUMION_MEDIA.articles.karnak = {...window.FENUMION_MEDIA.characters.Karnak, imageLayout:'portrait-hero'};
window.FENUMION_MEDIA.articles['kasiri-ruza'] = {...window.FENUMION_MEDIA.characters['Kasiri Ruza'], imageLayout:'portrait-hero'};

// Leo, Lichen, Loistava and Lucido portraits identified by the user.
window.FENUMION_MEDIA.characters["Leo"] = {"image": "assets/characters/leo.jpg", "imageAlt": "Leo with silver hair and blue eyes, reading an open book amid blue lightning", "imageCaption": "Leo"};
window.FENUMION_MEDIA.characters["Lichen"] = {"image": "assets/characters/lichen.jpg", "imageAlt": "Lichen with leaf-like hair, a pink flower and bright green butterflies", "imageCaption": "Lichen"};
window.FENUMION_MEDIA.characters["Loistava"] = {"image": "assets/characters/loistava.jpg", "imageAlt": "Loistava with white hair, pointed ears and pale blue armor", "imageCaption": "Loistava"};
window.FENUMION_MEDIA.characters["Lucido Spettoro"] = {"image": "assets/characters/lucido-spettoro.jpeg", "imageAlt": "Lucido Spettoro in a monochrome portrait with dark hair, a beard and a fur-lined collar", "imageCaption": "Lucido Spettoro", "aliases": ["Lucido"]};

// Mama Tabitha, Marius, Minyah and Murr portraits identified by the user.
window.FENUMION_MEDIA.characters["Mama Tabitha"] = {"image": "assets/characters/mama-tabitha.jpg", "imageAlt": "Mama Tabitha pouring liquid into a bottle with a small companion beside her", "imageCaption": "Mama Tabitha"};
window.FENUMION_MEDIA.articles["mama-tabitha"] = {"image": "assets/characters/mama-tabitha.jpg", "imageAlt": "Mama Tabitha pouring liquid into a bottle with a small companion beside her", "imageCaption": "Mama Tabitha", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Marius Antares"] = {"image": "assets/characters/marius-antares.jpeg", "imageAlt": "Marius Antares with brown hair, green eyes and a dark coat", "imageCaption": "Marius Antares", "aliases": ["Marius"]};
window.FENUMION_MEDIA.characters["Minyah Dragonsister"] = {"image": "assets/characters/minyah-dragonsister.jpg", "imageAlt": "Minyah with long pale hair, horn-like adornments and dark armor, carrying a sword", "imageCaption": "Minyah Dragonsister"};
window.FENUMION_MEDIA.articles["minyah-dragonsister"] = {"image": "assets/characters/minyah-dragonsister.jpg", "imageAlt": "Minyah with long pale hair, horn-like adornments and dark armor, carrying a sword", "imageCaption": "Minyah Dragonsister", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Murr the Old Wolf"] = {"image": "assets/characters/murr.jpg", "imageAlt": "Murr, a pale wolf walking along a forest path", "imageCaption": "Murr the Old Wolf"};
window.FENUMION_MEDIA.articles["murr"] = {"image": "assets/characters/murr.jpg", "imageAlt": "Murr, a pale wolf walking along a forest path", "imageCaption": "Murr the Old Wolf", "imageLayout": "portrait-hero"};

// Moira, Neemah and Nerias portraits identified by the user.
window.FENUMION_MEDIA.characters["Moira Eshdin"] = {"image": "assets/characters/moira-eshdin.jpg", "imageAlt": "Moira Eshdin with short dark hair and an eyepatch, seated at a table", "imageCaption": "Moira Eshdin", "aliases": ["Moira"]};
window.FENUMION_MEDIA.characters["Neemah"] = {"image": "assets/characters/neemah.jpg", "imageAlt": "Neemah with textured dark skin and a bright blue forehead marking in the rain", "imageCaption": "Neemah"};
window.FENUMION_MEDIA.articles["neemah"] = {"image": "assets/characters/neemah.jpg", "imageAlt": "Neemah with textured dark skin and a bright blue forehead marking in the rain", "imageCaption": "Neemah", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Nerias"] = {"image": "assets/characters/nerias.png", "imageAlt": "Nerias as a horned warrior carrying an ornate shield and sword", "imageCaption": "Nerias"};

// Navi portrait identified by the user.
window.FENUMION_MEDIA.characters.Navi = {
  image: 'assets/characters/navi.jpg',
  imageAlt: 'Navi with green eyes, black and green hair, and a pointed ear',
  imageCaption: 'Navi'
};

// Paco, Oleander, Omari and Oya portraits identified by the user.
window.FENUMION_MEDIA.characters["Oleander"] = {"image": "assets/characters/oleander.jpg", "imageAlt": "Oleander holding a staff amid golden paper birds", "imageCaption": "Oleander", "aliases": ["Olieander"]};
window.FENUMION_MEDIA.characters["Omari"] = {"image": "assets/characters/omari.jpg", "imageAlt": "Omari with short dark hair, facial scars and a green cloak", "imageCaption": "Omari"};
window.FENUMION_MEDIA.articles.omari = {"image": "assets/characters/omari.jpg", "imageAlt": "Omari with short dark hair, facial scars and a green cloak", "imageCaption": "Omari", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Oya"] = {"image": "assets/characters/oya.jpg", "imageAlt": "Oya with blue skin and hair, a pale pointed hat and a blue staff", "imageCaption": "Oya"};
window.FENUMION_MEDIA.characters["Paco"] = {"image": "assets/characters/paco.jpg", "imageAlt": "Paco with purple coloring, long pointed ears and yellow eyes", "imageCaption": "Paco"};

// Papirak and Paw portraits identified by the user.
window.FENUMION_MEDIA.characters["Papirak the Strange"] = {"image": "assets/characters/papirak.jpg", "imageAlt": "Papirak with long pale hair and a beard, holding a glowing blue orb", "imageCaption": "Papirak the Strange"};
window.FENUMION_MEDIA.articles.papirak = {"image": "assets/characters/papirak.jpg", "imageAlt": "Papirak with long pale hair and a beard, holding a glowing blue orb", "imageCaption": "Papirak the Strange", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Paw"] = {"image": "assets/characters/paw.jpg", "imageAlt": "Paw as a dark bear with glowing red eyes in a forest", "imageCaption": "Paw"};

// Quille and Poe portraits identified by the user.
window.FENUMION_MEDIA.characters["Quille"] = {"image": "assets/characters/quille.jpg", "imageAlt": "Quille with braided dark hair, pointed ears, beads and a pale shawl", "imageCaption": "Quille"};
window.FENUMION_MEDIA.articles.quille = {"image": "assets/characters/quille.jpg", "imageAlt": "Quille with braided dark hair, pointed ears, beads and a pale shawl", "imageCaption": "Quille", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Poe"] = {"image": "assets/characters/poe.jpg", "imageAlt": "Poe with dark hair and round glasses, writing with a luminous feather quill", "imageCaption": "Poe"};

// Rahn, Rhea, Rolen and Rory portraits identified by the user.
window.FENUMION_MEDIA.characters["Rahn"] = {"image": "assets/characters/rahn.jpg", "imageAlt": "Rahn as a brown vulture perched on a rock", "imageCaption": "Rahn"};
window.FENUMION_MEDIA.characters["Rhea"] = {"image": "assets/characters/rhea.jpg", "imageAlt": "Rhea with short brown hair, carrying a bow, arrows and a pack", "imageCaption": "Rhea"};
window.FENUMION_MEDIA.articles["rhea-babel"] = {"image": "assets/characters/rhea.jpg", "imageAlt": "Rhea with short brown hair, carrying a bow, arrows and a pack", "imageCaption": "Rhea", "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Rolen Ofandrus"] = {"image": "assets/characters/rolen.png", "imageAlt": "Rolen with pointed ears and armor, carrying swords", "imageCaption": "Rolen Ofandrus", "aliases": ["Rolen"]};
window.FENUMION_MEDIA.articles["rolen"] = {"image": "assets/characters/rolen.png", "imageAlt": "Rolen with pointed ears and armor, carrying swords", "imageCaption": "Rolen Ofandrus", "aliases": ["Rolen"], "imageLayout": "portrait-hero"};
window.FENUMION_MEDIA.characters["Rory"] = {"image": "assets/characters/rory.jpg", "imageAlt": "Rory with purple hair, dark lipstick and silver jewelry", "imageCaption": "Rory", "aliases": ["Rorry"]};

// Additional named character depictions, reviewed 11 October 2026.
Object.assign(window.FENUMION_MEDIA.characters, {
  "Quoth": {
    "image": "assets/characters/discord/d377c62851938fa129dde500420206c9f5d1f05efeb63d819a23dd0b7c744b48.png",
    "imageAlt": "Discord depiction of Quoth",
    "imageCaption": "Quoth"
  },
  "Vaemyr": {
    "image": "assets/archive/vaemyr-portrait.webp"
  },
  "Saylor": {
    "image": "assets/characters/discord/119481f8074b0a4529909ddb7b64179bc248b90099eaade8b0f59cfbfe972a94.png",
    "imageAlt": "Discord depiction of Saylor",
    "imageCaption": "Saylor"
  },
  "Trougar": {
    "image": "assets/characters/discord/314f65fca19cdd65971d96d10272feaa7de4989266ad58b40fb05a95b0b7f9d9.png",
    "imageAlt": "Discord depiction of Trougar",
    "imageCaption": "Trougar"
  },
  "Willow": {
    "image": "assets/characters/discord/71c50c4784ea1d6ecff0d45523f8951653aa28a1ff49e30827fad8d7caa3cfdb.png",
    "imageAlt": "Discord depiction of Willow",
    "imageCaption": "Willow"
  },
  "Vigr Frami": {
    "image": "assets/characters/discord/35e6d03576ef4ac6b328bddd4019abd88c07669ece9d380d8196986343ecf3c2.png",
    "imageAlt": "Discord depiction of Vigr Frami",
    "imageCaption": "Vigr Frami"
  },
  "Tricks": {
    "image": "assets/characters/discord/adab087aafcd1a22c251d6e94bea68888e4eed4dc7dea81bd57c1e04351c56a8.png",
    "imageAlt": "Discord depiction of Tricks",
    "imageCaption": "Tricks"
  },
  "Dorian": {
    "image": "assets/characters/dorian-ashwood.jpeg",
    "imageAlt": "Dorian Ashwood with brown hair and a stringed instrument over his shoulder",
    "imageCaption": "Dorian Ashwood"
  },
  "Spicy": {
    "image": "assets/characters/discord/87e21ddf3d386b926321be984337809d0cbefebc8e6b9202bbfc8af542d33f39.png",
    "imageAlt": "Discord depiction of Spicy",
    "imageCaption": "Spicy"
  },
  "Yllandaer": {
    "image": "assets/characters/discord/7278cb82789fb670e74e7db33a99f605224053dc7638cce4bb6b260398351838.png",
    "imageAlt": "Discord depiction of Yllandaer",
    "imageCaption": "Yllandaer"
  },
  "Stormy": {
    "image": "assets/characters/discord/7571e0a39bf4b7ad7cf2a9fd4d01b27bbd7ac6f0cbf827b4da330f369d06dfdb.png",
    "imageAlt": "Discord depiction of Stormy",
    "imageCaption": "Stormy"
  },
  "Selwyn": {
    "image": "assets/characters/discord/b91beef3862cfec2be43480e91dc1be94b4b21364abe796d4042d6dbfb71b677.png",
    "imageAlt": "Discord depiction of Selwyn",
    "imageCaption": "Selwyn"
  },
  "Swift Foot": {
    "image": "assets/characters/discord/d94534a13626f0754847ecc22a8ad0ec354b3174cd2f0ef1f55033e3100d7f7c.png",
    "imageAlt": "Discord depiction of Swift Foot",
    "imageCaption": "Swift Foot"
  },
  "Starojoss Destranoth": {
    "image": "assets/characters/discord/19e59104772c5b8855a7e560e7a2b08a36efa11c53004890930edc30f80af4e5.png",
    "imageAlt": "Discord depiction of Starojoss Destranoth",
    "imageCaption": "Starojoss Destranoth"
  },
  "Serra": {
    "image": "assets/characters/discord/92a87df1b1617501b18dc9bc3af2dab2f7d2952b76bfcc2e59b5665500431380.png",
    "imageAlt": "Discord depiction of Serra",
    "imageCaption": "Serra"
  },
  "Skye": {
    "image": "assets/characters/discord/83d9e4f8e992b3a9a369352ba19d75bdfbcdb989a83c9ca4506793f65745d5ed.png",
    "imageAlt": "Discord depiction of Skye",
    "imageCaption": "Skye"
  },
  "Tutora Rhex": {
    "image": "assets/characters/discord/3a28578b45c28dd240052f755b381f642b8f5b3c3dc2de5aa2e2cb586c9043e9.png",
    "imageAlt": "Discord depiction of Tutora Rhex",
    "imageCaption": "Tutora Rhex"
  },
  "Scout Lilian": {
    "image": "assets/characters/discord/98a033dd2d938daea05bbd074dc661128fd78df3467b82718afcc769fad983f8.png",
    "imageAlt": "Discord depiction of Scout Lilian",
    "imageCaption": "Scout Lilian"
  },
  "Strange Talon": {
    "image": "assets/characters/discord/ccc664a49d9b26187178d1dac7436d6fb9035f856a95e2b043a502419984e3d4.png",
    "imageAlt": "Discord depiction of Strange Talon",
    "imageCaption": "Strange Talon"
  },
  "Yami no Majo": {
    "image": "assets/characters/discord/161dd5ea25a6dfa4e8cb644f3b52c707626d0e0784a1175a5e78463d5283100d.png",
    "imageAlt": "Discord depiction of Yami no Majo",
    "imageCaption": "Yami no Majo"
  },
  "Sheeva Dragonsister": {
    "image": "assets/characters/discord/ae480417840e41b12e443a606da2672cf3072560ec1f045adb23b5ac77fab23a.png",
    "imageAlt": "Discord depiction of Sheeva Dragonsister",
    "imageCaption": "Sheeva Dragonsister"
  },
  "Tarwen of the Silver Star": {
    "image": "assets/characters/discord/80fde22afa2248289525c20b98aa36463cab3c7b532c062b6c07acf1480fab38.png",
    "imageAlt": "Discord depiction of Tarwen of the Silver Star",
    "imageCaption": "Tarwen of the Silver Star"
  },
  "Ada": {
    "image": "assets/characters/discord/6c07c94f146f65893e2b072ac65bd13d02ff660d31f0c6657e002fe7ab5142ac.png",
    "imageAlt": "Discord depiction of Ada",
    "imageCaption": "Ada",
    "imageLayout": "portrait-hero"
  }
});
Object.assign(window.FENUMION_MEDIA.articles, {
  "swift-foot": {
    "image": "assets/characters/discord/d94534a13626f0754847ecc22a8ad0ec354b3174cd2f0ef1f55033e3100d7f7c.png",
    "imageAlt": "Discord depiction of Swift Foot",
    "imageCaption": "Swift Foot",
    "imageLayout": "portrait-hero"
  },
  "starojoss-destranoth": {
    "image": "assets/characters/discord/19e59104772c5b8855a7e560e7a2b08a36efa11c53004890930edc30f80af4e5.png",
    "imageAlt": "Discord depiction of Starojoss Destranoth",
    "imageCaption": "Starojoss Destranoth",
    "imageLayout": "portrait-hero"
  },
  "scout-lilian": {
    "image": "assets/characters/discord/98a033dd2d938daea05bbd074dc661128fd78df3467b82718afcc769fad983f8.png",
    "imageAlt": "Discord depiction of Scout Lilian",
    "imageCaption": "Scout Lilian",
    "imageLayout": "portrait-hero"
  },
  "strange-talon": {
    "image": "assets/characters/discord/ccc664a49d9b26187178d1dac7436d6fb9035f856a95e2b043a502419984e3d4.png",
    "imageAlt": "Discord depiction of Strange Talon",
    "imageCaption": "Strange Talon",
    "imageLayout": "portrait-hero"
  },
  "yami-no-majo": {
    "image": "assets/characters/discord/161dd5ea25a6dfa4e8cb644f3b52c707626d0e0784a1175a5e78463d5283100d.png",
    "imageAlt": "Discord depiction of Yami no Majo",
    "imageCaption": "Yami no Majo",
    "imageLayout": "portrait-hero"
  },
  "sheeva-dragonsister": {
    "image": "assets/characters/discord/ae480417840e41b12e443a606da2672cf3072560ec1f045adb23b5ac77fab23a.png",
    "imageAlt": "Discord depiction of Sheeva Dragonsister",
    "imageCaption": "Sheeva Dragonsister",
    "imageLayout": "portrait-hero"
  },
  "tarwen-silver-star": {
    "image": "assets/characters/discord/80fde22afa2248289525c20b98aa36463cab3c7b532c062b6c07acf1480fab38.png",
    "imageAlt": "Discord depiction of Tarwen of the Silver Star",
    "imageCaption": "Tarwen of the Silver Star",
    "imageLayout": "portrait-hero"
  },
  "ada-town-chronicler": {
    "image": "assets/characters/discord/6c07c94f146f65893e2b072ac65bd13d02ff660d31f0c6657e002fe7ab5142ac.png",
    "imageAlt": "Discord depiction of Ada",
    "imageCaption": "Ada",
    "imageLayout": "portrait-hero"
  }
});

// User-identified Talan video: still-frame portrait and a single animated backdrop.
window.FENUMION_MEDIA.characters.Talan = {image:'assets/character-backgrounds/talan-order.jpg',imageAlt:'Talan in ornate gold armor, holding a sword and shield in a mountain setting',imageCaption:'Talan'};
window.FENUMION_MEDIA.articles.talan = {...window.FENUMION_MEDIA.characters.Talan,imageLayout:'portrait-hero'};

// User identifies this shared visual scene as Talan versus Aria.
for (const id of ['talan', 'aria-pride']) {
  window.FENUMION_MEDIA.articles[id] = {...window.FENUMION_MEDIA.articles[id], scenes: [{
    title: 'Talan vs Aria',
    video: 'assets/character-scenes/talan-vs-aria.mp4',
    poster: 'assets/character-scenes/talan-vs-aria.jpg',
    caption: 'Talan and Aria face one another with crossed swords. A visual depiction of their rivalry.'
  }]};
}

// User-identified Zarathian fleet at the Shining Shores.
for (const id of ['shining-shores', 'zarathis']) {
  const media = window.FENUMION_MEDIA.articles[id] || {};
  window.FENUMION_MEDIA.articles[id] = {...media, scenes: [...(media.scenes || []), {
    title: 'The Zarathian fleet at the Shining Shores',
    video: 'assets/location-scenes/zarathian-fleet.mp4',
    poster: 'assets/location-scenes/zarathian-fleet.jpg',
    caption: 'White-and-gold sails cross clear blue water. The Zarathian fleet at the Shining Shores, as identified in the supplied visual record.'
  }]};
}

// User identifies the supplied moving portrait as Tarwen.
window.FENUMION_MEDIA.articles['tarwen-silver-star'].scenes = [{
  title: 'Tarwen of the Silver Star · Moving portrait',
  video: 'assets/character-scenes/tarwen.mp4',
  poster: 'assets/character-scenes/tarwen.jpg',
  caption: 'Tarwen in dark armor, with a wolf pelt and a sword on his back. Supplied moving portrait.'
}];

// User identifies the supplied moving portrait as Aerrow.
window.FENUMION_MEDIA.articles.aerrow.scenes = [{
  title: 'Aerrow · Moving portrait',
  video: 'assets/character-scenes/aerrow.mp4',
  poster: 'assets/character-scenes/aerrow.jpg',
  caption: 'Aerrow with pale hair and glowing violet eyes, framed by flames and sparks. Supplied moving portrait.'
}];

// BEGIN REVIEWED NPC PORTRAITS 2026-10-11
// Character-proxy depictions reviewed against named NPC identities; existing portraits retained.
Object.assign(window.FENUMION_MEDIA.characters, {
  "Hawthorne": {
    "image": "assets/characters/discord/8a9d5acaf10cfb942df65c1cd03f206c9a5f4b8d88ab7eb0df0f0b1f86f0668f.png",
    "imageAlt": "Discord depiction of Hawthorne",
    "imageCaption": "Hawthorne"
  },
  "Vizsla, the Florist": {
    "image": "assets/characters/discord/c3e593b5d76c001371df4185b23927ca5640c8cd15d7253a071e898b812c2da2.png",
    "imageAlt": "Discord depiction of Vizsla, the Florist",
    "imageCaption": "Vizsla, the Florist"
  },
  "Stella & Sola": {
    "image": "assets/characters/discord/cdb194a65cf481c8adf0c5c9800af950f65bffea14a0e99b52c683463aadd0e6.png",
    "imageAlt": "Discord depiction of Stella & Sola",
    "imageCaption": "Stella & Sola"
  },
  "Vance the Guard": {
    "image": "assets/characters/discord/c96c3f9df55e8817a265fe4c0fc36972cf422118a1dd189783fdd63dd2ca73df.png",
    "imageAlt": "Discord depiction of Vance the Guard",
    "imageCaption": "Vance the Guard"
  },
  "Hiram": {
    "image": "assets/characters/discord/4f55ca22d3008c15cb164987861de886a92591766a66b6a5a71f9eab332625ed.png",
    "imageAlt": "Discord depiction of Hiram",
    "imageCaption": "Hiram"
  },
  "Kaja": {
    "image": "assets/characters/discord/0f03072fe499fa000f155f0336dd9263c67340860af93f1d82ed6830049816ed.png",
    "imageAlt": "Discord depiction of Kaja",
    "imageCaption": "Kaja"
  },
  "Magda": {
    "image": "assets/characters/discord/d07863009f1ac62642585df6225acb51045ec2aaaa57662ca75b19d179625aba.png",
    "imageAlt": "Discord depiction of Magda",
    "imageCaption": "Magda"
  },
  "Orrik the Wheelwright": {
    "image": "assets/characters/discord/3f2b64d6962755bcc937a8163eae50eb4da9ba78e6e854ae92cf6fe5ff2bf387.png",
    "imageAlt": "Discord depiction of Orrik the Wheelwright",
    "imageCaption": "Orrik the Wheelwright"
  },
  "Simon": {
    "image": "assets/characters/discord/e913fd9aeef057ab83a634f8c9ca1bf46e07e0f0c0c97893b2cfa0ab03c5ad24.png",
    "imageAlt": "Discord depiction of Simon",
    "imageCaption": "Simon"
  },
  "Caravash": {
    "image": "assets/characters/discord/d06b7c850cd809b60e969d72426eaf0971e1245b37eaf4b7d5a42e004b6312c4.png",
    "imageAlt": "Discord depiction of Caravash",
    "imageCaption": "Caravash"
  },
  "Elaria": {
    "image": "assets/characters/discord/5f587c27384d4a9ec1e29295acf6ea9e48c71c9bc4f8c5f92234344886069c00.png",
    "imageAlt": "Discord depiction of Elaria",
    "imageCaption": "Elaria"
  },
  "Dranielle": {
    "image": "assets/characters/discord/e07bec3bb911ed2845602a31aaf2bcb8a684320954ce099c5e059ad3de550be5.png",
    "imageAlt": "Discord depiction of Dranielle",
    "imageCaption": "Dranielle"
  },
  "Derek": {
    "image": "assets/characters/discord/5f6c26361e61ffe9cff56ff8e30633c97e96bfa9b6b26ef56f6848c6bb8868c8.png",
    "imageAlt": "Discord depiction of Derek",
    "imageCaption": "Derek"
  },
  "Liora Fenwick": {
    "image": "assets/characters/discord/03a51b4e5b1a479533ad84453b38781edfafd6de5e59b7cf0961ee065b5f94f9.png",
    "imageAlt": "Discord depiction of Liora Fenwick",
    "imageCaption": "Liora Fenwick"
  },
  "Elaris": {
    "image": "assets/characters/discord/aeaafc42d90d2c39a5864efe0c042772832d1ff890dcc3a22320583404689eee.png",
    "imageAlt": "Discord depiction of Elaris",
    "imageCaption": "Elaris"
  },
  "Renji": {
    "image": "assets/characters/discord/88ff990a02877ecbde47230b35054642ea1c96a1747641cd0deea2f2a7ffda21.png",
    "imageAlt": "Discord depiction of Renji",
    "imageCaption": "Renji"
  },
  "Finnian": {
    "image": "assets/characters/discord/f29986b81dc2796a5269f240ff6b2ca150f1492404e9f9c217ae0f8c4f73a540.png",
    "imageAlt": "Discord depiction of Finnian",
    "imageCaption": "Finnian"
  },
  "Mr. Everafter": {
    "image": "assets/characters/discord/0d918fb336151c45b2cd309f8553c37551b0a73d525d77c176f47901f12ee937.png",
    "imageAlt": "Discord depiction of Mr. Everafter",
    "imageCaption": "Mr. Everafter"
  },
  "Hillda Hexinbottom": {
    "image": "assets/characters/discord/3a5a6bfdcee228e2ef95442d0a341132f8dfb2f667fe59cfbdf460061b0d995c.png",
    "imageAlt": "Discord depiction of Hillda Hexinbottom",
    "imageCaption": "Hillda Hexinbottom"
  },
  "Selima": {
    "image": "assets/characters/discord/563e848a1edce8814c3740f4e00933ed7d74c28883e36a7f2d45f3d52e8384de.png",
    "imageAlt": "Discord depiction of Selima",
    "imageCaption": "Selima"
  },
  "Eleth Granger": {
    "image": "assets/characters/discord/8a31bb6cc0a66c4357468b8a90eadb2b2637f673bdc41bdddbb7ffc3b5ffa0d1.png",
    "imageAlt": "Discord depiction of Eleth Granger",
    "imageCaption": "Eleth Granger"
  },
  "Sawyer": {
    "image": "assets/characters/discord/6bc110ee14dcbd21eac912eed8fdd3f76cd07a486ddd7bd78fb0ee7ba20d70b6.png",
    "imageAlt": "Discord depiction of Sawyer",
    "imageCaption": "Sawyer"
  },
  "Thalorian Silversong": {
    "image": "assets/characters/discord/8927ab75e081247d169edd3377726fa9dfdc6b0c6463fb53d95592b7fd8e53c1.png",
    "imageAlt": "Discord depiction of Thalorian Silversong",
    "imageCaption": "Thalorian Silversong"
  },
  "Eldrick ‘Wobblewand’ the Mad": {
    "image": "assets/characters/discord/f4a4e82666efdfe6529f84aa5270964ec9c0d8052d4b6cc1c79b782c5a6f33b0.png",
    "imageAlt": "Discord depiction of Eldrick ‘Wobblewand’ the Mad",
    "imageCaption": "Eldrick ‘Wobblewand’ the Mad"
  },
  "Tariq": {
    "image": "assets/characters/discord/c557ec26e39a23cd1c81ed2f9182fa20dcfb638eabb8ece5894f276cb24232dd.png",
    "imageAlt": "Discord depiction of Tariq",
    "imageCaption": "Tariq"
  },
  "Arjan van der Staüg": {
    "image": "assets/characters/discord/7609f08717c7c8a137a9cb8c2cd92fbb889f5acf67dd17837981fd45b5d5383f.png",
    "imageAlt": "Discord depiction of Arjan van der Staüg",
    "imageCaption": "Arjan van der Staüg"
  },
  "Shakadese": {
    "image": "assets/characters/discord/fa3df990608280c7d852777a5182f32664de70ac4ce295bc4c6407e5fb36b230.png",
    "imageAlt": "Discord depiction of Shakadese",
    "imageCaption": "Shakadese"
  },
  "Timale": {
    "image": "assets/characters/discord/0ffce6b11a6c163826aecfe6b28532f25b56913bfd4fe2ae7039ed3c496a25e4.png",
    "imageAlt": "Discord depiction of Timale",
    "imageCaption": "Timale"
  },
  "Aiko": {
    "image": "assets/characters/discord/2ce5ea042ba32a650fe4197fd019f9081cba9bb035c3c8ea52545d46a7ba4e7b.png",
    "imageAlt": "Discord depiction of Aiko",
    "imageCaption": "Aiko"
  },
  "Esther": {
    "image": "assets/characters/discord/c9c91513da7d274044fc3cf390535b01652ba3695cce49d9220a11a2630434f4.png",
    "imageAlt": "Discord depiction of Esther",
    "imageCaption": "Esther"
  },
  "Alba": {
    "image": "assets/characters/discord/9e0107b8e74652c012ba01c0475d7e4da19a7d2bdb40de0664bc92af080d5654.png",
    "imageAlt": "Discord depiction of Alba",
    "imageCaption": "Alba"
  },
  "Henri": {
    "image": "assets/characters/discord/1d3fe9c581352b0225deaf7e09bfe6114bb56375f96873980141bbe715f879c0.png",
    "imageAlt": "Discord depiction of Henri",
    "imageCaption": "Henri"
  },
  "Jules": {
    "image": "assets/characters/discord/5710e5379235c9183d6182c88099232265256d04f15522083325e2a8b627861d.png",
    "imageAlt": "Discord depiction of Jules",
    "imageCaption": "Jules"
  },
  "Miralyn": {
    "image": "assets/characters/discord/d6b796c61ddfbc63fc8595fc05218ed3240fed7a1f072a726ae2b14a8cf1e4d5.png",
    "imageAlt": "Discord depiction of Miralyn",
    "imageCaption": "Miralyn"
  },
  "Targas Tarmile": {
    "image": "assets/characters/discord/4f1f52193ef34242236624a803af432e410b965f7720b51c9d841bdcbf59ea37.png",
    "imageAlt": "Discord depiction of Targas Tarmile",
    "imageCaption": "Targas Tarmile"
  },
  "Yen": {
    "image": "assets/characters/discord/b3d659d87589d214591bb48c0f7a45a95afb4de42885e439b3fc6fba687a4e7e.png",
    "imageAlt": "Discord depiction of Yen",
    "imageCaption": "Yen"
  },
  "Garven": {
    "image": "assets/characters/discord/80ebc9c75094e2d83718d744a10419098acf6e060b35930f5b82e851a1a82aaf.png",
    "imageAlt": "Discord depiction of Garven",
    "imageCaption": "Garven"
  },
  "Rudy": {
    "image": "assets/characters/discord/df806419f591cb3f7d996759490636fea82f0cdc12b8e1f46b9d2d39eb69ea6e.png",
    "imageAlt": "Discord depiction of Rudy",
    "imageCaption": "Rudy"
  },
  "Grandma Wilfreda": {
    "image": "assets/characters/discord/12009fc199328b195391cf70532396d59a6ba95fe6a2f24942b6b36b5899416d.png",
    "imageAlt": "Discord depiction of Grandma Wilfreda",
    "imageCaption": "Grandma Wilfreda"
  },
  "George Michael Thor": {
    "image": "assets/characters/discord/0137cc2e53ed20ad0f9b6bc9bbf189a3229f5621554f5e996623d072fe7e18cb.png",
    "imageAlt": "Discord depiction of George Michael Thor",
    "imageCaption": "George Michael Thor"
  },
  "Landon": {
    "image": "assets/characters/discord/0b9ee5e267dd1deb1035b66a5e6aad7051d3eb53500655b1bff450793a1b71f2.png",
    "imageAlt": "Discord depiction of Landon",
    "imageCaption": "Landon"
  },
  "Lyla Thistlebottom": {
    "image": "assets/characters/discord/01b2b2a1e38e2e250791a370e3343094bfc468e4a098f2294e1d9e98beb1bcf4.png",
    "imageAlt": "Discord depiction of Lyla Thistlebottom",
    "imageCaption": "Lyla Thistlebottom"
  },
  "Nuleah": {
    "image": "assets/characters/discord/1acaeb2d46d330edd920957209d6f32733f376d2c9a9fe9265835348fcdaf092.png",
    "imageAlt": "Discord depiction of Nuleah",
    "imageCaption": "Nuleah"
  },
  "Sheep-cote Claude": {
    "image": "assets/characters/discord/f6129aeee24c31904145f3ee44a4c32286b7fa4b503a6250d618382af4c31d23.png",
    "imageAlt": "Discord depiction of Sheep-cote Claude",
    "imageCaption": "Sheep-cote Claude"
  },
  "Swiper": {
    "image": "assets/characters/discord/9e7c3bb6880ab497485a24306b44322893a9741f469845ad6b8ebc055e496736.png",
    "imageAlt": "Discord depiction of Swiper",
    "imageCaption": "Swiper"
  },
  "Bob": {
    "image": "assets/characters/discord/9412e436a9bf27e289e6a01e20503610e9af71e7b1c942fd2e6a6bbf3fe5124b.png",
    "imageAlt": "Discord depiction of Bob",
    "imageCaption": "Bob"
  },
  "Katherine Hearthford": {
    "image": "assets/characters/discord/0c1cca6d539eb6a419339662098fe442a74e773ad30d424955c17068668faa81.png",
    "imageAlt": "Discord depiction of Katherine Hearthford",
    "imageCaption": "Katherine Hearthford"
  },
  "Maartje Twellaar": {
    "image": "assets/characters/discord/1899061331365c5504c9806749aa14cb24fca8184154dc1ad13f77c87dc9d96d.png",
    "imageAlt": "Discord depiction of Maartje Twellaar",
    "imageCaption": "Maartje Twellaar"
  },
  "Cera, Acolyte in Training": {
    "image": "assets/characters/discord/4faa51848f13be782b67dd81332e18ad9b08cf0e89ca00b2ff57024935419d31.png",
    "imageAlt": "Discord depiction of Cera, Acolyte in Training",
    "imageCaption": "Cera, Acolyte in Training"
  },
  "Ziegler": {
    "image": "assets/characters/discord/97f4cc6139113e92e4d864796c30a219bd43d2aa517dd581a72d6ab6da4ad1e4.png",
    "imageAlt": "Discord depiction of Ziegler",
    "imageCaption": "Ziegler"
  },
  "Chief Guardian Horgrith": {
    "image": "assets/characters/discord/1de1bce73a6eb41e4948820a9f40a57de0343e29d471174c7c889eaac133b0a6.png",
    "imageAlt": "Discord depiction of Chief Guardian Horgrith",
    "imageCaption": "Chief Guardian Horgrith"
  },
  "Malcolm": {
    "image": "assets/characters/discord/4641e004650d956365584045fe749653b0af66e80630ec5f2d8160d214f02f78.png",
    "imageAlt": "Discord depiction of Malcolm",
    "imageCaption": "Malcolm"
  },
  "Timothy": {
    "image": "assets/characters/discord/d69f8901ef3dd3cbca217781e4cce4b0d7ff9dd7292fd7776ce94d70fbb9abd0.png",
    "imageAlt": "Discord depiction of Timothy",
    "imageCaption": "Timothy"
  },
  "Captain Zythienne": {
    "image": "assets/characters/discord/b220932f4b033c94806322391eb44ffba834f5e8ece89c5a621528318f190686.png",
    "imageAlt": "Discord depiction of Captain Zythienne",
    "imageCaption": "Captain Zythienne"
  },
  "Scout William": {
    "image": "assets/characters/discord/9f21359c6a6bda6061ccb5afefaa616800bb7460bbf5d8c5fdca2c940cf2e577.png",
    "imageAlt": "Discord depiction of Scout William",
    "imageCaption": "Scout William"
  },
  "Gareth, the Foreman": {
    "image": "assets/characters/discord/740e5f28bbeba5f4341e5ef7d6cdd595cdae8df965c10f4a7b4e46ae939eda2a.png",
    "imageAlt": "Discord depiction of Gareth, the Foreman",
    "imageCaption": "Gareth, the Foreman"
  },
  "Thom": {
    "image": "assets/characters/discord/9df5ab432aa19c16a16fb4799e4e7bfac6521ed53b85e7c1f4b9f8b9b26ce4d7.png",
    "imageAlt": "Discord depiction of Thom",
    "imageCaption": "Thom"
  },
  "Bram": {
    "image": "assets/characters/discord/bb974a49cc59da94a20ab49b935932b677a7cb3fe283b53058635ea880362a30.png",
    "imageAlt": "Discord depiction of Bram",
    "imageCaption": "Bram"
  },
  "Abraham": {
    "image": "assets/characters/discord/5ca44d731debd69881425d3313d89401a97a6480b9f63640bf252d690ba41ca2.png",
    "imageAlt": "Discord depiction of Abraham",
    "imageCaption": "Abraham"
  },
  "Rahu Envoy Rin": {
    "image": "assets/characters/discord/eed0480a817adad51507748de8a6cd2086557faa94439fb131b2e166c18dabe4.png",
    "imageAlt": "Discord depiction of Rahu Envoy Rin",
    "imageCaption": "Rahu Envoy Rin"
  }
});
Object.assign(window.FENUMION_MEDIA.articles, {
  "discovery-309": {
    "image": "assets/characters/papirak.jpg",
    "imageAlt": "Papirak with long pale hair and a beard, holding a glowing blue orb",
    "imageCaption": "Papirak the Strange",
    "imageLayout": "portrait-hero"
  },
  "discovery-020": {
    "image": "assets/characters/melian.png",
    "imageLayout": "portrait-hero"
  },
  "discovery-173": {
    "image": "assets/characters/discord/83d9e4f8e992b3a9a369352ba19d75bdfbcdb989a83c9ca4506793f65745d5ed.png",
    "imageAlt": "Discord depiction of Skye",
    "imageCaption": "Skye",
    "imageLayout": "portrait-hero"
  },
  "discovery-062": {
    "image": "assets/characters/discord/83d9e4f8e992b3a9a369352ba19d75bdfbcdb989a83c9ca4506793f65745d5ed.png",
    "imageAlt": "Discord depiction of Skye",
    "imageCaption": "Skye",
    "imageLayout": "portrait-hero"
  },
  "discovery-085": {
    "image": "assets/characters/discord/83d9e4f8e992b3a9a369352ba19d75bdfbcdb989a83c9ca4506793f65745d5ed.png",
    "imageAlt": "Discord depiction of Skye",
    "imageCaption": "Skye",
    "imageLayout": "portrait-hero"
  },
  "guardian-commander-yvette": {
    "image": "assets/characters/commander-yvette.png",
    "imageLayout": "portrait-hero"
  },
  "discovery-001": {
    "image": "assets/characters/discord/98a033dd2d938daea05bbd074dc661128fd78df3467b82718afcc769fad983f8.png",
    "imageAlt": "Discord depiction of Scout Lilian",
    "imageCaption": "Scout Lilian",
    "imageLayout": "portrait-hero"
  },
  "discovery-322": {
    "image": "assets/characters/discord/161dd5ea25a6dfa4e8cb644f3b52c707626d0e0784a1175a5e78463d5283100d.png",
    "imageAlt": "Discord depiction of Yami no Majo",
    "imageCaption": "Yami no Majo",
    "imageLayout": "portrait-hero"
  },
  "discovery-055": {
    "image": "assets/characters/discord/ae480417840e41b12e443a606da2672cf3072560ec1f045adb23b5ac77fab23a.png",
    "imageAlt": "Discord depiction of Sheeva Dragonsister",
    "imageCaption": "Sheeva Dragonsister",
    "imageLayout": "portrait-hero"
  },
  "discovery-126": {
    "image": "assets/characters/kaiya.png",
    "imageAlt": "Kaiya with pale hair wearing dark armor and a pointed mask with blue glowing eyes",
    "imageCaption": "Kaiya Dragonsister",
    "imageLayout": "portrait-hero"
  },
  "discovery-201": {
    "image": "assets/characters/minyah-dragonsister.jpg",
    "imageAlt": "Minyah with long pale hair, horn-like adornments and dark armor, carrying a sword",
    "imageCaption": "Minyah Dragonsister",
    "imageLayout": "portrait-hero"
  },
  "discovery-305": {
    "image": "assets/characters/neemah.jpg",
    "imageAlt": "Neemah with textured dark skin and a bright blue forehead marking in the rain",
    "imageCaption": "Neemah",
    "imageLayout": "portrait-hero"
  },
  "discovery-025": {
    "image": "assets/characters/discord/80fde22afa2248289525c20b98aa36463cab3c7b532c062b6c07acf1480fab38.png",
    "imageAlt": "Discord depiction of Tarwen of the Silver Star",
    "imageCaption": "Tarwen of the Silver Star",
    "imageLayout": "portrait-hero"
  },
  "farmer-scarlett": {
    "image": "assets/characters/farmer-scarlett.png",
    "imageAlt": "Farmer Scarlett wearing a straw hat and blue overalls in a sunlit field",
    "imageCaption": "Farmer Scarlett",
    "imageLayout": "portrait-hero"
  },
  "hawthorne": {
    "image": "assets/characters/discord/8a9d5acaf10cfb942df65c1cd03f206c9a5f4b8d88ab7eb0df0f0b1f86f0668f.png",
    "imageAlt": "Discord depiction of Hawthorne",
    "imageCaption": "Hawthorne",
    "imageLayout": "portrait-hero"
  },
  "discovery-108": {
    "image": "assets/characters/discord/c3e593b5d76c001371df4185b23927ca5640c8cd15d7253a071e898b812c2da2.png",
    "imageAlt": "Discord depiction of Vizsla, the Florist",
    "imageCaption": "Vizsla, the Florist",
    "imageLayout": "portrait-hero"
  },
  "vizsla": {
    "image": "assets/characters/discord/c3e593b5d76c001371df4185b23927ca5640c8cd15d7253a071e898b812c2da2.png",
    "imageAlt": "Discord depiction of Vizsla, the Florist",
    "imageCaption": "Vizsla, the Florist",
    "imageLayout": "portrait-hero"
  },
  "stella-sola": {
    "image": "assets/characters/discord/cdb194a65cf481c8adf0c5c9800af950f65bffea14a0e99b52c683463aadd0e6.png",
    "imageAlt": "Discord depiction of Stella & Sola",
    "imageCaption": "Stella & Sola",
    "imageLayout": "portrait-hero"
  },
  "discovery-028": {
    "image": "assets/characters/discord/cdb194a65cf481c8adf0c5c9800af950f65bffea14a0e99b52c683463aadd0e6.png",
    "imageAlt": "Discord depiction of Stella & Sola",
    "imageCaption": "Stella & Sola",
    "imageLayout": "portrait-hero"
  },
  "discovery-030": {
    "image": "assets/characters/discord/cdb194a65cf481c8adf0c5c9800af950f65bffea14a0e99b52c683463aadd0e6.png",
    "imageAlt": "Discord depiction of Stella & Sola",
    "imageCaption": "Stella & Sola",
    "imageLayout": "portrait-hero"
  },
  "vance-the-guard": {
    "image": "assets/characters/discord/c96c3f9df55e8817a265fe4c0fc36972cf422118a1dd189783fdd63dd2ca73df.png",
    "imageAlt": "Discord depiction of Vance the Guard",
    "imageCaption": "Vance the Guard",
    "imageLayout": "portrait-hero"
  },
  "discovery-016": {
    "image": "assets/characters/discord/c96c3f9df55e8817a265fe4c0fc36972cf422118a1dd189783fdd63dd2ca73df.png",
    "imageAlt": "Discord depiction of Vance the Guard",
    "imageCaption": "Vance the Guard",
    "imageLayout": "portrait-hero"
  },
  "discovery-103": {
    "image": "assets/characters/discord/4f55ca22d3008c15cb164987861de886a92591766a66b6a5a71f9eab332625ed.png",
    "imageAlt": "Discord depiction of Hiram",
    "imageCaption": "Hiram",
    "imageLayout": "portrait-hero"
  },
  "elder-hiram": {
    "image": "assets/characters/discord/4f55ca22d3008c15cb164987861de886a92591766a66b6a5a71f9eab332625ed.png",
    "imageAlt": "Discord depiction of Hiram",
    "imageCaption": "Hiram",
    "imageLayout": "portrait-hero"
  },
  "elder-kaja": {
    "image": "assets/characters/discord/0f03072fe499fa000f155f0336dd9263c67340860af93f1d82ed6830049816ed.png",
    "imageAlt": "Discord depiction of Kaja",
    "imageCaption": "Kaja",
    "imageLayout": "portrait-hero"
  },
  "discovery-065": {
    "image": "assets/characters/discord/0f03072fe499fa000f155f0336dd9263c67340860af93f1d82ed6830049816ed.png",
    "imageAlt": "Discord depiction of Kaja",
    "imageCaption": "Kaja",
    "imageLayout": "portrait-hero"
  },
  "elder-magda": {
    "image": "assets/characters/discord/d07863009f1ac62642585df6225acb51045ec2aaaa57662ca75b19d179625aba.png",
    "imageAlt": "Discord depiction of Magda",
    "imageCaption": "Magda",
    "imageLayout": "portrait-hero"
  },
  "orrik-wheelwright": {
    "image": "assets/characters/discord/3f2b64d6962755bcc937a8163eae50eb4da9ba78e6e854ae92cf6fe5ff2bf387.png",
    "imageAlt": "Discord depiction of Orrik the Wheelwright",
    "imageCaption": "Orrik the Wheelwright",
    "imageLayout": "portrait-hero"
  },
  "discovery-271": {
    "image": "assets/characters/saturnia-goddess.png",
    "imageLayout": "portrait-hero"
  },
  "discovery-003": {
    "image": "assets/characters/discord/e913fd9aeef057ab83a634f8c9ca1bf46e07e0f0c0c97893b2cfa0ab03c5ad24.png",
    "imageAlt": "Discord depiction of Simon",
    "imageCaption": "Simon",
    "imageLayout": "portrait-hero"
  },
  "discovery-005": {
    "image": "assets/characters/discord/d06b7c850cd809b60e969d72426eaf0971e1245b37eaf4b7d5a42e004b6312c4.png",
    "imageAlt": "Discord depiction of Caravash",
    "imageCaption": "Caravash",
    "imageLayout": "portrait-hero"
  },
  "discovery-006": {
    "image": "assets/characters/discord/5f587c27384d4a9ec1e29295acf6ea9e48c71c9bc4f8c5f92234344886069c00.png",
    "imageAlt": "Discord depiction of Elaria",
    "imageCaption": "Elaria",
    "imageLayout": "portrait-hero"
  },
  "discovery-010": {
    "image": "assets/characters/discord/e07bec3bb911ed2845602a31aaf2bcb8a684320954ce099c5e059ad3de550be5.png",
    "imageAlt": "Discord depiction of Dranielle",
    "imageCaption": "Dranielle",
    "imageLayout": "portrait-hero"
  },
  "discovery-012": {
    "image": "assets/characters/discord/5f6c26361e61ffe9cff56ff8e30633c97e96bfa9b6b26ef56f6848c6bb8868c8.png",
    "imageAlt": "Discord depiction of Derek",
    "imageCaption": "Derek",
    "imageLayout": "portrait-hero"
  },
  "discovery-013": {
    "image": "assets/characters/discord/03a51b4e5b1a479533ad84453b38781edfafd6de5e59b7cf0961ee065b5f94f9.png",
    "imageAlt": "Discord depiction of Liora Fenwick",
    "imageCaption": "Liora Fenwick",
    "imageLayout": "portrait-hero"
  },
  "discovery-014": {
    "image": "assets/characters/discord/aeaafc42d90d2c39a5864efe0c042772832d1ff890dcc3a22320583404689eee.png",
    "imageAlt": "Discord depiction of Elaris",
    "imageCaption": "Elaris",
    "imageLayout": "portrait-hero"
  },
  "discovery-015": {
    "image": "assets/characters/discord/88ff990a02877ecbde47230b35054642ea1c96a1747641cd0deea2f2a7ffda21.png",
    "imageAlt": "Discord depiction of Renji",
    "imageCaption": "Renji",
    "imageLayout": "portrait-hero"
  },
  "discovery-017": {
    "image": "assets/characters/discord/f29986b81dc2796a5269f240ff6b2ca150f1492404e9f9c217ae0f8c4f73a540.png",
    "imageAlt": "Discord depiction of Finnian",
    "imageCaption": "Finnian",
    "imageLayout": "portrait-hero"
  },
  "discovery-018": {
    "image": "assets/characters/discord/0d918fb336151c45b2cd309f8553c37551b0a73d525d77c176f47901f12ee937.png",
    "imageAlt": "Discord depiction of Mr. Everafter",
    "imageCaption": "Mr. Everafter",
    "imageLayout": "portrait-hero"
  },
  "discovery-021": {
    "image": "assets/characters/discord/3a5a6bfdcee228e2ef95442d0a341132f8dfb2f667fe59cfbdf460061b0d995c.png",
    "imageAlt": "Discord depiction of Hillda Hexinbottom",
    "imageCaption": "Hillda Hexinbottom",
    "imageLayout": "portrait-hero"
  },
  "discovery-022": {
    "image": "assets/characters/discord/563e848a1edce8814c3740f4e00933ed7d74c28883e36a7f2d45f3d52e8384de.png",
    "imageAlt": "Discord depiction of Selima",
    "imageCaption": "Selima",
    "imageLayout": "portrait-hero"
  },
  "discovery-023": {
    "image": "assets/characters/discord/8a31bb6cc0a66c4357468b8a90eadb2b2637f673bdc41bdddbb7ffc3b5ffa0d1.png",
    "imageAlt": "Discord depiction of Eleth Granger",
    "imageCaption": "Eleth Granger",
    "imageLayout": "portrait-hero"
  },
  "discovery-024": {
    "image": "assets/characters/discord/6bc110ee14dcbd21eac912eed8fdd3f76cd07a486ddd7bd78fb0ee7ba20d70b6.png",
    "imageAlt": "Discord depiction of Sawyer",
    "imageCaption": "Sawyer",
    "imageLayout": "portrait-hero"
  },
  "discovery-027": {
    "image": "assets/characters/discord/8927ab75e081247d169edd3377726fa9dfdc6b0c6463fb53d95592b7fd8e53c1.png",
    "imageAlt": "Discord depiction of Thalorian Silversong",
    "imageCaption": "Thalorian Silversong",
    "imageLayout": "portrait-hero"
  },
  "discovery-032": {
    "image": "assets/characters/discord/f4a4e82666efdfe6529f84aa5270964ec9c0d8052d4b6cc1c79b782c5a6f33b0.png",
    "imageAlt": "Discord depiction of Eldrick ‘Wobblewand’ the Mad",
    "imageCaption": "Eldrick ‘Wobblewand’ the Mad",
    "imageLayout": "portrait-hero"
  },
  "discovery-033": {
    "image": "assets/characters/discord/c557ec26e39a23cd1c81ed2f9182fa20dcfb638eabb8ece5894f276cb24232dd.png",
    "imageAlt": "Discord depiction of Tariq",
    "imageCaption": "Tariq",
    "imageLayout": "portrait-hero"
  },
  "discovery-034": {
    "image": "assets/characters/discord/7609f08717c7c8a137a9cb8c2cd92fbb889f5acf67dd17837981fd45b5d5383f.png",
    "imageAlt": "Discord depiction of Arjan van der Staüg",
    "imageCaption": "Arjan van der Staüg",
    "imageLayout": "portrait-hero"
  },
  "discovery-036": {
    "image": "assets/characters/discord/fa3df990608280c7d852777a5182f32664de70ac4ce295bc4c6407e5fb36b230.png",
    "imageAlt": "Discord depiction of Shakadese",
    "imageCaption": "Shakadese",
    "imageLayout": "portrait-hero"
  },
  "discovery-037": {
    "image": "assets/characters/discord/0ffce6b11a6c163826aecfe6b28532f25b56913bfd4fe2ae7039ed3c496a25e4.png",
    "imageAlt": "Discord depiction of Timale",
    "imageCaption": "Timale",
    "imageLayout": "portrait-hero"
  },
  "discovery-039": {
    "image": "assets/characters/discord/2ce5ea042ba32a650fe4197fd019f9081cba9bb035c3c8ea52545d46a7ba4e7b.png",
    "imageAlt": "Discord depiction of Aiko",
    "imageCaption": "Aiko",
    "imageLayout": "portrait-hero"
  },
  "discovery-040": {
    "image": "assets/characters/discord/c9c91513da7d274044fc3cf390535b01652ba3695cce49d9220a11a2630434f4.png",
    "imageAlt": "Discord depiction of Esther",
    "imageCaption": "Esther",
    "imageLayout": "portrait-hero"
  },
  "discovery-041": {
    "image": "assets/characters/discord/9e0107b8e74652c012ba01c0475d7e4da19a7d2bdb40de0664bc92af080d5654.png",
    "imageAlt": "Discord depiction of Alba",
    "imageCaption": "Alba",
    "imageLayout": "portrait-hero"
  },
  "discovery-043": {
    "image": "assets/characters/discord/1d3fe9c581352b0225deaf7e09bfe6114bb56375f96873980141bbe715f879c0.png",
    "imageAlt": "Discord depiction of Henri",
    "imageCaption": "Henri",
    "imageLayout": "portrait-hero"
  },
  "discovery-044": {
    "image": "assets/characters/discord/5710e5379235c9183d6182c88099232265256d04f15522083325e2a8b627861d.png",
    "imageAlt": "Discord depiction of Jules",
    "imageCaption": "Jules",
    "imageLayout": "portrait-hero"
  },
  "discovery-045": {
    "image": "assets/characters/discord/d6b796c61ddfbc63fc8595fc05218ed3240fed7a1f072a726ae2b14a8cf1e4d5.png",
    "imageAlt": "Discord depiction of Miralyn",
    "imageCaption": "Miralyn",
    "imageLayout": "portrait-hero"
  },
  "discovery-046": {
    "image": "assets/characters/discord/4f1f52193ef34242236624a803af432e410b965f7720b51c9d841bdcbf59ea37.png",
    "imageAlt": "Discord depiction of Targas Tarmile",
    "imageCaption": "Targas Tarmile",
    "imageLayout": "portrait-hero"
  },
  "discovery-047": {
    "image": "assets/characters/discord/b3d659d87589d214591bb48c0f7a45a95afb4de42885e439b3fc6fba687a4e7e.png",
    "imageAlt": "Discord depiction of Yen",
    "imageCaption": "Yen",
    "imageLayout": "portrait-hero"
  },
  "discovery-050": {
    "image": "assets/characters/discord/80ebc9c75094e2d83718d744a10419098acf6e060b35930f5b82e851a1a82aaf.png",
    "imageAlt": "Discord depiction of Garven",
    "imageCaption": "Garven",
    "imageLayout": "portrait-hero"
  },
  "discovery-054": {
    "image": "assets/characters/discord/df806419f591cb3f7d996759490636fea82f0cdc12b8e1f46b9d2d39eb69ea6e.png",
    "imageAlt": "Discord depiction of Rudy",
    "imageCaption": "Rudy",
    "imageLayout": "portrait-hero"
  },
  "discovery-057": {
    "image": "assets/characters/discord/12009fc199328b195391cf70532396d59a6ba95fe6a2f24942b6b36b5899416d.png",
    "imageAlt": "Discord depiction of Grandma Wilfreda",
    "imageCaption": "Grandma Wilfreda",
    "imageLayout": "portrait-hero"
  },
  "discovery-064": {
    "image": "assets/characters/discord/0137cc2e53ed20ad0f9b6bc9bbf189a3229f5621554f5e996623d072fe7e18cb.png",
    "imageAlt": "Discord depiction of George Michael Thor",
    "imageCaption": "George Michael Thor",
    "imageLayout": "portrait-hero"
  },
  "discovery-067": {
    "image": "assets/characters/discord/0b9ee5e267dd1deb1035b66a5e6aad7051d3eb53500655b1bff450793a1b71f2.png",
    "imageAlt": "Discord depiction of Landon",
    "imageCaption": "Landon",
    "imageLayout": "portrait-hero"
  },
  "discovery-068": {
    "image": "assets/characters/discord/01b2b2a1e38e2e250791a370e3343094bfc468e4a098f2294e1d9e98beb1bcf4.png",
    "imageAlt": "Discord depiction of Lyla Thistlebottom",
    "imageCaption": "Lyla Thistlebottom",
    "imageLayout": "portrait-hero"
  },
  "discovery-069": {
    "image": "assets/characters/discord/1acaeb2d46d330edd920957209d6f32733f376d2c9a9fe9265835348fcdaf092.png",
    "imageAlt": "Discord depiction of Nuleah",
    "imageCaption": "Nuleah",
    "imageLayout": "portrait-hero"
  },
  "discovery-071": {
    "image": "assets/characters/discord/f6129aeee24c31904145f3ee44a4c32286b7fa4b503a6250d618382af4c31d23.png",
    "imageAlt": "Discord depiction of Sheep-cote Claude",
    "imageCaption": "Sheep-cote Claude",
    "imageLayout": "portrait-hero"
  },
  "discovery-080": {
    "image": "assets/characters/discord/9e7c3bb6880ab497485a24306b44322893a9741f469845ad6b8ebc055e496736.png",
    "imageAlt": "Discord depiction of Swiper",
    "imageCaption": "Swiper",
    "imageLayout": "portrait-hero"
  },
  "discovery-083": {
    "image": "assets/characters/discord/9412e436a9bf27e289e6a01e20503610e9af71e7b1c942fd2e6a6bbf3fe5124b.png",
    "imageAlt": "Discord depiction of Bob",
    "imageCaption": "Bob",
    "imageLayout": "portrait-hero"
  },
  "discovery-086": {
    "image": "assets/characters/discord/0c1cca6d539eb6a419339662098fe442a74e773ad30d424955c17068668faa81.png",
    "imageAlt": "Discord depiction of Katherine Hearthford",
    "imageCaption": "Katherine Hearthford",
    "imageLayout": "portrait-hero"
  },
  "discovery-089": {
    "image": "assets/characters/discord/1899061331365c5504c9806749aa14cb24fca8184154dc1ad13f77c87dc9d96d.png",
    "imageAlt": "Discord depiction of Maartje Twellaar",
    "imageCaption": "Maartje Twellaar",
    "imageLayout": "portrait-hero"
  },
  "discovery-102": {
    "image": "assets/characters/discord/4faa51848f13be782b67dd81332e18ad9b08cf0e89ca00b2ff57024935419d31.png",
    "imageAlt": "Discord depiction of Cera, Acolyte in Training",
    "imageCaption": "Cera, Acolyte in Training",
    "imageLayout": "portrait-hero"
  },
  "discovery-111": {
    "image": "assets/characters/discord/97f4cc6139113e92e4d864796c30a219bd43d2aa517dd581a72d6ab6da4ad1e4.png",
    "imageAlt": "Discord depiction of Ziegler",
    "imageCaption": "Ziegler",
    "imageLayout": "portrait-hero"
  },
  "discovery-114": {
    "image": "assets/characters/discord/1de1bce73a6eb41e4948820a9f40a57de0343e29d471174c7c889eaac133b0a6.png",
    "imageAlt": "Discord depiction of Chief Guardian Horgrith",
    "imageCaption": "Chief Guardian Horgrith",
    "imageLayout": "portrait-hero"
  },
  "discovery-117": {
    "image": "assets/characters/discord/4641e004650d956365584045fe749653b0af66e80630ec5f2d8160d214f02f78.png",
    "imageAlt": "Discord depiction of Malcolm",
    "imageCaption": "Malcolm",
    "imageLayout": "portrait-hero"
  },
  "discovery-123": {
    "image": "assets/characters/discord/d69f8901ef3dd3cbca217781e4cce4b0d7ff9dd7292fd7776ce94d70fbb9abd0.png",
    "imageAlt": "Discord depiction of Timothy",
    "imageCaption": "Timothy",
    "imageLayout": "portrait-hero"
  },
  "discovery-124": {
    "image": "assets/characters/discord/b220932f4b033c94806322391eb44ffba834f5e8ece89c5a621528318f190686.png",
    "imageAlt": "Discord depiction of Captain Zythienne",
    "imageCaption": "Captain Zythienne",
    "imageLayout": "portrait-hero"
  },
  "discovery-131": {
    "image": "assets/characters/discord/9f21359c6a6bda6061ccb5afefaa616800bb7460bbf5d8c5fdca2c940cf2e577.png",
    "imageAlt": "Discord depiction of Scout William",
    "imageCaption": "Scout William",
    "imageLayout": "portrait-hero"
  },
  "discovery-149": {
    "image": "assets/characters/discord/740e5f28bbeba5f4341e5ef7d6cdd595cdae8df965c10f4a7b4e46ae939eda2a.png",
    "imageAlt": "Discord depiction of Gareth, the Foreman",
    "imageCaption": "Gareth, the Foreman",
    "imageLayout": "portrait-hero"
  },
  "discovery-175": {
    "image": "assets/characters/discord/9df5ab432aa19c16a16fb4799e4e7bfac6521ed53b85e7c1f4b9f8b9b26ce4d7.png",
    "imageAlt": "Discord depiction of Thom",
    "imageCaption": "Thom",
    "imageLayout": "portrait-hero"
  },
  "discovery-179": {
    "image": "assets/characters/discord/bb974a49cc59da94a20ab49b935932b677a7cb3fe283b53058635ea880362a30.png",
    "imageAlt": "Discord depiction of Bram",
    "imageCaption": "Bram",
    "imageLayout": "portrait-hero"
  },
  "discovery-191": {
    "image": "assets/characters/discord/5ca44d731debd69881425d3313d89401a97a6480b9f63640bf252d690ba41ca2.png",
    "imageAlt": "Discord depiction of Abraham",
    "imageCaption": "Abraham",
    "imageLayout": "portrait-hero"
  },
  "discovery-203": {
    "image": "assets/characters/discord/eed0480a817adad51507748de8a6cd2086557faa94439fb131b2e166c18dabe4.png",
    "imageAlt": "Discord depiction of Rahu Envoy Rin",
    "imageCaption": "Rahu Envoy Rin",
    "imageLayout": "portrait-hero"
  }
});
// END REVIEWED NPC PORTRAITS 2026-10-11

// Exact named local source portrait recovered during the NPC audit.
const herbRecoveredPortrait = {image:'assets/characters/herb.webp',imageAlt:'Herb seated in a tavern, holding a mug',imageCaption:'Herb Shepard'};
window.FENUMION_MEDIA.characters['Herb Shepard'] = herbRecoveredPortrait;
window.FENUMION_MEDIA.articles.herb = {...window.FENUMION_MEDIA.articles.herb,...herbRecoveredPortrait,imageLayout:'portrait-hero'};

// BEGIN REVIEWED FEIN UAILL LOCATION ART 2026-10-12
window.FENUMION_LOCATION_ART = [
  {
    "reviewNumber": 16,
    "article": "fein-uaill",
    "image": "assets/locations/discord/496ea1a8202644db8315250af60c21a77f56470caa735a700b2b2b88ad3fdada.webp",
    "title": "Fein Uaill — map handout",
    "confidence": "clear",
    "originalSha256": "496ea1a8202644db8315250af60c21a77f56470caa735a700b2b2b88ad3fdada",
    "publishedSha256": "bcc89e2ec3a4702b129213379f1939c53b737e75f808b4cc6929e91853881c38"
  },
  {
    "reviewNumber": 39,
    "article": "caislean-na-bron",
    "image": "assets/locations/discord/bade7fd96ec0b9cc508839a653d28ea09e398240e2747b70281837fc04a667c8.webp",
    "title": "Caisleán na Bróin — castle and vineyards",
    "confidence": "clear",
    "originalSha256": "bade7fd96ec0b9cc508839a653d28ea09e398240e2747b70281837fc04a667c8",
    "publishedSha256": "2773a43c1f788b1e726b6e7eea7d89ee69e3be5d9aa1589cd234a943902b9b7a"
  },
  {
    "reviewNumber": 41,
    "article": "caislean-na-bron",
    "image": "assets/locations/discord/e6191e0355405eac19c669f5d913d21944c8d3e11fc71faf09eb12b4f5100a75.webp",
    "title": "Caisleán na Bróin — courtyard",
    "confidence": "clear",
    "originalSha256": "e6191e0355405eac19c669f5d913d21944c8d3e11fc71faf09eb12b4f5100a75",
    "publishedSha256": "81f3c9f565883abbd4f3d8652098f57613d12ba3b45c8dbbd60af1e628b3bcf2"
  },
  {
    "reviewNumber": 70,
    "article": "zarathis",
    "image": "assets/locations/discord/0aa0138417a114945e954814df87d2a33f7dfaf866b5ddfa2ef3a817fedd30a8.webp",
    "title": "Zarathis — arena gates",
    "confidence": "clear",
    "originalSha256": "0aa0138417a114945e954814df87d2a33f7dfaf866b5ddfa2ef3a817fedd30a8",
    "publishedSha256": "a964518d4c17a828c426fa01c2aae713c5799297ccc088ea3b0052160136a2a9"
  },
  {
    "reviewNumber": 74,
    "article": "zarathis",
    "image": "assets/locations/discord/87ccb9795acec0513c423875dfbb7afadf6074737402ef9ecec4bac5bc097dd2.webp",
    "title": "Zarathis — ceremony hall plan",
    "confidence": "clear",
    "originalSha256": "87ccb9795acec0513c423875dfbb7afadf6074737402ef9ecec4bac5bc097dd2",
    "publishedSha256": "0296246c5b0017fc089dea26eb8e2cf101269944e2c36717eb3ad3ed72f5f2ea"
  },
  {
    "reviewNumber": 79,
    "article": "ciaranach",
    "image": "assets/locations/discord/c22eb96c9ad83bf1e8bb9c4d420c3dccb37b379be37a55ff824d4e88c1119e9b.webp",
    "title": "Ciaránach pilgrimage — old dirt path",
    "confidence": "clear",
    "originalSha256": "c22eb96c9ad83bf1e8bb9c4d420c3dccb37b379be37a55ff824d4e88c1119e9b",
    "publishedSha256": "2d2194fe4493585b77bc1e0f021314ae116e1bd24556e8b2baf618508906c4d7"
  },
  {
    "reviewNumber": 81,
    "article": "ciaranach",
    "image": "assets/locations/discord/40bbb6e2ea15a06f08c7dc4c3128042c15405632b9ae2ef5fdd3d666e858ab8f.webp",
    "title": "Ciaránach pilgrimage — snowy mountains",
    "confidence": "clear",
    "originalSha256": "40bbb6e2ea15a06f08c7dc4c3128042c15405632b9ae2ef5fdd3d666e858ab8f",
    "publishedSha256": "d1b8ee266cac9ff5388d58a8c33ebc80575b2319c3c5ebcdecdcc051a084ca8b"
  },
  {
    "reviewNumber": 82,
    "article": "fein-uaill",
    "image": "assets/locations/discord/e4b37158af482ca5f2662ac1cce4aa3c4ec39a956b43c2a9cf7aa9b2290b5413.webp",
    "title": "Old fortress northeast of Zarathis",
    "confidence": "clear",
    "originalSha256": "e4b37158af482ca5f2662ac1cce4aa3c4ec39a956b43c2a9cf7aa9b2290b5413",
    "publishedSha256": "ba700d279bcec346e6737671698beb0278cdfd5f2584342b3f0d5a1199ab9c25"
  },
  {
    "reviewNumber": 88,
    "article": "zarathis",
    "image": "assets/locations/discord/7b7daedd3e1e5abefc70da4b63d6ca23c53914ef461d3075c234300cd6e67580.webp",
    "title": "Zarathis — city during mourning",
    "confidence": "clear",
    "originalSha256": "7b7daedd3e1e5abefc70da4b63d6ca23c53914ef461d3075c234300cd6e67580",
    "publishedSha256": "ae552eec74290610a219635579e42f1227234bbc8bd4455436a3557ea9bf6325"
  },
  {
    "reviewNumber": 89,
    "article": "zarathis",
    "image": "assets/locations/discord/6d7f6383c9776bf09b74432d9eadcc549cb7f6f2da1436cdb9bcffea7b468f62.webp",
    "title": "Zarathis — private council pavilion",
    "confidence": "clear",
    "originalSha256": "6d7f6383c9776bf09b74432d9eadcc549cb7f6f2da1436cdb9bcffea7b468f62",
    "publishedSha256": "43d43bf154e79021ae8fe8b7378c3a312761579369f8088fcc06a4f8af8d50e9"
  },
  {
    "reviewNumber": 91,
    "article": "fein-uaill",
    "image": "assets/locations/discord/eb6e428df2c2b3c44d21cf2f4aacff99472fc4bb69e2c405e5635688a3ed995d.webp",
    "title": "Fein Uaill memorial — evening venue",
    "confidence": "qualified",
    "originalSha256": "eb6e428df2c2b3c44d21cf2f4aacff99472fc4bb69e2c405e5635688a3ed995d",
    "publishedSha256": "7bbc955922d15cfb40190a7e00508be63aa5ea0c02cb3b92b6086ccce163cad6"
  },
  {
    "reviewNumber": 93,
    "article": "ciaranach",
    "image": "assets/locations/discord/5ab43580425b16e7c801036f0c7fce259841f0e1af6f34b9a0540f17caa25c3c.webp",
    "title": "Ciaránach — white steps and public address",
    "confidence": "clear",
    "originalSha256": "5ab43580425b16e7c801036f0c7fce259841f0e1af6f34b9a0540f17caa25c3c",
    "publishedSha256": "50c9f58e197aba4430ff7b91576ea1b50dd4d2e94105765db46c9151a8a99c2f"
  },
  {
    "reviewNumber": 104,
    "article": "shining-shores",
    "image": "assets/locations/discord/e9587790cf9bc3392f0ca07402cf83c8d659001c4b15a65e38d3fed7d3d53be8.webp",
    "title": "The Shining Shores — harbor-city reference",
    "confidence": "clear",
    "originalSha256": "e9587790cf9bc3392f0ca07402cf83c8d659001c4b15a65e38d3fed7d3d53be8",
    "publishedSha256": "e34f64c1d82a9d327f4e8139a6622b466bd9acc071df3d5e7bc959cdff6cbacb"
  },
  {
    "reviewNumber": 108,
    "article": "zarathis",
    "image": "assets/locations/discord/b28f779f90f638bd590c747bec0c552dd4dace7537833460550762f1af2bd927.webp",
    "title": "Zarathis — city overview",
    "confidence": "clear",
    "originalSha256": "b28f779f90f638bd590c747bec0c552dd4dace7537833460550762f1af2bd927",
    "publishedSha256": "97c559443b9854bfa936ee3d81f4eea51fdf3c3b71c91087aa155477ccacdd69"
  },
  {
    "reviewNumber": 109,
    "article": "zarathis",
    "image": "assets/locations/discord/f2c953d265ffec612af97e0ad5fc465ffe6aafe135645b305f0ad1a2afc804a1.webp",
    "title": "Zarathis — library exterior",
    "confidence": "clear",
    "originalSha256": "f2c953d265ffec612af97e0ad5fc465ffe6aafe135645b305f0ad1a2afc804a1",
    "publishedSha256": "7ee08ebdaa1326f0ef8376f86e18befa3ec3b3d50e1748de072297ffd99bbc6b"
  },
  {
    "reviewNumber": 110,
    "article": "zarathis",
    "image": "assets/locations/discord/9afb5bd0134a536ed0ea5e95a66a707698aab52193b8d5903f5bcb8f1ee27c52.webp",
    "title": "Zarathis — library interior",
    "confidence": "clear",
    "originalSha256": "9afb5bd0134a536ed0ea5e95a66a707698aab52193b8d5903f5bcb8f1ee27c52",
    "publishedSha256": "fa1336811ab8b69a62058ed28994aeac673a25cbe694b29df8928d691d2e436d"
  },
  {
    "reviewNumber": 111,
    "article": "zarathis",
    "image": "assets/locations/discord/fff0c09557e1c52e6de9b1888bfc6ce502b6f69e835b7a514ce5fc9a8c9b385c.webp",
    "title": "Zarathis — greenhouse restaurant, first view",
    "confidence": "clear",
    "originalSha256": "fff0c09557e1c52e6de9b1888bfc6ce502b6f69e835b7a514ce5fc9a8c9b385c",
    "publishedSha256": "3a698a5f1271954efde29ea03c301d33e3fc7b62b6849cd23f8ed889e5a47d19"
  },
  {
    "reviewNumber": 112,
    "article": "zarathis",
    "image": "assets/locations/discord/a7a8aaf2f53f311ef7e31448316dc3826ec221289f5dce835d5778a692777bb4.webp",
    "title": "Zarathis — greenhouse restaurant, second view",
    "confidence": "clear",
    "originalSha256": "a7a8aaf2f53f311ef7e31448316dc3826ec221289f5dce835d5778a692777bb4",
    "publishedSha256": "6d6ced484d8f9f847aeb1b7290402dd47ac59eb8c8c383804af0dc94ca275ab4"
  },
  {
    "reviewNumber": 116,
    "article": "zarathis",
    "image": "assets/locations/discord/18e717f667716a765e2ea49b3c9960257f6a8becbab4cf3eef983225c3f9e369.webp",
    "title": "Zarathis — Silver Star-favored library exterior",
    "confidence": "clear",
    "originalSha256": "18e717f667716a765e2ea49b3c9960257f6a8becbab4cf3eef983225c3f9e369",
    "publishedSha256": "bb84ea6fd49a7597891e5454ba501db2f284a9f058028f6c9973a93f14b67952"
  },
  {
    "reviewNumber": 117,
    "article": "zarathis",
    "image": "assets/locations/discord/bdbdfef2809b2214a7667793f7e8f10ae97d050044330a3884c42d674c011beb.webp",
    "title": "Zarathis — research library interior",
    "confidence": "clear",
    "originalSha256": "bdbdfef2809b2214a7667793f7e8f10ae97d050044330a3884c42d674c011beb",
    "publishedSha256": "66a4ecf00fe423f577294db1628369ee4b19ff873358d46addc15b0c937b2401"
  },
  {
    "reviewNumber": 118,
    "article": "zarathis",
    "image": "assets/locations/discord/dfbece5b60a62c3e3eb9114eb83c00529ed554c1c3244057c55288a3b9beb71e.webp",
    "title": "Zarathis — Shard mural inside the library",
    "confidence": "clear",
    "originalSha256": "dfbece5b60a62c3e3eb9114eb83c00529ed554c1c3244057c55288a3b9beb71e",
    "publishedSha256": "dcc301b330ad2ad2bf7da4cb062e59f62dae2af3cc6dcfdc98ea933595d4665e"
  },
  {
    "reviewNumber": 120,
    "article": "zarathis",
    "image": "assets/locations/discord/893d250db645d3e087004b4e056166d303aa21c8590004593c00633f1fa86a43.webp",
    "title": "Zarathis — library chamber with mountain ceiling",
    "confidence": "clear",
    "originalSha256": "893d250db645d3e087004b4e056166d303aa21c8590004593c00633f1fa86a43",
    "publishedSha256": "88bee6771284f5895494ec126d6e170f33e3eafa65dec8924915358b64755b83"
  },
  {
    "reviewNumber": 122,
    "article": "shining-shores",
    "image": "assets/locations/discord/c39242d182a4226e967e74550d9aabf6c81b01346d588164c68450e6d089c3db.webp",
    "title": "The Gates of Aelthor — bridge approach",
    "confidence": "clear",
    "originalSha256": "c39242d182a4226e967e74550d9aabf6c81b01346d588164c68450e6d089c3db",
    "publishedSha256": "821484c1c813294cdb7e6dee54684ee1d733942c2a6b05e610b71562f1e01c37"
  },
  {
    "reviewNumber": 124,
    "article": "shining-shores",
    "image": "assets/locations/discord/d4001463d5a49ecc6cbacdfd8e2cdbe0fff8f4a324f08cbffd31c7f22a87059f.webp",
    "title": "The Gates of Aelthor — guard-tower surroundings",
    "confidence": "clear",
    "originalSha256": "d4001463d5a49ecc6cbacdfd8e2cdbe0fff8f4a324f08cbffd31c7f22a87059f",
    "publishedSha256": "3624b87f0cc119f729f2809f00135565500cd0aa13252e61d1a75b5a4144e88e"
  },
  {
    "reviewNumber": 125,
    "article": "titanwall-eryndor",
    "image": "assets/locations/discord/cc4c982d260a7384fb5ee8b4ed7d486e517231864fbaa8c462909bf628bc16fa.webp",
    "title": "The Titanwall of Eryndor — dam reference",
    "confidence": "clear",
    "originalSha256": "cc4c982d260a7384fb5ee8b4ed7d486e517231864fbaa8c462909bf628bc16fa",
    "publishedSha256": "ca0dcacc0a82d40814b6c1b57e29af9090206d7969a82914aced97aa661c3ac8"
  },
  {
    "reviewNumber": 126,
    "article": "titanwall-eryndor",
    "image": "assets/locations/discord/b50cfdd7dde6ec1c4a50397bdec71d9d48add2aa99037c2d6676589d8f7857e6.webp",
    "title": "The Titanwall of Eryndor — castle and dam approach",
    "confidence": "clear",
    "originalSha256": "b50cfdd7dde6ec1c4a50397bdec71d9d48add2aa99037c2d6676589d8f7857e6",
    "publishedSha256": "d4733958168d7acd2b0fa0c4eb5d80469a0e0fbfbbf2974ebbe5c48e096184e2"
  },
  {
    "reviewNumber": 127,
    "article": "fein-uaill",
    "image": "assets/locations/discord/0c5988725d8a5be2e2dba5d65c0272989524fa72e6d90516d0f550b0c51dffe1.webp",
    "title": "Fein Uaill — Olokun’s unnamed landscape painting",
    "confidence": "qualified",
    "originalSha256": "0c5988725d8a5be2e2dba5d65c0272989524fa72e6d90516d0f550b0c51dffe1",
    "publishedSha256": "ad0a759da62c4b23d2cd0fd84f6010aa46d7cf31cff518032a803a3719ec6d11"
  },
  {
    "reviewNumber": 128,
    "article": "fein-uaill",
    "image": "assets/locations/discord/ddc6bed9740f880b072831523178b6733a8a7ca6e3ffed442bc9e704b1598e42.webp",
    "title": "Eshnunna of the Eternal Flame — inner sanctum",
    "confidence": "clear",
    "originalSha256": "ddc6bed9740f880b072831523178b6733a8a7ca6e3ffed442bc9e704b1598e42",
    "publishedSha256": "0339e3273ca651698325b065b5c0316ce1dacc00e34d1e8a8bfa4ec87e875a44"
  },
  {
    "reviewNumber": 133,
    "article": "fein-uaill",
    "image": "assets/locations/discord/0908fa2544433f254a5b713a8f38af4e3b2c40adb5e288d79a1584708ce6d2b6.webp",
    "title": "Seraphis — holy city above Zarathis",
    "confidence": "clear",
    "originalSha256": "0908fa2544433f254a5b713a8f38af4e3b2c40adb5e288d79a1584708ce6d2b6",
    "publishedSha256": "8c9d0ec84cf1c149ecef2ebd4a07b6bebc8fe0de3d77c04438afb01f11baeceb"
  },
  {
    "reviewNumber": 134,
    "article": "ciaranach",
    "image": "assets/locations/discord/4f89eec1ef0b78129b2bd9c721090f03ef3f915ad2e4b98737a7c6bb7707c22e.webp",
    "title": "Ciaránach — opening setting reference",
    "confidence": "clear",
    "originalSha256": "4f89eec1ef0b78129b2bd9c721090f03ef3f915ad2e4b98737a7c6bb7707c22e",
    "publishedSha256": "890a1898d74718c13783fb1a06695b425dcd82a60e748b0ce332fdfc95fe2314"
  },
  {
    "reviewNumber": 172,
    "article": "caislean-na-bron",
    "image": "assets/locations/discord/5385c331639a57f193afa3c9459eb2ceace09a19faeeee5ce7dfffe25ae0b906.webp",
    "title": "Caisleán na Bróin — Olokun’s memorial altar",
    "confidence": "clear",
    "originalSha256": "5385c331639a57f193afa3c9459eb2ceace09a19faeeee5ce7dfffe25ae0b906",
    "publishedSha256": "5dceb458581eef05391f22b8f3117a8087988ebc68768a6fe0f8b251df3cdccd"
  },
  {
    "reviewNumber": 177,
    "article": "fein-uaill",
    "image": "assets/locations/discord/bab59876586250aec73c369510f0dce3bd934f63f2ade7444e26c8dc20807031.webp",
    "title": "The Feytouched Forest — opening woodland reference",
    "confidence": "clear",
    "originalSha256": "bab59876586250aec73c369510f0dce3bd934f63f2ade7444e26c8dc20807031",
    "publishedSha256": "91cde404264cb008918d9673c2f4aa3fc08152a3155f574b92f8f95e693c85f2"
  },
  {
    "reviewNumber": 178,
    "article": "fein-uaill",
    "image": "assets/locations/discord/33ba2fd46e932103913e969026b09d20e0e43de0bf6e161d5a011070260c8f54.webp",
    "title": "The Feytouched Forest — wooded terrace reference",
    "confidence": "clear",
    "originalSha256": "33ba2fd46e932103913e969026b09d20e0e43de0bf6e161d5a011070260c8f54",
    "publishedSha256": "ac30654531741a8fd0ca82725661a1dfea41b43f8ab35aef3ed455892f7ac600"
  },
  {
    "reviewNumber": 179,
    "article": "fein-uaill",
    "image": "assets/locations/discord/9da17a971df07f5c4337329d044f6bf4e89f3d7cfaf8f6b4c99865adbeb25eb2.webp",
    "title": "The Feytouched Forest — additional forest view",
    "confidence": "clear",
    "originalSha256": "9da17a971df07f5c4337329d044f6bf4e89f3d7cfaf8f6b4c99865adbeb25eb2",
    "publishedSha256": "19b96cf239bb0c329299291ae136a17a13cb667edbb684d3e6d5073f6af566b9"
  },
  {
    "reviewNumber": 183,
    "article": "fein-uaill",
    "image": "assets/locations/discord/40829540fdf52cb206afc367df64b8d3a98821234ea08faf1f17699b8d2c3e0f.webp",
    "title": "The Feytouched Forest — shimmering trail",
    "confidence": "clear",
    "originalSha256": "40829540fdf52cb206afc367df64b8d3a98821234ea08faf1f17699b8d2c3e0f",
    "publishedSha256": "567b95aa15321acad43908b52d7dbb2c88ce4f887e40bafe9665b32e9d62059c"
  },
  {
    "reviewNumber": 185,
    "article": "niriin-estate",
    "image": "assets/locations/discord/f9241381c43b6ff785d6bb056481c02a868afd32f92f44875e54bf241c4d857c.webp",
    "title": "Niriin Estate — corridor to the dining hall",
    "confidence": "clear",
    "originalSha256": "f9241381c43b6ff785d6bb056481c02a868afd32f92f44875e54bf241c4d857c",
    "publishedSha256": "cae21b4d20344bc655035470d525a596d1158925b6f6263ab0b89c2d3672eb32"
  },
  {
    "reviewNumber": 186,
    "article": "niriin-estate",
    "image": "assets/locations/discord/781eca537ba5c8d83b4ff69fe7899ef8e74542a20f8772e45b199e90195a47ec.webp",
    "title": "Niriin Estate — plant-filled dining hall",
    "confidence": "clear",
    "originalSha256": "781eca537ba5c8d83b4ff69fe7899ef8e74542a20f8772e45b199e90195a47ec",
    "publishedSha256": "71e36632ba24a675167d7b014b6bd21ab02e610388251ed1172b7fdd89cef989"
  },
  {
    "reviewNumber": 197,
    "article": "niriin-estate",
    "image": "assets/locations/discord/7f54e6fb9b6041df2c3890341e0e49204f8dfcc2c3063267a5de062f8f72219d.webp",
    "title": "Niriin Estate — library doors",
    "confidence": "clear",
    "originalSha256": "7f54e6fb9b6041df2c3890341e0e49204f8dfcc2c3063267a5de062f8f72219d",
    "publishedSha256": "09c8e789b9309ac66b3a8fbf71f4c6e9a9949573a669b864b275cfc91d59b9be"
  },
  {
    "reviewNumber": 198,
    "article": "niriin-estate",
    "image": "assets/locations/discord/241d58ec001413eeeacbc981ea33e7ef23593ca7dc2092fe9551927503f7128f.webp",
    "title": "Niriin Estate — public library interior",
    "confidence": "clear",
    "originalSha256": "241d58ec001413eeeacbc981ea33e7ef23593ca7dc2092fe9551927503f7128f",
    "publishedSha256": "203d56b259615fc0f196c19b579b27a888563131108a34ef131ff62fa71dd55f"
  }
];
const reviewedFeinLocationGalleries = {
  "fein-uaill": [
    {
      "image": "assets/locations/discord/496ea1a8202644db8315250af60c21a77f56470caa735a700b2b2b88ad3fdada.webp",
      "title": "Fein Uaill — map handout",
      "alt": "Fein Uaill — map handout",
      "caption": "The file names Fein Uaill; Mirwen offers a map of the land and the Writer attaches it while handing it over. The map depicts the island and named settlements.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1327845245756510293"
    },
    {
      "image": "assets/locations/discord/e4b37158af482ca5f2662ac1cce4aa3c4ec39a956b43c2a9cf7aa9b2290b5413.webp",
      "title": "Old fortress northeast of Zarathis",
      "alt": "Old fortress northeast of Zarathis",
      "caption": "The preceding narration explicitly places this old fortress northeast of Zarathis on Fein Uaill. Possible former use as prison or laboratory remains uncertain. It is not identified as the Titanwall or Niriin Estate.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1424443473657987274"
    },
    {
      "image": "assets/locations/discord/eb6e428df2c2b3c44d21cf2f4aacff99472fc4bb69e2c405e5635688a3ed995d.webp",
      "title": "Fein Uaill memorial — evening venue",
      "alt": "Fein Uaill memorial — evening venue",
      "caption": "Qualified reference. The scene concerns Elenia and Adelia’s memorial in their estate while Zarathian guests arrive. The image depicts the evening venue, but the immediate text does not explicitly name that estate. It is not automatically Aria’s Tomb or Niriin Estate.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1446682738529665205"
    },
    {
      "image": "assets/locations/discord/0c5988725d8a5be2e2dba5d65c0272989524fa72e6d90516d0f550b0c51dffe1.webp",
      "title": "Fein Uaill — Olokun’s unnamed landscape painting",
      "alt": "Fein Uaill — Olokun’s unnamed landscape painting",
      "caption": "Qualified reference. Olokun calls this another scene of Fein. Although posted in the Titanwall thread, the pictured site is not specifically identified as the Titanwall.",
      "source": "https://discord.com/channels/1177270231513694249/1311747644879802489/1424933427949604954"
    },
    {
      "image": "assets/locations/discord/ddc6bed9740f880b072831523178b6733a8a7ca6e3ffed442bc9e704b1598e42.webp",
      "title": "Eshnunna of the Eternal Flame — inner sanctum",
      "alt": "Eshnunna of the Eternal Flame — inner sanctum",
      "caption": "Attached directly to the opening inner-sanctum description. Seraphis dialogue discusses Eshunna as its holy place; preserve naming variation and avoid adding a floor plan.",
      "source": "https://discord.com/channels/1177270231513694249/1311748118743879830/1311748118743879830"
    },
    {
      "image": "assets/locations/discord/0908fa2544433f254a5b713a8f38af4e3b2c40adb5e288d79a1584708ce6d2b6.webp",
      "title": "Seraphis — holy city above Zarathis",
      "alt": "Seraphis — holy city above Zarathis",
      "caption": "Opening post identifies Seraphis as the holy city on a hill above Zarathis; the following guide explicitly points it out.",
      "source": "https://discord.com/channels/1177270231513694249/1311749162169012254/1311749162169012254"
    },
    {
      "image": "assets/locations/discord/bab59876586250aec73c369510f0dce3bd934f63f2ade7444e26c8dc20807031.webp",
      "title": "The Feytouched Forest — opening woodland reference",
      "alt": "The Feytouched Forest — opening woodland reference",
      "caption": "Image is attached to the opening description naming the true wilds of Fein Uaill and the Verdant Circle’s sacred forest.",
      "source": "https://discord.com/channels/1177270231513694249/1311793270799597628/1311793270799597628"
    },
    {
      "image": "assets/locations/discord/33ba2fd46e932103913e969026b09d20e0e43de0bf6e161d5a011070260c8f54.webp",
      "title": "The Feytouched Forest — wooded terrace reference",
      "alt": "The Feytouched Forest — wooded terrace reference",
      "caption": "Posted immediately after the forest’s opening description, as an additional setting reference before later quest roleplay.",
      "source": "https://discord.com/channels/1177270231513694249/1311793270799597628/1311793388592431235"
    },
    {
      "image": "assets/locations/discord/9da17a971df07f5c4337329d044f6bf4e89f3d7cfaf8f6b4c99865adbeb25eb2.webp",
      "title": "The Feytouched Forest — additional forest view",
      "alt": "The Feytouched Forest — additional forest view",
      "caption": "Third opening setting image in the explicitly named Feytouched Forest post. No exact sublocation is supplied.",
      "source": "https://discord.com/channels/1177270231513694249/1311793270799597628/1311793724958703689"
    },
    {
      "image": "assets/locations/discord/40829540fdf52cb206afc367df64b8d3a98821234ea08faf1f17699b8d2c3e0f.webp",
      "title": "The Feytouched Forest — shimmering trail",
      "alt": "The Feytouched Forest — shimmering trail",
      "caption": "The narrator describes the forest shimmering and seeming to move alongside the party as they advance; the attachment accompanies that description.",
      "source": "https://discord.com/channels/1177270231513694249/1311793270799597628/1366589417669529713"
    }
  ],
  "caislean-na-bron": [
    {
      "image": "assets/locations/discord/bade7fd96ec0b9cc508839a653d28ea09e398240e2747b70281837fc04a667c8.webp",
      "title": "Caisleán na Bróin — castle and vineyards",
      "alt": "Caisleán na Bróin — castle and vineyards",
      "caption": "The Writer introduces an old castle and vineyard with wheat fields and grapevines in the castle RP thread. The depicted castle and fields agree. This is Fein Uaill, not Gedankin.",
      "source": "https://discord.com/channels/1177270231513694249/1311776046554677291/1327856011163205764"
    },
    {
      "image": "assets/locations/discord/e6191e0355405eac19c669f5d913d21944c8d3e11fc71faf09eb12b4f5100a75.webp",
      "title": "Caisleán na Bróin — courtyard",
      "alt": "Caisleán na Bróin — courtyard",
      "caption": "The attached Writer caption explicitly says The courtyard in the castle RP thread. The image depicts a stone arch, stairs and courtyard vegetation.",
      "source": "https://discord.com/channels/1177270231513694249/1311776046554677291/1328455894387785788"
    },
    {
      "image": "assets/locations/discord/5385c331639a57f193afa3c9459eb2ceace09a19faeeee5ce7dfffe25ae0b906.webp",
      "title": "Caisleán na Bróin — Olokun’s memorial altar",
      "alt": "Caisleán na Bróin — Olokun’s memorial altar",
      "caption": "Olokun takes Wreni to the altar he made for the fallen; the image is attached to this explicit castle scene.",
      "source": "https://discord.com/channels/1177270231513694249/1311776046554677291/1452095038615191644"
    }
  ],
  "zarathis": [
    {
      "image": "assets/locations/discord/0aa0138417a114945e954814df87d2a33f7dfaf866b5ddfa2ef3a817fedd30a8.webp",
      "title": "Zarathis — arena gates",
      "alt": "Zarathis — arena gates",
      "caption": "The same caption explicitly identifies entry into Zarathis’s arena. The image depicts monumental stadium gates and stands; the filename’s artistic references do not relocate it to another fictional world.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1333603775302340709"
    },
    {
      "image": "assets/locations/discord/87ccb9795acec0513c423875dfbb7afadf6074737402ef9ecec4bac5bc097dd2.webp",
      "title": "Zarathis — ceremony hall plan",
      "alt": "Zarathis — ceremony hall plan",
      "caption": "The Writer identifies this as the floor plan of the hall in which the Zarathis gathering takes place, with major guests going to the roof. The source shows a long columned hall. The creator filename does not establish an official cathedral name.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1394857303647191405"
    },
    {
      "image": "assets/locations/discord/7b7daedd3e1e5abefc70da4b63d6ca23c53914ef461d3075c234300cd6e67580.webp",
      "title": "Zarathis — city during mourning",
      "alt": "Zarathis — city during mourning",
      "caption": "The same narration explicitly names Zarathis and its blue mourning flowers as the party travels toward the leadership council. It is a dated city illustration, not proof of permanent weather or floral conditions.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1445129916827041862"
    },
    {
      "image": "assets/locations/discord/6d7f6383c9776bf09b74432d9eadcc549cb7f6f2da1436cdb9bcffea7b468f62.webp",
      "title": "Zarathis — private council pavilion",
      "alt": "Zarathis — private council pavilion",
      "caption": "The preceding narration explicitly ushers the party into the pavilion gathering Zarathis’s powers, opening toward the holy mountains to the northeast. The image shows the speaking stage and pavilion; no additional offices or institutions are invented.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1445143883699847248"
    },
    {
      "image": "assets/locations/discord/b28f779f90f638bd590c747bec0c552dd4dace7537833460550762f1af2bd927.webp",
      "title": "Zarathis — city overview",
      "alt": "Zarathis — city overview",
      "caption": "The post opens with the description of Zarathis and uses this view immediately before the party arrives at the citadel.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1319325698632061028"
    },
    {
      "image": "assets/locations/discord/f2c953d265ffec612af97e0ad5fc465ffe6aafe135645b305f0ad1a2afc804a1.webp",
      "title": "Zarathis — library exterior",
      "alt": "Zarathis — library exterior",
      "caption": "Eldin leads Aravil through the city to a library, points it out, and they discuss its architecture. Its name is not stated; do not identify it as Thalanbor’s Library.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1410343105420595282"
    },
    {
      "image": "assets/locations/discord/9afb5bd0134a536ed0ea5e95a66a707698aab52193b8d5903f5bcb8f1ee27c52.webp",
      "title": "Zarathis — library interior",
      "alt": "Zarathis — library interior",
      "caption": "Eldin opens the library door for Aravil and the attached image accompanies the revealed interior. The library remains unnamed.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1410345316649140434"
    },
    {
      "image": "assets/locations/discord/fff0c09557e1c52e6de9b1888bfc6ce502b6f69e835b7a514ce5fc9a8c9b385c.webp",
      "title": "Zarathis — greenhouse restaurant, first view",
      "alt": "Zarathis — greenhouse restaurant, first view",
      "caption": "Magnus leads Scribonia to a restaurant that looks like a former greenhouse; this image is attached to that arrival. The restaurant has no recovered name.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1414342821803987086"
    },
    {
      "image": "assets/locations/discord/a7a8aaf2f53f311ef7e31448316dc3826ec221289f5dce835d5778a692777bb4.webp",
      "title": "Zarathis — greenhouse restaurant, second view",
      "alt": "Zarathis — greenhouse restaurant, second view",
      "caption": "Second image attached to the same explicit restaurant arrival; preserve as an alternative scene reference, not a separate named venue.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1414342821803987086"
    },
    {
      "image": "assets/locations/discord/18e717f667716a765e2ea49b3c9960257f6a8becbab4cf3eef983225c3f9e369.webp",
      "title": "Zarathis — Silver Star-favored library exterior",
      "alt": "Zarathis — Silver Star-favored library exterior",
      "caption": "Eldin explicitly visits a library preferred by the Silver Star for research. No source establishes it as Thalanbor’s Library.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1443003160850333827"
    },
    {
      "image": "assets/locations/discord/bdbdfef2809b2214a7667793f7e8f10ae97d050044330a3884c42d674c011beb.webp",
      "title": "Zarathis — research library interior",
      "alt": "Zarathis — research library interior",
      "caption": "Eldin and Magnus enter the library, observing its apparently expanding magical interior. The source does not establish its exact name.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1443007972782379100"
    },
    {
      "image": "assets/locations/discord/dfbece5b60a62c3e3eb9114eb83c00529ed554c1c3244057c55288a3b9beb71e.webp",
      "title": "Zarathis — Shard mural inside the library",
      "alt": "Zarathis — Shard mural inside the library",
      "caption": "Eldin points to a Shard mural while researching in the library. This depicts interior art, not a direct view of the Shard itself.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1443014982269931725"
    },
    {
      "image": "assets/locations/discord/893d250db645d3e087004b4e056166d303aa21c8590004593c00633f1fa86a43.webp",
      "title": "Zarathis — library chamber with mountain ceiling",
      "alt": "Zarathis — library chamber with mountain ceiling",
      "caption": "The Writer’s direct reply describes library rooms with missing glass ceilings and apparent mountains growing from them. Preserve the characters’ uncertainty about illusion versus physical structure.",
      "source": "https://discord.com/channels/1177270231513694249/1311746973241573549/1443341236227539115"
    }
  ],
  "ciaranach": [
    {
      "image": "assets/locations/discord/c22eb96c9ad83bf1e8bb9c4d420c3dccb37b379be37a55ff824d4e88c1119e9b.webp",
      "title": "Ciaránach pilgrimage — old dirt path",
      "alt": "Ciaránach pilgrimage — old dirt path",
      "caption": "Bowene leads the party out of Zarathis on an old dirt path, contrasting it with the city’s maintained roads. The following narration identifies the journey to Ciaránach. The artwork belongs to that route, not a new unnamed kingdom.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1421652174949056625"
    },
    {
      "image": "assets/locations/discord/40bbb6e2ea15a06f08c7dc4c3128042c15405632b9ae2ef5fdd3d666e858ab8f.webp",
      "title": "Ciaránach pilgrimage — snowy mountains",
      "alt": "Ciaránach pilgrimage — snowy mountains",
      "caption": "The Writer’s caption depicts snow on the pilgrimage; the next narrated arrival explicitly crests a pass toward Ciaránach. Treat it as approach-country, not the city itself.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1421667239714885704"
    },
    {
      "image": "assets/locations/discord/5ab43580425b16e7c801036f0c7fce259841f0e1af6f34b9a0540f17caa25c3c.webp",
      "title": "Ciaránach — white steps and public address",
      "alt": "Ciaránach — white steps and public address",
      "caption": "The attachment caption names Ciaránach; the expanded opening describes Bowene descending its white spine and steps. The image includes the architectural approach and speaker, so it is retained as a city scene rather than a standalone portrait.",
      "source": "https://discord.com/channels/1177270231513694249/1199083630354501673/1452824828154482788"
    },
    {
      "image": "assets/locations/discord/4f89eec1ef0b78129b2bd9c721090f03ef3f915ad2e4b98737a7c6bb7707c22e.webp",
      "title": "Ciaránach — opening setting reference",
      "alt": "Ciaránach — opening setting reference",
      "caption": "The two-message Ciaránach post opens with this GIF and its name; this is the post’s setting reference, not a source for additional architecture or history.",
      "source": "https://discord.com/channels/1177270231513694249/1311750456808312852/1311750456808312852"
    }
  ],
  "shining-shores": [
    {
      "image": "assets/locations/discord/e9587790cf9bc3392f0ca07402cf83c8d659001c4b15a65e38d3fed7d3d53be8.webp",
      "title": "The Shining Shores — harbor-city reference",
      "alt": "The Shining Shores — harbor-city reference",
      "caption": "Opening harbor description and subsequent arrival dialogue identify this scene. A guide calls the shore city the Gates of Aethor; preserve that wording alongside the separately named Gates of Aelthor post.",
      "source": "https://discord.com/channels/1177270231513694249/1311746435460366377/1311795821888671958"
    },
    {
      "image": "assets/locations/discord/c39242d182a4226e967e74550d9aabf6c81b01346d588164c68450e6d089c3db.webp",
      "title": "The Gates of Aelthor — bridge approach",
      "alt": "The Gates of Aelthor — bridge approach",
      "caption": "The opening Gates of Aelthor description and guide’s mighty-bridge dialogue directly identify the outpost approach. The guide also spells its name Aethlor; do not silently resolve that variation.",
      "source": "https://discord.com/channels/1177270231513694249/1311747360220512318/1327709047222304909"
    },
    {
      "image": "assets/locations/discord/d4001463d5a49ecc6cbacdfd8e2cdbe0fff8f4a324f08cbffd31c7f22a87059f.webp",
      "title": "The Gates of Aelthor — guard-tower surroundings",
      "alt": "The Gates of Aelthor — guard-tower surroundings",
      "caption": "Tarwen offers a nearby guard tower for a private conversation; this image accompanies the movement there.",
      "source": "https://discord.com/channels/1177270231513694249/1311747360220512318/1426261161791324254"
    }
  ],
  "titanwall-eryndor": [
    {
      "image": "assets/locations/discord/cc4c982d260a7384fb5ee8b4ed7d486e517231864fbaa8c462909bf628bc16fa.webp",
      "title": "The Titanwall of Eryndor — dam reference",
      "alt": "The Titanwall of Eryndor — dam reference",
      "caption": "This image is attached to the opening description identifying the Titanwall as the dam city controlling the river.",
      "source": "https://discord.com/channels/1177270231513694249/1311747644879802489/1311747644879802489"
    },
    {
      "image": "assets/locations/discord/b50cfdd7dde6ec1c4a50397bdec71d9d48add2aa99037c2d6676589d8f7857e6.webp",
      "title": "The Titanwall of Eryndor — castle and dam approach",
      "alt": "The Titanwall of Eryndor — castle and dam approach",
      "caption": "Posted immediately after the Titanwall’s opening dam-city description as its setting illustration, before roleplay begins.",
      "source": "https://discord.com/channels/1177270231513694249/1311747644879802489/1318090312404697108"
    }
  ],
  "niriin-estate": [
    {
      "image": "assets/locations/discord/f9241381c43b6ff785d6bb056481c02a868afd32f92f44875e54bf241c4d857c.webp",
      "title": "Niriin Estate — corridor to the dining hall",
      "alt": "Niriin Estate — corridor to the dining hall",
      "caption": "Magnus leads Eldin down an extravagant hallway toward the estate’s dining room; this image is attached to that movement.",
      "source": "https://discord.com/channels/1177270231513694249/1404850171640021103/1410681295629193236"
    },
    {
      "image": "assets/locations/discord/781eca537ba5c8d83b4ff69fe7899ef8e74542a20f8772e45b199e90195a47ec.webp",
      "title": "Niriin Estate — plant-filled dining hall",
      "alt": "Niriin Estate — plant-filled dining hall",
      "caption": "Magnus opens the dining-room door and describes its plant life and sunlight; the image accompanies that reveal.",
      "source": "https://discord.com/channels/1177270231513694249/1404850171640021103/1410684000556810333"
    },
    {
      "image": "assets/locations/discord/7f54e6fb9b6041df2c3890341e0e49204f8dfcc2c3063267a5de062f8f72219d.webp",
      "title": "Niriin Estate — library doors",
      "alt": "Niriin Estate — library doors",
      "caption": "Adelia is directed to Magnus in the estate library; the narrator attaches this image while describing its massive doors.",
      "source": "https://discord.com/channels/1177270231513694249/1404850171640021103/1474203608408133743"
    },
    {
      "image": "assets/locations/discord/241d58ec001413eeeacbc981ea33e7ef23593ca7dc2092fe9551927503f7128f.webp",
      "title": "Niriin Estate — public library interior",
      "alt": "Niriin Estate — public library interior",
      "caption": "Second image accompanying the same library-door reveal in Magnus’s estate. This is distinct from the city’s other libraries.",
      "source": "https://discord.com/channels/1177270231513694249/1404850171640021103/1474203608408133743"
    }
  ]
};
Object.entries(reviewedFeinLocationGalleries).forEach(([id, gallery]) => {
  const media = window.FENUMION_MEDIA.articles[id] || (window.FENUMION_MEDIA.articles[id] = {});
  media.gallery = [...(media.gallery || []), ...gallery.filter(item => !(media.gallery || []).some(existing => existing.image === item.image))];
});
const reviewedFeinLocationViews = {
  "The Shining Shores": {
    "image": "assets/locations/discord/e9587790cf9bc3392f0ca07402cf83c8d659001c4b15a65e38d3fed7d3d53be8.webp",
    "imageCaption": "Opening harbor description and subsequent arrival dialogue identify this scene. A guide calls the shore city the Gates of Aethor; preserve that wording alongside the separately named Gates of Aelthor post."
  },
  "Zarathis": {
    "image": "assets/locations/discord/b28f779f90f638bd590c747bec0c552dd4dace7537833460550762f1af2bd927.webp",
    "imageCaption": "The post opens with the description of Zarathis and uses this view immediately before the party arrives at the citadel."
  },
  "Gates of Aelthor": {
    "image": "assets/locations/discord/c39242d182a4226e967e74550d9aabf6c81b01346d588164c68450e6d089c3db.webp",
    "imageCaption": "The opening Gates of Aelthor description and guide’s mighty-bridge dialogue directly identify the outpost approach. The guide also spells its name Aethlor; do not silently resolve that variation."
  },
  "The Titanwall of Eryndor": {
    "image": "assets/locations/discord/cc4c982d260a7384fb5ee8b4ed7d486e517231864fbaa8c462909bf628bc16fa.webp",
    "imageCaption": "This image is attached to the opening description identifying the Titanwall as the dam city controlling the river."
  },
  "Eshnunna of the Eternal Flame": {
    "image": "assets/locations/discord/ddc6bed9740f880b072831523178b6733a8a7ca6e3ffed442bc9e704b1598e42.webp",
    "imageCaption": "Attached directly to the opening inner-sanctum description. Seraphis dialogue discusses Eshunna as its holy place; preserve naming variation and avoid adding a floor plan."
  },
  "Seraphis": {
    "image": "assets/locations/discord/0908fa2544433f254a5b713a8f38af4e3b2c40adb5e288d79a1584708ce6d2b6.webp",
    "imageCaption": "Opening post identifies Seraphis as the holy city on a hill above Zarathis; the following guide explicitly points it out."
  },
  "Ciaránach": {
    "image": "assets/locations/discord/4f89eec1ef0b78129b2bd9c721090f03ef3f915ad2e4b98737a7c6bb7707c22e.webp",
    "imageCaption": "The two-message Ciaránach post opens with this GIF and its name; this is the post’s setting reference, not a source for additional architecture or history."
  },
  "The Feytouched Forest": {
    "image": "assets/locations/discord/bab59876586250aec73c369510f0dce3bd934f63f2ade7444e26c8dc20807031.webp",
    "imageCaption": "Image is attached to the opening description naming the true wilds of Fein Uaill and the Verdant Circle’s sacred forest."
  },
  "Niriin Estate": {
    "image": "assets/locations/discord/f9241381c43b6ff785d6bb056481c02a868afd32f92f44875e54bf241c4d857c.webp",
    "imageCaption": "Magnus leads Eldin down an extravagant hallway toward the estate’s dining room; this image is attached to that movement."
  }
};
Object.entries(reviewedFeinLocationViews).forEach(([title, media]) => {
  Object.assign(window.FENUMION_MEDIA.locations[title] || (window.FENUMION_MEDIA.locations[title] = {}), media);
});
// END REVIEWED FEIN UAILL LOCATION ART 2026-10-12

// BEGIN REVIEWED GAEL LOCATION ART 2026-10-12
window.FENUMION_GAEL_LOCATION_ART = [
  {
    "reviewNumber": 46,
    "article": "tower-of-gael",
    "image": "assets/locations/discord/ce0ac2b049a0b10ab7ce7e73a61686f00d5becbbdfa6a4b28301482decda8ce3.webp",
    "title": "Tower of Gael — lighthouse setting",
    "confidence": "clear",
    "originalSha256": "ce0ac2b049a0b10ab7ce7e73a61686f00d5becbbdfa6a4b28301482decda8ce3",
    "publishedSha256": "7442af27dc8fefd71907a05bbf382350b1bf4b29f973602c846ffa486b59c443"
  },
  {
    "reviewNumber": 210,
    "article": "tower-of-gael",
    "image": "assets/locations/discord/428469f4cbd4b524bd95ecbb732bcb408716df7f1c386d51300d0a4e66b52e97.webp",
    "title": "Tower of Gael — residential door",
    "confidence": "clear",
    "originalSha256": "428469f4cbd4b524bd95ecbb732bcb408716df7f1c386d51300d0a4e66b52e97",
    "publishedSha256": "abf30639d7a2f79715c00840f556a25daf3453dfdcc7e34f718a61bd8468d036"
  },
  {
    "reviewNumber": 267,
    "article": "gael",
    "image": "assets/locations/discord/9cec33d27b4c1e36c5d009f29b112c001606c7a8dc20d0bdecfbf5c9540b2a02.webp",
    "title": "Gael — Wren’s refugee camp plan",
    "confidence": "qualified",
    "originalSha256": "9cec33d27b4c1e36c5d009f29b112c001606c7a8dc20d0bdecfbf5c9540b2a02",
    "publishedSha256": "68c0f5c35acfed0e1efbc8119594ea3a2689df08c854eb862d88944da813fe78"
  },
  {
    "reviewNumber": 274,
    "article": "gael",
    "image": "assets/locations/discord/d3b5095331de957a4abdb10b85fa1239eb9b3844ca9c6a01a0dc437338046d2a.webp",
    "title": "Gael — ruined refugee encampment",
    "confidence": "clear",
    "originalSha256": "d3b5095331de957a4abdb10b85fa1239eb9b3844ca9c6a01a0dc437338046d2a",
    "publishedSha256": "0a9956924776d8191f6c408ebb18dee9b23e90b5dccd9ad0579b86a6add8e239"
  },
  {
    "reviewNumber": 275,
    "article": "gael",
    "image": "assets/locations/discord/3413f06b5c4f1329221f92716234db76a0a77a209578f7ceedb95166e65e73d8.webp",
    "title": "Gael — woodland threat beside the refugee camp",
    "confidence": "clear",
    "originalSha256": "3413f06b5c4f1329221f92716234db76a0a77a209578f7ceedb95166e65e73d8",
    "publishedSha256": "57ef5f86687e7ec6ccc1c132a1911c87928200be8b984e74fb27fb9f4161ddd2"
  },
  {
    "reviewNumber": 281,
    "article": "gael",
    "image": "assets/locations/discord/60b08860ab232ae3aa43cae32d245ea2173178f6c4d435655443e34734971bdd.webp",
    "title": "Gael Open-Air Market — first planning map",
    "confidence": "qualified",
    "originalSha256": "60b08860ab232ae3aa43cae32d245ea2173178f6c4d435655443e34734971bdd",
    "publishedSha256": "399d0842750866b01ac3979d197067f3619647ccd4630aa755fbd89f62d85766"
  },
  {
    "reviewNumber": 282,
    "article": "gael",
    "image": "assets/locations/discord/604c38b87d358e354ab2d5492d06bfada9038ec72bf04700740894c3645ecc35.webp",
    "title": "Gael Open-Air Market — alternative planning map",
    "confidence": "qualified",
    "originalSha256": "604c38b87d358e354ab2d5492d06bfada9038ec72bf04700740894c3645ecc35",
    "publishedSha256": "5a86ea042e640d6a34d57592c53f6d6c945c3ebf0e5ee5c3f526dbf218693044"
  },
  {
    "reviewNumber": 300,
    "article": "tower-of-gael",
    "image": "assets/locations/discord/68710fe7f700e0ac64c98b067a73b38588cf52ee1873b58911486ba15f382556.webp",
    "title": "Tower of Gael — meeting-room illustration",
    "confidence": "clear",
    "originalSha256": "68710fe7f700e0ac64c98b067a73b38588cf52ee1873b58911486ba15f382556",
    "publishedSha256": "64e679c74f5c0b81fd8c9142824e16252f1c2b65455fdcb220977e2fe753560f"
  },
  {
    "reviewNumber": 302,
    "article": "tower-of-gael",
    "image": "assets/locations/discord/c98a0eb3f3c88863b6047c9a8fb60b2741f4186e1f21a23a9d36dd10bc57b09c.webp",
    "title": "The Library of Nuru — opening library reference",
    "confidence": "clear",
    "originalSha256": "c98a0eb3f3c88863b6047c9a8fb60b2741f4186e1f21a23a9d36dd10bc57b09c",
    "publishedSha256": "2fc0fdd3e29f6dff4ded60d6185c090d1e846b6c452787f3fa84c227b8058f12"
  },
  {
    "reviewNumber": 337,
    "article": "gael",
    "image": "assets/locations/discord/e4ec0779023b223b73ff3dc0013c1f89d3a775e9f8ec8aace8bf1679b45209de.webp",
    "title": "Gael — map consulted in the Library of Nuru",
    "confidence": "clear",
    "originalSha256": "e4ec0779023b223b73ff3dc0013c1f89d3a775e9f8ec8aace8bf1679b45209de",
    "publishedSha256": "d8c18ad5521ef5926668d41022884b0c68c7b0498e4633e07167ded692ec3543"
  },
  {
    "reviewNumber": 344,
    "article": "tower-of-gael",
    "image": "assets/locations/discord/764d2097dc7c01c4858039a2216c4ea1aebb99e9019f29efd188b55370c93234.webp",
    "title": "Sanctum of the Wise — upper tower room",
    "confidence": "clear",
    "originalSha256": "764d2097dc7c01c4858039a2216c4ea1aebb99e9019f29efd188b55370c93234",
    "publishedSha256": "f0fce95e81696828be1e5b35c2d2c7a5ceab64e8fb39f74d136359a408601948"
  },
  {
    "reviewNumber": 355,
    "article": "tower-of-gael",
    "image": "assets/locations/discord/1e19fa1775cc63728e975e6a65d6aac53a6eb20cad9b5a2f93a5309f4e58d677.webp",
    "title": "Sanctum of the Wise — altar reference",
    "confidence": "clear",
    "originalSha256": "1e19fa1775cc63728e975e6a65d6aac53a6eb20cad9b5a2f93a5309f4e58d677",
    "publishedSha256": "e032a748d90eb96396af961efcc8405ad35bcadf3a30dc44edb8b1a2df49895e"
  },
  {
    "reviewNumber": 360,
    "article": "gael",
    "image": "assets/locations/discord/7683b2460e6114c7d570673b6ef2a18a96836604229df8196cc44729fbd18a06.webp",
    "title": "Titan’s Watch — ruined titan and cathedral surroundings",
    "confidence": "clear",
    "originalSha256": "7683b2460e6114c7d570673b6ef2a18a96836604229df8196cc44729fbd18a06",
    "publishedSha256": "5c40a4445dc83a3f5480894ac039462c944995f7cb173f7e47d0ec5274370542"
  },
  {
    "reviewNumber": 361,
    "article": "gael",
    "image": "assets/locations/discord/60a7d96660ca581f3046f8613001deb4bdee160b39532015d12eea1a682a4ac2.webp",
    "title": "The Cathedral — illustrated floor detail",
    "confidence": "clear",
    "originalSha256": "60a7d96660ca581f3046f8613001deb4bdee160b39532015d12eea1a682a4ac2",
    "publishedSha256": "864972e8765c3478f3bdaf5ecac7b226343330e2f5de0d60dbdff33747293a9d"
  },
  {
    "reviewNumber": 362,
    "article": "gael",
    "image": "assets/locations/discord/7b8b6c1f0a07e7a6eb83c3ffb0b49714c762db065c84e7d945f8c4671356a191.webp",
    "title": "The Road — route toward the Plains of Trial",
    "confidence": "clear",
    "originalSha256": "7b8b6c1f0a07e7a6eb83c3ffb0b49714c762db065c84e7d945f8c4671356a191",
    "publishedSha256": "1b23488328ba635d06cc4eb299ae26fde962ef42357a6fd1745017b7d159e25d"
  },
  {
    "reviewNumber": 363,
    "article": "gael",
    "image": "assets/locations/discord/41016eaf3e2f127ee3c5f12781e1d580041697f9e9c47951496a6fd158702f5c.webp",
    "title": "The Road — wasteland during Wren’s search",
    "confidence": "clear",
    "originalSha256": "41016eaf3e2f127ee3c5f12781e1d580041697f9e9c47951496a6fd158702f5c",
    "publishedSha256": "4ad860e36b28a1e3aa841b5d0099013ff455a8a1508129eee201b536351ec2b3"
  },
  {
    "reviewNumber": 367,
    "article": "gael",
    "image": "assets/locations/discord/05bc8a26a36442d066982c52c2bfd76594bccde005e7664b5130d5c76ca035c2.webp",
    "title": "The Coast — rocky landing cove",
    "confidence": "clear",
    "originalSha256": "05bc8a26a36442d066982c52c2bfd76594bccde005e7664b5130d5c76ca035c2",
    "publishedSha256": "e24ff5a06667966a1ee8a277000b7ad08a35e4015f57b5dc846e4d5cd1f09575"
  },
  {
    "reviewNumber": 368,
    "article": "gael",
    "image": "assets/locations/discord/d4c8c8e4662d8f53eded036d31358d0ed18f28b571e43b68490d5d7934cb07f5.webp",
    "title": "The Coast — visiting red-flagged ship",
    "confidence": "qualified",
    "originalSha256": "d4c8c8e4662d8f53eded036d31358d0ed18f28b571e43b68490d5d7934cb07f5",
    "publishedSha256": "913030ff4cd9948789b9a6fe1f5c05c4b0ab770c11fc11c20a4b1215087a9a87"
  },
  {
    "reviewNumber": 380,
    "article": "gael",
    "image": "assets/locations/discord/999933344333e00bc37b4437f0386b582ed8bf2e3195ea7592c0afcefdecc1d8.webp",
    "title": "The Coast — quiet sunset shore",
    "confidence": "clear",
    "originalSha256": "999933344333e00bc37b4437f0386b582ed8bf2e3195ea7592c0afcefdecc1d8",
    "publishedSha256": "0e8d5412f81c0a9c6bf9e387bd68ef73f75585686fed5d4992c861242a9c22ea"
  },
  {
    "reviewNumber": 382,
    "article": "gael",
    "image": "assets/locations/discord/a6793045ebff14f251817bfefc07bcdbf994a05c4b98d571b779272e7df8fc5c.webp",
    "title": "Vysaeth’s Tomb — opening setting illustration",
    "confidence": "clear",
    "originalSha256": "a6793045ebff14f251817bfefc07bcdbf994a05c4b98d571b779272e7df8fc5c",
    "publishedSha256": "ed4b995b1d41361eefe203c32259c40df6b701c51cdd947a238b4e60e55fe61c"
  },
  {
    "reviewNumber": 384,
    "article": "gael",
    "image": "assets/locations/discord/f5309e91c798ff217a73d748ca28fb292c06e854934b012199bbdd1ede00cbdb.webp",
    "title": "The Cruicible of Gael — top view",
    "confidence": "clear",
    "originalSha256": "f5309e91c798ff217a73d748ca28fb292c06e854934b012199bbdd1ede00cbdb",
    "publishedSha256": "8d24bfe6a26b0066c6477a4719e35d633bc9722a2fcec07a1b3f71a6dad9207c"
  },
  {
    "reviewNumber": 387,
    "article": "gael",
    "image": "assets/locations/discord/7a3f9fafd888ba4cd6c75eb8411c43903a088068bfe76a8c6f089efcab2b47fa.webp",
    "title": "Hope — newly sanctified ground",
    "confidence": "clear",
    "originalSha256": "7a3f9fafd888ba4cd6c75eb8411c43903a088068bfe76a8c6f089efcab2b47fa",
    "publishedSha256": "eab9be6e41b8fb6ff3ce259fc4a9138580f6c3bbc1f89e4928b45ee7fa408890"
  },
  {
    "reviewNumber": 388,
    "article": "gael",
    "image": "assets/locations/discord/249feea92033793b12ea048ddd99c9a1f3eacfefa12319318ed4d522f2245d7c.webp",
    "title": "Hope — illustration accompanying its desolation",
    "confidence": "clear",
    "originalSha256": "249feea92033793b12ea048ddd99c9a1f3eacfefa12319318ed4d522f2245d7c",
    "publishedSha256": "40ceec456f78346ba0785271d9c631316e55243909be44eb617c15798e872804"
  },
  {
    "reviewNumber": 389,
    "article": "gael",
    "image": "assets/locations/discord/287b30c1f3b1e5548a6a1678a864fb789235a87d080cdcfaa0c273dcd0250e95.webp",
    "title": "Stake — living tree near Hope",
    "confidence": "clear",
    "originalSha256": "287b30c1f3b1e5548a6a1678a864fb789235a87d080cdcfaa0c273dcd0250e95",
    "publishedSha256": "3685dadaa55140b948eb1451c18e5fcd1c5f4c18b88d9a1221957943975eedc6"
  },
  {
    "reviewNumber": 395,
    "article": "gael",
    "image": "assets/locations/discord/14f45545533df74baec9f2fd286de7a3184ed75b4de3ddad8f2f719dca4158c5.webp",
    "title": "The Cathedral — encounter reference plan",
    "confidence": "clear",
    "originalSha256": "14f45545533df74baec9f2fd286de7a3184ed75b4de3ddad8f2f719dca4158c5",
    "publishedSha256": "252ea5b4fac4a7b945968ac44f85e69588154ebb6fddc5eca3b860aa20c2d4bc"
  },
  {
    "reviewNumber": 400,
    "article": "gael",
    "image": "assets/locations/discord/efde10f1f6560055fb9bae7f843935c93c117e6f4d65400867e65cb34fed7894.webp",
    "title": "The Cathedral — entrance plan detail",
    "confidence": "clear",
    "originalSha256": "efde10f1f6560055fb9bae7f843935c93c117e6f4d65400867e65cb34fed7894",
    "publishedSha256": "ef4177ea39e2b1e66d8196d3d83e44c9e1cdbcb5a7a9b42ccc344ae18de77cba"
  },
  {
    "reviewNumber": 402,
    "article": "gael",
    "image": "assets/locations/discord/0cc6678941fedbfd921cb89e972d30ac20fc5599e897a07f552f1fbab4e60899.webp",
    "title": "The Cathedral — hallway plan detail",
    "confidence": "clear",
    "originalSha256": "0cc6678941fedbfd921cb89e972d30ac20fc5599e897a07f552f1fbab4e60899",
    "publishedSha256": "6124ad19f30b3675ffb94fd6d8f9ca22046a802f189aa89807268852ddbca342"
  },
  {
    "reviewNumber": 403,
    "article": "gael",
    "image": "assets/locations/discord/66bc26f295e52cf31163339732dfbc7853fc29af0b20526f980cf5cc1a81eeb4.webp",
    "title": "The Cathedral — chamber revealed during exploration",
    "confidence": "clear",
    "originalSha256": "66bc26f295e52cf31163339732dfbc7853fc29af0b20526f980cf5cc1a81eeb4",
    "publishedSha256": "0a07a8d198804db52bcafa16e68d8521861c8b1a79919dbfc98644e671d02b7d"
  },
  {
    "reviewNumber": 407,
    "article": "gael",
    "image": "assets/locations/discord/f05baf1527b792a1f7788f411a3113824db47a00c747d4adee4700f2cf124efa.webp",
    "title": "Crustacean Cove — opening coastal reference",
    "confidence": "clear",
    "originalSha256": "f05baf1527b792a1f7788f411a3113824db47a00c747d4adee4700f2cf124efa",
    "publishedSha256": "1a87921d9976e9a307e6b8fe501eafddcdbd14c67065d9705e9ea7ef02545cb0"
  },
  {
    "reviewNumber": 413,
    "article": "gael",
    "image": "assets/locations/discord/1a192a10ce26bf6054d53f233db921c5a99640bdd7212d6c01909cf7e4b0e541.webp",
    "title": "Mage’s Ruin — opening courtyard reference",
    "confidence": "clear",
    "originalSha256": "1a192a10ce26bf6054d53f233db921c5a99640bdd7212d6c01909cf7e4b0e541",
    "publishedSha256": "5d70e2b74d68184fea7b3509b3fc48a92d0c329f6f1e1dee468a20f9471cc4b3"
  },
  {
    "reviewNumber": 414,
    "article": "gael",
    "image": "assets/locations/discord/bc7c49918d0fa178222597a1e7d20073ef445f6cd01daf4e511357a83fa30f74.webp",
    "title": "Mage’s Ruin — fortress approach map",
    "confidence": "clear",
    "originalSha256": "bc7c49918d0fa178222597a1e7d20073ef445f6cd01daf4e511357a83fa30f74",
    "publishedSha256": "2a38796782e27c9c62d2bfc577eda955a0f972a3e7a25cf1afae7c70b645cb87"
  },
  {
    "reviewNumber": 416,
    "article": "gael",
    "image": "assets/locations/discord/114d94e693222b91b23edc759c7f25e464def4d5124277f44fc297ac74f85027.webp",
    "title": "Shadow Angel Forest — opening woodland reference",
    "confidence": "clear",
    "originalSha256": "114d94e693222b91b23edc759c7f25e464def4d5124277f44fc297ac74f85027",
    "publishedSha256": "d0307d640aa6c9e690ff83f55f4557b99c0af4268ddb0d2af3fb2b4c02002d53"
  },
  {
    "reviewNumber": 418,
    "article": "gael",
    "image": "assets/locations/discord/a4dd359e9032c4a16b270824657c691953e8e275f1e1d0c7a7b2f77bd4ed6c3d.webp",
    "title": "Shadow Angel Forest — refugee house design",
    "confidence": "qualified",
    "originalSha256": "a4dd359e9032c4a16b270824657c691953e8e275f1e1d0c7a7b2f77bd4ed6c3d",
    "publishedSha256": "e33380f152157984d375dedf5e6f1c3082cd9912b02a9cc501878e33a1cf64f3"
  },
  {
    "reviewNumber": 419,
    "article": "gael",
    "image": "assets/locations/discord/eda2206f93c1f2577b800967cb2cca94b6fab42a70720bb3ced2233239e68cd3.webp",
    "title": "Shadow Angel Forest — completed structure plan",
    "confidence": "clear",
    "originalSha256": "eda2206f93c1f2577b800967cb2cca94b6fab42a70720bb3ced2233239e68cd3",
    "publishedSha256": "f5a8d7556fb535ee09005e17cb8ade04f1765f1aaff24d483756946c0989d375"
  },
  {
    "reviewNumber": 420,
    "article": "gael",
    "image": "assets/locations/discord/576ad656a5cea5d183d0eed6b845833baf37f803a7f554ab175eb447fb31314b.webp",
    "title": "Shadow Angel Forest — color-transition illustration",
    "confidence": "qualified",
    "originalSha256": "576ad656a5cea5d183d0eed6b845833baf37f803a7f554ab175eb447fb31314b",
    "publishedSha256": "bec5bde44bc7af1b986ab1d36b7c45be48f27cddae68213a089848466c924ff6"
  },
  {
    "reviewNumber": 422,
    "article": "gael",
    "image": "assets/locations/discord/00ec070a0ff6120473eaf2f62bc87e2efeb9e5c14cb0cb0e914a250b453ffc69.webp",
    "title": "Shadow Angel Forest — orb found along the stream",
    "confidence": "clear",
    "originalSha256": "00ec070a0ff6120473eaf2f62bc87e2efeb9e5c14cb0cb0e914a250b453ffc69",
    "publishedSha256": "54b369ef4d32a17689bb5c6ecc15382d12abe49668fee5c9051c5e5952a4563f"
  },
  {
    "reviewNumber": 424,
    "article": "gael",
    "image": "assets/locations/discord/d36557b649908c9dfeca11a131be0a8088a4db66239aa9ce77ac3db7a535e49b.webp",
    "title": "Shadow Angel Forest — hole found during the hunt",
    "confidence": "qualified",
    "originalSha256": "d36557b649908c9dfeca11a131be0a8088a4db66239aa9ce77ac3db7a535e49b",
    "publishedSha256": "4050eaaca71b81a01daae16f682e4adfcea8ed6947bfb4dcc92dee2b0f1437ac"
  },
  {
    "reviewNumber": 431,
    "article": "gael",
    "image": "assets/locations/discord/30e05e8638284af7dc414f3decd323e619610577b0025314f26f4cda7c327d40.webp",
    "title": "Plains of Trial — opening landscape reference",
    "confidence": "clear",
    "originalSha256": "30e05e8638284af7dc414f3decd323e619610577b0025314f26f4cda7c327d40",
    "publishedSha256": "859b591a7311c46469c2262b90c3fc2b70d05a5dc0ae3f13179ffecdbf7626ac"
  },
  {
    "reviewNumber": 434,
    "article": "gael",
    "image": "assets/locations/discord/4ea118ae14c17f4018bfe34490acc22af351b832fd972fd87ebe144ffb05927b.webp",
    "title": "Plains of Trial — smoke-covered interior",
    "confidence": "clear",
    "originalSha256": "4ea118ae14c17f4018bfe34490acc22af351b832fd972fd87ebe144ffb05927b",
    "publishedSha256": "9055a9de3cce77348d7a607287a700711842b2bcee0a47c8b1192d4295621720"
  },
  {
    "reviewNumber": 435,
    "article": "gael",
    "image": "assets/locations/discord/a4c15af5ff096c670050c2df95982ce1c3a8ec79f4b211d44b53b10444158e83.webp",
    "title": "Plains of Trial — burning fissure in the hills",
    "confidence": "clear",
    "originalSha256": "a4c15af5ff096c670050c2df95982ce1c3a8ec79f4b211d44b53b10444158e83",
    "publishedSha256": "9714a5b78e2b1e45d285eda15e7cf01d4620433ab23cdab9f0c73d0cccdde374"
  },
  {
    "reviewNumber": 436,
    "article": "gael",
    "image": "assets/locations/discord/e311effd7439e4667ff7e33b37ec4ee1dd47ae7aaeda76de9d246073b1b46f38.webp",
    "title": "Plains of Trial — cavern seen by Elenia",
    "confidence": "clear",
    "originalSha256": "e311effd7439e4667ff7e33b37ec4ee1dd47ae7aaeda76de9d246073b1b46f38",
    "publishedSha256": "eea3b075ee2aa66c50b5a261f9298e641e0903642cc68007514eb43960221b2b"
  },
  {
    "reviewNumber": 444,
    "article": "gael",
    "image": "assets/locations/discord/178bb416dda479943d4a0e3ba5ef1a3d43ea9652a8c8dbba8666da7ad7a39b90.webp",
    "title": "Plains of Trial — beyond the last border",
    "confidence": "clear",
    "originalSha256": "178bb416dda479943d4a0e3ba5ef1a3d43ea9652a8c8dbba8666da7ad7a39b90",
    "publishedSha256": "88e0d7dc3d0a659fe7f192238e297622480cba9a4e4e6662f97687c581a71db6"
  },
  {
    "reviewNumber": 447,
    "article": "gael",
    "image": "assets/locations/discord/011952eb1c7edfc43444a95de37a0029d1a019256d74b4f67ad87b65aee8b34c.webp",
    "title": "Plains of Trial — bleak day beneath the smog",
    "confidence": "clear",
    "originalSha256": "011952eb1c7edfc43444a95de37a0029d1a019256d74b4f67ad87b65aee8b34c",
    "publishedSha256": "05ca5abb9ebc32f56fe39c2560c277e9316c515368ff59f81a809577126fd376"
  },
  {
    "reviewNumber": 475,
    "article": "gael",
    "image": "assets/locations/discord/693a5816d69c81944abfc2c09eaa8a842449e1da36bb9e03b0cbb9a3f8483fc1.webp",
    "title": "Gael hunt — sunlit woodland reference",
    "confidence": "qualified",
    "originalSha256": "693a5816d69c81944abfc2c09eaa8a842449e1da36bb9e03b0cbb9a3f8483fc1",
    "publishedSha256": "9c9750a6e3b2d954c2254b1bb1874cac3d176165860b53d98aff90d9dc60e42b"
  },
  {
    "reviewNumber": 496,
    "article": "gael",
    "image": "assets/locations/discord/f8ee52e685f3dc538d2bf00f2c25b05981aad0ae45f505282b545d438f585f57.webp",
    "title": "Gael hunt — strange woodland path",
    "confidence": "clear",
    "originalSha256": "f8ee52e685f3dc538d2bf00f2c25b05981aad0ae45f505282b545d438f585f57",
    "publishedSha256": "4468a6486ce526dcfca5e9645ecd3219a8a46fbfb5313886a9db44125216f475"
  },
  {
    "reviewNumber": 500,
    "article": "gael",
    "image": "assets/locations/discord/52ab75402ff3f9692e16c57f5f7c42e0113f13af22741590214a1a60b2f29234.webp",
    "title": "Gael hunt — DM-prepared woodland view",
    "confidence": "qualified",
    "originalSha256": "52ab75402ff3f9692e16c57f5f7c42e0113f13af22741590214a1a60b2f29234",
    "publishedSha256": "4ff035bdd4393e56b53083fe8ed563b4a39cca8cf74024ad7d165553ac8a56f4"
  },
  {
    "reviewNumber": 507,
    "article": "gael",
    "image": "assets/locations/discord/b974dc1d8ba1df718724ace90eb723ae17b3a62b62d1400ac61146f336558dbf.webp",
    "title": "Gael hunt — dark forest reference",
    "confidence": "qualified",
    "originalSha256": "b974dc1d8ba1df718724ace90eb723ae17b3a62b62d1400ac61146f336558dbf",
    "publishedSha256": "7622d0d9ad624b972601e48ba9ab30c46b28bf867d2356a36d25e2f3f659c0a8"
  },
  {
    "reviewNumber": 519,
    "article": "gael",
    "image": "assets/locations/discord/6e5ca56369ba0bc5618fe2826ad0ffce1a7877b9fc82cd62520509254f03cd32.webp",
    "title": "Gael hunt — forest at the danger zone",
    "confidence": "qualified",
    "originalSha256": "6e5ca56369ba0bc5618fe2826ad0ffce1a7877b9fc82cd62520509254f03cd32",
    "publishedSha256": "9fba7408ac3be79c06126d27abcf2ce1c735ba0d0543efb48f41507e2047afb6"
  }
];
const reviewedGaelLocationGalleries = {
  "tower-of-gael": [
    {
      "image": "assets/locations/discord/ce0ac2b049a0b10ab7ce7e73a61686f00d5becbbdfa6a4b28301482decda8ce3.webp",
      "title": "Tower of Gael — lighthouse setting",
      "alt": "Tower of Gael — lighthouse setting",
      "caption": "Gael. Opening image of the Tower of Gael, identified as the explorers’ refuge under Nuru’s Eye.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1250334670957051958"
    },
    {
      "image": "assets/locations/discord/428469f4cbd4b524bd95ecbb732bcb408716df7f1c386d51300d0a4e66b52e97.webp",
      "title": "Tower of Gael — residential door",
      "alt": "Tower of Gael — residential door",
      "caption": "Gael. Bitoshi and Adelia climb the tower stairs to their assigned residence; this image accompanies the opening of that door.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1266248826151501894"
    },
    {
      "image": "assets/locations/discord/68710fe7f700e0ac64c98b067a73b38588cf52ee1873b58911486ba15f382556.webp",
      "title": "Tower of Gael — meeting-room illustration",
      "alt": "Tower of Gael — meeting-room illustration",
      "caption": "Gael. Attached during a conversation inside the tower as Severina moves to a table near the doors. The image illustrates the scene without establishing a complete floor plan.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1554544851989565571"
    },
    {
      "image": "assets/locations/discord/c98a0eb3f3c88863b6047c9a8fb60b2741f4186e1f21a23a9d36dd10bc57b09c.webp",
      "title": "The Library of Nuru — opening library reference",
      "alt": "The Library of Nuru — opening library reference",
      "caption": "Gael. The Library of Nuru’s opening image accompanies its spell list and the first accounts of copying spells there.",
      "source": "https://discord.com/channels/1177270231513694249/1250338434275348532/1250338434275348532"
    },
    {
      "image": "assets/locations/discord/764d2097dc7c01c4858039a2216c4ea1aebb99e9019f29efd188b55370c93234.webp",
      "title": "Sanctum of the Wise — upper tower room",
      "alt": "Sanctum of the Wise — upper tower room",
      "caption": "Gael. Opening post explicitly describes the Sanctum as the top room of the tower, a place for rest and communion with Nuru. This image is attached to that description.",
      "source": "https://discord.com/channels/1177270231513694249/1250444114387013673/1250444114387013673"
    },
    {
      "image": "assets/locations/discord/1e19fa1775cc63728e975e6a65d6aac53a6eb20cad9b5a2f93a5309f4e58d677.webp",
      "title": "Sanctum of the Wise — altar reference",
      "alt": "Sanctum of the Wise — altar reference",
      "caption": "Gael. The guide points out the altar and tells the visitor to ask for what is needed; this image accompanies that direct interaction.",
      "source": "https://discord.com/channels/1177270231513694249/1250444114387013673/1313992659597004830"
    }
  ],
  "gael": [
    {
      "image": "assets/locations/discord/9cec33d27b4c1e36c5d009f29b112c001606c7a8dc20d0bdecfbf5c9540b2a02.webp",
      "title": "Gael — Wren’s refugee camp plan",
      "alt": "Gael — Wren’s refugee camp plan",
      "caption": "Gael. Qualified reference. Wren presents a drawn plan for a camp with a central hearth, family tents, kitchen, first-aid shelter and supplies. This is a proposed arrangement, not proof that every drawn feature was built.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1365744082462183594"
    },
    {
      "image": "assets/locations/discord/d3b5095331de957a4abdb10b85fa1239eb9b3844ca9c6a01a0dc437338046d2a.webp",
      "title": "Gael — ruined refugee encampment",
      "alt": "Gael — ruined refugee encampment",
      "caption": "Gael. Lucido and Anky reach the refugee clearing and find torn tents and the structure built by Fenwick and Tobias in ruins. This depicts that historical scene, not the current state of every Gael settlement.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1441278646026375201"
    },
    {
      "image": "assets/locations/discord/3413f06b5c4f1329221f92716234db76a0a77a209578f7ceedb95166e65e73d8.webp",
      "title": "Gael — woodland threat beside the refugee camp",
      "alt": "Gael — woodland threat beside the refugee camp",
      "caption": "Gael. During the same refugee-camp investigation, a shriek and eyes among the trees accompany this image. The wood is not specifically named as Shadow Angel Forest.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1441295467647602740"
    },
    {
      "image": "assets/locations/discord/60b08860ab232ae3aa43cae32d245ea2173178f6c4d435655443e34734971bdd.webp",
      "title": "Gael Open-Air Market — first planning map",
      "alt": "Gael Open-Air Market — first planning map",
      "caption": "Gael. Qualified reference. Farkur describes a basic open-air stall for each trade and later individual shops. This attached planning map is explicitly followed by the note “future”; it is not a completed town survey.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1499926278378094808"
    },
    {
      "image": "assets/locations/discord/604c38b87d358e354ab2d5492d06bfada9038ec72bf04700740894c3645ecc35.webp",
      "title": "Gael Open-Air Market — alternative planning map",
      "alt": "Gael Open-Air Market — alternative planning map",
      "caption": "Gael. Qualified reference. Second illustration accompanying Farkur’s proposed artisan market. The adjacent “future” note and discussion of space and materials distinguish a plan from completed construction.",
      "source": "https://discord.com/channels/1177270231513694249/1250334670957051958/1499926421517107342"
    },
    {
      "image": "assets/locations/discord/e4ec0779023b223b73ff3dc0013c1f89d3a775e9f8ec8aace8bf1679b45209de.webp",
      "title": "Gael — map consulted in the Library of Nuru",
      "alt": "Gael — map consulted in the Library of Nuru",
      "caption": "Gael. Fenwick directs the party to this map while discussing the Plains of Trial and Hope. Preserve it as the map used in that source scene, not a replacement for the Codex’s interactive map.",
      "source": "https://discord.com/channels/1177270231513694249/1250338434275348532/1392568058304004156"
    },
    {
      "image": "assets/locations/discord/7683b2460e6114c7d570673b6ef2a18a96836604229df8196cc44729fbd18a06.webp",
      "title": "Titan’s Watch — ruined titan and cathedral surroundings",
      "alt": "Titan’s Watch — ruined titan and cathedral surroundings",
      "caption": "Gael. Opening post identifies this area just beyond the tower, with ruined titan statues, a decayed cathedral and a river to the sea.",
      "source": "https://discord.com/channels/1177270231513694249/1250444809567469588/1250444809567469588"
    },
    {
      "image": "assets/locations/discord/60a7d96660ca581f3046f8613001deb4bdee160b39532015d12eea1a682a4ac2.webp",
      "title": "The Cathedral — illustrated floor detail",
      "alt": "The Cathedral — illustrated floor detail",
      "caption": "Gael. The floor image is posted during chamber exploration near Titan’s Watch and is also used in the Cathedral RP post. Religious interpretation and the floor’s mechanisms remain distinct from the artwork.",
      "source": "https://discord.com/channels/1177270231513694249/1250444809567469588/1349093493582200869"
    },
    {
      "image": "assets/locations/discord/7b8b6c1f0a07e7a6eb83c3ffb0b49714c762db065c84e7d945f8c4671356a191.webp",
      "title": "The Road — route toward the Plains of Trial",
      "alt": "The Road — route toward the Plains of Trial",
      "caption": "Gael. Attached to the opening description of the mostly abandoned road leading into Gael’s interior toward the Plains of Trial.",
      "source": "https://discord.com/channels/1177270231513694249/1250445442446131284/1250445442446131284"
    },
    {
      "image": "assets/locations/discord/41016eaf3e2f127ee3c5f12781e1d580041697f9e9c47951496a6fd158702f5c.webp",
      "title": "The Road — wasteland during Wren’s search",
      "alt": "The Road — wasteland during Wren’s search",
      "caption": "Gael. Wren explicitly describes the desolate path, cracked ground, lava rock and smoke during the search for Olokun and Jiangshi. This is the depicted historical journey.",
      "source": "https://discord.com/channels/1177270231513694249/1250445442446131284/1322681532598452317"
    },
    {
      "image": "assets/locations/discord/05bc8a26a36442d066982c52c2bfd76594bccde005e7664b5130d5c76ca035c2.webp",
      "title": "The Coast — rocky landing cove",
      "alt": "The Coast — rocky landing cove",
      "caption": "Gael. Opening image of the Coast post, described as the place to travel between land and ship and interact with the crew.",
      "source": "https://discord.com/channels/1177270231513694249/1250484231868514385/1250484231868514385"
    },
    {
      "image": "assets/locations/discord/d4c8c8e4662d8f53eded036d31358d0ed18f28b571e43b68490d5d7934cb07f5.webp",
      "title": "The Coast — visiting red-flagged ship",
      "alt": "The Coast — visiting red-flagged ship",
      "caption": "Gael. Qualified reference. The narrator explicitly says another, larger ship anchors at Gael’s coast. This is a visiting vessel, not a permanent coastal landmark or a named ship whose identity is independently established.",
      "source": "https://discord.com/channels/1177270231513694249/1250484231868514385/1347430540126453792"
    },
    {
      "image": "assets/locations/discord/999933344333e00bc37b4437f0386b582ed8bf2e3195ea7592c0afcefdecc1d8.webp",
      "title": "The Coast — quiet sunset shore",
      "alt": "The Coast — quiet sunset shore",
      "caption": "Gael. Severina leads Kasiri to a quiet coastal spot near a small steep cliff. The spot is unnamed.",
      "source": "https://discord.com/channels/1177270231513694249/1250484231868514385/1556733827781627916"
    },
    {
      "image": "assets/locations/discord/a6793045ebff14f251817bfefc07bcdbf994a05c4b98d571b779272e7df8fc5c.webp",
      "title": "Vysaeth’s Tomb — opening setting illustration",
      "alt": "Vysaeth’s Tomb — opening setting illustration",
      "caption": "Gael. The Vysaeth’s Tomb RP post opens with this setting image. It identifies the post’s illustrated scene without supplying a complete tomb plan, powers or ancient history.",
      "source": "https://discord.com/channels/1177270231513694249/1263870176093536298/1263870176093536298"
    },
    {
      "image": "assets/locations/discord/f5309e91c798ff217a73d748ca28fb292c06e854934b012199bbdd1ede00cbdb.webp",
      "title": "The Cruicible of Gael — top view",
      "alt": "The Cruicible of Gael — top view",
      "caption": "Gael. The trial channel labels this image “VISUAL OF THE TOP,” following its encounter map.",
      "source": "https://discord.com/channels/1177270231513694249/1265725424273592424/1265733656794632235"
    },
    {
      "image": "assets/locations/discord/7a3f9fafd888ba4cd6c75eb8411c43903a088068bfe76a8c6f089efcab2b47fa.webp",
      "title": "Hope — newly sanctified ground",
      "alt": "Hope — newly sanctified ground",
      "caption": "Gael. Opening post identifies a patch of newly sanctified ground saved by Elenia and Adelia. Preserve the original scene’s state rather than treating it as a current survey.",
      "source": "https://discord.com/channels/1177270231513694249/1268984472880287794/1268984472880287794"
    },
    {
      "image": "assets/locations/discord/249feea92033793b12ea048ddd99c9a1f3eacfefa12319318ed4d522f2245d7c.webp",
      "title": "Hope — illustration accompanying its desolation",
      "alt": "Hope — illustration accompanying its desolation",
      "caption": "Gael. The narrator describes the area around Hope blackened and charred, with its tree split and rotten. The image accompanies this later event and is not interchangeable with Hope’s earlier sanctuary view.",
      "source": "https://discord.com/channels/1177270231513694249/1268984472880287794/1477405732105224364"
    },
    {
      "image": "assets/locations/discord/287b30c1f3b1e5548a6a1678a864fb789235a87d080cdcfaa0c273dcd0250e95.webp",
      "title": "Stake — living tree near Hope",
      "alt": "Stake — living tree near Hope",
      "caption": "Gael. The narrator explicitly identifies Stake, standing among surrounding trees a few hundred yards from Hope. Stake remains distinct from Hope.",
      "source": "https://discord.com/channels/1177270231513694249/1268984472880287794/1477443801437044766"
    },
    {
      "image": "assets/locations/discord/14f45545533df74baec9f2fd286de7a3184ed75b4de3ddad8f2f719dca4158c5.webp",
      "title": "The Cathedral — encounter reference plan",
      "alt": "The Cathedral — encounter reference plan",
      "caption": "Gael. Full map attached to the Cathedral’s opening RP post. Treat the illustrated rooms as the encounter reference supplied there, not new claims about the ruins’ builders or mechanisms.",
      "source": "https://discord.com/channels/1177270231513694249/1272003799757623326/1272003799757623326"
    },
    {
      "image": "assets/locations/discord/efde10f1f6560055fb9bae7f843935c93c117e6f4d65400867e65cb34fed7894.webp",
      "title": "The Cathedral — entrance plan detail",
      "alt": "The Cathedral — entrance plan detail",
      "caption": "Gael. The narrator explicitly labels this attachment “The entrance” as the party approaches the old Cathedral.",
      "source": "https://discord.com/channels/1177270231513694249/1272003799757623326/1406003213999800482"
    },
    {
      "image": "assets/locations/discord/0cc6678941fedbfd921cb89e972d30ac20fc5599e897a07f552f1fbab4e60899.webp",
      "title": "The Cathedral — hallway plan detail",
      "alt": "The Cathedral — hallway plan detail",
      "caption": "Gael. The narrator labels this attachment “The section of Hallway.” It remains a detail of the existing Cathedral reference.",
      "source": "https://discord.com/channels/1177270231513694249/1272003799757623326/1406015555130888244"
    },
    {
      "image": "assets/locations/discord/66bc26f295e52cf31163339732dfbc7853fc29af0b20526f980cf5cc1a81eeb4.webp",
      "title": "The Cathedral — chamber revealed during exploration",
      "alt": "The Cathedral — chamber revealed during exploration",
      "caption": "Gael. The narrator describes the room revealing itself as the party proceeds, then mentions art on the walls. This illustration does not establish the central object’s identity or mechanism.",
      "source": "https://discord.com/channels/1177270231513694249/1272003799757623326/1406026645474902108"
    },
    {
      "image": "assets/locations/discord/f05baf1527b792a1f7788f411a3113824db47a00c747d4adee4700f2cf124efa.webp",
      "title": "Crustacean Cove — opening coastal reference",
      "alt": "Crustacean Cove — opening coastal reference",
      "caption": "Gael. The opening post places this cove about two miles from the tower and describes an underwater cave and temple beneath it. This image is its coastal setting reference; it does not identify every submerged structure or supply an underwater floor plan.",
      "source": "https://discord.com/channels/1177270231513694249/1275208691842285631/1275208691842285631"
    },
    {
      "image": "assets/locations/discord/1a192a10ce26bf6054d53f233db921c5a99640bdd7212d6c01909cf7e4b0e541.webp",
      "title": "Mage’s Ruin — opening courtyard reference",
      "alt": "Mage’s Ruin — opening courtyard reference",
      "caption": "Gael. Mage’s Ruin, illustrated at the opening of its roleplay post.",
      "source": "https://discord.com/channels/1177270231513694249/1298002279382777926/1298002279382777926"
    },
    {
      "image": "assets/locations/discord/bc7c49918d0fa178222597a1e7d20073ef445f6cd01daf4e511357a83fa30f74.webp",
      "title": "Mage’s Ruin — fortress approach map",
      "alt": "Mage’s Ruin — fortress approach map",
      "caption": "Gael. The narrator supplies this map while describing the bridge across a lake of fire and army encampments on the approach to the fortress. Preserve its historical encounter context.",
      "source": "https://discord.com/channels/1177270231513694249/1298002279382777926/1306732826741444671"
    },
    {
      "image": "assets/locations/discord/114d94e693222b91b23edc759c7f25e464def4d5124277f44fc297ac74f85027.webp",
      "title": "Shadow Angel Forest — opening woodland reference",
      "alt": "Shadow Angel Forest — opening woodland reference",
      "caption": "Gael. Image attached to the forest’s opening description of canopy, stream, meadow and ancient central tree. It is a source setting reference.",
      "source": "https://discord.com/channels/1177270231513694249/1356154581717094480/1356154581717094480"
    },
    {
      "image": "assets/locations/discord/a4dd359e9032c4a16b270824657c691953e8e275f1e1d0c7a7b2f77bd4ed6c3d.webp",
      "title": "Shadow Angel Forest — refugee house design",
      "alt": "Shadow Angel Forest — refugee house design",
      "caption": "Gael. Qualified reference. Fenwick and Tobias present a diagram for a stone house, foundation and wooden roof to Edgar and the refugees. This attachment documents the construction proposal at that point in the scene.",
      "source": "https://discord.com/channels/1177270231513694249/1356154581717094480/1394749967297417237"
    },
    {
      "image": "assets/locations/discord/eda2206f93c1f2577b800967cb2cca94b6fab42a70720bb3ced2233239e68cd3.webp",
      "title": "Shadow Angel Forest — completed structure plan",
      "alt": "Shadow Angel Forest — completed structure plan",
      "caption": "Gael. The later attachment accompanies an explicit construction-status list marking foundation, walls, roof, beams and door complete. The image remains a plan, not a photograph of the finished house.",
      "source": "https://discord.com/channels/1177270231513694249/1356154581717094480/1395003952319172781"
    },
    {
      "image": "assets/locations/discord/576ad656a5cea5d183d0eed6b845833baf37f803a7f554ab175eb447fb31314b.webp",
      "title": "Shadow Angel Forest — color-transition illustration",
      "alt": "Shadow Angel Forest — color-transition illustration",
      "caption": "Gael. Qualified reference. The DM explicitly says the real color change is more gradual and subtle than this image. Preserve that qualification rather than treating the sharp split as literal geography.",
      "source": "https://discord.com/channels/1177270231513694249/1356154581717094480/1415491192186998805"
    },
    {
      "image": "assets/locations/discord/00ec070a0ff6120473eaf2f62bc87e2efeb9e5c14cb0cb0e914a250b453ffc69.webp",
      "title": "Shadow Angel Forest — orb found along the stream",
      "alt": "Shadow Angel Forest — orb found along the stream",
      "caption": "Gael. Anky follows a shallow stream and spots an orb, then crouches for cover. The image illustrates that forest encounter; it does not independently establish a named portal or another world.",
      "source": "https://discord.com/channels/1177270231513694249/1356154581717094480/1416186063231123549"
    },
    {
      "image": "assets/locations/discord/d36557b649908c9dfeca11a131be0a8088a4db66239aa9ce77ac3db7a535e49b.webp",
      "title": "Shadow Angel Forest — hole found during the hunt",
      "alt": "Shadow Angel Forest — hole found during the hunt",
      "caption": "Gael. Qualified reference. Player-directed hunt narration calls for finding a hole in the ground after a successful Survival roll. The image illustrates that descent scene, without establishing a separate named site or exact dimensions.",
      "source": "https://discord.com/channels/1177270231513694249/1356154581717094480/1485830088313409668"
    },
    {
      "image": "assets/locations/discord/30e05e8638284af7dc414f3decd323e619610577b0025314f26f4cda7c327d40.webp",
      "title": "Plains of Trial — opening landscape reference",
      "alt": "Plains of Trial — opening landscape reference",
      "caption": "Gael. The opening description identifies enemy territory on Gael. The image supplies a landscape reference without a measured route or separately identified landmark.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1250452807287570542"
    },
    {
      "image": "assets/locations/discord/4ea118ae14c17f4018bfe34490acc22af351b832fd972fd87ebe144ffb05927b.webp",
      "title": "Plains of Trial — smoke-covered interior",
      "alt": "Plains of Trial — smoke-covered interior",
      "caption": "Gael. The narrator describes the party wandering deeper into the land under smog and toxic clouds. The attachment illustrates that journey, not all of present-day Gael.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1252307486678188032"
    },
    {
      "image": "assets/locations/discord/a4c15af5ff096c670050c2df95982ce1c3a8ec79f4b211d44b53b10444158e83.webp",
      "title": "Plains of Trial — burning fissure in the hills",
      "alt": "Plains of Trial — burning fissure in the hills",
      "caption": "Gael. The explorers point out fire burning inside a fissure in the hill and ask whether to explore it. The image illustrates that explicitly described encounter.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1255703474759536660"
    },
    {
      "image": "assets/locations/discord/e311effd7439e4667ff7e33b37ec4ee1dd47ae7aaeda76de9d246073b1b46f38.webp",
      "title": "Plains of Trial — cavern seen by Elenia",
      "alt": "Plains of Trial — cavern seen by Elenia",
      "caption": "Gael. The narrator labels this attachment as what Elenia can see during the fissure exploration. No separate named cave or complete dungeon plan is established.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1255706507748839457"
    },
    {
      "image": "assets/locations/discord/178bb416dda479943d4a0e3ba5ef1a3d43ea9652a8c8dbba8666da7ad7a39b90.webp",
      "title": "Plains of Trial — beyond the last border",
      "alt": "Plains of Trial — beyond the last border",
      "caption": "Gael. The party passes the last border into the wastes, described as fire, ash and death. The attachment is tied to that narrated journey.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1268952265092239392"
    },
    {
      "image": "assets/locations/discord/011952eb1c7edfc43444a95de37a0029d1a019256d74b4f67ad87b65aee8b34c.webp",
      "title": "Plains of Trial — bleak day beneath the smog",
      "alt": "Plains of Trial — bleak day beneath the smog",
      "caption": "Gael. The narrator explicitly describes an unusually dark day even for Gael, with smog blanketing the air. Preserve the scene’s weather and posting context.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1273334318059622492"
    },
    {
      "image": "assets/locations/discord/693a5816d69c81944abfc2c09eaa8a842449e1da36bb9e03b0cbb9a3f8483fc1.webp",
      "title": "Gael hunt — sunlit woodland reference",
      "alt": "Gael hunt — sunlit woodland reference",
      "caption": "Gael. Qualified reference. Akarian gestures at the surrounding woodland as preferable to sulphur and ash. The image is a reference used during a Gael hunt; the exact wood is unnamed and is not automatically Shadow Angel Forest.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1353448587043803338"
    },
    {
      "image": "assets/locations/discord/f8ee52e685f3dc538d2bf00f2c25b05981aad0ae45f505282b545d438f585f57.webp",
      "title": "Gael hunt — strange woodland path",
      "alt": "Gael hunt — strange woodland path",
      "caption": "Gael. The party encounters a strange little woodland path during the hunt. The path is unnamed.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1464104377865474202"
    },
    {
      "image": "assets/locations/discord/52ab75402ff3f9692e16c57f5f7c42e0113f13af22741590214a1a60b2f29234.webp",
      "title": "Gael hunt — DM-prepared woodland view",
      "alt": "Gael hunt — DM-prepared woodland view",
      "caption": "Gael. Qualified reference. The attachment is explicitly introduced as art prepared by the DM while the party discusses newly found refugees. The exact woodland site is not named.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1464134869524283502"
    },
    {
      "image": "assets/locations/discord/b974dc1d8ba1df718724ace90eb723ae17b3a62b62d1400ac61146f336558dbf.webp",
      "title": "Gael hunt — dark forest reference",
      "alt": "Gael hunt — dark forest reference",
      "caption": "Gael. Qualified reference. Nymera looks around the dark forest during the hunt. This player-posted image remains a scene reference without establishing a named wood or precise route.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1513354047225204827"
    },
    {
      "image": "assets/locations/discord/6e5ca56369ba0bc5618fe2826ad0ffce1a7877b9fc82cd62520509254f03cd32.webp",
      "title": "Gael hunt — forest at the danger zone",
      "alt": "Gael hunt — forest at the danger zone",
      "caption": "Gael. Qualified reference. The party slows at the dangerous zone while discussing the Plains hunt. This reference does not establish a named gateway or assign the forest to Shadow Angel Forest.",
      "source": "https://discord.com/channels/1177270231513694249/1250445552424980590/1533600833344639108"
    }
  ]
};
Object.entries(reviewedGaelLocationGalleries).forEach(([id, gallery]) => {
  const media = window.FENUMION_MEDIA.articles[id] || (window.FENUMION_MEDIA.articles[id] = {});
  media.gallery = [...(media.gallery || []), ...gallery.filter(item => !(media.gallery || []).some(existing => existing.image === item.image))];
});
const reviewedGaelLocationViews = {
  "Tower of Gael": {
    "image": "assets/locations/discord/ce0ac2b049a0b10ab7ce7e73a61686f00d5becbbdfa6a4b28301482decda8ce3.webp",
    "imageCaption": "Gael. Opening image of the Tower of Gael, identified as the explorers’ refuge under Nuru’s Eye."
  },
  "The Library of Nuru": {
    "image": "assets/locations/discord/c98a0eb3f3c88863b6047c9a8fb60b2741f4186e1f21a23a9d36dd10bc57b09c.webp",
    "imageCaption": "Gael. The Library of Nuru’s opening image accompanies its spell list and the first accounts of copying spells there."
  },
  "Sanctum of the Wise": {
    "image": "assets/locations/discord/764d2097dc7c01c4858039a2216c4ea1aebb99e9019f29efd188b55370c93234.webp",
    "imageCaption": "Gael. Opening post explicitly describes the Sanctum as the top room of the tower, a place for rest and communion with Nuru. This image is attached to that description."
  },
  "Titan’s Watch": {
    "image": "assets/locations/discord/7683b2460e6114c7d570673b6ef2a18a96836604229df8196cc44729fbd18a06.webp",
    "imageCaption": "Gael. Opening post identifies this area just beyond the tower, with ruined titan statues, a decayed cathedral and a river to the sea."
  },
  "The Road": {
    "image": "assets/locations/discord/7b8b6c1f0a07e7a6eb83c3ffb0b49714c762db065c84e7d945f8c4671356a191.webp",
    "imageCaption": "Gael. Attached to the opening description of the mostly abandoned road leading into Gael’s interior toward the Plains of Trial."
  },
  "The Coast": {
    "image": "assets/locations/discord/05bc8a26a36442d066982c52c2bfd76594bccde005e7664b5130d5c76ca035c2.webp",
    "imageCaption": "Gael. Opening image of the Coast post, described as the place to travel between land and ship and interact with the crew."
  },
  "Vysaeth’s Tomb": {
    "image": "assets/locations/discord/a6793045ebff14f251817bfefc07bcdbf994a05c4b98d571b779272e7df8fc5c.webp",
    "imageCaption": "Gael. The Vysaeth’s Tomb RP post opens with this setting image. It identifies the post’s illustrated scene without supplying a complete tomb plan, powers or ancient history."
  },
  "Hope": {
    "image": "assets/locations/discord/7a3f9fafd888ba4cd6c75eb8411c43903a088068bfe76a8c6f089efcab2b47fa.webp",
    "imageCaption": "Gael. Opening post identifies a patch of newly sanctified ground saved by Elenia and Adelia. Preserve the original scene’s state rather than treating it as a current survey."
  },
  "Stake": {
    "image": "assets/locations/discord/287b30c1f3b1e5548a6a1678a864fb789235a87d080cdcfaa0c273dcd0250e95.webp",
    "imageCaption": "Gael. The narrator explicitly identifies Stake, standing among surrounding trees a few hundred yards from Hope. Stake remains distinct from Hope."
  },
  "The Cathedral and the Titans": {
    "image": "assets/locations/discord/14f45545533df74baec9f2fd286de7a3184ed75b4de3ddad8f2f719dca4158c5.webp",
    "imageCaption": "Gael. Full map attached to the Cathedral’s opening RP post. Treat the illustrated rooms as the encounter reference supplied there, not new claims about the ruins’ builders or mechanisms."
  },
  "Crustacean Cove": {
    "image": "assets/locations/discord/f05baf1527b792a1f7788f411a3113824db47a00c747d4adee4700f2cf124efa.webp",
    "imageCaption": "Gael. The opening post places this cove about two miles from the tower and describes an underwater cave and temple beneath it. This image is its coastal setting reference; it does not identify every submerged structure or supply an underwater floor plan."
  },
  "Mage’s Ruin": {
    "image": "assets/locations/discord/1a192a10ce26bf6054d53f233db921c5a99640bdd7212d6c01909cf7e4b0e541.webp",
    "imageCaption": "Gael. Mage’s Ruin, illustrated at the opening of its roleplay post."
  },
  "Shadow Angel Forest": {
    "image": "assets/locations/discord/114d94e693222b91b23edc759c7f25e464def4d5124277f44fc297ac74f85027.webp",
    "imageCaption": "Gael. Image attached to the forest’s opening description of canopy, stream, meadow and ancient central tree. It is a source setting reference."
  },
  "Plains of Trial": {
    "image": "assets/locations/discord/30e05e8638284af7dc414f3decd323e619610577b0025314f26f4cda7c327d40.webp",
    "imageCaption": "Gael. The opening description identifies enemy territory on Gael. The image supplies a landscape reference without a measured route or separately identified landmark."
  }
};
Object.entries(reviewedGaelLocationViews).forEach(([title, media]) => {
  Object.assign(window.FENUMION_MEDIA.locations[title] || (window.FENUMION_MEDIA.locations[title] = {}), media);
});
// END REVIEWED GAEL LOCATION ART 2026-10-12
