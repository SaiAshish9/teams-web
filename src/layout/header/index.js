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

import {
  Avatar,
  InputContainer,
  ThreeDots,
  SettingsDropdown,
  SettingsModal,
} from "./components";

const Header = () => {
  const [openSettingsDropdown, setOpenSettingsDropdown] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    setOpenSettingsDropdown((s) => !s);
  }

  return (
    <Container>
      <ImgContainer>
        <Img src={DotsImg} alt="img" />
      </ImgContainer>
      <Content>
        <Label>Microsoft Teams</Label>
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
