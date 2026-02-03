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
      "maailman parhaimmal ihmisel taitaa olla vähä niiku synttärit!! JEEEEEEE ONNNEEE MURUKAISUUUU!!",
    aboutTitle: "meistä",
    aboutBody:
      "pieni nurkka, jossa on meidän juttuja: kahvi, nauru, ja se että maailma tuntuu hyvältä kun ollaan samassa rytmissä.",
    latestAlbumTitle: "uusin mixtape",
    latestAlbumName: "kaisan + eeliksen mixtape",
    latestAlbumDate: "08/02",
    latestAlbumTracks: [],
    memoriesTitle: "pieniä muistoja",
    memories: [
      {
        src: "/kuvia_0000s_0001_IMG_4820.png",
        alt: "Muisto: katse kameraan",
      },
      {
        src: "/kuvia_0000s_0004_5AFF8C66-D971-481E-905E-0F42C90B5C35_1_105_c.png",
        alt: "Muisto: yhteinen hetki",
      },
      {
        src: "/kuvia_0000s_0011_IMG_1333.png",
        alt: "Muisto: spontaani kuva",
      },
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
        photos: [
          { src: "/luonto_0000_1.png", alt: "Lahjakuva 1" },
          { src: "/luonto_0001_2.png", alt: "Lahjakuva 2" },
          { src: "/luonto_0002_3.png", alt: "Lahjakuva 3" },
          { src: "/luonto_0003_4.png", alt: "Lahjakuva 4" },
          { src: "/luonto_0004_5.png", alt: "Lahjakuva 5" },
          { src: "/luonto_0005_6.png", alt: "Lahjakuva 6" },
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
        {
          id: "series",
          prompt: "",
          options: ["sarja", "elokuva"],
        },
        {
          id: "call",
          prompt: "",
          options: ["viesti", "puhelu"],
        },
        {
          id: "kiss",
          prompt: "",
          options: ["pusu", "hali"],
        },
        {
          id: "now",
          prompt: "",
          options: ["nyt", "joskus"],
        },
        {
          id: "kaisa",
          prompt: "",
          options: ["kaisa", "eelis"],
        },
        {
          id: "us",
          prompt: "",
          options: ["me", "kaikki muu"],
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
    photos: [
      {
        src: "/kuvia_0000s_0000_36746728-AB09-498A-A5AB-785333D31FDA.png",
        alt: "Muisto: lähikuva",
      },
      {
        src: "/kuvia_0000s_0001_IMG_4820.png",
        alt: "Muisto: yhdessä",
      },
      {
        src: "/kuvia_0000s_0002_IMG_3820.png",
        alt: "Muisto: rento hetki",
      },
      {
        src: "/kuvia_0000s_0003_2F75F7A2-022E-41E3-8872-4B40B8FF809E_1_201_a.png",
        alt: "Muisto: kävely",
      },
      {
        src: "/kuvia_0000s_0004_5AFF8C66-D971-481E-905E-0F42C90B5C35_1_105_c.png",
        alt: "Muisto: lempeä ilta",
      },
      {
        src: "/kuvia_0000s_0005_C2B2722C-82D5-4D71-BE49-26CBF8A460EE_1_105_c.png",
        alt: "Muisto: aurinkoinen hetki",
      },
      {
        src: "/kuvia_0000s_0006_Näyttökuva-2026-01-30-kello-21.07.56.png",
        alt: "Muisto: ruutuhetki",
      },
      {
        src: "/kuvia_0000s_0007_FA124C67-1F09-47B4-B532-8AF7AAAC26C8_1_201_a.png",
        alt: "Muisto: hymy",
      },
      {
        src: "/kuvia_0000s_0008_63FE0640-0207-4559-966E-BB66B8794D90_1_105_c.png",
        alt: "Muisto: pysähtyminen",
      },
      {
        src: "/kuvia_0000s_0009_5463F6A5-51ED-4D6B-942E-18D4BE6C0DCB_1_105_c.png",
        alt: "Muisto: spontaani",
      },
      {
        src: "/kuvia_0000s_0010_8E8122C8-F9A2-4001-B928-D8B2A3F14F07_1_105_c.png",
        alt: "Muisto: ilta",
      },
      {
        src: "/kuvia_0000s_0011_IMG_1333.png",
        alt: "Muisto: katse",
      },
      {
        src: "/kuvia_0000s_0012_B33DE785-CB9E-4C27-8EDE-E321C30C8090_1_105_c.png",
        alt: "Muisto: yhteinen",
      },
    ],
  },
} as const;
