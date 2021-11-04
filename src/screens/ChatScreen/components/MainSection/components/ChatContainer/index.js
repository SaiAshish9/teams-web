import React, { useState } from "react";
import { ChatBubble } from "..";
import { Container, ImgContainer } from "./styles";

import DiwaliImg from "assets/images/diwali.png";

const ChatContainer = () => {
  const [hovered, setHovered] = useState(-1);

  return (
    <Container>
      <ImgContainer>
        <ChatBubble
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(-1)}
          title="Happy Diwali Everyone ❤️"
          timeline="5:13 PM"
          img={DiwaliImg}
          last
          display={hovered === 0}
        />
      </ImgContainer>
      <ImgContainer left={1}>
        <ChatBubble
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(-1)}
          left={1}
          name="Sai"
          title="Happy Diwali Bois ✨"
          timeline="5:13 PM"
          display={hovered === 1}
        />
      </ImgContainer>
    </Container>
  );
};

export default ChatContainer;
