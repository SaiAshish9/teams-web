import React from "react";
import { ChatBubble } from "..";
import { Container, ImgContainer } from "./styles";

const ChatContainer = () => {
  return (
    <Container>
      <ImgContainer>
        <ChatBubble />
      </ImgContainer>
    </Container>
  );
};

export default ChatContainer;
