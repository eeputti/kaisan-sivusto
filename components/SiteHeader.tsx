"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useMusic } from "@/components/MusicProvider";
export function SiteHeader({ active }: { active?: string }) {
  const { isPlaying, toggle, hint } = useMusic();

  return (
    <>
      <div className="topLine">
        <span>{site.shared.tinyTopLeft}</span>
        <span className="topLineRight">
          <button
            type="button"
            className="btn88 audioBtn"
            onClick={toggle}
            title={hint || undefined}
          >
            {isPlaying ? "laita musa pois" : "laita musa päälle"}
          </button>
          <ThemeSwitcher />
        </span>
      </div>

      <header className="hero">
        <div className="heroLeft">
          <h1 className="h1">{site.meta.title}</h1>
          <p className="sub">{site.meta.description}</p>

          <nav className="nav" aria-label="primary">
            {site.nav.map((it, idx) => (
              <span key={it.href}>
                <Link className={active === it.href ? "navActive" : ""} href={it.href}>
                  {it.label}
                </Link>
                {idx < site.nav.length - 1 ? " | " : ""}
              </span>
            ))}
          </nav>
        </div>

        <div className="heroRight">
          <div className="heroGifWrap" title="hero gif">
            <Image
              src="/kotisivugif-ezgif.com-resize.gif"
              alt="päägifi"
              width={220}
              height={220}
              className="heroGif"
              priority
            />
          </div>
        </div>
      </header>

    </>
  );
}
