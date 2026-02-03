"use client";

import { useState } from "react";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export function GiftReveal() {
  const { giftReveal } = site.interactive;
  const [step, setStep] = useState(0);

  const handleClick = () => {
    setStep((prev) => Math.min(prev + 1, giftReveal.steps.length));
  };

  const isRevealed = step >= giftReveal.steps.length;
  const currentStep = giftReveal.steps[step];

  return (
    <RetroBox title={giftReveal.title}>
      {!isRevealed && currentStep ? (
        <div className="giftStep">
          <h2 className="giftHeading">{giftReveal.heading}</h2>
          {currentStep.text && (
            <p className={`giftStepText ${currentStep.size ?? "normal"}`}>{currentStep.text}</p>
          )}
          <button type="button" className="btn88" onClick={handleClick}>
            {currentStep.buttonLabel}
          </button>
        </div>
      ) : (
        <div className="giftReveal">
          <h2 className="giftHeading">{giftReveal.heading}</h2>
          <span className="pill">{giftReveal.reveal.pill}</span>
          <h3 className="miniTitle">{giftReveal.reveal.title}</h3>
          <p className="p">{giftReveal.reveal.text}</p>
          <div className="buttons">
            {giftReveal.reveal.links.map((link) => (
              <a key={link.href} className="btn88" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          {giftReveal.reveal.photos && giftReveal.reveal.photos.length > 0 && (
            <div className="giftGallery">
              {giftReveal.reveal.photos.map((photo) => (
                <figure key={photo.src} className="giftPhoto">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          )}
        </div>
      )}
    </RetroBox>
  );
}
