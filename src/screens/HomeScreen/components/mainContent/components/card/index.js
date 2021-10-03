import React from "react";

import { Container, Img, Label, Img1 } from "./styles";

import Pic1 from "assets/images/homeScreen/pic1.png";
import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";

const Card = () => {
  return (
    <Container>
      <Img1 src={ThreeDotsImg} alt="img" />
      <Img src={Pic1} alt="img" />
      <Label>CSE I & II</Label>
    </Container>
  );
};

export default Card;
