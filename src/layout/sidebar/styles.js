import styled, { css } from "styled-components";

import { COLORS, Theme } from "constants/index";

const {
  white,
  bigStone,
  dustyGray,
  gallery,
  boulder,
  codGray,
  gallery1,
  alto,
  mineShaft1,
  mineShaft,
} = COLORS;

export const Container = styled.div`
  height: calc(100% - 3rem);
  width: 4rem;
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? codGray : gallery};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      box-shadow: 0 0 3px ${dustyGray};
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border-right: 1px solid #fff;
    `}
`;

export const Img = styled.img`
  width: 100%;
  height: 2rem;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0;
  padding-left: 1px;
  cursor: pointer;
  color: ${({ selected }) => (selected === 1 ? bigStone : boulder)};
  &:hover {
    background: ${white};
    color: ${bigStone};
  }
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      &:hover {
        background: ${mineShaft};
      }
    `}
`;

export const ListItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  ${({ selected, last }) =>
    selected === 1 &&
    last !== 1 &&
    css`
      border-left: 0.15rem solid ${bigStone};
      ${({ theme: { current } }) =>
        current === Theme.highContrast &&
        css`
          border-left: 0.15rem solid yellow;
        `}
    `}
`;

export const ListItemLabel = styled.p`
  font-size: 0.6rem;
  color: ${({ selected }) => (selected === 1 ? bigStone : boulder)};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: yellow !important;
    `}
`;

export const FirstItemsContent = styled.div``;

export const SecondItemsContent = styled.div`
  width: 100%;
`;

export const DownloadIconContainer = styled.div`
  margin: 0.5rem 0.3rem;
  width: calc(100% - 0.6rem);
  border-radius: 0.4rem;
  border: ${({ theme: { current } }) =>
    current === Theme.dark ? `0.2px solid ${boulder}` : `0.1rem solid ${alto}`};
  height: 2.4rem;
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? mineShaft1 : gallery1};
  cursor: pointer;
  &:hover {
    background: ${white};
  }
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      &:hover {
        background: ${mineShaft};
      }
    `}
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: none;
    `}
`;
