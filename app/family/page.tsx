import Image from "next/image";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

export default function FamilyPage() {
  const about = site.about;

  return (
    <LayoutFrame active="/family">
      <div className="familyGrid">
        <RetroBox>
          <h2 style={{ margin: 0, fontSize: 18 }}>{about.title}</h2>
          <p className="muted">{about.subtitle}</p>
          <div className="jump">
            <ul className="list">
              {about.items.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hr" />
          <Image src="/media/family.png" alt="Family doodle" width={220} height={140} />
        </RetroBox>

        <div>
          {about.items.map((item) => (
            <RetroBox key={item.id} title={item.name} className="card">
              <p className="p" id={item.id}>
                {item.desc}
              </p>
              <p className="muted">{item.age}</p>
            </RetroBox>
          ))}
          <RetroBox>
            <p className="p">{about.footer}</p>
          </RetroBox>
        </div>
      </div>
    </LayoutFrame>
  );
}
