import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const { yellow, mineShaft3, ebb } = COLORS;

export const Container = styled.div`
  font-weight: 500;
  border-radius: 0.4rem;
  padding: 0.07rem 1rem;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  min-width: 9.6rem;
  font-size: 0.8rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
      border: 1px solid #fff;
      &:hover {
        background: ${yellow};
        color: #000;
        border: 1px solid ${yellow};
      }
    `}
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
      border: 1px solid #fff;
      &:hover {
        background: ${mineShaft3};
      }
    `}
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      box-shadow: 0 0.2rem 0.4rem -0.075rem rgb(0 0 0 / 10%);
      border: 1px solid #e4e4e4;
      &:hover {
        background: ${ebb};
      }
    `};

  cursor: pointer;
  ${Styles.RBC}
`;

export const Img = styled.img`
  width: 2rem;
`;
