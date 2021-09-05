import React from "react";

import { Container, Img, ImgContainer, Label } from "./styles";

import DotsImg from "assets/images/navbar/dots.svg";

import { Avatar } from "./components";

const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={DotsImg} alt="img" />
      </ImgContainer>
      <Label>Microsoft Teams</Label>
      <Avatar />
    </Container>
  );
};

export default Header;
