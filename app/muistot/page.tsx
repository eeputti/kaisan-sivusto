"use client";

import { useEffect, useState } from "react";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

type Photo = (typeof site.gallery.photos)[number];

export default function MuistotPage() {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!activePhoto) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <LayoutFrame active="/muistot">
      <div className="galleryPage">
        <RetroBox title={site.gallery.title}>
          <p className="p muted">{site.gallery.subtitle}</p>
        </RetroBox>
        <div className="galleryGrid">
          {site.gallery.photos.map((photo) => (
            <button
              key={photo.src}
              type="button"
              className="card galleryCard"
              onClick={() => setActivePhoto(photo)}
            >
              <img className="galleryImage" src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="galleryMeta">
                <p className="cardTitle">{photo.alt}</p>
                <p className="muted">{photo.note}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePhoto ? (
        <div className="lightboxOverlay" onClick={() => setActivePhoto(null)}>
          <div className="retroBox lightboxCard" onClick={(event) => event.stopPropagation()}>
            <div className="lightboxHeader">
              <h2 className="lightboxTitle">{activePhoto.alt}</h2>
              <button type="button" className="btn88" onClick={() => setActivePhoto(null)}>
                sulje
              </button>
            </div>
            <div className="lightboxBody">
              <img className="lightboxImage" src={activePhoto.src} alt={activePhoto.alt} />
              <p className="muted lightboxNote">{activePhoto.note}</p>
            </div>
          </div>
        </div>
      ) : null}
    </LayoutFrame>
  );
}
