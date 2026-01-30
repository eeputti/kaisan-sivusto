import { LayoutFrame } from "@/components/LayoutFrame";
import { HeartMiniGame } from "@/components/HeartMiniGame";

export default function SydametPage() {
  return (
    <LayoutFrame active="/minipeli">
      <div className="pageSection">
        <HeartMiniGame />
      </div>
    </LayoutFrame>
  );
}
