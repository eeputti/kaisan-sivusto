"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GiftReveal } from "@/components/GiftReveal";

const REQUIRED_KEYS = ["minipeli:sydamet", "minipeli:deittaus", "minipeli:valinta"];

export function GiftGate() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasAll = REQUIRED_KEYS.every((key) => window.sessionStorage.getItem(key));
    setReady(hasAll);
  }, []);

  if (ready) {
    return <GiftReveal />;
  }

  return (
    <div className="giftGate">
      <p className="p">tee eka minipelit, sit tää aukee ;))</p>
      <div className="buttons">
        <Link className="btn88" href="/minipeli/sydamet">
          raksauta 10 sydäntä
        </Link>
        <Link className="btn88" href="/minipeli/deittaus">
          miksi kaisa on paras -peli
        </Link>
        <Link className="btn88" href="/minipeli/valinta">
          valitsisitko mieluummin
        </Link>
      </div>
    </div>
  );
}
