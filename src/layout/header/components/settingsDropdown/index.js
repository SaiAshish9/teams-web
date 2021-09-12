import React, { useEffect, useRef } from "react";

import {
  Container,
  Content,
  Divider,
  Img,
  Label,
  RightArrowImg,
} from "./styles";

import SettingsIcon from "assets/images/navbar/settings.svg";
import RightArrow from "assets/images/navbar/rightArrow.svg";

const SettingsDropdown = ({ setOpen, setOpenSettingsModal }) => {
  const settingsDropdownRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          event.target.id !== "three-dots"
        ) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(settingsDropdownRef);

  const DATA = [
    {
      text: "Keyboard shortcuts",
    },
    {
      text: "About",
      img: <RightArrow />,
    },
    {
      text: "Download the desktop app",
    },
    {
      text: "Download the mobile app",
    },
  ];

  return (
    <Container ref={settingsDropdownRef}>
      <Content
        onClick={() => {
          setOpen(false);
          setOpenSettingsModal(true);
        }}
      >
        <Img src={SettingsIcon} alt="img" />
        <Label>Settings</Label>
      </Content>
      <Divider />
      {DATA.map((i, k) => (
        <Content key={k} img={+(i.img !== null)}>
          <Label>{i.text}</Label>
          {i.img && <RightArrowImg src={RightArrow} alt="img" />}
        </Content>
      ))}
    </Container>
  );
};

export default SettingsDropdown;
