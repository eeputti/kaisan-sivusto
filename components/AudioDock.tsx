"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function AudioDock() {
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const voiceRef = useRef<HTMLAudioElement | null>(null);
  const [musicOn, setMusicOn] = useState(true);
  const [voiceOn, setVoiceOn] = useState(false);
  const [hint, setHint] = useState("");

  const attemptMusicPlay = useCallback(async () => {
    const audio = musicRef.current;
    if (!audio) {
      return false;
    }

    try {
      await audio.play();
      setMusicOn(true);
      setHint("");
      return true;
    } catch (error) {
      setHint("musa on mykistetty — klikkaa nappia jos haluut äänen");
      return false;
    }
  }, []);

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.loop = true;
      musicRef.current.volume = 0.35;
    }
  }, []);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (musicOn) {
        void attemptMusicPlay();
      }
    };

    void attemptMusicPlay();
    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", handleFirstInteraction);
  }, [attemptMusicPlay, musicOn]);

  const toggleMusic = async () => {
    const audio = musicRef.current;
    if (!audio) {
      return;
    }

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }

    const played = await attemptMusicPlay();
    if (played) {
      setMusicOn(true);
    }
  };

  const toggleVoice = async () => {
    const audio = voiceRef.current;
    if (!audio) {
      return;
    }

    if (voiceOn) {
      audio.pause();
      audio.currentTime = 0;
      setVoiceOn(false);
      return;
    }

    try {
      await audio.play();
      setVoiceOn(true);
    } catch (error) {
      setVoiceOn(false);
    }
  };

  return (
    <section className="audioDock" aria-label="Audio dock">
      <div className="audioDockButtons">
        <button type="button" className="btn88 audioBtn" onClick={toggleMusic}>
          {musicOn ? "laita musa pois" : "laita musa päälle"}
        </button>
        <button type="button" className="btn88 audioBtn" onClick={toggleVoice}>
          täs on pieni ääniviesti: {voiceOn ? "stop" : "play"}
        </button>
      </div>
      {hint ? <p className="audioHint muted">{hint}</p> : null}
      <p className="audioHint muted">soiva biisi: Autot - Kaipuu</p>
      <audio ref={musicRef} src="/Autot%20-%20Kaipuu.mp3" preload="auto" />
      <audio
        ref={voiceRef}
        src="/media/voice.mp3"
        preload="auto"
        onEnded={() => setVoiceOn(false)}
      />
    </section>
  );
}
