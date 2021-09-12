import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const { white, mineShaft, mineShaft2, desertStorm, alto, mineShaft3 } = COLORS;

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
  padding: 0.7rem 1rem;
  ${Styles.RBC}
  ${({ img }) =>
    img !== 1 &&
    css`
      justify-content: flex-start;
    `}
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${mineShaft3};
  }
`;

export const Divider = styled.div`
  height: 0.18rem;
  background: ${desertStorm};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${mineShaft};
    `}
`;

export const Img = styled.img`
  width: 1.7rem;
  height: 1.54rem;
  position: relative;
  right: 0.3rem;
  margin-right: -0.2rem;
`;

export const RightArrowImg = styled.img`
  width: 1.7rem;
  position: relative;
  left: 0.3rem;
`;

export const Label = styled.p`
  font-size: 0.8rem;
  color: ${alto};
  font-weight: 300;
`;
