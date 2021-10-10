import React, { useState } from "react";

import {
  Container,
  Label,
  Content,
  ArrowDropdownContainer,
  Arrow,
  ArrowUp,
} from "./styles";

import { Card } from "./components";

import { TEAMS_DATA as DATA } from "constants/index";

const MainContent = () => {
  const [selected, setSelected] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      hovered={+hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Label hovered={+hovered}>
        <ArrowDropdownContainer onClick={() => setClicked((c) => !c)}>
          {hovered && <>{clicked ? <ArrowUp /> : <Arrow />}</>}
          Your teams
        </ArrowDropdownContainer>
      </Label>
      <Content>
        {!clicked &&
          DATA.map((i, k) => (
            <Card
              rightClickedItem={selected}
              setRightClickedItem={setSelected}
              key={k}
              id={k}
              text={i.text}
              img={i.img}
            />
          ))}
      </Content>
    </Container>
  );
};

export default MainContent;
