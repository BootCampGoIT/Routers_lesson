import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #6495ed;
  .headerLogo,
  .headerOptions {
    width: 30px;
    height: 30px;
  }
  .headerLogo {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.colors.main};
  }

  .headerOptions {
    width: 20px;
    height: 20px;
    fill: #bbb8b8;
  }
  .optionsOverlay {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover .headerOptions {
      cursor: pointer;
      fill: #6495ed;
      transition: 300ms linear scale;
      transform: scale(1.5);
    }
  }
  .themeOptionWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
  }
  .themeOptionTitle {
    color: white;
  }

  .navigation {
    display: flex;
    align-items: center;
  }
`;

export default HeaderContainer;
