import React from "react";

import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";

import { Container, StyledImg } from "./styles";

const Ellipses = () => {
  return (
    <Container>
      <StyledImg src={ThreeDotsImg} alt="img" />
    </Container>
  );
};

export default Ellipses;
