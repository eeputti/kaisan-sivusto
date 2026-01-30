"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GiftReveal } from "@/components/GiftReveal";

const REQUIRED_KEYS = ["minipeli:sydamet", "minipeli:deittaus", "minipeli:valinta"];

export function GiftGate() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasAll = REQUIRED_KEYS.every((key) => window.localStorage.getItem(key));
    setReady(hasAll);
  }, []);

  if (ready) {
    return <GiftReveal />;
  }

  return (
    <div className="giftGate">
      <p className="p">
        Kaikki minipelit pitää voittaa ennen kuin lahja aukeaa. Käy pelaamassa nämä:
      </p>
      <div className="buttons">
        <Link className="btn88" href="/minipeli/sydamet">
          poksauta 10 sydäntä
        </Link>
        <Link className="btn88" href="/minipeli/deittaus">
          miksi mun pitäis deittailla sua?
        </Link>
        <Link className="btn88" href="/minipeli/valinta">
          valitsisitko mieluummin
        </Link>
      </div>
    </div>
  );
}
