import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import useTheme from "../hooks/usePersistedTheme";
import { AppStyled } from "./AppStyled";
import Header from "./header/Header";
import Main from "./main/Main";

export const {
  Provider: ThemeContextProvider,
  Consumer: ThemeContextConsumer,
} = createContext();

export const LangContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppStyled>
          <Header />
          <Main />
        </AppStyled>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
