import styled, { css } from "styled-components";

import { COLORS, Theme } from "constants/index";

const { white, mineShaft, mineShaft2, desertStorm } = COLORS;

export const Container = styled.div`
  position: absolute;
  top: 3rem;
  right: 0px;
  width: 17.5rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  background: ${white};
  box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 30%);
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${mineShaft2};
      box-shadow: rgb(0 0 0 / 50%) 0px 0.2rem 1.6rem 0px;
    `}
`;

export const Content = styled.div`
  padding: 0.8rem;
`;

export const Divider = styled.div`
  height: 0.18rem;
  margin: 0.9rem 0;
  background: ${desertStorm};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${mineShaft};
    `}
`;
