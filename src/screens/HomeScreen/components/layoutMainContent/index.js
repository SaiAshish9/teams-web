import React from "react";

import { Container } from "./styles";
import { Sidebar } from "./components";
import { MainSection } from "screens/TeamScreen/components";
import { TEAMS_DATA } from "constants/index";
import { useState } from "react/cjs/react.development";

const LayoutMainContent = () => {
  const [itemSelected, setItemSelected] = useState(0);

  return (
    <Container>
      <Sidebar setItemSelected={setItemSelected} />
      <MainSection item={TEAMS_DATA?.[itemSelected]} />
    </Container>
  );
};

export default LayoutMainContent;
