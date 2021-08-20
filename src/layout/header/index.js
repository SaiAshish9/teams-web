import React from "react";

import { Container, Img, ImgContainer } from "./styles";

import DotsImg from "assets/images/navbar/dots.svg";

const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={DotsImg} alt="img" />
      </ImgContainer>
    </Container>
  );
};

export default Header;
