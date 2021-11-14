import React from "react";

import { SideSection, MainSection } from "./components";

import { Container } from "./styles";

import TEAMS_DATA from "constants/data";

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const TeamScreen = () => {
  const search = useLocation()?.search;

  const item = TEAMS_DATA.filter(
    (x) => x["text"] === decodeURI(search?.split("=")?.[1])
  )?.[0];

  return (
    <Container>
      <Helmet>
        <title>Microsoft Teams</title>
      </Helmet>
      <SideSection item={item} />
      <MainSection item={item} />
    </Container>
  );
};

export default TeamScreen;
