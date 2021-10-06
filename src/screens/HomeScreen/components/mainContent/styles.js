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
  z-index: 1;
  ${({ hovered }) =>
    hovered === 1
      ? css`
          padding-right: 2rem;

          ::-webkit-scrollbar {
            width: 6.3px;
          }

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
        `
      : css`
          padding-right: calc(2rem + 6.3px);
          ::-webkit-scrollbar {
            display: none;
          }
        `}
`;

export const Label = styled.p`
  font-size: 0.72rem;
  font-weight: 300;
  position: relative;
  width: 5rem;
  left: ${({ hovered }) => (hovered === 1 ? "-1rem" : "0rem")};
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
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `}
`;

export const ArrowUp = styled(IoMdArrowDropright)`
  color: #fff;
  z-index: 5;
  position: relative;
  left: -0.2rem;
  font-size: 16px;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `}
`;
