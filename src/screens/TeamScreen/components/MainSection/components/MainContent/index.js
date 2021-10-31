import React, { useState, useEffect } from "react";

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
  ProfileImgIcon,
  ItemTitle,
  YellowContainer,
  SecondItemContainer,
  ThirdItemContainer,
  CalenderImgContainer,
  ThreeDotsImgContainer,
  StyledArrowRight,
  UpperCont,
  View,
  Divider,
  DividerContainer,
  DividerTitle,
  DividerTitleContainer,
  EmojiContainer,
  Emojis,
  EmojiDotsImg,
  EmojiVerticalDivider,
} from "./styles";

import ProfileImgAvatar from "assets/images/mainContent/profileImg.png";
import CalendarHCSelectedIcon from "assets/images/sidebar/calendarIconHCSelected.svg";
import ThreeDotsHCSelectedIcon from "assets/images/sidebar/threeDotsHCSelected.svg";
import CrossIcon from "assets/images/teams/crossIcon.svg";
import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";

import { IoReturnDownBack } from "react-icons/io5";

const MainContent = ({ title }) => {
  const [highlighted, setHighlighted] = useState(false);
  const [highlightedCount, setHighlightedCount] = useState(-1);
  const [scrolled, setScrolled] = useState(false);

  async function scrollElement() {
    return setTimeout(() => {
      var element = document.getElementById("teams-container");
      element.scrollTop = element.scrollHeight;
      setScrolled(true);
    }, 500);
  }

  useEffect(() => {
    const timer = scrollElement();
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container visibility={+scrolled} id="teams-container">
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
        {[...Array(8).keys()].map((i) => (
          <View key={i}>
            <ItemContainer last={+(i === 7)}>
              <ProfileImgContainer>
                <ProfileImg src={ProfileImgAvatar} alt="img" />
                <ProfileImgIcon src={CrossIcon} alt="img" />
              </ProfileImgContainer>
              <Item>
                <UpperCont
                  onMouseEnter={() => {
                    setHighlightedCount(i);
                    setHighlighted(true);
                  }}
                  onMouseLeave={() => {
                    setHighlightedCount(-1);
                    setHighlighted(false);
                  }}
                  highlight={+(highlightedCount === i)}
                >
                  <ItemTitle>
                    Teacher <span style={{ marginRight: "0.3rem" }} />
                    8/24/2020, 10:04 AM <br />
                    Scheduled a meeting
                  </ItemTitle>
                  <YellowContainer>
                    <CalenderImgContainer
                      src={CalendarHCSelectedIcon}
                      alt="img"
                    />
                    <p>
                      {title?.text}
                      <br />
                      Monday, August 24, 2020 @ 11:00 AM
                    </p>
                    <ThreeDotsImgContainer
                      src={ThreeDotsHCSelectedIcon}
                      alt="img"
                    />
                  </YellowContainer>
                </UpperCont>
                <SecondItemContainer>
                  <StyledArrowRight size={18} />
                  12 replies from teacher.
                </SecondItemContainer>
                <ThirdItemContainer>
                  <IoReturnDownBack
                    size={16}
                    style={{ marginRight: "0.5rem" }}
                  />
                  Reply
                </ThirdItemContainer>
                {highlightedCount === i && (
                  <EmojiContainer>
                    <Emojis>👍🏻 ❤️ 😁 😲 😟 😡</Emojis>
                    <EmojiVerticalDivider />
                    <EmojiDotsImg alt="img" src={ThreeDotsImg} />
                  </EmojiContainer>
                )}
              </Item>
            </ItemContainer>
            {i % 3 === 0 && (
              <DividerContainer>
                <Divider />
                <DividerTitleContainer>
                  <DividerTitle>October {i + 3},2021</DividerTitle>
                </DividerTitleContainer>
                <Divider />
              </DividerContainer>
            )}
          </View>
        ))}
      </MainComponent>
    </Container>
  );
};

export default MainContent;
