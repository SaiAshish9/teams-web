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
        {[...Array(9).keys()].map((i, k) => (
          <RedCont key={k} />
        ))}
      </Row>
    </Container>
  );
};

export default Emojis;
