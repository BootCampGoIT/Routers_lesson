import { useState, useEffect } from "react";

import themes from "../themes";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem("theme"));
    return themes[storageValue] || themes.dark;
  });

  const toggler = () => {
    setTheme((prev) => (prev.title === "light" ? themes.dark : themes.light));
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme.title));
  }, [theme]);

  return [theme, toggler];
};

export default useTheme;
