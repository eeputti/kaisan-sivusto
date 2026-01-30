"use client";

import { useState } from "react";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export function HeartMiniGame() {
  const { heartMiniGame } = site.interactive;
  const [count, setCount] = useState(0);
  const hasUnlocked = count >= heartMiniGame.targetCount;

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, heartMiniGame.targetCount));
  };

  return (
    <RetroBox title={heartMiniGame.title}>
      <div className="miniRow">
        <button type="button" className="btn88" onClick={handleClick}>
          {heartMiniGame.buttonLabel}
        </button>
        <span className="muted">
          sydämiä {count}/{heartMiniGame.targetCount}
        </span>
      </div>
      {hasUnlocked && (
        <div className="miniReveal">
          <span className="pill">{heartMiniGame.unlockedPill}</span>
          <h3 className="miniTitle">{heartMiniGame.secretTitle}</h3>
          <p className="p">{heartMiniGame.secretText}</p>
        </div>
      )}
    </RetroBox>
  );
}
