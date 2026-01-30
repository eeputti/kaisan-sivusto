"use client";

import { useState } from "react";
import { RetroBox } from "@/components/RetroBox";
import { site } from "@/lib/site";

type Answers = Record<string, string>;

export function WouldYouRather() {
  const { wouldYouRather } = site.interactive;
  const [answers, setAnswers] = useState<Answers>({});

  const handleAnswer = (id: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  return (
    <RetroBox title={wouldYouRather.title}>
      <div className="wyrList">
        {wouldYouRather.questions.map((question) => (
          <div key={question.id} className="wyrItem">
            <p className="p">{question.prompt}</p>
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
              <span className="pill">mun vastaus: {answers[question.id]}</span>
            )}
          </div>
        ))}
      </div>
    </RetroBox>
  );
}
