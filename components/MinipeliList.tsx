"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Game = {
  id: string;
  label: string;
  href: string;
  storageKey: string;
};

const games: Game[] = [
  {
    id: "sydamet",
    label: "raksauta 10 sydäntä",
    href: "/minipeli/sydamet",
    storageKey: "minipeli:sydamet",
  },
  {
    id: "deittaus",
    label: "miksi kaisa on paras -peli",
    href: "/minipeli/deittaus",
    storageKey: "minipeli:deittaus",
  },
  {
    id: "valinta",
    label: "valitsisitko mieluummin",
    href: "/minipeli/valinta",
    storageKey: "minipeli:valinta",
  },
];

export function MinipeliList() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const allComplete = games.every((game) => completed[game.id]);

  useEffect(() => {
    const status = games.reduce<Record<string, boolean>>((acc, game) => {
      acc[game.id] = Boolean(window.localStorage.getItem(game.storageKey));
      return acc;
    }, {});
    setCompleted(status);
  }, []);

  return (
    <div className="minipeliList">
      {games.map((game) => (
        <div key={game.id} className="minipeliItem">
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
