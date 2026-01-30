import { LayoutFrame } from "@/components/LayoutFrame";
import { DateGame } from "@/components/DateGame";

export default function DeittausPage() {
  return (
    <LayoutFrame active="/minipeli">
      <div className="pageSection">
        <DateGame />
      </div>
    </LayoutFrame>
  );
}
