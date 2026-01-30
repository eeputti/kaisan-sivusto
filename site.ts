export const site = {
  meta: {
    title: "kaisalle 💛",
    description: "pieni sivusto, jossa on iso tunne",
  },

  // sama rakenne kuin mallisivussa: Home | Family | Gear | Resources
  nav: [
    { label: "Home", href: "/" },
    { label: "Family", href: "/family" },
    { label: "Gear", href: "/gear" },
    { label: "Resources", href: "/resources" },
  ],

  home: {
    whatsNewTitle: "What's New",
    whatsNew:
      "tänään: kaisan oma internet-nurkka julkaistu. tavoitteena: olla mahdollisimman 1998 ja mahdollisimman meidän.",
    todo: "To do list: lisää kuvia, lisää 1 inside joke, lisää 1 yllätyslinkki.",
    links: [
      { label: "Google Photos", href: "https://photos.google.com/" },
      { label: "Spotify", href: "https://open.spotify.com/" },
      { label: "Instagram", href: "https://instagram.com/" },
    ],
    latestAlbumTitle: "LATEST ALBUM",
    latestAlbumName: "kaisalle (mixtape)",
    latestAlbumDate: "01/30/2026",
    latestAlbumTracks: [
      "1. sun nauru",
      "2. meidän aamut",
      "3. pienet kävelyt",
      "4. se yks ilta",
      "5. vielä yks kierros",
    ],
    featuredGifTitle: "FEATURED GIF",
    featuredGifCaption: "cat on the strat (vaihda gif)",
  },

  shared: {
    tagline: "Hitting you different since always",
    tinyTopLeft: "Hi :)",
  },

  about: {
    title: "Meet the Family (aka me + kaisa + meidän jutut)",
    subtitle: "(Click on a name to jump)",
    items: [
      { id: "kaisa", name: "Kaisa", desc: "rauha + energia. mun lempikoti.", age: "timeless" },
      { id: "eelis", name: "Eelis", desc: "tää tyyppi teki tän sivun ja nyt se on tunteellinen.", age: "??" },
      { id: "us", name: "Me", desc: "inside jokes, lenkit, kahvit, ja se fiilis että kaikki on ok.", age: "ongoing" },
      { id: "future", name: "Future", desc: "pieniä seikkailuja ja isoa turvaa.", age: "∞" }
    ],
    footer: "love u <3",
  },

  gear: {
    title: "# Gear",
    subtitle: "Pieni lista asioista, jotka tekee meidän arjesta kivaa (voit vaihtaa nämä mitä vaan).",
    sections: [
      {
        title: "Kahvi",
        body:
          "se yksi kahvihetki on aina 10/10. tähän voit lisätä kuvan kahvikupista tai kahvilasta.",
      },
      {
        title: "Kävelyt + musiikki",
        body:
          "kävelyt, kuulokkeet, ja se että maailma tuntuu vähän pehmeämmältä. (lisää vaikka playlist-linkki resourcesiin)",
      },
      {
        title: "Pienet asiat",
        body:
          "joku hölmö tarra, joku gif, joku paperilappu jääkaapin ovessa. ne on isoja.",
      },
    ],
  },

  resources: {
    title: "# Resources",
    subtitle: "Kokoelma linkkejä ja pikkujuttuja. (voit tehdä tästä 'salaisen aarrearkun')",
    groups: [
      {
        title: "Gifs",
        links: [
          { label: "GifCities", href: "https://gifcities.org/" },
          { label: "99 Gif Shop", href: "https://99gifshop.neocities.org/" },
          { label: "Cameron's World", href: "https://www.cameronsworld.net/" },
        ],
      },
      {
        title: "Buttons",
        links: [
          { label: "88x31 collection", href: "https://cyber.dabamos.de/88x31/" },
        ],
      },
      {
        title: "Useful",
        links: [
          { label: "Ezgif", href: "https://ezgif.com/" },
          { label: "JS Paint", href: "https://jspaint.app/" },
        ],
      },
    ],
  },
} as const;
