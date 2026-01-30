"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { RetroBox } from "@/components/RetroBox";

const badReplies = ["naah", "no ei tosiaa", "mm ei", "ei mee läpi"];
const STORAGE_KEY = "minipeli:deittaus";

type Trait = {
  label: string;
  good: boolean;
};

export function DateGame() {
  const { goodTraits, badTraits } = site.dateGame;
  const [selectedGood, setSelectedGood] = useState<Set<string>>(new Set());
  const [dismissedBad, setDismissedBad] = useState<Record<string, string>>({});

  const traits = useMemo<Trait[]>(() => {
    const combined = [
      ...goodTraits.map((label) => ({ label, good: true })),
      ...badTraits.map((label) => ({ label, good: false })),
    ];
    for (let i = combined.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }
    return combined;
  }, [goodTraits, badTraits]);

  const isComplete = selectedGood.size === goodTraits.length;

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "done") {
      setSelectedGood(new Set(goodTraits));
    }
  }, [goodTraits]);

  useEffect(() => {
    if (isComplete) {
      window.localStorage.setItem(STORAGE_KEY, "done");
    }
  }, [isComplete]);

  const toggleGood = (label: string) => {
    setSelectedGood((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const dismissBad = (label: string) => {
    setDismissedBad((prev) => {
      if (prev[label]) {
        return prev;
      }
      const reply = badReplies[Object.keys(prev).length % badReplies.length];
      return { ...prev, [label]: reply };
    });
  };

  return (
    <RetroBox title="miksi kaisa on paras -peli" className="dateGame">
      <p className="p muted">miksi kaisa on paras?</p>
      <p className="p muted">valitse kaikki kaisan ominaisuudet</p>
      <div className="traitGrid">
        {traits.map((trait) => {
          const isSelected = selectedGood.has(trait.label);
          const dismissed = Boolean(dismissedBad[trait.label]);
          return (
            <div
              key={trait.label}
              className={`traitItem ${trait.good ? "traitGood" : "traitBad"} ${
                isSelected ? "traitSelected" : ""
              } ${dismissed ? "traitDismissed" : ""} ${
                !trait.good && dismissed ? "traitWrong" : ""
              }`}
            >
              <button
                type="button"
                className="traitButton"
                onClick={() => (trait.good ? toggleGood(trait.label) : dismissBad(trait.label))}
                disabled={!trait.good && dismissed}
              >
                {trait.label}
              </button>
              {dismissed && <span className="traitNote">{dismissedBad[trait.label]}</span>}
            </div>
          );
        })}
      </div>
      {isComplete && (
        <div className="traitSecret">
          <p className="p">löysit kaikki jee, joko oot tehny kaikki pelit? :)</p>
          <Link className="btn88" href="/minipeli">
            takaisin minipeleihin
          </Link>
        </div>
      )}
    </RetroBox>
  );
}
