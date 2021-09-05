import React from "react";

import AvatarImg from "assets/images/navbar/avatar.png";
import CheckmarkImg from "assets/images/navbar/checkmark.svg";

import {
  Container,
  Img,
  CheckmarkContainer,
  StyledCheckmarkImg,
} from "./styles";

const AvatarContainer = () => {
  return (
    <Container>
      <Img src={AvatarImg} alt="img" />
      <CheckmarkContainer>
        <StyledCheckmarkImg src={CheckmarkImg} alt="img" />
      </CheckmarkContainer>
    </Container>
  );
};

export default AvatarContainer;
