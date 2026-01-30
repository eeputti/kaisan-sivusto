"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type MusicContextValue = {
  isPlaying: boolean;
  toggle: () => void;
  hint: string;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hint, setHint] = useState("");

  const attemptPlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) {
      return false;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setHint("");
      return true;
    } catch {
      setIsPlaying(false);
      setHint("musa on mykistetty — klikkaa nappia jos haluut äänen");
      return false;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
  }, []);

  useEffect(() => {
    void attemptPlay();
    const handleFirstInteraction = () => {
      void attemptPlay();
    };
    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", handleFirstInteraction);
  }, [attemptPlay]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    await attemptPlay();
  };

  const value = useMemo(
    () => ({
      isPlaying,
      toggle,
      hint,
    }),
    [hint, isPlaying]
  );

  return (
    <MusicContext.Provider value={value}>
      {children}
      <audio ref={audioRef} src="/Autot%20-%20Kaipuu.mp3" preload="auto" />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    return {
      isPlaying: false,
      toggle: () => undefined,
      hint: "",
    };
  }
  return context;
}
