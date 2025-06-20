"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Dispatch, useEffect, useState } from "react";

type ThemeToggleProps = {
  theme: string;
  setTheme: Dispatch<string>
}

const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  const [initialTheme, setInitialTheme] = useState("");

  useEffect(() => {
    if (!initialTheme) {
      setInitialTheme(theme);
    }
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />
      <div className={initialTheme === "dark" ? "swap-on" : "swap-off"}>
        <FontAwesomeIcon icon={faSun} />
      </div>
      <div className={initialTheme === "dark" ? "swap-off" : "swap-on"}>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </label>
  );
};

export default ThemeToggle;
