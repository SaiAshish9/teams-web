import React, { useState } from "react";
import {
  Container,
  Label,
  Img,
  Header,
  Tabs,
  TabOption,
  TabOptionContainer,
  Button,
  Image,
  ButtonLabel,
} from "./styles";
// import { useHistory } from "react-router-dom";.

import PinImg from "assets/images/mainContent/pin.svg";

import MainContent from "./components";

const MainSection = ({ item }) => {
  // const history = useHistory();

  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Header>
        <Img src={item?.img} alt="img" />
        <Label>General</Label>
        <Tabs>
          <TabOptionContainer>
            <TabOption
              onClick={() => {
                setSelected(0);
              }}
              selected={+(selected === 0)}
            >
              Posts
            </TabOption>
          </TabOptionContainer>
          <TabOptionContainer>
            <TabOption
              onClick={() => {
                setSelected(1);
              }}
              selected={+(selected === 1)}
            >
              Files
            </TabOption>
          </TabOptionContainer>
        </Tabs>
      </Header>
      <MainContent />
      <Button>
        <Image src={PinImg} alt="img" />
        <ButtonLabel>New Conversation</ButtonLabel>
      </Button>
    </Container>
  );
};

export default MainSection;
