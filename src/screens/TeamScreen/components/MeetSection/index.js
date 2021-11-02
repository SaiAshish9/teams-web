import React from "react";

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

const MeetSection = () => {
  return (
    <Item>
      <ProfileImgContainer>
        <Img alt="img" src={VideoPlayerImg} />
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
        <Button>
          <Img alt="img" src={VideoPlayerImg} />
          <p>Join</p>
        </Button>
      </Container>
    </Item>
  );
};

export default MeetSection;
