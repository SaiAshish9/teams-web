import React, { useState } from "react";

import { Container, Label, Content, Img, ImgContainer, Row } from "./styles";

import GeneralImg from "assets/images/modal/settings/generalBlack.svg";
import GeneralLightImg from "assets/images/modal/settings/generalLight.svg";
import GeneralFilledImg from "assets/images/modal/settings/generalFilled.svg";
import FilterImg from "assets/images/navbar/filter.svg";
import FilterImgDark from "assets/images/navbar/filterDark.svg";
import FilterImgBlue from "assets/images/navbar/filterBlue.svg";

import { CreateTeamBtn, MainContent } from "./components";

import { useStore } from "store";

import { Theme } from "constants/index";

const HomeScreen = () => {
  const {
    state: { theme },
  } = useStore();

  const [filterHovered, setFilterHovered] = useState(false);
  const [settingsHovered, setSettingsHovered] = useState(false);

  return (
    <Container>
      <Content>
        <Label>Teams</Label>
        <Row>
          <ImgContainer
            onMouseEnter={() => setFilterHovered(true)}
            onMouseLeave={() => setFilterHovered(false)}
          >
            <Img
              src={
                !filterHovered
                  ? theme === Theme.light
                    ? FilterImg
                    : FilterImgDark
                  : theme !== Theme.highContrast
                  ? FilterImgBlue
                  : FilterImg
              }
              alt="img"
            />
          </ImgContainer>
          <ImgContainer
            onMouseEnter={() => setSettingsHovered(true)}
            onMouseLeave={() => setSettingsHovered(false)}
          >
            <Img
              src={
                settingsHovered
                  ? GeneralFilledImg
                  : theme === Theme.light
                  ? GeneralImg
                  : GeneralLightImg
              }
              alt="img"
            />
          </ImgContainer>
          <CreateTeamBtn />
        </Row>
      </Content>
      <MainContent />
    </Container>
  );
};

export default HomeScreen;
