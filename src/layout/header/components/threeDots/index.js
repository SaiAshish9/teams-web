import React from "react";

import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";

import { Container, StyledImg } from "./styles";

const Ellipses = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <StyledImg src={ThreeDotsImg} alt="img" />
    </Container>
  );
};

export default Ellipses;
