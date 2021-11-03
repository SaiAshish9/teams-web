import React from "react";

import { Container, EmojiCont, Input, Image } from "./styles";

import Img1 from "./assets/img1";
import Img2 from "./assets/img2";
import Img3 from "./assets/img3";
import Img4 from "./assets/img4";
import Img5 from "./assets/img5";
import Img6 from "./assets/img6";
import Img7 from "./assets/img7";
import Img8 from "./assets/img8";
import Img9 from "./assets/img9";
import Img10 from "./assets/img10";
import Img11 from "./assets/img11";
import Img12 from "./assets/img12";

const data = [
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
  <Img1 color="#fff" />,
];

const InputContainer = () => {
  return (
    <Container>
      <Input placeholder="Type a new message" />
      <EmojiCont>
        {data.map((i, k) => (
          <Image key={k}>{i} </Image>
        ))}
      </EmojiCont>
    </Container>
  );
};

export default InputContainer;
