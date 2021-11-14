import React, { useState } from "react";

import {
  Container,
  Button,
  Img,
  ProfileImgContainer,
  Item,
  Header,
  Row,
  ProfileImg,
  Content,
  ThirdItemContainer,
  SecondItemContainer,
} from "./styles";
import ProfileImgAvatar from "assets/images/mainContent/profileImg.png";
import { Theme } from "constants/index";
import { useStore } from "store";

import { useHistory } from "react-router-dom";
import VideoImg from "./video";
import { IoReturnDownBack } from "react-icons/io5";

const MeetSection = () => {
  const [hovered, setHovered] = useState(false);

  const {
    state: { theme },
  } = useStore();

  const history = useHistory();

  return (
    <Item>
      <ProfileImgContainer>
        <VideoImg
          color={
            theme === Theme.highContrast
              ? "yellow"
              : theme === Theme.dark
              ? "white"
              : "white"
          }
        />
      </ProfileImgContainer>
      <Container>
        <Content>
          <Header>
            <Row>
              <b>Meeting in "General"</b>
            </Row>
            <Row>
              <b style={{ opacity: 0.8, fontSize: "0.9rem", marginRight: 9 }}>
                12:02
              </b>
              <ProfileImg src={ProfileImgAvatar} alt="img" />
            </Row>
          </Header>

          <Button
            style={{ marginBottom: "0.8rem" }}
            onClick={() => history.push("/new-meeting")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <p>Join</p>
          </Button>
        </Content>
        <SecondItemContainer>
          <VideoImg
            color={
              theme === Theme.highContrast
                ? "yellow"
                : theme === Theme.dark
                ? "#9ea2fe"
                : "#6164a6"
            }
          />{" "}
          <p style={{ marginLeft: "0.3rem" }}>Meeting in "General" started</p>
        </SecondItemContainer>
        <ThirdItemContainer>
          <IoReturnDownBack size={16} style={{ marginRight: "0.5rem" }} />
          Reply
        </ThirdItemContainer>
      </Container>
    </Item>
  );
};

export default MeetSection;
