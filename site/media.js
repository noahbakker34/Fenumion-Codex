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
