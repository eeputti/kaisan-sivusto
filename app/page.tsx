import Image from "next/image";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export default function HomePage() {
  const h = site.home;

  return (
    <LayoutFrame active="/">
      <div className="homeGrid">
        <div className="homeLeft">
          <RetroBox title={h.whatsNewTitle}>
            <p className="p">{h.whatsNew}</p>
            <div className="hr" />
            <p className="p muted">{h.todo}</p>
          </RetroBox>
        </div>

        <div className="homeRight">
          <div className="homeSpacer" aria-hidden="true" />
          <RetroBox title={h.latestAlbumTitle}>
            <div className="featured">
              <Image src="/media/album.png" alt="Album cover" width={72} height={72} />
              <div>
                <div>{h.latestAlbumName}</div>
                <div className="muted">{h.latestAlbumDate}</div>
              </div>
            </div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/playlist/4wvhRktu3vyFw9fG6SSJFE?utm_source=generator&theme=0"
              width="40%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <p className="p" style={{ marginTop: 12 }}>
              tän listan musiikin lisäks musiikkii korville on seuraavat asiat:
            </p>
            <ol className="list">
              <li>sun pusut</li>
              <li>sun naurut</li>
              <li>meiän nukkumiset</li>
              <li>treffit</li>
              <li>kaikki hetket sunkaa</li>
            </ol>
            <ul className="list">
              {h.latestAlbumTracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
          </RetroBox>

        </div>
      </div>
    </LayoutFrame>
  );
}
