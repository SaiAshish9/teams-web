import styled, { css } from "styled-components";
import { Styles, Theme, COLORS } from "constants/index";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

const { silverChalice3 } = COLORS;

export const Container = styled.div`
  padding-top: 1.4rem;
  overflow-y: scroll;
  height: 90%;
  position: relative;
  padding-left: 1rem;
  padding-bottom: 3rem;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
`;

export const Label = styled.p`
  font-size: 0.72rem;
  font-weight: 300;
  position: relative;
  left: -0.9rem;
  padding: 0px;
  margin-bottom: 0.7rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice3};
    `}
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
    `}
`;

export const Content = styled.p`
  ${Styles.RBC};
  flex-wrap: wrap;
`;

export const ArrowDropdownContainer = styled.div`
  ${Styles.RBC};
  justify-content: flex-start;
  z-index: 10;
  cursor: pointer;
`;

export const Arrow = styled(IoMdArrowDropdown)`
  color: #fff;
  z-index: 5;
  position: relative;
  left: -0.2rem;
  font-size: 16px;
`;

export const ArrowUp = styled(IoMdArrowDropright)`
  color: #fff;
  z-index: 5;
  position: relative;
  left: -0.2rem;
  font-size: 16px;
`;
