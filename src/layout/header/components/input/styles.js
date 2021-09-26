import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const { white8, kimberly, white, silverChalice, mineShaft, gray, mineShaft2 } =
  COLORS;

export const Container = styled.div`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? mineShaft : white8};
  width: 50vw;
  height: 2rem;
  ${Styles.RBC}
  border-radius: 0.2rem;
  padding: 0 0.1rem;
  position: relative;
  overflow: hidden;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
    `}
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
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${white8};
    `}
  &::placeholder {
    position: relative;
    left: 1.2rem;
    color: ${kimberly};
    opacity: 0.8;
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        color: ${gray};
      `}
  }
  ${({ focussed }) =>
    focussed === 1 &&
    css`
      background: ${white};
      &::placeholder {
        left: 0rem;
        color: ${silverChalice};
      }
      ${({ theme: { current } }) =>
        current === Theme.dark &&
        css`
          background: ${mineShaft2};
        `}
    `}
  &:hover {
    &::placeholder {
      ${({ theme: { current }, focussed }) =>
        current === Theme.dark &&
        focussed === 0 &&
        css`
          color: ${white8};
        `}
    }
  }
`;
