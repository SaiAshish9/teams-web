import React, { useState } from "react";

import {
  Container,
  Img,
  Label,
  Img1,
  MenuContent,
  Divider,
  ListItem,
  ListItemLabel,
  ListItemImg,
} from "./styles";

import ThreeDotsDark from "assets/images/sidebar/threeDots-white.svg";
import ThreeDotsFilled from "assets/images/sidebar/threeDots-filled.svg";
import ThreeDots from "assets/images/sidebar/threeDots.svg";

import HideSvg from "assets/images/dropdown/hide.svg";
import HideSvgDark from "assets/images/dropdown/hideDark.svg";
import TeamSvg from "assets/images/dropdown/team.svg";
import TeamSvgDark from "assets/images/dropdown/teamDark.svg";
import MemberSvg from "assets/images/dropdown/member.svg";
import MemberSvgDark from "assets/images/dropdown/memberDark.svg";
import LinkSvg from "assets/images/dropdown/link.svg";
import LinkSvgDark from "assets/images/dropdown/linkDark.svg";
import Tags from "assets/images/dropdown/tags.svg";
import TagsDark from "assets/images/dropdown/tagsDark.svg";

import { useStore } from "store";

import { Theme } from "constants/index";

import { useHistory } from "react-router-dom";

const Card = ({ text, img, id, rightClickedItem, setRightClickedItem }) => {
  const {
    state: { theme },
  } = useStore();

  const [hovered, setHovered] = useState(false);

  const [selected, setSelected] = useState(-1);

  function handleClick(e) {
    e.preventDefault();
    // alert(e.type);
    if (id === rightClickedItem) {
      setRightClickedItem(-1);
    } else {
      setRightClickedItem(id);
    }
  }

  const DATA = [
    {
      img:
        theme === Theme.light
          ? HideSvg
          : theme === Theme.highContrast
          ? selected === 0
            ? HideSvg
            : HideSvgDark
          : HideSvgDark,
      text: "Hide",
    },
    {
      img:
        theme === Theme.light
          ? TeamSvg
          : theme === Theme.highContrast
          ? selected === 1
            ? TeamSvg
            : TeamSvgDark
          : TeamSvgDark,
      text: "Manage Team",
    },
    {
      img:
        theme === Theme.light
          ? MemberSvg
          : theme === Theme.highContrast
          ? selected === 2
            ? MemberSvg
            : MemberSvgDark
          : MemberSvgDark,
      text: "Add Team",
    },
    {
      img:
        theme === Theme.light
          ? LinkSvg
          : theme === Theme.highContrast
          ? selected === 3
            ? LinkSvg
            : LinkSvgDark
          : LinkSvgDark,
      text: "Get link to team",
    },
    {
      img:
        theme === Theme.light
          ? Tags
          : theme === Theme.highContrast
          ? selected === 4
            ? Tags
            : TagsDark
          : TagsDark,
      text: "Manage tags",
    },
  ];

  const history = useHistory();

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        history.push("/teams?title=" + text);
      }}
      onContextMenu={handleClick}
    >
      <Img1
        src={
          theme === Theme.light
            ? hovered
              ? ThreeDotsFilled
              : ThreeDots
            : theme === Theme.highContrast
            ? hovered
              ? ThreeDots
              : ThreeDotsDark
            : id === rightClickedItem
            ? ThreeDotsFilled
            : hovered
            ? ThreeDotsDark
            : ThreeDots
        }
        alt="img"
      />
      <Img src={img} alt="img" />
      <Label highlight={+(text === "Software Engineering")}>{text}</Label>
      {id === rightClickedItem && (
        <MenuContent>
          <ListItem
            onMouseEnter={() => setSelected(0)}
            onMouseLeave={() => setSelected(-1)}
          >
            <ListItemImg alt="img" src={DATA[0].img} />
            <ListItemLabel>{DATA[0].text}</ListItemLabel>
          </ListItem>
          <Divider />
          {DATA.slice(1).map((i, k) => (
            <ListItem
              key={k}
              onMouseEnter={() => setSelected(k + 1)}
              onMouseLeave={() => setSelected(-1)}
            >
              {i.img && <ListItemImg alt="img" src={i.img} />}
              <ListItemLabel>{i.text}</ListItemLabel>
            </ListItem>
          ))}
        </MenuContent>
      )}
    </Container>
  );
};

export default Card;
