import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const { ebb, mineShaft3, mineShaft2, gray, mineShaft4, yellow } = COLORS;

export const Container = styled.div`
  height: 15rem;
  position: relative;
  width: calc(20% - 1rem);
  background: #fff;
  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 0.4rem -0.075rem rgb(0 0 0 / 10%);
  border-radius: 0.2rem;
  padding: 0 1rem;
  color: #252423;
  cursor: pointer;
  &:hover {
    background: ${ebb};
  }
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      border: 0.1px solid ${gray};
      background: ${mineShaft2};
      &:hover {
        background: ${mineShaft3};
      }
    `}
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: ${mineShaft4};
      border: 0.1px solid #797979;
      &:hover {
        background: ${yellow};
      }
    `}
    ${Styles.CCC};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
      &:hover {
        color: #000;
      }
    `}
  padding-top:1rem;
`;

export const Img = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.4rem;
`;

export const Img1 = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  cursor: pointer;
`;

export const Label = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  height: 3rem;
  font-size: 1rem;
  text-align: center;
`;
