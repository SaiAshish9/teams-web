import React, { useState } from "react";

import {
  StyledDrawer,
  Img,
  HeadingLabel,
  Header,
  ArrowRightImgContainer,
  ArrowRightImg,
  AppsLabel,
  AppsContent,
  AppsItemLabel,
  AppsItem,
  Content,
  AppsItemImg,
  HeaderImgContainer,
} from "./styles";

import DotsImg from "assets/images/navbar/dots.svg";
import DotsImgHC from "assets/images/navbar/dotsHC.svg";
import RightArrowImg from "assets/images/drawer/rightArrow.svg";
import RightArrowImgHC from "assets/images/drawer/rightArrowHC.svg";

import OutlookImg from "assets/images/drawer/outlook.svg";
import OneDriveImg from "assets/images/drawer/oneDrive.svg";
import WordImg from "assets/images/drawer/word.svg";
import ExcelImg from "assets/images/drawer/excel.svg";
import PowerPointImg from "assets/images/drawer/powerPoint.svg";
import OneNoteImg from "assets/images/drawer/oneNote.svg";
import SharePointImg from "assets/images/drawer/sharePoint.svg";
import TeamsImg from "assets/images/drawer/teams.svg";

import { useStore } from "store";
import { Theme } from "constants/index";

const options = (theme) => {
  return [
    {
      icon: OutlookImg,
      text: "Outlook",
      color: "#0078d3",
    },
    {
      icon: OneDriveImg,
      text: "OneDrive",
      color: "#26a8e9",
    },
    {
      icon: WordImg,
      text: "Word",
      color: "#0d2c64",
    },
    {
      icon: ExcelImg,
      text: "Excel",
      color: "#175c36",
    },
    {
      icon: PowerPointImg,
      text: "PowerPoint",
      color: "#c43e1b",
    },
    {
      icon: OneNoteImg,
      text: "OneNote",
      color: "#7718aa",
    },
    {
      icon: SharePointImg,
      text: "SharePoint",
      color: "#028387",
    },
    {
      icon: TeamsImg,
      text: "Teams",
      color: "#4b53bc",
    },
  ];
};

const DrawerContainer = ({ toggleDrawer, visible }) => {
  const {
    state: { theme },
  } = useStore();

  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <StyledDrawer
      placement="left"
      closable={false}
      onClose={toggleDrawer}
      visible={visible}
    >
      <Header>
        <HeaderImgContainer
          onClick={toggleDrawer}
          onMouseEnter={() => {
            if (theme === Theme.highContrast) {
              setLogoHovered(true);
            }
          }}
          onMouseLeave={() => {
            if (theme === Theme.highContrast) {
              setLogoHovered(false);
            }
          }}
        >
          <Img
            src={theme === "light" || logoHovered ? DotsImgHC : DotsImg}
            alt="img"
          />
        </HeaderImgContainer>
        <ArrowRightImgContainer>
          <HeadingLabel>Microsoft 365</HeadingLabel>
          <ArrowRightImg
            src={theme === "highContrast" ? RightArrowImgHC : RightArrowImg}
            alt="img"
          />
        </ArrowRightImgContainer>
      </Header>
      <Content>
        <AppsLabel>Apps</AppsLabel>
        <AppsContent>
          {options(theme).map((i, k) => (
            <AppsItem color={i.color} onClick={toggleDrawer} key={k}>
              <AppsItemImg src={i.icon} alt="img" />
              <AppsItemLabel>{i.text}</AppsItemLabel>
            </AppsItem>
          ))}
        </AppsContent>
      </Content>
    </StyledDrawer>
  );
};

export default DrawerContainer;
