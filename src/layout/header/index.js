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
} from "./components";

const Header = () => {
  const [openSettingsDropdown, setOpenSettingsDropdown] = useState(false);

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
        />
      )}
    </Container>
  );
};

export default Header;
