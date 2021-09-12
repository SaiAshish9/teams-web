import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const { eastBay, scampi, mineShaft } = COLORS;

export const ParentContainer = styled.div`
  padding: 0 0.5rem;
  height: 3rem;
  cursor: pointer;
  ${Styles.RCC}
  margin-right: 0.5rem;
  &:hover {
    background-color: ${scampi};
  }
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      &:hover {
        background-color: ${mineShaft};
      }
    `}
`;

export const Container = styled.div`
  width: 2rem;
  margin: auto;
  position: relative;
`;

export const Img = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

export const CheckmarkContainer = styled.div`
  position: absolute;
  padding: 2px;
  bottom: -2px;
  right: -2px;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: ${eastBay};
`;

export const StyledCheckmarkImg = styled.img`
  width: 100%;
  height: 100%;
`;
