import React from "react";

import { Container, Image, Image1 } from "./styles";

import LogoImg from "assets/images/navbar/logo.png";
import MicrosoftLogoImg from "assets/images/navbar/microsoftLogo.png";

const Skeleton = () => {
  return (
    <Container>
      <Image src={LogoImg} alt="img" />
      <Image1 src={MicrosoftLogoImg} alt="img" />
    </Container>
  );
};

export default Skeleton;
