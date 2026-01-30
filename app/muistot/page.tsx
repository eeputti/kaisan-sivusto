import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export default function MuistotPage() {
  return (
    <LayoutFrame active="/muistot">
      <div className="galleryPage">
        <RetroBox title={site.gallery.title} />
        <div className="galleryGrid">
          {site.gallery.photos.map((photo) => (
            <div key={photo.src} className="card galleryCard">
              <img className="galleryImage" src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </LayoutFrame>
  );
}
