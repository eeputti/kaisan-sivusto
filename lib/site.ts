export const site = {
  meta: {
    title: "kaisalle <3",
    description: "pieni sivusto, jossa on iso tunne",
  },

  // sama rakenne kuin mallisivussa: Home | Family | Gear | Resources
  nav: [
    { label: "koti", href: "/" },
    { label: "minipelit", href: "/minipeli" },
    { label: "muistot", href: "/muistot" },
  ],

  home: {
    whatsNewTitle: "What's New",
    whatsNew:
      "tänään: kaisan oma internet-nurkka julkaistu. tavoitteena: olla mahdollisimman 1998 ja mahdollisimman meidän.",
    todo: "To do list: lisää kuvia, lisää 1 inside joke, lisää 1 yllätyslinkki.",
    aboutTitle: "meistä",
    aboutBody:
      "pieni nurkka, jossa on meidän juttuja: kahvi, nauru, ja se että maailma tuntuu hyvältä kun ollaan samassa rytmissä.",
    latestAlbumTitle: "LATEST ALBUM",
    latestAlbumName: "kaisan + eeliksen mixtape",
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
  dateGame: {
    goodTraits: [
      "kaunein",
      "ihanin",
      "paras",
      "söpöin",
      "hyvä kommunikoimaan",
      "ihana ajattelu",
      "antaa elää vapaasti",
      "herkkä",
      "inspiroiva",
    ],
    badTraits: [
      "mustasukkanen",
      "tyhmä",
      "epäpätevä",
      "kontrollifriikki",
      "kusipää!",
      "ilkeä",
    ],
    secretTitle: "salainen juttu",
    secretText: "oot mun paras juttu ja haluun olla sun kanssa ihan kaikessa.",
  },
  interactive: {
    giftReveal: {
      title: "pieni paljastus",
      steps: [
        { text: "Ootko valmis yllätykseen?", buttonLabel: "anna tulla", size: "normal" },
        { text: "OOTKO VALMIS!!??", buttonLabel: "no oon oon!!", size: "big" },
        {
          text: "OOKSÄÄ OIKEEST VALMIS?!?!?!",
          buttonLabel: "joojoo anna lahja muru :3",
          size: "mega",
        },
      ],
      reveal: {
        pill: "lahja",
        title: "Meidän seuraava seikkailu",
        text: "Valitse yksi näistä ja tehdään siitä päivä, joka jää mieleen.",
        links: [
          { label: "Brunssi kahdestaan", href: "https://maps.google.com/?q=brunch" },
          { label: "Pieni road trip", href: "https://maps.google.com/?q=road+trip" },
        ],
      },
    },
    heartMiniGame: {
      title: "raksuta 10 sydäntä",
      buttonLabel: "poksauta sydän",
      targetCount: 10,
      unlockedPill: "valmis",
      secretTitle: "sydänpeli läpi",
      secretText: "oot mun turva ja mun suosikki.",
    },
    wouldYouRather: {
      title: "valitsisitko mieluummin",
      questions: [
        {
          id: "coffee",
          prompt: "Aamu kahvilla vai ilta kävelyllä?",
          options: ["aamukahvi", "iltakävely"],
        },
        {
          id: "movie",
          prompt: "Leffailta kotona vai piknik ulkona?",
          options: ["leffailta", "piknik"],
        },
        {
          id: "travel",
          prompt: "Pieni road trip vai kaupunkiloma?",
          options: ["road trip", "kaupunkiloma"],
        },
      ],
    },
  },

  shared: {
    tagline: "omistettu eräälle raksulle",
    tinyTopLeft: "moi kaisulainenraksulainen!!! <3333",
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

  gallery: {
    title: "# Muistot",
    subtitle: "Klikkaa kuvaa nähdäksesi muiston isona.",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        alt: "Iltavalo metsässä",
        note: "Yksi niistä kävelyistä, joissa ilma tuntui pehmeältä.",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        alt: "Sumuinen järvi",
        note: "Hiljaisuus + kahvi termarista.",
      },
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
        alt: "Poutapilvet",
        note: "Aamu, kun kaikki oli taas helppoa.",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
        alt: "Polku vuorille",
        note: "Yhteinen seikkailu, vaikka matka oli lyhyt.",
      },
      {
        src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=900&q=80",
        alt: "Taivas järven yllä",
        note: "Se hetki, kun istuttiin vaan ja katsottiin kauas.",
      },
      {
        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
        alt: "Kivinen ranta",
        note: "Naurettiin ja heitettiin kiviä veteen.",
      },
    ],
  },
} as const;
