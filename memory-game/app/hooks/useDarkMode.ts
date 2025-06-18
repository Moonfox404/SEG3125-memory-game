import { Dispatch, useEffect, useState } from "react";

const useDarkMode: () => [string, Dispatch<string>] = () => {
  const [ theme, setTheme ] = useState("");

  useEffect(() => {
    if (!theme) {
      // initialise theme using system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.theme;
      setTheme(savedTheme ?? (prefersDark ? "dark" : "light"));
    }
  }, []);

  useEffect(() => {
    // set theme
    const root = window.document.body;
    root.setAttribute('data-theme', theme);

    // save preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [ theme, setTheme ];
}

export default useDarkMode;
