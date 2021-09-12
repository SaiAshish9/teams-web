import styled, { css } from "styled-components";

import { COLORS, Styles } from "constants/index";

const { white8, kimberly, white, silverChalice } = COLORS;

export const Container = styled.div`
  background: ${white8};
  width: 50vw;
  height: 2rem;
  ${Styles.RBC}
  border-radius: 0.4rem;
  padding: 0 0.1rem;
  position: relative;
  overflow: hidden;
`;

export const Icon = styled.img`
  height: 100%;
  position: relative;
  z-index: 2;
`;

export const Inp = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  top: 0;
  padding: 0 0.7rem;
  bottom: 0;
  left: 0;
  ${Styles.HideBorder}
  &::placeholder {
    position: relative;
    left: 1.2rem;
    color: ${kimberly};
    opacity: 0.8;
  }
  ${({ focussed }) =>
    focussed === 1 &&
    css`
      background: ${white};
      &::placeholder {
        left: 0rem;
        color: ${silverChalice};
      }
    `}
`;
