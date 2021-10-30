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
  YellowContainer,
  SecondItemContainer,
  ThirdItemContainer,
  CalenderImgContainer,
  ThreeDotsImgContainer,
} from "./styles";

import ProfileImgAvatar from "assets/images/mainContent/profileImg.png";
import CalendarHCSelectedIcon from "assets/images/sidebar/calendarIconHCSelected.svg";
import ThreeDotsHCSelectedIcon from "assets/images/sidebar/threeDotsHCSelected.svg";

import { IoReturnDownBack } from "react-icons/io5";

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
              Teacher <span style={{ marginRight: "0.3rem" }} />
              8/24/2020, 10:04 AM <br />
              Scheduled a meeting
            </ItemTitle>
            <YellowContainer>
              <CalenderImgContainer src={CalendarHCSelectedIcon} alt="img" />
              <p>
                {title?.text}
                <br />
                Monday, August 24, 2020 @ 11:00 AM
              </p>
              <ThreeDotsImgContainer src={ThreeDotsHCSelectedIcon} alt="img" />
            </YellowContainer>
            <SecondItemContainer>12 replies from teacher.</SecondItemContainer>
            <ThirdItemContainer>
              <IoReturnDownBack size={16} style={{ marginRight: "0.5rem" }} />
              Reply
            </ThirdItemContainer>
          </Item>
        </ItemContainer>
      </MainComponent>
    </Container>
  );
};

export default MainContent;
