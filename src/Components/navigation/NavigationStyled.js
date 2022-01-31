import styled from "styled-components";

const NavigationContainer = styled.nav`
  .navList {
    display: flex;
    align-items: center;
  }
  .navListItem {
    text-transform: uppercase;
    color: #6495ed;
    margin-right: 20px;
  }
  .navItem {
    text-decoration: none;
    color: currentColor;
    &:hover {
      color: #39578b;
    }
  }
  .navItemActive {
    text-decoration: none;
    color: #39578b;
  }
`;

export default NavigationContainer;
