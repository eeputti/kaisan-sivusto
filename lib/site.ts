export const site = {
  meta: {
    title: "kaisan",
    description: "pelisivusto <3",
  },

  // sama rakenne kuin mallisivussa: Home | Family | Gear | Resources
  nav: [
    { label: "koti", href: "/" },
    { label: "minipelit", href: "/minipeli" },
    { label: "muistot", href: "/muistot" },
    { label: "lahja", href: "/lahja" },
  ],

  home: {
    whatsNewTitle: "uusinta uutta!",
    whatsNew:
      "tänään: kaisan oma internet-nurkka julkaistu. tavoitteena: olla mahdollisimman 1998 ja mahdollisimman meidän.",
    todo: "To do list: lisää kuvia, lisää 1 inside joke, lisää 1 yllätyslinkki.",
    aboutTitle: "meistä",
    aboutBody:
      "pieni nurkka, jossa on meidän juttuja: kahvi, nauru, ja se että maailma tuntuu hyvältä kun ollaan samassa rytmissä.",
    latestAlbumTitle: "uusin mixtape",
    latestAlbumName: "kaisan + eeliksen mixtape",
    latestAlbumDate: "08/02",
    latestAlbumTracks: [
      "1. sun nauru",
      "2. meidän aamut",
      "3. pienet kävelyt",
      "4. se yks ilta",
      "5. vielä yks kierros",
    ],
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
      "tunneälykäs",
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
  },
  interactive: {
    giftReveal: {
      title: "lahja",
      heading: "hyvää synttäriä kaisamuru!",
      steps: [
        { text: "", buttonLabel: "avaa lahja", size: "normal" },
        { text: "ootko varma että haluut avata tän", buttonLabel: "joo oon varma :3", size: "normal" },
        { text: "ooksä nyt ihan satavarma täst??", buttonLabel: "joo oon edellee", size: "normal" },
        { text: "aikuisten oikeesti vai?", buttonLabel: "ihan aikusten oikeeesti jooo", size: "normal" },
        {
          text: "haluuksä oikeesti tän LOL :Dd",
          buttonLabel: "no entiiä ehkä emmätiä enää anna nyt se lahja vaa",
          size: "normal",
        },
      ],
      reveal: {
        pill: "lahja",
        title: "okei tässä lahja",
        text: "linkki lisätään tähän myöhemmin.",
        links: [
          { label: "avaa lahja", href: "#" },
        ],
      },
    },
    heartMiniGame: {
      title: "raksauta 10 sydäntä",
      buttonLabel: "<3",
      targetCount: 10,
      unlockedPill: "voitettu!",
      secretTitle: "sydänpeli läpi",
      secretText: "pelaa kaikki pelit nii saat lahjan:333!!!",
    },
    wouldYouRather: {
      title: "valitsisitko mieluummin",
      questions: [
        {
          id: "coffee",
          prompt: "",
          options: ["aamukahvi", "iltakävely"],
        },
        {
          id: "movie",
          prompt: "",
          options: ["leffailta", "piknik"],
        },
        {
          id: "travel",
          prompt: "",
          options: ["road-trip", "kaupunkiloma"],
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
    footer: "oot raxu <3",
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
