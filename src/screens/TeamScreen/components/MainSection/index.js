import React from "react";
import { Container, Label, Img, Header, Tabs, TabOption } from "./styles";
// import { useHistory } from "react-router-dom";

const MainSection = ({ item }) => {
  // const history = useHistory();

  return (
    <Container>
      <Header>
        <Img src={item?.img} alt="img" />
        <Label>General</Label>
        <Tabs>
          <TabOption>Posts</TabOption>
          <TabOption>Files</TabOption>
        </Tabs>
      </Header>
    </Container>
  );
};

export default MainSection;
