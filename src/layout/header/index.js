import React, { useState } from "react";

import {
  Container,
  Img,
  ImgContainer,
  Label,
  Content,
  SettingsContainer,
} from "./styles";

import DotsImg from "assets/images/navbar/dots.svg";
import DotsImgHC from "assets/images/navbar/dotsHC.svg";

import {
  Avatar,
  InputContainer,
  ThreeDots,
  SettingsDropdown,
  SettingsModal,
} from "./components";

import { useStore } from "store";

import { Theme } from "constants/index";

import { useHistory } from "react-router-dom";

const Header = ({ setVisible }) => {
  const [openSettingsDropdown, setOpenSettingsDropdown] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    setOpenSettingsDropdown((s) => !s);
  }

  const history = useHistory();

  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      <ImgContainer
        onClick={() => setVisible((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Img
          src={hovered && theme === Theme.highContrast ? DotsImgHC : DotsImg}
          alt="img"
        />
      </ImgContainer>
      <Content>
        <Label onClick={() => history.push("/")}>Microsoft Teams</Label>
        <InputContainer />
        <SettingsContainer>
          <ThreeDots onClick={toggleMenu} />
          <Avatar />
        </SettingsContainer>
      </Content>
      {openSettingsDropdown && (
        <SettingsDropdown
          setOpen={setOpenSettingsDropdown}
          open={openSettingsDropdown}
          setOpenSettingsModal={setOpenSettingsModal}
        />
      )}
      <SettingsModal open={openSettingsModal} setOpen={setOpenSettingsModal} />
    </Container>
  );
};

export default Header;
