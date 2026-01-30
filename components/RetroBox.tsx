import { ReactNode } from "react";

export function RetroBox({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`retroBox ${className}`}>
      {title ? (
        <div className="retroBoxTitle">
          <span>{title}</span>
        </div>
      ) : null}
      <div className="retroBoxBody">{children}</div>
    </section>
  );
}
