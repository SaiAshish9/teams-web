import React from "react";

import AvatarImg from "assets/images/navbar/avatar.png";
import CheckmarkImg from "assets/images/navbar/checkmark.svg";
import CheckmarkHCImg from "assets/images/navbar/checkmarkHC.svg";

import {
  Container,
  Img,
  CheckmarkContainer,
  StyledCheckmarkImg,
  ParentContainer,
} from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";

const AvatarContainer = () => {
  const {
    state: { theme },
  } = useStore();

  return (
    <ParentContainer>
      <Container>
        <Img src={AvatarImg} alt="img" />
        <CheckmarkContainer>
          <StyledCheckmarkImg
            src={theme === Theme.highContrast ? CheckmarkHCImg : CheckmarkImg}
            alt="img"
          />
        </CheckmarkContainer>
      </Container>
    </ParentContainer>
  );
};

export default AvatarContainer;
