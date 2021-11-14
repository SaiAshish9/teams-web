import React from "react";

import { SideSection, MainSection } from "./components";

import { Container } from "./styles";

import Helmet from "react-helmet";

const ChatScreen = () => {
  return (
    <Container>
      <Helmet>
        <title>7 geniuses inside 🤯 | Microsoft Teams</title>
      </Helmet>
      <SideSection />
      <MainSection />
    </Container>
  );
};

export default ChatScreen;
