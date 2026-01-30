"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kaisateema";
const themes = [
  { id: "day", label: "päivä" },
  { id: "night", label: "yö" },
  { id: "fun", label: "hassuttelu" },
];

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("day");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const next = themes.find((item) => item.id === stored)?.id ?? "day";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const handleChange = (value: string) => {
    setTheme(value);
    document.documentElement.dataset.theme = value;
    window.localStorage.setItem(STORAGE_KEY, value);
  };

  return (
    <label className="themeSwitcher">
      <span className="themeLabel">teema</span>
      <select
        className="themeSelect"
        value={theme}
        onChange={(event) => handleChange(event.target.value)}
      >
        {themes.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
