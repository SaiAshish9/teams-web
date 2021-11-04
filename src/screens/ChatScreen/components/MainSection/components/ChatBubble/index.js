import React from "react";
import {
  Container,
  Text,
  Desc,
  Img,
  Image,
  Parent,
  Row,
  BubbleImg,
} from "./styles";

import TickIcon from "../ChatContainer/tickIcon";
import AvatarImage from "assets/images/avatar.jpeg";

import { Theme } from "constants/index";
import { useStore } from "store";

const ChatBubbleContainer = ({ timeline, name, img, title, last, left }) => {
  const {
    state: { theme },
  } = useStore();

  return (
    <Parent left={left}>
      {left === 1 && <BubbleImg src={AvatarImage} alt="img" />}

      <Container left={left}>
        <Row>
          {name && <Text style={{ marginRight: "0.7rem" }}>{name} </Text>}
          <Text>{timeline}</Text>
        </Row>

        <Desc>{title}</Desc>
        {img && <Img src={img} alt="img" />}
      </Container>
      {last && (
        <Image>
          <TickIcon
            color={
              theme === Theme.highContrast
                ? "yellow"
                : theme === Theme.light
                ? "#8588bb"
                : "#9699f0"
            }
          />
        </Image>
      )}
    </Parent>
  );
};

export default ChatBubbleContainer;
