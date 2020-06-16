import React from "react";
import styled from "@emotion/styled";

const HeaderComponent = () => {
  return <HeaderStyled>Open Positions</HeaderStyled>;
};

const HeaderStyled = styled.div`
  && {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 52px;
    letter-spacing: 2vw;
    color: var(--primary-color);
  }
`;

export default HeaderComponent;
