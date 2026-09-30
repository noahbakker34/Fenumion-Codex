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
    "Roderick / Wrath": {
      image: "assets/archive/wrath.gif"
    },
    "Vain": {
      video: "assets/archive/vain-knight-of-death.mp4"
    }
  },
  locations: {
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
