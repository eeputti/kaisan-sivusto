"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

const STORAGE_KEY = "minipeli:sydamet";

export function HeartMiniGame() {
  const { heartMiniGame } = site.interactive;
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ top: 10, left: 10 });
  const hasUnlocked = count >= heartMiniGame.targetCount;

  const moveButton = useCallback(() => {
    setPosition({
      top: Math.floor(Math.random() * 70) + 5,
      left: Math.floor(Math.random() * 70) + 5,
    });
  }, []);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored === "done") {
      setCount(heartMiniGame.targetCount);
    }
    moveButton();
  }, [heartMiniGame.targetCount, moveButton]);

  useEffect(() => {
    if (hasUnlocked) {
      window.sessionStorage.setItem(STORAGE_KEY, "done");
    }
  }, [hasUnlocked]);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, heartMiniGame.targetCount));
    moveButton();
  };

  return (
    <RetroBox title={heartMiniGame.title}>
      <div className="miniRow">
        <span className="muted">
          sydämiä {count}/{heartMiniGame.targetCount}
        </span>
      </div>
      <div className="heartPlayArea">
        <button
          type="button"
          className="btn88 heartButton"
          onClick={handleClick}
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
        >
          {heartMiniGame.buttonLabel}
        </button>
      </div>
      {hasUnlocked && (
        <div className="miniReveal">
          <span className="pill">{heartMiniGame.unlockedPill}</span>
          <h3 className="miniTitle">{heartMiniGame.secretTitle}</h3>
          <p className="p">{heartMiniGame.secretText}</p>
          <Link className="btn88" href="/minipeli">
            takaisin minipeleihin
          </Link>
        </div>
      )}
    </RetroBox>
  );
}
