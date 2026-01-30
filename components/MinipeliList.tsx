"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Game = {
  id: string;
  label: string;
  href: string;
  storageKey: string;
  image: {
    src: string;
    alt: string;
  };
};

const games: Game[] = [
  {
    id: "sydamet",
    label: "raksauta 10 sydäntä",
    href: "/minipeli/sydamet",
    storageKey: "minipeli:sydamet",
    image: {
      src: "/media/minipeli1.gif",
      alt: "raksauta 10 sydäntä -minipeli",
    },
  },
  {
    id: "deittaus",
    label: "miksi kaisa on paras -peli",
    href: "/minipeli/deittaus",
    storageKey: "minipeli:deittaus",
    image: {
      src: "/media/minipeli2.gif",
      alt: "miksi kaisa on paras -minipeli",
    },
  },
  {
    id: "valinta",
    label: "valitsisitko mieluummin",
    href: "/minipeli/valinta",
    storageKey: "minipeli:valinta",
    image: {
      src: "/media/minipeli3.gif",
      alt: "valitsisitko mieluummin -minipeli",
    },
  },
];

export function MinipeliList() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const allComplete = games.every((game) => completed[game.id]);

  useEffect(() => {
    const status = games.reduce<Record<string, boolean>>((acc, game) => {
      acc[game.id] = Boolean(window.sessionStorage.getItem(game.storageKey));
      return acc;
    }, {});
    setCompleted(status);
  }, []);

  return (
    <div className="minipeliList">
      {games.map((game) => (
        <div key={game.id} className="minipeliItem">
          <img
            className="minipeliGif"
            src={game.image.src}
            alt={game.image.alt}
            loading="lazy"
          />
          <Link className="btn88" href={game.href}>
            {game.label}
          </Link>
          {completed[game.id] && <span className="pill">voitettu</span>}
        </div>
      ))}
      {allComplete && (
        <div className="minipeliItem">
          <Link className="btn88" href="/lahja">
            avaa lahja
          </Link>
        </div>
      )}
    </div>
  );
}
