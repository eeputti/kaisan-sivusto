import { LayoutFrame } from "@/components/LayoutFrame";
import { WouldYouRather } from "@/components/WouldYouRather";

export default function ValintaPage() {
  return (
    <LayoutFrame active="/minipeli">
      <div className="pageSection">
        <WouldYouRather />
      </div>
    </LayoutFrame>
  );
}
