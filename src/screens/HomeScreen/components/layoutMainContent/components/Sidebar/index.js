import React, { useState } from "react";

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
  TeamsContainer,
  GeneralsContainer,
  SettingsIconCont,
} from "./styles";

import CreateTeamImg from "assets/images/homeScreen/createTeam.svg";
import CreateTeamYellowImg from "assets/images/homeScreen/createTeamYellow.svg";
import CreateTeamGrayImg from "assets/images/homeScreen/createTeamGray.svg";
import CreateTeamHCImg from "assets/images/homeScreen/createTeamHC.svg";
import SettingsIcon from "assets/images/navbar/settings.svg";
import SettingsIconBlack from "assets/images/navbar/settingsBlack.svg";
import SettingsIconHC from "assets/images/navbar/settingsHC.svg";
import ThreeDotsDark from "assets/images/sidebar/threeDots-white.svg";
import ThreeDots from "assets/images/sidebar/threeDots.svg";
import ThreeDotsHC from "assets/images/sidebar/threeDotsHCSelected.svg";

import { TEAMS_DATA, Theme } from "constants/index";

import { useStore } from "store";

const Sidebar = ({ setItemSelected }) => {
  const {
    state: { theme },
  } = useStore();

  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(-1);
  const [settingsHovered, setSettingsHovered] = useState(-1);
  const [footerContentHovered, setFooterContentHovered] = useState(false);
  const [settingsIconHovered, setSettingsIconHovered] = useState(false);

  function handleClick(k) {
    if (selected === k) {
      setSelected(-1);
    } else setSelected(k);
    setItemSelected(k);
  }

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
        <ArrowCont onClick={() => setOpen((o) => !o)}>
          {open ? <ArrowDown /> : <ArrowRight />}
          <Label>Your Teams</Label>
        </ArrowCont>

        {open &&
          TEAMS_DATA.map((i, k) => (
            <TeamsContainer
              onMouseEnter={() => setSettingsHovered(k)}
              onMouseLeave={() => setSettingsHovered(-1)}
              onClick={() => handleClick(k)}
              key={k}
            >
              <Component>
                <LabelCont>
                  {selected === k ? <ArrowDown /> : <ArrowRight />}
                  <LabelImg src={i.img} alt="img" />
                  <Label>{i.text}</Label>
                </LabelCont>
                <Img
                  src={
                    theme === Theme.light
                      ? ThreeDots
                      : theme === Theme.highContrast
                      ? settingsHovered === k
                        ? ThreeDotsHC
                        : ThreeDotsDark
                      : ThreeDots
                  }
                  alt="img"
                />
              </Component>
              {selected === k && <GeneralsContainer>General</GeneralsContainer>}
            </TeamsContainer>
          ))}
      </Content>
      <Footer>
        <FooterCont
          onMouseEnter={() => setFooterContentHovered(true)}
          onMouseLeave={() => setFooterContentHovered(false)}
        >
          <Img
            src={
              theme === Theme.highContrast
                ? footerContentHovered
                  ? CreateTeamYellowImg
                  : CreateTeamImg
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
        <SettingsIconCont
          onMouseEnter={() => setSettingsIconHovered(true)}
          onMouseLeave={() => setSettingsIconHovered(false)}
        >
          <Img
            src={
              theme === Theme.highContrast
                ? settingsIconHovered
                  ? SettingsIconBlack
                  : SettingsIcon
                : theme === Theme.light
                ? SettingsIconHC
                : SettingsIcon
            }
            alt="img"
          />
        </SettingsIconCont>
      </Footer>
    </Container>
  );
};

export default Sidebar;
