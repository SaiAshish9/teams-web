import React from "react";

import { Container } from "./styles";
import { Sidebar } from "./components";
import { MainSection } from "screens/TeamScreen/components";

const LayoutMainContent = () => {
  return (
    <Container>
      <Sidebar />
      <MainSection />
    </Container>
  );
};

export default LayoutMainContent;
