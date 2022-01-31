import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Main;
