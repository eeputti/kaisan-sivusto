import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

export function LayoutFrame({
  children,
  active,
}: {
  children: ReactNode;
  active?: string;
}) {
  return (
    <main className="page">
      <div className="frame">
        <SiteHeader active={active} />
        {children}
        <footer className="footer">
          <span>tehty kaisa mielessä</span>
        </footer>
      </div>
    </main>
  );
}
