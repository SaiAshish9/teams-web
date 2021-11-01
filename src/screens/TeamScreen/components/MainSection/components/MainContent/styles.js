import styled, { css } from "styled-components";

import { IoMdArrowDropright } from "react-icons/io";

import { COLORS, Styles, Theme } from "constants/index";

const { white, yellow, blue, bigStone, mineShaft2, melrose } = COLORS;

export const Container = styled.div`
  width: 100%;
  height: 72vh;
  margin-top: 0rem;
  padding-top: 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6.3px;
  }
  visibility: ${({ visibility }) => (visibility === 1 ? "visible" : "hidden")};

  ::-webkit-scrollbar-track {
    border-radius: 9px;
  }

  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
        cursor: pointer;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      ::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #fff;
        cursor: pointer;
      }
    `};
`;

export const MainComponent = styled.div`
  padding-right: 2rem;
`;

export const Title = styled.p`
  color: ${white};
  text-align: center;
  margin-top: 3.6rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const UpperCont = styled.div`
  border-top: 2.7px solid transparent;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border-top: 2.7px solid
        ${({ highlight }) => (highlight === 1 ? "yellow" : "transparent")};
    `};
`;

export const Description = styled.p`
  color: ${white};
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const Img = styled.img`
  width: 231px;
  margin: 2rem auto 2.7rem;
`;

export const View = styled.div``;

export const Item = styled.div`
  width: 86%;
  border-bottom-right-radius: 0.27rem;
  border-bottom-left-radius: 0.27rem;
  position: relative;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${mineShaft2};
    `};
`;

export const ItemContainer = styled.div`
  display: flex;
  margin-bottom: ${({ last }) => (last === 1 ? "0rem" : "0.9rem")};
`;

export const Divider = styled.div`
  border-top: 2px solid #fff;
  margin-bottom: 0.9rem;
  width: calc(50% - 4rem);
`;

export const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-right: 3rem;
`;

export const DividerTitleContainer = styled.div`
  text-align: center;
  padding: 0px;
  ${Styles.RBC};
  width: 5.4rem;
`;

export const DividerTitle = styled.p`
  color: #fff;
  padding: 0px;
  font-size: 0.7rem;
  line-height: 0;
  position: relative;
  bottom: 0.4rem;
`;

export const ProfileImgContainer = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 0.9rem;
  position: relative;
  top: 0.5rem;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ProfileImgIcon = styled.img`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.35rem;
  position: absolute;
  right: 0;
  bottom: -0.5px;
`;

export const ItemTitle = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 0.75rem;
  padding: 0.7rem 0.7rem;
`;

export const SecondItemContainer = styled.div`
  width: 100% !important;
  padding: 0.4rem 0.1rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border-top: 2px solid #fff;
      color: yellow;
      &:hover {
        background: yellow;
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${melrose};
    `};
`;

export const StyledArrowRight = styled(IoMdArrowDropright)`
  color: transparent;
  ${({ theme: { current }, hovered }) =>
    current === Theme.highContrast &&
    hovered === 1 &&
    css`
      color: #000;
    `};
  ${({ theme: { current }, hovered }) =>
    current === Theme.dark &&
    hovered === 1 &&
    css`
      color: #fff;
    `};
`;

export const ThirdItemContainer = styled.div`
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  font-size: 0.7rem;
  cursor: pointer;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border-top: 2px solid #fff;
      color: yellow;

      &:hover {
        background: yellow;
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;

      &:hover {
        color: ${melrose};
      }
    `}
`;

export const YellowContainer = styled.div`
  padding: 0.4rem 0rem;
  font-size: 0.81rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border-top: 2px solid #fff;
      background: ${yellow};
      &:hover {
        background: ${blue};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
      background: ${bigStone};
    `};
  cursor: pointer;
  ${Styles.RBC};
  justify-content: flex-start;
  position: relative;
`;

export const CalenderImgContainer = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const ThreeDotsImgContainer = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0.7rem;
  top: 27%;
`;

export const EmojiContainer = styled.div`
  background: #000;
  border: 1px solid #fff;
  border-radius: 0.2rem;
  padding: 0.2rem 0.4rem;
  position: absolute;
  right: 7px;
  top: -1.4rem;
  ${Styles.RBC};
`;

export const Emojis = styled.div`
  font-size: 1rem;
`;

export const EmojiDotsImg = styled.img`
  width: 1.5rem;
`;

export const EmojiVerticalDivider = styled.div`
  width: 2px;
  height: 1rem;
  background: #fff;
  margin-left: 0.1rem;
  border-radius: 4px;
`;
