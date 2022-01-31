import styled from "styled-components";

export const AppStyled = styled.div`
  header,
  main {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    header,
    main {
      padding: 0 40px;
    }
  }
  @media (min-width: 1024px) {
    header,
    main {
      padding: 0 60px;
    }
  }
`;
