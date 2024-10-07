"use client";

import React from "react";
import Brand from "../../public/images/THI_THU_THUY_DANH.svg";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  padding: 2rem;
  
  img {
    max-width: 100%;
  }
`;

function Header() {
  return (
    <StyledContainer>
      <img src={Brand.src} />
    </StyledContainer>
  );
}

export default Header;
