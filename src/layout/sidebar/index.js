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
import AppsIconFilled from "assets/images/sidebar/appsIcon-filled.svg";
import BellIcon from "assets/images/sidebar/bellIcon.svg";
import BellIconFilled from "assets/images/sidebar/bellIcon-filled.svg";
import ChatIcon from "assets/images/sidebar/chatIcon.svg";
import ChatIconFilled from "assets/images/sidebar/chatIcon-filled.svg";
import TeamsIcon from "assets/images/sidebar/teamsIcon.svg";
import TeamsIconFilled from "assets/images/sidebar/teamsIcon-filled.svg";
import AssignmentsIcon from "assets/images/sidebar/assignmentsIcon.svg";
import AssignmentsIconFilled from "assets/images/sidebar/assignmentsIcon-filled.svg";
import CalendarIcon from "assets/images/sidebar/calendarIcon.svg";
import CalendarIconFilled from "assets/images/sidebar/calendarIcon-filled.svg";
import CallIcon from "assets/images/sidebar/callIcon.svg";
import CallIconFilled from "assets/images/sidebar/callIcon-filled.svg";
import ThreeDotsIcon from "assets/images/sidebar/threeDots.svg";
import ThreeDotsIconFilled from "assets/images/sidebar/threeDots-filled.svg";
import HelpIcon from "assets/images/sidebar/helpIcon.svg";
import HelpIconFilled from "assets/images/sidebar/helpIcon-filled.svg";
import DownloadIcon from "assets/images/sidebar/downloadIcon.svg";

const icons = [
  {
    icon: BellIcon,
    iconFilled: BellIconFilled,
    text: "Activity",
  },
  {
    icon: ChatIcon,
    iconFilled: ChatIconFilled,
    text: "Chat",
  },
  {
    icon: TeamsIcon,
    iconFilled: TeamsIconFilled,
    text: "Teams",
  },
  {
    icon: AssignmentsIcon,
    iconFilled: AssignmentsIconFilled,
    text: "Assignments",
  },
  {
    icon: CalendarIcon,
    iconFilled: CalendarIconFilled,
    text: "Calendar",
  },
  {
    icon: CallIcon,
    iconFilled: CallIconFilled,
    text: "Calls",
  },
  {
    icon: ThreeDotsIcon,
    iconFilled: ThreeDotsIconFilled,
    text: "",
  },
  {
    icon: AppsIcon,
    iconFilled: AppsIconFilled,
    text: "Apps",
  },
  {
    icon: HelpIcon,
    iconFilled: HelpIconFilled,
    text: "Help",
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [listItemClicked, setListItemClicked] = useState(0);

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
