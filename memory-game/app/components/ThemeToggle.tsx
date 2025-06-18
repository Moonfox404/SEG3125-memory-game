"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import useDarkMode from "../hooks/useDarkMode"
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useDarkMode();
  const [initialTheme, setInitialTheme] = useState("");

  useEffect(() => {
    if (!initialTheme) {
      setInitialTheme(theme);
    }
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={
        () => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }
      }/>
      <div className={initialTheme === "dark" ? "swap-on" : "swap-off"}><FontAwesomeIcon icon={faSun} /></div>
      <div className={initialTheme === "dark" ? "swap-off" : "swap-on"}><FontAwesomeIcon icon={faMoon} /></div>
    </label>
  );
}

export default ThemeToggle;
