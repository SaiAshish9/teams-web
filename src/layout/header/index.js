import React from "react";

import { Container, Img, ImgContainer, Label, Content } from "./styles";

import DotsImg from "assets/images/navbar/dots.svg";

import { Avatar } from "./components";

const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={DotsImg} alt="img" />
      </ImgContainer>
      <Content>
        <Label>Microsoft Teams</Label>
        <Avatar />
      </Content>
    </Container>
  );
};

export default Header;
