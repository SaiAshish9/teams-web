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
  ChannelsListItemContainer,
  MenuContent,
  MenuItemListItem,
  ListItemImg,
  ListItemLabel,
} from "./styles";

import { RiArrowLeftSLine } from "react-icons/ri";

import { useHistory, useLocation } from "react-router-dom";

import { TEAMS_DATA, Theme } from "constants/index";

import ThreeDotsDarkImg from "assets/images/sidebar/threeDots.svg";
import ThreeDotsWhiteImg from "assets/images/sidebar/threeDots-white.svg";
import { useState } from "react/cjs/react.development";

import BellIcon from "assets/images/teams/bellIcon.svg";
import LinkIcon from "assets/images/teams/link.svg";
import MailIcon from "assets/images/teams/mail.svg";
import SettingsIcon from "assets/images/teams/settings.svg";
import BellIconWhite from "assets/images/teams/bellIconWhite.svg";
import LinkIconWhite from "assets/images/teams/linkWhite.svg";
import MailIconWhite from "assets/images/teams/mailWhite.svg";
import SettingsIconWhite from "assets/images/teams/settingsWhite.svg";
import BellIconBlack from "assets/images/teams/bellIconBlack.svg";
import LinkIconBlack from "assets/images/teams/linkBlack.svg";
import MailIconBlack from "assets/images/teams/mailBlack.svg";
import SettingsIconBlack from "assets/images/teams/settingsBlack.svg";

import { useStore } from "store";

const SideSection = () => {
  const history = useHistory();
  const search = useLocation().search;

  const [showSelectedIcon, setShowSelectedIcon] = useState(false);

  const [selected, setSelected] = useState(-1);

  const [clicked, setClicked] = useState(false);

  const item = TEAMS_DATA.filter(
    (x) => x["text"] === decodeURI(search?.split("=")?.[1])
  )?.[0];

  const {
    state: { theme },
  } = useStore();

  const options = ["Class Notebook", "Assignments", "Grades"];

  const data = [
    {
      icon:
        theme === Theme.light
          ? BellIconBlack
          : theme === Theme.highContrast
          ? selected === 0
            ? BellIconBlack
            : BellIconWhite
          : BellIcon,
      text: "Channel notifications",
    },
    {
      icon:
        theme === Theme.light
          ? LinkIconBlack
          : theme === Theme.highContrast
          ? selected === 1
            ? LinkIconBlack
            : LinkIconWhite
          : LinkIcon,
      text: "Manage channel",
    },
    {
      icon:
        theme === Theme.light
          ? MailIconBlack
          : theme === Theme.highContrast
          ? selected === 2
            ? MailIconBlack
            : MailIconWhite
          : MailIcon,
      text: "Get email address",
    },
    {
      icon:
        theme === Theme.light
          ? SettingsIconBlack
          : theme === Theme.highContrast
          ? selected === 3
            ? SettingsIconBlack
            : SettingsIconWhite
          : SettingsIcon,
      text: "Get link to channel",
    },
  ];

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
        {["General"].map((i, k) => (
          <ChannelsListItemContainer
            highlight={1}
            onMouseEnter={() => {
              setShowSelectedIcon(true);
            }}
            onMouseLeave={() => {
              setShowSelectedIcon(false);
            }}
            key={k}
            onContextMenu={(e) => {
              e.preventDefault();
              setClicked((c) => !c);
            }}
          >
            <ListItem>{i}</ListItem>
            {(showSelectedIcon || clicked) && (
              <DotsImg
                src={
                  theme === Theme.light ? ThreeDotsDarkImg : ThreeDotsWhiteImg
                }
                alt="img"
              />
            )}
            {clicked && (
              <MenuContent>
                {data.map((i, k) => (
                  <MenuItemListItem
                    onMouseEnter={() => {
                      setSelected(k);
                    }}
                    onMouseLeave={() => {
                      setSelected(-1);
                    }}
                    key={k}
                  >
                    <ListItemImg alt="img" src={i.icon} />
                    <ListItemLabel>{i.text}</ListItemLabel>
                  </MenuItemListItem>
                ))}
              </MenuContent>
            )}
          </ChannelsListItemContainer>
        ))}
      </OptionsCont>
    </Container>
  );
};

export default SideSection;
