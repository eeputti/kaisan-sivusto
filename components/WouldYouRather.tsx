"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

type Answers = Record<string, string>;
const STORAGE_KEY = "minipeli:valinta";

export function WouldYouRather() {
  const { wouldYouRather } = site.interactive;
  const [answers, setAnswers] = useState<Answers>({});
  const isComplete = wouldYouRather.questions.every((question) => answers[question.id]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setAnswers(JSON.parse(stored) as Answers);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (isComplete) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    }
  }, [answers, isComplete]);

  const handleAnswer = (id: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const getResponse = (id: string, option: string) => {
    if (id === "coffee") {
      return option === "aamukahvi"
        ? "oikein!"
        : "eepun vastaus ois ollu aamukahvi mut iltakävelyki on iha ok";
    }
    if (id === "movie") {
      return option === "leffailta"
        ? "oikein!"
        : "eepun vastaus ois ollu toi toinen, mut vois kyl mennä piknikilleki täs sitku lämpenee :3";
    }
    if (id === "travel") {
      return "molemmat oikein! nyt on nii paha kysymys et saa ottaa kyl molemmat";
    }
    return "";
  };

  return (
    <RetroBox title={wouldYouRather.title}>
      <div className="wyrList">
        {wouldYouRather.questions.map((question) => (
          <div key={question.id} className="wyrItem">
            <div className="wyrButtons">
              {question.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="btn88"
                  onClick={() => handleAnswer(question.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {answers[question.id] && (
              <p className="p muted">{getResponse(question.id, answers[question.id])}</p>
            )}
          </div>
        ))}
        {isComplete && (
          <div className="miniReveal">
            <span className="pill">minipeli läpi!</span>
            <Link className="btn88" href="/minipeli">
              takaisin minipelit-sivulle
            </Link>
          </div>
        )}
      </div>
    </RetroBox>
  );
}
