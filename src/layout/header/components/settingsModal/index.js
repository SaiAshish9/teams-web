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
  InputLabel,
  CheckboxContainer,
  StyledCheckbox,
  InputContainer,
  InputImg,
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
import GridLayoutDark from "assets/images/modal/settings/grid-dark.svg";
import ListLayoutDark from "assets/images/modal/settings/list-dark.svg";
import GridLayoutLight from "assets/images/modal/settings/grid-light.svg";
import ListLayoutLight from "assets/images/modal/settings/list-light.svg";
import GridLayoutHC from "assets/images/modal/settings/grid-hc.svg";
import ListLayoutHC from "assets/images/modal/settings/list-hc.svg";
import ArrowDownDarkImg from "assets/images/modal/settings/arrowDown-dark.svg";
import ArrowDownLightImg from "assets/images/modal/settings/arrowDown-light.svg";

import { useStore } from "store";
import { Theme } from "constants/index";

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

function Input({ theme }) {
  return (
    <InputContainer>
      <p>English (United States)</p>
      <InputImg
        alt="img"
        src={theme !== Theme.light ? ArrowDownDarkImg : ArrowDownLightImg}
      />
    </InputContainer>
  );
}

const SettingsModal = ({ open, setOpen }) => {
  const [selected, setSelected] = useState(0);

  const {
    state: { theme },
    actions: { setTheme },
  } = useStore();

  const [themeSelected, setThemeSelected] = useState(theme);

  const LayoutData = [
    {
      img:
        theme === "dark"
          ? GridLayoutDark
          : theme === "highContrast"
          ? GridLayoutHC
          : GridLayoutLight,
      title: "Grid",
    },
    {
      img:
        theme === "dark"
          ? ListLayoutDark
          : theme === "highContrast"
          ? ListLayoutHC
          : ListLayoutLight,
      title: "List",
    },
  ];

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
            <Row start={1}>
              {LayoutData.map((i, k) => (
                <ThemeImgContainer
                  key={k}
                  selected={+(k === 0)}
                  onClick={() => {}}
                >
                  <ThemeImg src={i.img} />
                  <ThemeImgLabel>{i.title}</ThemeImgLabel>
                </ThemeImgContainer>
              ))}
            </Row>
            <Label>Language</Label>
            <Desc>Restart to apply language settings.</Desc>
            <InputLabel>
              App language determines the date and time format.
            </InputLabel>
            <Input theme={theme} />
            <InputLabel>
              Keyboard language overrides keyboard shortcuts.
            </InputLabel>
            <Input theme={theme} />
            <Label>Display</Label>
            <CheckboxContainer>
              <StyledCheckbox color="#7e81b7" />
              <Desc check={1}>
                Turn off animations (requires restarting Teams)
              </Desc>
            </CheckboxContainer>
            <Label>Out Of Office</Label>
            <Desc>Schedule out of office and set automatic replies</Desc>
          </MainContent>
        </Content>
      </Container>
    </StyledModal>
  );
};

export default SettingsModal;
