import styled, { css } from "styled-components";

import { COLORS, Theme, Styles } from "constants/index";
import { RiArrowRightSLine } from "react-icons/ri";

const {
  bigStone,
  silverChalice1,
  mineShaft2,
  white,
  mineShaft3,
  yellow,
  ebb,
  alto,
  dustyGray,
} = COLORS;

export const Container = styled.div`
  height: 100%;
  width: 23.4%;
  position: relative;
  z-index: 2;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: #141414;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      box-shadow: 0 0 3px ${dustyGray};
    `};
`;

export const Label = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #c9c9c9;
      &:hover {
        color: ${bigStone};
      }
    `};
`;

export const Span = styled.span`
  position: relative;
  top: 1.26px;
  left: 0.36rem;
`;

export const Img = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 0.4rem;
  margin-top: 1.35rem;
  margin-left: 1rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  padding-left: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice1};
    `};
`;

export const Title1 = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  margin-left: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice1};
    `};
`;

export const Row = styled.div`
  ${Styles.RBC};
  margin-top: 1.8rem;
`;

export const DotsImg = styled.img`
  width: 1.7rem;
  cursor: pointer;
  position: relative;
  margin-right: 1rem;
`;

export const OptionsCont = styled.div`
  padding: 1.8rem 0.27rem;
  font-weight: 300;
  font-size: 0.8rem;
  opacity: 0.72;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #c9c9c9;
    `};
  ${({ second }) =>
    second === 1 &&
    css`
      padding: 0.5rem 0.27rem;
    `}
`;

export const ListItem = styled.p`
  cursor: pointer;
  padding: 0.3rem 0;
  padding-left: 1.2rem;
  border-radius: 0.4rem;
  &:hover {
    background: ${mineShaft2};
    color: #fff;
  }
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
      &:hover {
        background: ${ebb};
        color: #000;
      }
    `};
  position: relative;
  z-index: 2;
`;

export const ChannelsListItemContainer = styled.div`
  width: 100%;
  ${({ highlight }) =>
    highlight &&
    css`
      background: #292929;
      color: #fff;
      ${({ theme: { current } }) =>
        current === Theme.light &&
        css`
          color: #000;
          background: ${ebb};
        `}
    `};
  ${Styles.RBC};
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

export const MenuContent = styled.div`
  width: 12rem;
  background: #292929;
  box-shadow: 0 0.2rem 1.6rem 0 rgb(0 0 0 / 50%);
  border-radius: 0.4rem;
  font-size: 0.9rem;
  border: 0;
  position: absolute;
  top: 1.4rem;
  right: -9rem;
  z-index: 5;
  padding: 0;
  border-radius: 0.4rem !important;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background-color: ${white} !important;
      box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 30%);
      color: #000;
    `};
`;

export const MenuItemListItem = styled.div`
  color: #fff;
  width: 100%;
  font-weight: 300;
  font-size: 0.72rem;
  ${Styles.RBC};
  position: relative;
  z-index: 1 !important;
  justify-content: flex-start;
  ${({ theme: { current }, selected }) =>
    current === Theme.dark &&
    css`
      color: ${alto};
      ${selected &&
      css`
        background: ${mineShaft3};
      `};
      &:hover {
        background: ${mineShaft3};
      }
    `};
  ${({ theme: { current }, selected }) =>
    current === Theme.highContrast &&
    css`
      ${selected &&
      css`
        background: ${yellow};
        color: #000;
      `};
      &:hover {
        background: ${yellow};
        color: #000;
      }
    `};
  ${({ theme: { current }, selected }) =>
    current === Theme.light &&
    css`
      background-color: ${white} !important;
      color: #000;
      ${selected &&
      css`
        background: ${ebb};
      `};
      &:hover {
        background: ${ebb};
      }
    `}
  padding: 0.27rem 0.6rem;
`;

export const ListItemLabel = styled.p`
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background-color: ${white} !important;
    `}
`;

export const ListItemImg = styled.img`
  width: 1.8rem;
`;

export const RightArrow = styled(RiArrowRightSLine)`
  position: absolute;
  right: 10px;
`;

export const SecondDrawer = styled.div`
  width: 12rem;
  background: #292929;
  box-shadow: 0 0.2rem 1.6rem 0 rgb(0 0 0 / 50%);
  border-radius: 0.4rem;
  font-size: 0.9rem;
  border: 0;
  position: absolute;
  top: 1.4rem;
  right: -20.7rem;
  z-index: 5;
  border-radius: 0.4rem !important;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background-color: ${white} !important;
      box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 30%);
      color: #000;
    `};
`;
