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
