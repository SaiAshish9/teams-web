import React from "react";

import { Container, Label, Content } from "./styles";

import { Card } from "./components";

const MainContent = () => {
  return (
    <Container>
      <Label>Your teams</Label>
      <Content>
        {[...Array(20).keys()].map((i, k) => (
          <Card key={k} />
        ))}
      </Content>
    </Container>
  );
};

export default MainContent;
