"use client";

import { useEffect, useRef, useState } from "react";

type Toast = {
  id: number;
  message: string;
};

const SECOND_MESSAGES = [
  "eelis haluis pusun ku on menny jo kaks minuuttii mwahmwah",
  "eelis haluis pusun ku on menny jo kaks minuuttii mwahmwah",
];

export function Toasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const addToast = (message: string) => {
      setToasts((current) => [
        ...current,
        { id: nextId.current++, message },
      ]);
    };

    const timers = [
      window.setTimeout(() => {
        addToast("moi kaisu! kiva et oot tääl viel, oisko pusun paikka?");
      }, 30_000),
      window.setTimeout(() => {
        const message =
          SECOND_MESSAGES[Math.floor(Math.random() * SECOND_MESSAGES.length)];
        addToast(message);
      }, 120_000),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const dismissToast = (id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  };

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="toastStack" role="region" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toastCard">
          <span className="toastMessage">{toast.message}</span>
          <button
            type="button"
            className="toastClose"
            aria-label="Sulje"
            onClick={() => dismissToast(toast.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
