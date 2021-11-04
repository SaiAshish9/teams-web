import React, { useState } from "react";

import { Container, EmojiCont, Input, Image, Row, Img } from "./styles";

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
import OptionsImg from "assets/images/options.png";
import Emojis from "../Emojis";

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

  const [clicked, setClicked] = useState(false);

  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      <Input placeholder="Type a new message" />
      <EmojiCont>
        <Row>
          {data.slice(0, data.length - 1).map(
            (Component, k) =>
              !(theme === Theme.light && k > 5) && (
                <Image
                  onMouseEnter={() => setHovered(k)}
                  onMouseLeave={() => setHovered(-1)}
                  key={k}
                  onClick={() => {
                    if (k === 3) {
                      setClicked(true);
                    }
                    if (clicked) setClicked((c) => !c);
                  }}
                >
                  {theme === Theme.highContrast && (
                    <Component
                      color={
                        hovered === k
                          ? "#000"
                          : clicked && k === 3
                          ? "yellow"
                          : "#fff"
                      }
                    />
                  )}
                  {theme === Theme.dark && (
                    <Component
                      color={hovered === k ? "none" : "#eee"}
                      fillColor={hovered === k ? bigStone : "none"}
                    />
                  )}
                  {theme === Theme.light && k < 6 && (
                    <Component
                      color={hovered === k ? "none" : "#000"}
                      fillColor={hovered === k ? bigStone : "none"}
                      dark={k > 6}
                    />
                  )}
                </Image>
              )
          )}
          {theme === Theme.light && <Img src={OptionsImg} alt="img" />}
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
          {theme === Theme.light && (
            <Img12
              color={hovered === data.length - 1 ? "none" : "#000"}
              fillColor={hovered === data.length - 1 ? bigStone : "none"}
            />
          )}
        </Image>
      </EmojiCont>
      {clicked && <Emojis setClicked={setClicked} />}
    </Container>
  );
};

export default InputContainer;
