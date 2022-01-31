import React, { useContext } from "react";
import Switcher from "react-switch";
import { ThemeContext } from "../App";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Switcher
      onChange={setTheme}
      checked={theme.title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={14}
      width={30}
      handleDiameter={12}
      offColor={theme.colors.main}
      onColor={theme.colors.active}
    />
  );
};

export default ThemeSwitcher;
