import React, { useState } from "react";
import {
  Container,
  Text,
  Desc,
  Img,
  Image,
  Parent,
  Row,
  BubbleImg,
  StyledInnerHtml,
} from "./styles";

import TickIcon from "../ChatContainer/tickIcon";
import AvatarImage from "assets/images/avatar.jpeg";
import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";
import ThreeDotsGrayImg from "assets/images/sidebar/threeDots.svg";

import { Theme } from "constants/index";
import { useStore } from "store";
import {
  EmojiContainer,
  EmojiDotsImg,
  Emojis,
  EmojiVerticalDivider,
} from "screens/TeamScreen/components/MainSection/components/MainContent/styles";

const ChatBubbleContainer = ({
  timeline,
  name,
  img,
  title,
  last,
  left,
  display,
  onMouseEnter,
  onMouseLeave,
  innerHtml,
}) => {
  const {
    state: { theme },
  } = useStore();

  return (
    <Parent left={left}>
      {left === 1 && <BubbleImg src={AvatarImage} alt="img" />}

      <Container
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        left={left}
      >
        <Row>
          {name && <Text style={{ marginRight: "0.7rem" }}>{name} </Text>}
          <Text>{timeline}</Text>
        </Row>

        {title && <Desc>{title}</Desc>}
        {innerHtml && (
          <StyledInnerHtml
            dangerouslySetInnerHTML={{ __html: innerHtml }}
            target="_blank"
          />
        )}
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
      {display && (
        <EmojiContainer chat={1}>
          <Emojis>👍🏻 ❤️ 😁 😲 😟 😡</Emojis>
          <EmojiVerticalDivider />
          <EmojiDotsImg
            alt="img"
            src={theme !== Theme.highContrast ? ThreeDotsGrayImg : ThreeDotsImg}
          />
        </EmojiContainer>
      )}
    </Parent>
  );
};

export default ChatBubbleContainer;
