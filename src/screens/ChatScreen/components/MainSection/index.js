import React, { useState } from "react";
import {
  Container,
  Header,
  Avatar,
  Label,
  Row,
  Option,
  VideoIcon,
  VideoOutlinedIcon,
  PhoneIcon,
  PhoneOutlinedIcon,
  Img,
  PlusIcon,
} from "./styles";
import GroupImage from "assets/images/group.png";
import {
  TabOption,
  TabOptionContainer,
  Tabs,
} from "screens/TeamScreen/components/MainSection/styles";

import CreateTeamImg from "assets/images/homeScreen/createTeam.svg";
import CreateTeamHCImg from "assets/images/homeScreen/createTeamHC.svg";
import CreateTeamDarkImg from "assets/images/homeScreen/createTeamDark.svg";

import { Theme } from "constants/index";

import { InputContainer } from "..";

import { useStore } from "store";

const MainSection = () => {
  const [selected, setSelected] = useState(0);

  const options = ["Chat", "Files", "Organization", "Activity"];

  const {
    state: { theme },
  } = useStore();

  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <Header>
        <Row>
          <Row up={1}>
            <Avatar alt="img" src={GroupImage} />
            <Label>General</Label>
          </Row>
          <Tabs>
            {options.map((i, k) => (
              <TabOptionContainer>
                <TabOption
                  onClick={() => {
                    setSelected(k);
                  }}
                  selected={+(selected === k)}
                >
                  {i}
                </TabOption>
              </TabOptionContainer>
            ))}
          </Tabs>
          <PlusIcon />
        </Row>
        <Row up={1}>
          <Option>
            {theme !== Theme.highContrast ? (
              <VideoOutlinedIcon />
            ) : (
              <VideoIcon />
            )}
          </Option>
          <Option>
            {theme !== Theme.highContrast ? (
              <PhoneOutlinedIcon />
            ) : (
              <PhoneIcon />
            )}
          </Option>
          <Img
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            src={
              theme === Theme.highContrast && hovered
                ? CreateTeamHCImg
                : theme === Theme.light
                ? !hovered
                  ? CreateTeamHCImg
                  : CreateTeamDarkImg
                : hovered
                ? CreateTeamDarkImg
                : CreateTeamImg
            }
            alt="img"
          />
        </Row>
      </Header>
      <InputContainer />
    </Container>
  );
};

export default MainSection;
