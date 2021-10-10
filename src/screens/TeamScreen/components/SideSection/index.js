import React from "react";

import {
  Container,
  Label,
  Span,
  Img,
  Title,
  DotsImg,
  Row,
  ListItem,
  OptionsCont,
  Title1,
} from "./styles";

import { RiArrowLeftSLine } from "react-icons/ri";

import { useHistory, useLocation } from "react-router-dom";

import { TEAMS_DATA } from "constants/index";

import ThreeDotsDarkImg from "assets/images/sidebar/threeDots.svg";

const SideSection = () => {
  const history = useHistory();
  const search = useLocation().search;

  const item = TEAMS_DATA.filter(
    (x) => x["text"] === decodeURI(search?.split("=")?.[1])
  )?.[0];

  const options = ["Class Notebook", "Assignments", "Grades"];

  return (
    <Container>
      <Label onClick={() => history.push("/")}>
        <RiArrowLeftSLine size={16} />
        <Span>All teams</Span>
      </Label>
      <Img alt="img" src={item?.["img"]} />
      <Row>
        <Title>{item?.text}</Title>
        <DotsImg src={ThreeDotsDarkImg} alt="img" />
      </Row>
      <OptionsCont>
        {options.map((i, k) => (
          <ListItem key={k}>{i}</ListItem>
        ))}
      </OptionsCont>
      <Title1>Channels</Title1>
      <OptionsCont second={1}>
        {['General'].map((i, k) => (
          <ListItem key={k}>{i}</ListItem>
        ))}
      </OptionsCont>
    </Container>
  );
};

export default SideSection;
