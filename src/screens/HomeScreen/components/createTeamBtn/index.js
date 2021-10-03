import React, { useState } from "react";

import { Container, Img } from "./styles";

import CreateTeamImg from "assets/images/homeScreen/createTeam.svg";
import CreateTeamHCImg from "assets/images/homeScreen/createTeamHC.svg";

import { Theme } from "constants/index";

import { useStore } from "store";

const Btn = () => {
  const {
    state: { theme },
  } = useStore();

  const [hovered, setHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Img
        src={
          theme === Theme.highContrast && hovered
            ? CreateTeamHCImg
            : theme === Theme.light
            ? CreateTeamHCImg
            : CreateTeamImg
        }
        alt="img"
      />
      Join or create team
    </Container>
  );
};

export default Btn;
