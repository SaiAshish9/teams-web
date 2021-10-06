import React, { useState } from "react";

import { Container, Img, Label, Img1 } from "./styles";

import ThreeDotsDark from "assets/images/sidebar/threeDots-white.svg";
import ThreeDotsFilled from "assets/images/sidebar/threeDots-filled.svg";
import ThreeDots from "assets/images/sidebar/threeDots.svg";

import { useStore } from "store";

import { Theme } from "constants/index";

const Card = ({ text, img }) => {
  const {
    state: { theme },
  } = useStore();

  const [hovered, setHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Img1
        src={
          theme === Theme.light
            ? hovered
              ? ThreeDotsFilled
              : ThreeDots
            : theme === Theme.highContrast
            ? hovered
              ? ThreeDots
              : ThreeDotsDark
            : ThreeDotsDark
        }
        alt="img"
      />
      <Img src={img} alt="img" />
      <Label>{text}</Label>
    </Container>
  );
};

export default Card;
