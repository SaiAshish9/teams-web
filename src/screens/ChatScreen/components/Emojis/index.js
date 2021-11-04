import React from "react";
import {
  Container,
  EmojiIcon,
  Label,
  EmojiIconImg,
  EmojiIconContainer,
  InputCont,
  StyledSearchIcon,
  ParentInputContainer,
  RedCont,
  Row,
} from "./styles";

import SmileIcon from "./assets/smile";
import Img2 from "./assets/img2";
import Img3 from "./assets/img3";
import Img4 from "./assets/img4";
import Img5 from "./assets/img5";
import Img6 from "./assets/img6";
import Img7 from "./assets/img7";
import Img8 from "./assets/img8";
import Img9 from "./assets/img9";
import { Img } from "layout/header/styles";

const Emojis = () => {
  return (
    <Container>
      <ParentInputContainer>
        <InputCont placeholder="Find something fun" />
        <StyledSearchIcon />
      </ParentInputContainer>

      <Label>Smilies</Label>
      <EmojiIconContainer>
        {[...Array(80).keys()].map((i, k) => (
          <EmojiIcon key={k}>
            <EmojiIconImg
              src="https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/smile/default/60_f.png?etag=v73"
              alt="img"
            />
          </EmojiIcon>
        ))}
      </EmojiIconContainer>
      <Row>
        {[SmileIcon, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9].map(
          (Component, k) => (
            <RedCont key={k}>
              <Component />
            </RedCont>
          )
        )}
      </Row>
    </Container>
  );
};

export default Emojis;
