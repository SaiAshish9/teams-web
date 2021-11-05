import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  CircularContainer,
  Img,
  ArrowImg,
  Row,
  MainContent,
  ArrowDropdownContainer,
  ArrowUp,
  Arrow,
  Label,
  ListItem,
  ListItemLabel,
  ListItemLabel1,
  ListItemLabel2,
  Avatar,
  ListItemContent,
  ListItemComponent,
  StyledFilterIcon,
} from "./styles";

import PinImg from "assets/images/chatScreen/pin.svg";
import PinImgBlack from "assets/images/chatScreen/pin-black.svg";
import ArrowDownDarkImg from "assets/images/modal/settings/arrowDown-dark.svg";
import ArrowDownLightImg from "assets/images/modal/settings/arrowDown-light.svg";

import GroupImage from "assets/images/group.png";
import AvatarImage from "assets/images/avatar.jpeg";
import { Theme } from "constants/index";
import { useStore } from "store";

const SideSection = () => {
  const [hovered, setHovered] = useState(false);
  const [itemHovered, setItemHovered] = useState(-1);
  const [contentHovered, setContentHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [selected, setSelected] = useState(0);

  const {
    state: { theme },
  } = useStore();

  const data = [
    {
      img: GroupImage,
      title: "7 geniuses inside 🤯",
      desc: "You: ✌🏻",
      timeline: "10/30",
    },
    {
      img: AvatarImage,
      title: "Sai",
      desc: "You: ❤️",
      timeline: "9/27",
    },
  ];

  return (
    <Container>
      <Header>
        <Row chat={1} style={{ cursor: "pointer" }}>
          <Title>Chat</Title>
          <ArrowImg
            src={theme === Theme.light ? ArrowDownLightImg : ArrowDownDarkImg}
            alt="img"
          />
        </Row>

        <Row>
          <StyledFilterIcon size={18} />
          <CircularContainer>
            <Img
              src={theme === Theme.highContrast ? PinImgBlack : PinImg}
              alt="img"
            />
          </CircularContainer>
        </Row>
      </Header>
      <MainContent
        hovered={+hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Label hovered={+hovered} onClick={() => setClicked((c) => !c)}>
          <ArrowDropdownContainer>
            {clicked ? (
              <ArrowUp hovered={+hovered} contentHovered={+contentHovered} />
            ) : (
              <Arrow hovered={+hovered} contentHovered={+contentHovered} />
            )}
            <span
              onMouseEnter={() => setContentHovered(true)}
              onMouseLeave={() => setContentHovered(false)}
            >
              Recent
            </span>
          </ArrowDropdownContainer>
        </Label>
        {!clicked &&
          data.map((i, k) => (
            <ListItem
              key={k}
              onClick={() => setSelected(k)}
              selected={+(selected === k)}
              onMouseEnter={() => setItemHovered(k)}
              onMouseLeave={() => setItemHovered(-1)}
            >
              <Avatar alt="img" src={i.img} />
              <ListItemContent>
                <ListItemComponent>
                  <ListItemLabel
                    selected={+(selected === k)}
                    itemHovered={+(itemHovered === k)}
                  >
                    {i.title}
                  </ListItemLabel>
                  <ListItemLabel1>{i.desc}</ListItemLabel1>
                </ListItemComponent>
                <ListItemLabel2>{i.timeline}</ListItemLabel2>
              </ListItemContent>
            </ListItem>
          ))}
      </MainContent>
    </Container>
  );
};

export default SideSection;
