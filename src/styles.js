import styled from "styled-components";

import { Theme, COLORS } from "constants/index";

const { mineShaft, white } = COLORS;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: ${({ theme: { current } }) =>
    current === Theme.dark
      ? mineShaft
      : current === Theme.light
      ? white
      : "#000"};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
