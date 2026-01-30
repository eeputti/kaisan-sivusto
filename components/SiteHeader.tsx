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
              src="/media/hero.gif"
              alt="hero gif"
              width={220}
              height={160}
              className="heroGif"
              priority
            />
          </div>
        </div>
      </header>

      <div className="stickerRow" aria-hidden="true">
        <Image src="/media/frog.gif" alt="" width={32} height={32} />
        <Image src="/media/vhs.gif" alt="" width={32} height={32} />
        <Image src="/media/frog.gif" alt="" width={32} height={32} />
        <Image src="/media/mail.gif" alt="" width={32} height={32} />
      </div>
    </>
  );
}
