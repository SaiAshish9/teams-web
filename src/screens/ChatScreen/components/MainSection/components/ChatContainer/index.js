import React, { useState } from "react";
import { ChatBubble } from "..";
import { Container, ImgContainer } from "./styles";

import DiwaliImg from "assets/images/diwali.png";
import {
  DividerContainer,
  DividerTitle,
  DividerTitleContainer,
  Divider,
} from "screens/TeamScreen/components/MainSection/components/MainContent/styles";

const ChatContainer = ({ innerHtml }) => {
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
      <DividerContainer
        style={{ marginTop: "1rem", marginBottom: "0.5rem", paddingRight: 0 }}
      >
        <Divider style={{ width: "calc(50%)" }} />
        <DividerTitleContainer>
          <DividerTitle style={{ position: "relative", left: "1.4rem" }}>
            Today
          </DividerTitle>
        </DividerTitleContainer>
        <Divider style={{ width: "calc(50%)" }} />
      </DividerContainer>
      {innerHtml && (
        <ImgContainer>
          <ChatBubble
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(-1)}
            timeline="1:30 PM"
            last
            innerHtml={innerHtml}
            display={hovered === 2}
          />
        </ImgContainer>
      )}
    </Container>
  );
};

export default ChatContainer;
