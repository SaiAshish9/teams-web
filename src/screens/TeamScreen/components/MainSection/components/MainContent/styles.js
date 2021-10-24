import styled from "styled-components";

import { COLORS } from "constants/index";

const { yellow } = COLORS;

export const Container = styled.div`
  width: 100%;
  height: 72vh;
  background: red;
  margin-top: 0rem;
  padding-top: 2rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainComponent = styled.div`
  height: 90vh;
  background: yellow;
`;
