import styled, { css } from "styled-components";

import { Theme, Styles, COLORS } from "constants/index";

const { yellow, blue, bigStone, dustyGray, eastBay, melrose } = COLORS;

export const Container = styled.div`
  padding: 1rem 0rem;
  height: 100%;
  width: 76.6%;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  ${Styles.RBC};
  justify-content: flex-start;
  padding-left: 1.5rem;
  align-items: center !important;
  height: 2.7rem;
  position: relative;
  border-bottom: 1px solid #000;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `};
`;

export const DotsImg = styled.img`
  width: 1.7rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 1.5rem;
  bottom: 0.6rem;
  align-self: flex-end;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
      }
    `};
`;

export const InfoImgContainer = styled.img`
  width: 1.8rem;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  margin-right: 1.2rem;
  bottom: 0.6rem;
  align-self: flex-end;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
      }
    `};
`;

export const ShiftUpwards = css`
  position: relative;
  bottom: 0.4rem;
`;

export const Label = styled.p`
  font-weight: 600;
  padding: 0px;
  ${ShiftUpwards};
  line-height: 0;
  font-size: 1.08rem;
  margin-left: 0.9rem;
  margin-right: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
    `};
`;

export const Img = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 0.4rem;
  ${ShiftUpwards};
  border: 2px solid transparent;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 2px solid white;
    `};
`;

export const Tabs = styled.div`
  display: flex;
`;

export const TabOption = styled.div`
  ${({ theme: { current }, selected }) =>
    current === Theme.highContrast &&
    css`
      color: ${selected === 1 ? "#fff" : yellow};
      ${selected &&
      css`
        border-bottom: 0.2rem solid ${blue};
      `};
      &:hover {
        ${!selected &&
        css`
          border-bottom: 0.2rem solid ${yellow};
        `};
      }
    `};
  ${({ theme: { current }, selected }) =>
    current === Theme.dark &&
    css`
      color: ${selected === 1 ? "#fff" : dustyGray};
      ${selected &&
      css`
        border-bottom: 0.2rem solid ${bigStone};
      `};
      &:hover {
        ${!selected &&
        css`
          color: #fff;
          border-bottom: 0.2rem solid ${dustyGray};
        `};
      }
    `};
  ${({ theme: { current }, selected }) =>
    current === Theme.light &&
    css`
      color: ${selected === 1 ? "#000" : dustyGray};
      ${selected &&
      css`
        border-bottom: 0.2rem solid ${bigStone};
      `};
      &:hover {
        ${!selected &&
        css`
          color: #000;
          border-bottom: 0.2rem solid ${dustyGray};
        `};
      }
    `};
  font-size: 0.8rem;
  height: 2.26rem;
  position: relative;
  top: 0.2rem;
  cursor: pointer;
`;

export const TabOptionContainer = styled.div`
  margin: 0 0.5rem;
`;

export const Button = styled.div`
  width: 10.4rem;
  height: 2rem;
  ${Styles.RBC};
  justify-content: flex-start;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
  margin-left: 4.6rem;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #fff;
      &:hover {
        background: ${yellow};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${bigStone};
      color: #fff;
      &:hover {
        background: ${melrose};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: ${bigStone};
      color: #fff;
      &:hover {
        background: ${eastBay};
      }
    `};
`;

export const Image = styled.img`
  width: 2rem;
`;

export const ButtonLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

export const MeetBtnContainer = styled.div`
  border-radius: 0.2rem;
  border: 1px solid #fff;
  padding: 0.4rem 0.5rem;
  position: absolute;
  font-weight: 300;
  right: 4rem;
  height: 1.35rem;
  cursor: pointer;
  bottom: 0.9rem;
  color: #fff;
  font-size: 0.7rem;
  margin-right: 1.4rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      border: 1px solid #999;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      border: 1px solid #000;
      color: #000;
      background: #fff;
    `};
  ${Styles.RBC};
`;

export const DropdownArrowContainer = styled.div`
  border: 1px solid #fff;
  padding: 0.2rem 0.1rem;
  position: absolute;
  font-weight: 500;
  right: 5.4rem;
  height: 1.35rem;
  border-radius: 0.2rem;
  bottom: 0.9rem;
  color: #fff;
  &:hover {
    background: ${yellow};
    color: #000;
  }
`;

export const VideoPlayerImgContainer = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.1rem;
`;

export const Row = styled.div`
  display: flex;
  width: 7rem;
  border-radius: 0.2rem;
  border: 1px solid #fff;
`;
