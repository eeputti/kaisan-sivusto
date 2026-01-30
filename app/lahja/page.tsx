import { LayoutFrame } from "@/components/LayoutFrame";
import { GiftGate } from "@/components/GiftGate";

export default function LahjaPage() {
  return (
    <LayoutFrame active="/lahja">
      <div className="pageSection">
        <GiftGate />
      </div>
    </LayoutFrame>
  );
}
