import React, { useRef, useEffect } from "react";

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
  RightArrow,
  SecondDrawer,
  RightCheckIcon,
} from "./styles";

import { RiArrowLeftSLine } from "react-icons/ri";

import { useHistory, useLocation } from "react-router-dom";

import { Theme } from "constants/index";

import TEAMS_DATA from "constants/data";

import ThreeDotsDarkImg from "assets/images/sidebar/threeDots.svg";
import ThreeDotsFilledImg from "assets/images/sidebar/threeDots-filled.svg";
import ThreeDotsWhiteImg from "assets/images/sidebar/threeDots-white.svg";
import ThreeDotsHCSelectedImg from "assets/images/sidebar/threeDotsHCSelected.svg";
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
  const search = window.location?.search;
  const settingsDropdownRef = useRef(null);

  const [showSelectedIcon, setShowSelectedIcon] = useState(false);

  const [selected, setSelected] = useState(-1);

  const [clicked, setClicked] = useState(false);

  const [openSecondDrawer, setOpenSecondDrawer] = useState(false);

  const item = TEAMS_DATA.filter(
    (x) => x["text"] === decodeURI(search?.split("=")?.[1])
  )?.[0];

  const {
    state: { theme },
  } = useStore();

  const options = ["Class Notebook", "Assignments", "Grades"];

  const secondOptions = [
    {
      text: "All activity",
      text1: "Posts, replies , mantions",
    },
    {
      text: "Off",
      text1: "Except direct replies, personal mentions",
    },
    {
      text: "Custom",
      text1: "",
    },
  ];

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

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref?.current && !ref?.current.contains(event.target)) {
          setClicked(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(settingsDropdownRef);

  return (
    <Container>
      {/* <Label onClick={() => history.push("/")}>
        <RiArrowLeftSLine size={16} />
        <Span>All teams</Span>
      </Label>
      <Img alt="img" src={item?.["img"]} />
      <Row>
        <Title>{item?.text}</Title>
        <DotsImg
          src={
            theme === Theme.highContrast ? ThreeDotsWhiteImg : ThreeDotsDarkImg
          }
          alt="img"
        />
      </Row>
      <OptionsCont>
        {options.map((i, k) => (
          <ListItem key={k}>{i}</ListItem>
        ))}
      </OptionsCont>
      <Title1>Channels</Title1>
      <OptionsCont ref={settingsDropdownRef} second={1}>
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
            <ListItem highlight={1}>{i}</ListItem>
            {(showSelectedIcon || clicked) && (
              <DotsImg
                src={
                  theme === Theme.highContrast
                    ? ThreeDotsHCSelectedImg
                    : theme === Theme.light
                    ? clicked
                      ? ThreeDotsFilledImg
                      : ThreeDotsDarkImg
                    : clicked
                    ? ThreeDotsFilledImg
                    : ThreeDotsWhiteImg
                }
                alt="img"
              />
            )}
            {clicked && (
              <MenuContent
                onMouseLeave={() => {
                  setOpenSecondDrawer(false);
                }}
              >
                {data.map((i, k) => (
                  <MenuItemListItem
                    selected={+(selected === k)}
                    onMouseEnter={() => {
                      setSelected(k);
                      if (k === 0) setOpenSecondDrawer(true);
                    }}
                    onMouseLeave={() => {
                      if (k !== 0) {
                        setSelected(-1);
                        setOpenSecondDrawer(false);
                      }
                    }}
                    onClick={() => {
                      setClicked(false);
                      setSelected(-1);
                    }}
                    onContextMenu={() => {
                      setSelected(-1);
                    }}
                    key={k}
                  >
                    <ListItemImg alt="img" src={i.icon} />
                    <ListItemLabel>{i.text}</ListItemLabel>
                    {k === 0 && <RightArrow size={16} />}
                  </MenuItemListItem>
                ))}
              </MenuContent>
            )}
            {openSecondDrawer && selected === 0 && (
              <SecondDrawer
                onMouseEnter={() => {
                  setOpenSecondDrawer(true);
                  setSelected(0);
                }}
                onMouseLeave={() => {
                  setOpenSecondDrawer(false);
                  setSelected(-1);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setOpenSecondDrawer(false);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenSecondDrawer(false);
                }}
              >
                {secondOptions.map((i, k) => (
                  <MenuItemListItem
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      paddingTop: k === 2 ? 10 : "0.27rem",
                      paddingBottom: k === 2 ? 10 : "0.27rem",
                    }}
                    onMouseEnter={() => {
                      setSelected(0);
                      if (k === 0) setOpenSecondDrawer(true);
                    }}
                    onClick={() => {
                      setClicked(false);
                      setSelected(-1);
                    }}
                    onContextMenu={() => {
                      setSelected(-1);
                    }}
                    key={k}
                  >
                    <ListItemLabel>{i.text}</ListItemLabel>
                    <ListItemLabel style={{ fontSize: "0.63rem" }}>
                      {i.text1 ?? ""}
                    </ListItemLabel>
                    {k === 2 ? (
                      theme !== Theme.highContrast ? (
                        <RightArrow size={16} />
                      ) : (
                        <RightCheckIcon size={16} />
                      )
                    ) : null}
                  </MenuItemListItem>
                ))}
              </SecondDrawer>
            )}
          </ChannelsListItemContainer>
        ))}
      </OptionsCont> */}
    </Container>
  );
};

export default SideSection;
