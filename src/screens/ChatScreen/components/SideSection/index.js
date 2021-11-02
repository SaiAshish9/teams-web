import React from "react";
import {
  Container,
  Header,
  Title,
  CircularContainer,
  Img,
  ArrowImg,
  Row,
} from "./styles";

import { BsFilter } from "react-icons/bs";

import PinImg from "assets/images/chatScreen/pin.svg";
import ArrowDownDarkImg from "assets/images/modal/settings/arrowDown-dark.svg";
import ArrowDownLightImg from "assets/images/modal/settings/arrowDown-light.svg";

const SideSection = () => {
  return (
    <Container>
      <Header>
        <Row style={{ cursor: "pointer" }}>
          <Title>Chat</Title>
          <ArrowImg src={ArrowDownDarkImg} alt="img" />
        </Row>

        <Row>
          <BsFilter size={18} style={{ cursor: "pointer" }} color="#d1d1d1" />
          <CircularContainer>
            <Img src={PinImg} alt="img" />
          </CircularContainer>
        </Row>
      </Header>
    </Container>
  );
};

export default SideSection;
