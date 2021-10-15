import React from "react";

import { StyledDrawer } from "./styles";

const DrawerContainer = ({ toggleDrawer, visible }) => {
  return (
    <StyledDrawer
      placement="left"
      closable={false}
      onClose={toggleDrawer}
      visible={visible}
    ></StyledDrawer>
  );
};

export default DrawerContainer;
