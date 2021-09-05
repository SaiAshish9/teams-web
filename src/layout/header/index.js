import React from "react";

import {
  Container,
  Img,
  ImgContainer,
  Label,
  Content,
  SettingsContainer,
} from "./styles";

import DotsImg from "assets/images/navbar/dots.svg";

import { Avatar, InputContainer, ThreeDots } from "./components";

const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={DotsImg} alt="img" />
      </ImgContainer>
      <Content>
        <Label>Microsoft Teams</Label>
        <InputContainer />
        <SettingsContainer>
          <ThreeDots />
          <Avatar />
        </SettingsContainer>
      </Content>
    </Container>
  );
};

export default Header;
