import React, { useState } from "react";
import {
  StyledModal,
  Container,
  CloseIcon,
  Title,
  Header,
  Content,
  SideBar,
  ListItem,
  Img,
  Label,
  MainContent,
  Row,
  ThemeImg,
  ThemeImgContainer,
  ThemeImgLabel,
  Desc,
} from "./styles";

import GeneralImg from "assets/images/modal/settings/general.svg";
import AccountsImg from "assets/images/modal/settings/accounts.svg";
import PrivacyImg from "assets/images/modal/settings/privacy.svg";
import NotificationsImg from "assets/images/modal/settings/notifications.svg";
import CaptionsImg from "assets/images/modal/settings/captions.svg";
import CallsImg from "assets/images/modal/settings/calls.svg";
import LightThemeImg from "assets/images/modal/settings/lightTheme.svg";
import DarkThemeImg from "assets/images/modal/settings/darkTheme.svg";
import HighContrastThemeImg from "assets/images/modal/settings/highContrastTheme.svg";

import { useStore } from "store";

const data = [
  {
    text: "General",
    icon: GeneralImg,
  },
  {
    text: "Accounts",
    icon: AccountsImg,
  },
  {
    text: "Privacy",
    icon: PrivacyImg,
  },
  {
    text: "Notifications",
    icon: NotificationsImg,
  },
  {
    text: "Captions and transcripts",
    icon: CaptionsImg,
  },
  {
    text: "Calls",
    icon: CallsImg,
  },
];

const ThemeData = [
  {
    img: LightThemeImg,
    label: "Default",
    key: "light",
  },
  {
    img: DarkThemeImg,
    label: "Dark",
    key: "dark",
  },
  {
    img: HighContrastThemeImg,
    label: "High Contrast",
    key: "highContrast",
  },
];

const SettingsModal = ({ open, setOpen }) => {
  const [selected, setSelected] = useState(0);

  const {
    state: { theme },
    actions: { setTheme },
  } = useStore();

  const [themeSelected, setThemeSelected] = useState(theme);

  return (
    <StyledModal
      visible={open}
      closable={false}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <Container>
        <Header>
          <Title>Settings</Title>
          <CloseIcon onClick={() => setOpen(false)} />
        </Header>
        <Content>
          <SideBar>
            {data.map((i, k) => (
              <ListItem
                selected={+(k === selected)}
                onClick={() => setSelected(k)}
                key={k}
              >
                <Img alt="img" src={i.icon} />
                {i.text}
              </ListItem>
            ))}
          </SideBar>
          <MainContent>
            <Label>Theme</Label>
            <Row>
              {ThemeData.map((i, k) => (
                <ThemeImgContainer
                  key={k}
                  selected={+(themeSelected === i.key)}
                  onClick={() => {
                    localStorage.setItem("theme", i.key);
                    setTheme(i.key);
                    setThemeSelected(i.key);
                  }}
                >
                  <ThemeImg src={i.img} />
                  <ThemeImgLabel>{i.label}</ThemeImgLabel>
                </ThemeImgContainer>
              ))}
            </Row>
            <Label>Layout</Label>
            <Desc>Choose how you want to navigate between teams.</Desc>
            <Row>
              {ThemeData.map((i, k) => (
                <ThemeImgContainer
                  key={k}
                  selected={+(themeSelected === i.key)}
                  onClick={() => {
                    localStorage.setItem("theme", i.key);
                    setTheme(i.key);
                    setThemeSelected(i.key);
                  }}
                >
                  <ThemeImg src={i.img} />
                  <ThemeImgLabel>{i.label}</ThemeImgLabel>
                </ThemeImgContainer>
              ))}
            </Row>
          </MainContent>
        </Content>
      </Container>
    </StyledModal>
  );
};

export default SettingsModal;
