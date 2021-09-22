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
} from "./styles";

const data = [
  {
    text: "General",
    icon: null,
  },
  {
    text: "Accounts",
    icon: null,
  },
  {
    text: "Privacy",
    icon: null,
  },
  {
    text: "Notifications",
    icon: null,
  },
  {
    text: "Captions and transcripts",
    icon: null,
  },
  {
    text: "Calls",
    icon: null,
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
                {i.text}
              </ListItem>
            ))}
          </SideBar>
        </Content>
      </Container>
    </StyledModal>
  );
};

export default SettingsModal;
