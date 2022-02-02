import React, { useState } from "react";
import HeaderContainer from "./HeaderStyled";
import sprite from "../../icons/headerIcons.svg";
import Modal from "../modal/Modal";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Navigation from "../navigation/Navigation";
import mainRoutes from "../../routes/mainRoutes";

const Header = () => {
  const [isOptionsOpen, toggleOptions] = useState(false);
  const toggleModal = () => toggleOptions((prev) => !prev);
  return (
    <HeaderContainer>
      <svg className='headerLogo'>
        <use href={sprite + "#icon-home"} />
      </svg>
      <div className='navigation'>
        <Navigation links={mainRoutes} />
        <div className='optionsOverlay' onClick={toggleModal}>
          <svg className='headerOptions'>
            <use href={sprite + "#icon-dots-three-vertical"} />
          </svg>
        </div>
      </div>
      {isOptionsOpen && (
        <Modal closeModal={toggleModal}>
          <div className='themeOptionWrapper'>
            <p className='themeOptionTitle'>Dark mode</p>
            <ThemeSwitcher />
          </div>
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
