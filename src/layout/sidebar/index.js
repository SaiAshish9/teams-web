import React, { useState } from "react";

import {
  Container,
  DownloadIconContainer,
  FirstItemsContent,
  Img,
  ListItem,
  ListItemContent,
  ListItemLabel,
  SecondItemsContent,
} from "./styles";

import AppsIcon from "assets/images/sidebar/appsIcon.svg";
import AppsIconHC from "assets/images/sidebar/appsIconHC.svg";
import AppsIconHCSelected from "assets/images/sidebar/appsIconHCSelected.svg";
import AppsIconFilled from "assets/images/sidebar/appsIcon-filled.svg";
import BellIcon from "assets/images/sidebar/bellIcon.svg";
import BellIconHC from "assets/images/sidebar/bellIconHC.svg";
import BellIconHCSelected from "assets/images/sidebar/bellIconHCSelected.svg";
import BellIconFilled from "assets/images/sidebar/bellIcon-filled.svg";
import ChatIcon from "assets/images/sidebar/chatIcon.svg";
import ChatIconFilled from "assets/images/sidebar/chatIcon-filled.svg";
import ChatIconHC from "assets/images/sidebar/chatIconHC.svg";
import ChatIconHCSelected from "assets/images/sidebar/chatIconHCSelected.svg";
import TeamsIcon from "assets/images/sidebar/teamsIcon.svg";
import TeamsIconFilled from "assets/images/sidebar/teamsIcon-filled.svg";
import TeamsHCIcon from "assets/images/sidebar/teamsIconHC.svg";
import TeamsHCSelectedIcon from "assets/images/sidebar/teamsIconHCSelected.svg";
import AssignmentsIcon from "assets/images/sidebar/assignmentsIcon.svg";
import AssignmentsIconFilled from "assets/images/sidebar/assignmentsIcon-filled.svg";
import AssignmentsHCIcon from "assets/images/sidebar/assignmentsIconHC.svg";
import AssignmentsHCSelectedIcon from "assets/images/sidebar/assignmentsIconHCSelected.svg";
import CalendarIcon from "assets/images/sidebar/calendarIcon.svg";
import CalendarIconFilled from "assets/images/sidebar/calendarIcon-filled.svg";
import CalendarHCIcon from "assets/images/sidebar/calendarIconHC.svg";
import CalendarHCSelectedIcon from "assets/images/sidebar/calendarIconHCSelected.svg";
import CallIcon from "assets/images/sidebar/callIcon.svg";
import CallIconHC from "assets/images/sidebar/callIconHC.svg";
import CallIconHCSelected from "assets/images/sidebar/callIconHCSelected.svg";
import CallIconFilled from "assets/images/sidebar/callIcon-filled.svg";
import ThreeDotsIcon from "assets/images/sidebar/threeDots.svg";
import ThreeDotsIconFilled from "assets/images/sidebar/threeDots-filled.svg";
import ThreeDotsIconHC from "assets/images/sidebar/threeDotsHC.svg";
import ThreeDotsIconHCSelected from "assets/images/sidebar/threeDotsHCSelected.svg";
import HelpIcon from "assets/images/sidebar/helpIcon.svg";
import HelpIconFilled from "assets/images/sidebar/helpIcon-filled.svg";
import DownloadIcon from "assets/images/sidebar/downloadIcon.svg";

import { useStore } from "store";

import { Theme } from "constants/index";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [listItemClicked, setListItemClicked] = useState(0);

  const {
    state: { theme },
  } = useStore();

  const icons = [
    {
      icon: theme === Theme.highContrast ? CalendarHCIcon : CalendarIcon,
      iconFilled:
        theme === Theme.highContrast
          ? CalendarHCSelectedIcon
          : CalendarIconFilled,
      text: "Calendar",
    },
    {
      icon: theme === Theme.highContrast ? BellIconHC : BellIcon,
      iconFilled:
        theme === Theme.highContrast ? BellIconHCSelected : BellIconFilled,
      text: "Activity",
    },
    {
      icon: theme === Theme.highContrast ? ChatIconHC : ChatIcon,
      iconFilled:
        theme === Theme.highContrast ? ChatIconHCSelected : ChatIconFilled,
      text: "Chat",
    },
    {
      icon: theme === Theme.highContrast ? TeamsHCIcon : TeamsIcon,
      iconFilled:
        theme === Theme.highContrast ? TeamsHCSelectedIcon : TeamsIconFilled,
      text: "Teams",
    },
    {
      icon: theme === Theme.highContrast ? AssignmentsHCIcon : AssignmentsIcon,
      iconFilled:
        theme === Theme.highContrast
          ? AssignmentsHCSelectedIcon
          : AssignmentsIconFilled,
      text: "Assignments",
    },
    {
      icon: theme === Theme.highContrast ? CallIconHC : CallIcon,
      iconFilled:
        theme === Theme.highContrast ? CallIconHCSelected : CallIconFilled,
      text: "Calls",
    },
    {
      icon: theme === Theme.highContrast ? ThreeDotsIconHC : ThreeDotsIcon,
      iconFilled:
        theme === Theme.highContrast
          ? ThreeDotsIconHCSelected
          : ThreeDotsIconFilled,
      text: "",
    },
    {
      icon: theme === Theme.highContrast ? AppsIconHC : AppsIcon,
      iconFilled:
        theme === Theme.highContrast ? AppsIconHCSelected : AppsIconFilled,
      text: "Apps",
    },
    {
      icon: HelpIcon,
      iconFilled: HelpIconFilled,
      text: "Help",
    },
  ];

  return (
    <Container>
      <FirstItemsContent>
        {icons.slice(0, icons.length - 2).map((i, k) => (
          <ListItem
            onClick={() => setListItemClicked(k)}
            key={k}
            onMouseEnter={() => setSelected(k)}
            onMouseLeave={() => setSelected(-1)}
            selected={+(listItemClicked === k)}
          >
            <ListItemContent
              selected={+(listItemClicked === k)}
              last={+(listItemClicked === icons.length - 3)}
            >
              <Img
                src={
                  selected === k || listItemClicked === k
                    ? i.iconFilled
                    : i.icon
                }
                alt="img"
              />
              <ListItemLabel
                selected={+(selected === k || listItemClicked === k)}
              >
                {i.text}
              </ListItemLabel>
            </ListItemContent>
          </ListItem>
        ))}
      </FirstItemsContent>

      <SecondItemsContent>
        {icons.slice(icons.length - 2).map((i, k) => (
          <ListItem
            onClick={() => setListItemClicked(k + icons.length - 2)}
            key={k}
            onMouseEnter={() => setSelected(k + icons.length - 2)}
            onMouseLeave={() => setSelected(-1)}
            selected={+(listItemClicked === k + icons.length - 2)}
          >
            <ListItemContent
              selected={+(listItemClicked === k + icons.length - 2)}
            >
              <Img
                src={
                  selected === k + icons.length - 2 ||
                  listItemClicked === k + icons.length - 2
                    ? i.iconFilled
                    : i.icon
                }
                alt="img"
              />
              <ListItemLabel
                selected={
                  +(
                    selected === k + icons.length - 2 ||
                    listItemClicked === k + icons.length - 2
                  )
                }
              >
                {i.text}
              </ListItemLabel>
            </ListItemContent>
          </ListItem>
        ))}
        <DownloadIconContainer>
          <Img src={DownloadIcon} alt="img" />
        </DownloadIconContainer>
      </SecondItemsContent>
    </Container>
  );
};

export default Sidebar;
