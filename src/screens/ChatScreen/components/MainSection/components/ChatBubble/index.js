import React from "react";
import { Container, Text, Desc, Img, Image, Parent } from "./styles";

import DiwaliImg from "assets/images/diwali.png";
import TickIcon from "../ChatContainer/tickIcon";

const ChatBubbleContainer = () => {
  return (
    <Parent>
      <Container>
        <Text>5:13 PM</Text>
        <Desc>Happy Diwali Everyone ❤️</Desc>
        <Img src={DiwaliImg} alt="img" />
      </Container>
      <Image>
        <TickIcon />
      </Image>
    </Parent>
  );
};

export default ChatBubbleContainer;
