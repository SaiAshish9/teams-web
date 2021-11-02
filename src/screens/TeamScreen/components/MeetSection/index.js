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
} from "./styles";
import VideoPlayerImg from "assets/images/mainContent/videoPlayer.svg";
import ProfileImgAvatar from "assets/images/mainContent/profileImg.png";
import VideoPlayerImgBlack from "assets/images/mainContent/videoPlayerB.svg";
import { Theme } from "constants/index";
import { useStore } from "store";

const MeetSection = () => {
  const [hovered, setHovered] = useState(false);

  const {
    state: { theme },
  } = useStore();

  return (
    <Item>
      <ProfileImgContainer>
        <Img
          alt="img"
          src={
            theme === Theme.highContrast ? VideoPlayerImgBlack : VideoPlayerImg
          }
        />
      </ProfileImgContainer>
      <Container>
        <Header>
          <Row>
            <p>Meeting</p>
            <span style={{ opacity: 0.8, fontSize: "0.7rem", marginLeft: 5 }}>
              12:02
            </span>
          </Row>
          <ProfileImg src={ProfileImgAvatar} alt="img" />
        </Header>
        <Button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Img alt="img" src={hovered ? VideoPlayerImgBlack : VideoPlayerImg} />
          <p>Join</p>
        </Button>
      </Container>
    </Item>
  );
};

export default MeetSection;
