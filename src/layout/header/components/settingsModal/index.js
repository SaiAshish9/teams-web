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

const SettingsModal = ({ open, setOpen }) => {
  const [selected, setSelected] = useState(0);

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
              {[LightThemeImg, DarkThemeImg, HighContrastThemeImg].map(
                (i, k) => (
                  <ThemeImg src={i} key={k} />
                )
              )}
            </Row>
          </MainContent>
        </Content>
      </Container>
    </StyledModal>
  );
};

export default SettingsModal;
