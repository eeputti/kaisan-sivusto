import Image from "next/image";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export default function GearPage() {
  const gear = site.gear;

  return (
    <LayoutFrame active="/gear">
      <div className="homeGrid" style={{ gridTemplateColumns: "1fr" }}>
        <RetroBox>
          <h2 style={{ margin: 0, fontSize: 18 }}>{gear.title}</h2>
          <p className="muted">{gear.subtitle}</p>
          <div className="hr" />
          <Image src="/media/gear.png" alt="Gear doodle" width={220} height={140} />
          <div className="gifStrip" aria-hidden="true">
            <Image src="/media/tile.gif" alt="" width={48} height={48} className="gifSticker" />
            <Image src="/media/hero.gif" alt="" width={48} height={48} className="gifSticker" />
            <Image src="/media/button-anim.gif" alt="" width={48} height={48} className="gifSticker" />
          </div>
        </RetroBox>

        {gear.sections.map((section) => (
          <RetroBox key={section.title} title={section.title}>
            <p className="p">{section.body}</p>
          </RetroBox>
        ))}
      </div>
    </LayoutFrame>
  );
}
