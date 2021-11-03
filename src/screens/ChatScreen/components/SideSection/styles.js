import styled, { css } from "styled-components";
import { Theme, COLORS, Styles } from "constants/index";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";

const { bigStone, melrose, dustyGray, silverChalice3, white, blue, yellow } =
  COLORS;

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
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border-right: 1px solid #fff;
    `};
`;

export const Header = styled.div`
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #000;
  ${Styles.RBC};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `};
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: yellow;
    `};
`;

export const CircularContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-left: 10px;
  ${({ theme: { current } }) =>
    current !== Theme.highContrast &&
    css`
      background: ${bigStone};
      color: #fff;
      &:hover {
        background: ${melrose};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #fff;
      color: #000;
      &:hover {
        background: ${yellow};
      }
    `};
`;

export const Img = styled.img``;

export const ArrowImg = styled.img`
  width: 1.44rem;
`;

export const StyledFilterIcon = styled(BsFilter)`
  cursor: pointer;
  width: 1.5rem;
  ${Styles.RBC};
  padding: 0.2rem;
  height: 1.5rem;
  border-radius: 0.2rem;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #d1d1d1;
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
      &:hover {
        color: #000;
        background: yellow;
      }
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.27rem;

  ${({ chat }) =>
    chat === 1 &&
    css`
      border: 1.8px solid #fff;
      padding: 0.1rem 0.4rem;
      position: relative;
      left: -0.4rem;
      padding-right: 0.1rem;
    `};
`;

export const MainContent = styled.div`
  padding: 1rem 0;
`;

export const ArrowDropdownContainer = styled.div`
  ${Styles.RBC};
  justify-content: flex-start;
  z-index: 10;
  cursor: pointer;
  position: relative;
  left: -0.8rem;
  width: 5rem;
  padding: 0px;
`;

export const Arrow = styled(IoMdArrowDropdown)`
  color: #fff;
  z-index: 5;
  position: relative;
  left: 0rem;
  font-size: 14px;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
  ${({ hovered }) =>
    hovered !== 1 &&
    css`
      color: transparent;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice3};
      &:hover {
        color: #fff;
      }
    `};
  ${({ contentHovered }) =>
    contentHovered === 1 &&
    css`
      ${({ theme: { current } }) =>
        current === Theme.dark &&
        css`
          color: #fff;
        `};
    `};
`;

export const ArrowUp = styled(IoMdArrowDropright)`
  color: #fff;
  z-index: 5;
  position: relative;
  left: 0rem;
  font-size: 14px;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice3};
      &:hover {
        color: #fff;
      }
    `};
  ${({ contentHovered }) =>
    contentHovered === 1 &&
    css`
      ${({ theme: { current } }) =>
        current === Theme.dark &&
        css`
          color: #fff;
        `};
    `};
`;

export const Label = styled.p`
  font-size: 0.63rem;
  font-weight: 300;
  position: relative;
  padding: 0px 1rem;
  height: 0.3rem;
  margin-bottom: 1.44rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice3};
      &:hover {
        color: #fff;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
    `};
`;

export const ListItem = styled.div`
  margin: 0 0.4rem;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  display: flex;
  cursor: pointer;
  ${({ theme: { current }, selected }) =>
    current === Theme.highContrast &&
    selected === 0 &&
    css`
      color: ${yellow};
    `};
  &:hover {
    background: #292929;
    box-shadow: rgb(0 0 0 / 50%) 0px 0.2rem 1.6rem 0px;
    ${({ theme: { current } }) =>
      current === Theme.light &&
      css`
        background: ${white};
        box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 10%);
      `};
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        background: ${yellow};
        color: #000 !important;
      `};
  }
  ${({ selected }) =>
    selected === 1 &&
    css`
      background: #292929;
      box-shadow: rgb(0 0 0 / 50%) 0px 0.2rem 1.6rem 0px;

      ${({ theme: { current } }) =>
        current === Theme.light &&
        css`
          background: ${white};
          box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 2.7%);
        `};
      ${({ theme: { current } }) =>
        current === Theme.highContrast &&
        css`
          background: ${blue};
        `};
    `};
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  align-self: center;
`;

export const ListItemContent = styled.div`
  margin-left: 0.5rem;
  ${Styles.RBC};
  align-items: flex-start;
  width: 100%;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
      font-size: 0.72rem;
      font-weight: 300;
    `};
`;

export const ListItemComponent = styled.div``;

export const ListItemLabel = styled.p`
  ${({ theme: { current }, selected, itemHovered }) =>
    current === Theme.highContrast &&
    selected === 0 &&
    css`
      color: ${itemHovered === 1 ? "#000" : "#fff"};
    `};
`;

export const ListItemLabel1 = styled.p`
  font-size: 0.63rem;
  margin-top: 0.1rem;
`;

export const ListItemLabel2 = styled.p`
  font-size: 0.63rem;
`;
