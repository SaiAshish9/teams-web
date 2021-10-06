import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const {
  ebb,
  mineShaft3,
  mineShaft2,
  gray,
  mineShaft4,
  yellow,
  gallery,
  mineShaft,
  desertStorm,
  alto,
  white,
} = COLORS;

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
      color: ${gallery};
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
  font-weight: ${({ highlight }) => (highlight === 1 ? 600 : 300)};
  height: 3rem;
  font-size: 1rem;
  text-align: center;
`;

export const MenuContent = styled.div`
  width: 12rem;
  background: #292929;
  box-shadow: 0 0.2rem 1.6rem 0 rgb(0 0 0 / 50%);
  border-radius: 0.4rem;
  font-size: 0.9rem;
  border: 0;
  position: absolute;
  top: 17%;
  left: 86%;
  z-index: 3;
  padding: 0;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: ${white};
      box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 30%);
      color: #000;
    `};
`;

export const ListItem = styled.div`
  color: #fff;
  width: 100%;
  font-weight: 300;
  font-size: 0.72rem;
  ${Styles.RBC};
  justify-content: flex-start;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${alto};
      &:hover {
        background: ${mineShaft3};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
      &:hover {
        background: ${ebb};
      }
    `}
  padding: 0.27rem 0.6rem;
`;

export const Divider = styled.div`
  height: 0.18rem;
  background: ${desertStorm};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${mineShaft};
    `}
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      height: 0.04rem;
      opacity: 0.4;
    `}
`;

export const ListItemLabel = styled.p``;

export const ListItemImg = styled.img`
  width: 1.8rem;
`;
