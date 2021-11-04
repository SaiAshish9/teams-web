import React from "react";
import { ChatBubble } from "..";
import { Container, ImgContainer } from "./styles";

import DiwaliImg from "assets/images/diwali.png";

const ChatContainer = () => {
  return (
    <Container>
      <ImgContainer>
        <ChatBubble
          title="Happy Diwali Everyone ❤️"
          timeline="5:13 PM"
          img={DiwaliImg}
          last
        />
      </ImgContainer>
      <ImgContainer left={1}>
        <ChatBubble name="Sai" title="Happy Diwali Bois ✨" timeline="5:13 PM" />
      </ImgContainer>
    </Container>
  );
};

export default ChatContainer;
