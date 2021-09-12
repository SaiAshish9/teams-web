import styled from "styled-components";

import { Modal } from "antd";

import { Theme, COLORS } from "constants/index";

const { mineShaft, white } = COLORS;

export const StyledModal = styled(Modal)`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? mineShaft : white};
  .ant-modal-body {
    background: ${({ theme: { current } }) =>
      current === Theme.dark ? mineShaft : white};
  }
`;

export const Container = styled.div`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? mineShaft : white};
`;
