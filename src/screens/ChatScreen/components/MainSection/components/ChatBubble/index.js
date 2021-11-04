import React from "react";
import { Container, Text, Desc, Img, Image, Parent, Row } from "./styles";

import TickIcon from "../ChatContainer/tickIcon";

const ChatBubbleContainer = ({ timeline, name, img, title, last }) => {
  return (
    <Parent>
      <Container>
        <Row>
          {name && <Text style={{ marginRight: "0.7rem" }}>{name} </Text>}
          <Text>{timeline}</Text>
        </Row>

        <Desc>{title}</Desc>
        {img && <Img src={img} alt="img" />}
      </Container>
      {last && (
        <Image>
          <TickIcon />
        </Image>
      )}
    </Parent>
  );
};

export default ChatBubbleContainer;
