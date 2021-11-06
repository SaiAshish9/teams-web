import React from "react";

import { Container } from "./styles";
import { Sidebar } from "./components";
import { MainSection } from "screens/TeamScreen/components";
import { TEAMS_DATA } from "constants/index";

const LayoutMainContent = () => {
  // const search = useLocation()?.search;

  // const item = TEAMS_DATA.filter(
  //   (x) => x["text"] === decodeURI(search?.split("=")?.[1])
  // )?.[0];

  return (
    <Container>
      <Sidebar />
      <MainSection item={TEAMS_DATA[0]} />
    </Container>
  );
};

export default LayoutMainContent;
