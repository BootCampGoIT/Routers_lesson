import { useState, useEffect } from "react";
import themes from "../themes";

const initialData = () => {
  const storageValue = JSON.parse(localStorage.getItem("theme"));
  return themes[storageValue] || themes.dark;
};


const useTheme = () => {
  const [theme, setTheme] = useState(initialData);

  const toggler = () =>
    setTheme((prev) => (prev.title === "light" ? themes.dark : themes.light));

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme.title));
  }, [theme]);

  return [theme, toggler];
};

export default useTheme;
