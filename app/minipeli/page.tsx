import Image from "next/image";
import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { MinipeliList } from "@/components/MinipeliList";

export default function MinipeliPage() {
  return (
    <LayoutFrame active="/minipeli">
      <div className="pageSection">
        <RetroBox title="minipelit">
          <div className="gifStrip" aria-hidden="true">
            <Image src="/minipeli1.gif" alt="" width={48} height={48} className="gifSticker" />
            <Image src="/minipeli2.gif" alt="" width={48} height={48} className="gifSticker" />
            <Image src="/minipeli3.gif" alt="" width={48} height={48} className="gifSticker" />
          </div>
          <MinipeliList />
        </RetroBox>
      </div>
    </LayoutFrame>
  );
}
