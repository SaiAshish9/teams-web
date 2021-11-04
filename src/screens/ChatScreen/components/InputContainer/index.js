import React, { useState } from "react";

import { Container, EmojiCont, Input, Image, Row } from "./styles";

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
import { Theme, COLORS } from "constants/index";
import { useStore } from "store";

const data = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
];

const { bigStone } = COLORS;

const InputContainer = () => {
  const [hovered, setHovered] = useState(-1);

  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      <Input placeholder="Type a new message" />
      <EmojiCont>
        <Row>
          {data.slice(0, data.length - 1).map((Component, k) => (
            <Image
              onMouseEnter={() => setHovered(k)}
              onMouseLeave={() => setHovered(-1)}
              key={k}
            >
              {theme === Theme.highContrast && (
                <Component color={hovered === k ? "#000" : "#fff"} />
              )}
              {theme === Theme.dark && (
                <Component
                  color={hovered === k ? "none" : "#eee"}
                  fillColor={hovered === k ? bigStone : "none"}
                />
              )}
            </Image>
          ))}
        </Row>
        <Image
          onMouseEnter={() => setHovered(data.length - 1)}
          onMouseLeave={() => setHovered(-1)}
          last={1}
        >
          {theme === Theme.highContrast && (
            <Img12
              color={hovered === data.length - 1 ? "#000" : "#fff"}
              fillColor={hovered === data.length - 1 ? "#000" : "#none"}
            />
          )}
          {theme === Theme.dark && (
            <Img12
              color={hovered === data.length - 1 ? "none" : "#d1d1d1"}
              fillColor={hovered === data.length - 1 ? bigStone : "none"}
            />
          )}
        </Image>
      </EmojiCont>
    </Container>
  );
};

export default InputContainer;
