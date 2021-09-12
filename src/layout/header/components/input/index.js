import React, { useState } from "react";

import { Container, Icon, Inp } from "./styles";

import SearchIcon from "assets/images/navbar/search.svg";

const InputContainer = () => {
  const [isFocussed, setIsFocussed] = useState(false);

  return (
    <Container
      onFocus={() => setIsFocussed(true)}
      onBlur={() => setIsFocussed(false)}
    >
      {!isFocussed && <Icon src={SearchIcon} alt="img" />}
      <Inp placeholder={isFocussed ? "Look for messages, files and more. Or type / for a list of commands." : "Search"} focussed={+isFocussed} />
    </Container>
  );
};

export default InputContainer;
