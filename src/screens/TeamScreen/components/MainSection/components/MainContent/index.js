import React from "react";

import {
  Container,
  Description,
  MainComponent,
  Title,
  Img,
  Item,
  ItemContainer,
  ProfileImgContainer,
  ProfileImg,
  ItemTitle,
} from "./styles";

import ProfileImgAvatar from "assets/images/mainContent/profileImg.png";

const MainContent = ({ title }) => {
  return (
    <Container>
      <MainComponent>
        <Title>Welcome to {title?.text}</Title>
        <Description>
          Try @mentioning the class name or student names to start a
          conversation.
        </Description>
        <Img
          src="https://statics.teams.cdn.office.net/evergreen-assets/channelwelcomesuggestedactions/Assets/Image/view-student-roster.svg?v=0"
          alt="img"
        />
        <ItemContainer>
          <ProfileImgContainer>
            <ProfileImg src={ProfileImgAvatar} alt="img" />
          </ProfileImgContainer>
          <Item>
            <ItemTitle>
              Shaily Malik <span style={{ marginRight: "0.4rem" }} />
              8/24/2020, 10:04 AM <br />
              Scheduled a meeting
            </ItemTitle>
          </Item>
        </ItemContainer>
      </MainComponent>
    </Container>
  );
};

export default MainContent;
