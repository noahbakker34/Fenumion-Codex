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
