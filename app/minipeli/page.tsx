import { LayoutFrame } from "@/components/LayoutFrame";
import { RetroBox } from "@/components/RetroBox";
import { MinipeliList } from "@/components/MinipeliList";

export default function MinipeliPage() {
  return (
    <LayoutFrame active="/minipeli">
      <div className="pageSection">
        <RetroBox title="minipelit">
          <p className="p muted">valitse peli — kaikki pitää voittaa ennen lahjaa.</p>
          <MinipeliList />
        </RetroBox>
      </div>
    </LayoutFrame>
  );
}
