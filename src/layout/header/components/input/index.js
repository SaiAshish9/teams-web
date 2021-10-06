import React, { useState } from "react";

import {
  Container,
  DropdownContent,
  Icon,
  Inp,
  SearchContainer,
} from "./styles";

import SearchIcon from "assets/images/navbar/search.svg";
import SearchHCIcon from "assets/images/navbar/searchHC.svg";
import SearchBlackIcon from "assets/images/navbar/searchBlack.svg";

import { useStore } from "store";

import { Theme } from "constants/index";

const InputContainer = () => {
  const [isFocussed, setIsFocussed] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      {isFocussed && (
        <DropdownContent
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <SearchContainer hovered={+hovered}>
            <Icon
              src={
                theme !== Theme.light
                  ? theme === Theme.highContrast
                    ? hovered
                      ? SearchBlackIcon
                      : SearchHCIcon
                    : SearchHCIcon
                  : SearchIcon
              }
              alt="img"
            />
          </SearchContainer>
          Sai is cool
        </DropdownContent>
      )}
    </Container>
  );
};

export default InputContainer;
