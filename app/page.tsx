import Image from "next/image";
import Link from "next/link";
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
            <div className="gifStrip" aria-hidden="true">
              <Image src="/kotisivugif2.gif" alt="" width={56} height={56} className="gifSticker" />
              <Image src="/kotisivu%20gifi3.gif" alt="" width={56} height={56} className="gifSticker" />
              <Image src="/kotisivu%20gif4.gif" alt="" width={56} height={56} className="gifSticker" />
              <Image src="/kotisivu%20isoin%20gif.gif" alt="" width={56} height={56} className="gifSticker" />
            </div>
            <div className="hr" />
          </RetroBox>
        </div>

        <div className="homeRight">
          <RetroBox title={h.latestAlbumTitle}>
            <div className="featured">
              <Image src="/eelis%20ja%20kaisa.png" alt="Mixtape cover" width={72} height={72} />
              <div>
                <div>{h.latestAlbumName}</div>
                <div className="muted">{h.latestAlbumDate}</div>
              </div>
            </div>
            <a
              href="https://open.spotify.com/playlist/4wvhRktu3vyFw9fG6SSJFE?si=3e0a11d701884d0e"
              className="p"
              style={{ display: "inline-block", marginTop: 12, textDecoration: "underline" }}
              rel="noreferrer"
              target="_blank"
            >
              käy kuuntelee ;))
            </a>
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
          <RetroBox title={<Link href="/muistot">{h.memoriesTitle}</Link>}>
            <div className="homeMemoriesGrid">
              {h.memories.map((memory) => (
                <div key={memory.src} className="homeMemoriesItem">
                  <Image
                    className="homeMemoriesImage"
                    src={memory.src}
                    alt={memory.alt}
                    width={220}
                    height={220}
                  />
                </div>
              ))}
            </div>
          </RetroBox>
        </div>
      </div>
    </LayoutFrame>
  );
}
