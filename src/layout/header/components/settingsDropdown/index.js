import React, { useEffect, useRef } from "react";

import { Container, Content, Divider } from "./styles";

const SettingsDropdown = ({ setOpen, open }) => {
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

  return (
    <Container ref={settingsDropdownRef}>
      <Content></Content>
      <Divider />
      <Content></Content>
    </Container>
  );
};

export default SettingsDropdown;
