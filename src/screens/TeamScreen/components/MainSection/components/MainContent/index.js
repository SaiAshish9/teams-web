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
import CalendarIconWhite from "assets/images/sidebar/calendarIcon-white.svg";
import ThreeDotsHCSelectedIcon from "assets/images/sidebar/threeDotsHCSelected.svg";
import CrossIcon from "assets/images/teams/crossIcon.svg";
import CrossIconOrange from "assets/images/teams/crossIconOrange.svg";
import ThreeDotsImg from "assets/images/sidebar/threeDots-white.svg";
import ThreeDotsGrayImg from "assets/images/sidebar/threeDots.svg";

import { IoReturnDownBack } from "react-icons/io5";
import { Theme } from "constants/index";

import { useStore } from "store";
import MeetSection from "screens/TeamScreen/components/MeetSection";

const MainContent = ({ title }) => {
  const [highlighted, setHighlighted] = useState(false);
  const [highlightedCount, setHighlightedCount] = useState(-1);
  const [scrolled, setScrolled] = useState(false);
  const [secondItemHovered, setSecondItemHovered] = useState(-1);

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

  const {
    state: { theme },
  } = useStore();

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
                <ProfileImgIcon
                  src={theme === Theme.light ? CrossIconOrange : CrossIcon}
                  alt="img"
                />
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
                    <b>Teacher</b> <span style={{ marginRight: "0.3rem" }} />
                    8/24/2020, 10:04 AM <br />
                    Scheduled a meeting
                  </ItemTitle>
                  <YellowContainer>
                    <CalenderImgContainer
                      src={
                        theme !== Theme.highContrast
                          ? CalendarIconWhite
                          : CalendarHCSelectedIcon
                      }
                      alt="img"
                    />
                    <p>
                      {title?.text}
                      <br />
                      <span style={{ opacity: 0.8 }}>
                        Monday, August 24, 2020 @ 11:00 AM
                      </span>
                    </p>
                    <ThreeDotsImgContainer
                      src={
                        theme !== Theme.highContrast
                          ? ThreeDotsImg
                          : ThreeDotsHCSelectedIcon
                      }
                      alt="img"
                    />
                  </YellowContainer>
                </UpperCont>
                <SecondItemContainer
                  onMouseEnter={() => setSecondItemHovered(true)}
                  onMouseLeave={() => setSecondItemHovered(false)}
                >
                  <StyledArrowRight size={18} hovered={+secondItemHovered} />
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
                    <EmojiDotsImg
                      alt="img"
                      src={
                        theme !== Theme.highContrast
                          ? ThreeDotsGrayImg
                          : ThreeDotsImg
                      }
                    />
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
        <MeetSection />
      </MainComponent>
    </Container>
  );
};

export default MainContent;
