import React from "react";

import { Container, Img, ListItem, ListItemLabel } from "./styles";

import BellIcon from "assets/images/sidebar/bellIcon.svg";
import ChatIcon from "assets/images/sidebar/chatIcon.svg";
import TeamsIcon from "assets/images/sidebar/teamsIcon.svg";
import AssignmentsIcon from "assets/images/sidebar/assignmentsIcon.svg";
import CalendarIcon from "assets/images/sidebar/calendarIcon.svg";
import CallIcon from "assets/images/sidebar/callIcon.svg";

const icons = [
  {
    icon: BellIcon,
    text: "Activity",
  },
  {
    icon: ChatIcon,
    text: "Chat",
  },
  {
    icon: TeamsIcon,
    text: "Teams",
  },
  {
    icon: AssignmentsIcon,
    text: "Assignments",
  },
  {
    icon: CalendarIcon,
    text: "Calendar",
  },
  {
    icon: CallIcon,
    text: "Calls",
  },
  {
    icon: BellIcon,
    text: "Apps",
  },
  {
    icon: BellIcon,
    text: "Help",
  },
];

const Sidebar = () => {
  return (
    <Container>
      {icons.slice(0, icons.length - 2).map((i, k) => (
        <ListItem key={k}>
          <Img src={i.icon} alt="img" />
          <ListItemLabel>{i.text}</ListItemLabel>
        </ListItem>
      ))}
    </Container>
  );
};

export default Sidebar;
