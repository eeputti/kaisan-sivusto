import { LayoutFrame } from "@/components/LayoutFrame";
import { GiftReveal } from "@/components/GiftReveal";

export default function LahjaPage() {
  return (
    <LayoutFrame active="/lahja">
      <div className="pageSection">
        <GiftReveal />
      </div>
    </LayoutFrame>
  );
}
