import React, { useState } from "react";

import { Container, Label, Content } from "./styles";

import { Card } from "./components";

import Pic1 from "assets/images/homeScreen/pic1.png";
import Pic2 from "assets/images/homeScreen/pic2.png";
import Pic3 from "assets/images/homeScreen/pic3.png";
import Pic4 from "assets/images/homeScreen/pic4.png";
import Pic5 from "assets/images/homeScreen/pic5.png";
import Pic6 from "assets/images/homeScreen/pic6.png";
import Pic7 from "assets/images/homeScreen/pic7.png";
import Pic8 from "assets/images/homeScreen/pic8.png";
import Pic9 from "assets/images/homeScreen/pic9.png";
import Pic10 from "assets/images/homeScreen/pic10.png";
import Pic11 from "assets/images/homeScreen/pic11.png";
import Pic12 from "assets/images/homeScreen/pic12.png";
import Pic13 from "assets/images/homeScreen/pic13.png";
import Pic14 from "assets/images/homeScreen/pic14.png";
import Pic15 from "assets/images/homeScreen/pic15.png";
import Pic16 from "assets/images/homeScreen/pic16.png";
import Pic17 from "assets/images/homeScreen/pic17.png";
import Pic18 from "assets/images/homeScreen/pic18.png";
import Pic19 from "assets/images/homeScreen/pic19.png";
import Pic20 from "assets/images/homeScreen/pic20.png";

const DATA = [
  {
    text: "CSE I & II",
    img: Pic1,
  },
  {
    text: "CSE-2 6th Sem",
    img: Pic2,
  },
  {
    text: "IM class CSE-2 5th Sem",
    img: Pic3,
  },
  {
    text: "CSP CSE1&2 5 SEM 2020",
    img: Pic4,
  },
  {
    text: "WE CSE-2 6th Sem class",
    img: Pic5,
  },
  {
    text: "Software Engineering",
    img: Pic6,
  },
  {
    text: "CD CSE2 6th sem",
    img: Pic7,
  },
  {
    text: "WE class CSE 2 & 3 6th Sem",
    img: Pic8,
  },
  {
    text: "COMPUTER NETWORK(CSEI&II)",
    img: Pic9,
  },
  {
    text: "OS CSE II & III",
    img: Pic10,
  },
  {
    text: "CN Lab-CSE2-6thSem",
    img: Pic11,
  },
  {
    text: "MPMC CSE-II 6th Sem",
    img: Pic12,
  },
  {
    text: "Artificial Intelligence(CSE-II and CSE-III)",
    img: Pic13,
  },
  {
    text: "WE LAB CSE-2 6TH SEM",
    img: Pic14,
  },
  {
    text: "CSE-2, 7th sem -STQA",
    img: Pic15,
  },
  {
    text: "DBMI, CSE-2-7th Sem.",
    img: Pic16,
  },
  {
    text: "Wirless Communication Class CSE 2 7th sem",
    img: Pic17,
  },
  {
    text: "IS CSE-1 and CSE2 7th Sem",
    img: Pic18,
  },
  {
    text: "ADBMS-2021",
    img: Pic19,
  },
  {
    text: "Project 2018-22",
    img: Pic20,
  },
];

const MainContent = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <Container>
      <Label>Your teams</Label>
      <Content>
        {DATA.map((i, k) => (
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
