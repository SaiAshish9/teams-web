import React from "react";
import { StyledModal, Container } from "./styles";

const SettingsModal = ({ open, setOpen }) => {
  return (
    <StyledModal
      visible={open}
      closable={false}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <Container></Container>
    </StyledModal>
  );
};

export default SettingsModal;
