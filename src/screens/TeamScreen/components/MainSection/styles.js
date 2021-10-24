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

export const ShiftUpwards = css`
  position: relative;
  bottom: 0.6rem;
`;

export const Header = styled.div`
  ${Styles.RBC};
  justify-content: flex-start;
  align-items: center !important;
  padding-top: 1rem;
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
  margin-left: 4rem;
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
