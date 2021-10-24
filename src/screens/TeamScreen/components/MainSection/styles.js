import styled, { css } from "styled-components";

import { Theme, Styles, COLORS } from "constants/index";

const { yellow, blue } = COLORS;

export const Container = styled.div`
  padding: 1rem 1.5rem;
  padding-right: 0rem;
  height: 100%;
  width: 76.6%;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  ${Styles.RBC};
  justify-content: flex-start;
  align-items: center !important;
  padding-top: 1rem;
  position: relative;
`;

export const DotsImg = styled.img`
  width: 1.7rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 1.5rem;
  bottom: 0.6rem;
  align-self: flex-end;
  &:hover {
    background: ${yellow};
  }
`;

export const InfoImgContainer = styled.img`
  width: 1.8rem;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  margin-right: 1.2rem;
  bottom: 0.6rem;
  align-self: flex-end;
  &:hover {
    background: ${yellow};
  }
`;

export const ShiftUpwards = css`
  position: relative;
  bottom: 0.6rem;
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
  font-size: 0.8rem;
  height: 2.25rem;
  cursor: pointer;
`;

export const TabOptionContainer = styled.div`
  margin: 0 0.5rem;
`;

export const Button = styled.div`
  background: #fff;
  width: 10.4rem;
  height: 2rem;
  ${Styles.RBC};
  justify-content: flex-start;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
  margin-left: 3.4rem;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
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
  padding: 0.2rem 0.4rem;
  position: absolute;
  font-weight: 500;
  right: 5.2rem;
  height: 1.35rem;
  border-right: none;
  cursor: pointer;
  bottom: 0.9rem;
  color: #fff;
  font-size: 0.6rem;
  margin-right: 1.4rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
        color: #000;
      }
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
  width: 1rem;
  height: 1rem;
`;

export const Row = styled.div`
  display: flex;
  width: 7rem;
  border-radius: 0.2rem;
  border: 1px solid #fff;
`;
