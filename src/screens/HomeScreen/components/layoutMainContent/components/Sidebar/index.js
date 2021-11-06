import React from "react";

import {
  Container,
  Header,
  Row,
  Title,
  StyledFilterIcon,
  Label,
  Content,
  Footer,
  FooterLabel,
  Img,
  FooterCont,
  Component,
  LabelImg,
  LabelCont,
  ArrowDown,
  ArrowRight,
  ArrowCont,
} from "./styles";

import CreateTeamImg from "assets/images/homeScreen/createTeam.svg";
import CreateTeamGrayImg from "assets/images/homeScreen/createTeamGray.svg";
import CreateTeamHCImg from "assets/images/homeScreen/createTeamHC.svg";
import SettingsIcon from "assets/images/navbar/settings.svg";
import SettingsIconHC from "assets/images/navbar/settingsHC.svg";
import ThreeDotsDark from "assets/images/sidebar/threeDots-white.svg";
import ThreeDots from "assets/images/sidebar/threeDots.svg";

import { TEAMS_DATA, Theme } from "constants/index";

import { useStore } from "store";

const Sidebar = () => {
  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      <Header>
        <Row chat={1} style={{ cursor: "pointer" }}>
          <Title>Teams</Title>
        </Row>

        <Row>
          <StyledFilterIcon size={18} />
        </Row>
      </Header>
      <Content>
        <ArrowCont>
          <ArrowDown />
          <Label>Your Teams</Label>
        </ArrowCont>

        {TEAMS_DATA.map((i, k) => (
          <Component key={k}>
            <LabelCont>
              <ArrowRight />
              <LabelImg src={i.img} alt="img" />
              <Label>{i.text}</Label>
            </LabelCont>
            <Img
              src={
                theme === Theme.light
                  ? ThreeDots
                  : theme === Theme.highContrast
                  ? ThreeDotsDark
                  : ThreeDots
              }
              alt="img"
            />
          </Component>
        ))}
      </Content>
      <Footer>
        <FooterCont>
          <Img
            src={
              theme === Theme.highContrast && hovered
                ? CreateTeamHCImg
                : theme === Theme.light
                ? CreateTeamHCImg
                : theme === Theme.dark
                ? CreateTeamGrayImg
                : CreateTeamImg
            }
            alt="img"
          />
          <FooterLabel>Join or create a team</FooterLabel>
        </FooterCont>
        <Img
          src={
            theme === Theme.highContrast && hovered
              ? SettingsIconHC
              : theme === Theme.light
              ? SettingsIconHC
              : SettingsIcon
          }
          alt="img"
        />
      </Footer>
    </Container>
  );
};

export default Sidebar;