import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { Toasts } from "@/components/Toasts";

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>
        {children}
        <Toasts />
      </body>
    </html>
  );
}
