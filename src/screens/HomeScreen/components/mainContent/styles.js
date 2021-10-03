import styled, { css } from "styled-components";
import { Styles, Theme, COLORS } from "constants/index";

const { silverChalice3 } = COLORS;

export const Container = styled.div`
  padding-top: 1.4rem;
  overflow-y: scroll;
  height: 90%;
  padding-bottom: 3rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Label = styled.p`
  font-size: 0.72rem;
  font-weight: 300;
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
