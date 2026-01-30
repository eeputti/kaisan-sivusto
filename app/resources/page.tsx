import Link from "next/link";
import Image from "next/image";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export default function ResourcesPage() {
  const r = site.resources;

  return (
    <LayoutFrame active="/resources">
      <div className="homeGrid" style={{ gridTemplateColumns: "1fr" }}>
        <RetroBox>
          <h2 style={{ margin: 0, fontSize: 18 }}>{r.title}</h2>
          <p className="muted">{r.subtitle}</p>
          <p className="muted">
            <Link href="/">koti</Link> | <Link href="/minipeli">minipelit</Link> |{" "}
            <Link href="/muistot">muistot</Link> | <Link href="/lahja">lahja</Link>
          </p>
          <div className="gifStrip" aria-hidden="true">
            <Image src="/media/shark.gif" alt="" width={44} height={44} className="gifSticker" />
            <Image src="/media/mail.gif" alt="" width={44} height={44} className="gifSticker" />
            <Image src="/media/vhs.gif" alt="" width={44} height={44} className="gifSticker" />
          </div>
        </RetroBox>

        {r.groups.map((g) => (
          <RetroBox key={g.title} title={g.title}>
            <p className="p" style={{ marginBottom: 0 }}>
              {g.links.map((l, i) => (
                <span key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                  {i < g.links.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </RetroBox>
        ))}
      </div>
    </LayoutFrame>
  );
}
