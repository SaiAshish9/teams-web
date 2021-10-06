import React from "react";

import { Container, Img, Label, Img1 } from "./styles";

import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";

const Card = ({ text, img }) => {
  return (
    <Container>
      <Img1 src={ThreeDotsImg} alt="img" />
      <Img src={img} alt="img" />
      <Label>{text}</Label>
    </Container>
  );
};

export default Card;
