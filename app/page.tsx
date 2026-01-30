import Image from "next/image";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { HeartMiniGame } from "@/components/HeartMiniGame";
import { WouldYouRather } from "@/components/WouldYouRather";
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

          <RetroBox title="Quick Links" className="homeLinks">
            <div className="buttons">
              {h.links.map((link) => (
                <a key={link.href} className="btn88" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </RetroBox>
        </div>

        <div className="homeRight">
          <RetroBox title={h.latestAlbumTitle}>
            <div className="featured">
              <Image src="/media/album.png" alt="Album cover" width={72} height={72} />
              <div>
                <div>{h.latestAlbumName}</div>
                <div className="muted">{h.latestAlbumDate}</div>
              </div>
            </div>
            <ul className="list">
              {h.latestAlbumTracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
          </RetroBox>

          <RetroBox title={h.featuredGifTitle}>
            <div className="featured">
              <Image src="/media/featured.gif" alt="Featured gif" width={120} height={90} />
              <p className="p muted">{h.featuredGifCaption}</p>
            </div>
          </RetroBox>
        </div>
      </div>

      <div className="homeExtras">
        <RetroBox title={h.aboutTitle}>
          <p className="p">{h.aboutBody}</p>
        </RetroBox>

        <div className="homeInteractive">
          <HeartMiniGame />
          <WouldYouRather />
        </div>
      </div>
    </LayoutFrame>
  );
}
