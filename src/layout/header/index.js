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

import { useStore } from "store";

import { Theme } from "constants/index";

const Header = () => {
  const {
    actions: { setTheme },
  } = useStore();

  return (
    <Container>
      <ImgContainer>
        <Img src={DotsImg} alt="img" />
      </ImgContainer>
      <Content>
        <Label>Microsoft Teams</Label>
        <InputContainer />
        <SettingsContainer>
          <ThreeDots
            onClick={() => {
              console.log(Theme.dark)
              setTheme(Theme.dark);
            }}
          />
          <Avatar />
        </SettingsContainer>
      </Content>
    </Container>
  );
};

export default Header;
