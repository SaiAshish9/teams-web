import React from "react";

import AvatarImg from "assets/images/navbar/avatar.png";

import { Container, Img } from "./styles";

const AvatarContainer = () => {
  return (
    <Container>
      <Img
        src={AvatarImg}
        alt="img"
      />
    </Container>
  );
};

export default AvatarContainer;
