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
  MainContent
} from "./styles";

import GeneralImg from "assets/images/modal/settings/general.svg";
import AccountsImg from "assets/images/modal/settings/accounts.svg";
import PrivacyImg from "assets/images/modal/settings/privacy.svg";
import NotificationsImg from "assets/images/modal/settings/notifications.svg";
import CaptionsImg from "assets/images/modal/settings/captions.svg";
import CallsImg from "assets/images/modal/settings/calls.svg";

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
          <CloseIcon />
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
          </MainContent>
        </Content>
      </Container>
    </StyledModal>
  );
};

export default SettingsModal;
