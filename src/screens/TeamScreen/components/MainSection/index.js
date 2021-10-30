import React, { useState } from "react";
import {
  Container,
  Label,
  Img,
  Header,
  Tabs,
  TabOption,
  TabOptionContainer,
  Button,
  Image,
  ButtonLabel,
  DotsImg,
  InfoImgContainer,
  MeetBtnContainer,
  Row,
  VideoPlayerImgContainer,
  DropdownArrowContainer,
} from "./styles";

import PinImg from "assets/images/mainContent/pin.svg";

import MainContent from "./components";

import { useStore } from "store";

import { Theme } from "constants/index";

import ThreeDotsDarkImg from "assets/images/sidebar/threeDots.svg";
import ThreeDotsFilledImg from "assets/images/sidebar/threeDots-filled.svg";
import ThreeDotsWhiteImg from "assets/images/sidebar/threeDots-white.svg";
import ThreeDotsHCSelectedImg from "assets/images/sidebar/threeDotsHCSelected.svg";
import VideoPlayerImg from "assets/images/mainContent/videoPlayer.svg";
import VideoPlayerImgBlack from "assets/images/mainContent/videoPlayerB.svg";

import InfoImg from "assets/images/mainContent/info.svg";
import { IoIosArrowDown } from "react-icons/io";

const MainSection = ({ item }) => {
  // const history = useHistory();

  const [selected, setSelected] = useState(0);

  const [hovered, setHovered] = useState(false);

  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      <Header>
        <Img src={item?.img} alt="img" />
        <Label>General</Label>
        <Tabs>
          <TabOptionContainer>
            <TabOption
              onClick={() => {
                setSelected(0);
              }}
              selected={+(selected === 0)}
            >
              Posts
            </TabOption>
          </TabOptionContainer>
          <TabOptionContainer>
            <TabOption
              onClick={() => {
                setSelected(1);
              }}
              selected={+(selected === 1)}
            >
              Files
            </TabOption>
          </TabOptionContainer>
        </Tabs>
        <DotsImg
          src={
            theme === Theme.highContrast ? ThreeDotsWhiteImg : ThreeDotsDarkImg
          }
          alt="img"
        />
        <InfoImgContainer
          src={theme === Theme.highContrast ? InfoImg : InfoImg}
          alt="img"
        />
        <MeetBtnContainer
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <VideoPlayerImgContainer
            alt="img"
            src={hovered ? VideoPlayerImgBlack : VideoPlayerImg}
          />
          <p>Meet</p>
        </MeetBtnContainer>
        <DropdownArrowContainer>
          <IoIosArrowDown />
        </DropdownArrowContainer>
      </Header>
      <MainContent title={item} />
      <Button>
        <Image src={PinImg} alt="img" />
        <ButtonLabel>New Conversation</ButtonLabel>
      </Button>
    </Container>
  );
};

export default MainSection;
