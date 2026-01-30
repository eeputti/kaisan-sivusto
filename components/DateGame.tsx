"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { RetroBox } from "@/components/RetroBox";

const badReplies = ["naah", "no ei tosiaa", "mm ei", "ei mee läpi"];

type Trait = {
  label: string;
  good: boolean;
};

export function DateGame() {
  const { goodTraits, badTraits, secretTitle, secretText } = site.dateGame;
  const [selectedGood, setSelectedGood] = useState<Set<string>>(new Set());
  const [dismissedBad, setDismissedBad] = useState<Record<string, string>>({});

  const traits = useMemo<Trait[]>(
    () => [
      ...goodTraits.map((label) => ({ label, good: true })),
      ...badTraits.map((label) => ({ label, good: false })),
    ],
    [goodTraits, badTraits],
  );

  const isComplete = selectedGood.size === goodTraits.length;

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
    <RetroBox title="miksi mun pitäis deittailla sua?" className="dateGame">
      <p className="p muted">valitse kaikki hyvät jutut jatkaaksesi.</p>
      <div className="traitGrid">
        {traits.map((trait) => {
          const isSelected = selectedGood.has(trait.label);
          const dismissed = Boolean(dismissedBad[trait.label]);
          return (
            <div
              key={trait.label}
              className={`traitItem ${trait.good ? "traitGood" : "traitBad"} ${
                isSelected ? "traitSelected" : ""
              } ${dismissed ? "traitDismissed" : ""}`}
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
      <p className={`traitProgress ${isComplete ? "show" : ""}`}>löysit kaikki jee</p>
      {isComplete && (
        <div className="traitSecret">
          <div className="traitSecretTitle">{secretTitle}</div>
          <p className="p">{secretText}</p>
        </div>
      )}
    </RetroBox>
  );
}
