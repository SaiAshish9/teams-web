import React, { useState } from "react";

import { Container, Icon, Inp } from "./styles";

import SearchIcon from "assets/images/navbar/search.svg";
import SearchHCIcon from "assets/images/navbar/searchHC.svg";

import { useStore } from "store";

import { Theme } from "constants/index";

const InputContainer = () => {
  const [isFocussed, setIsFocussed] = useState(false);

  const {
    state: { theme },
  } = useStore();

  return (
    <Container
      onFocus={() => setIsFocussed(true)}
      onBlur={() => setIsFocussed(false)}
    >
      {!isFocussed && (
        <Icon
          src={theme === Theme.highContrast ? SearchHCIcon : SearchIcon}
          alt="img"
        />
      )}
      <Inp
        placeholder={
          isFocussed
            ? "Look for messages, files and more. Or type / for a list of commands."
            : "Search"
        }
        focussed={+isFocussed}
      />
    </Container>
  );
};

export default InputContainer;
