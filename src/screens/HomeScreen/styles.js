import styled, { css } from "styled-components";

import { Styles, Theme, COLORS } from "constants/index";

const { yellow, blue } = COLORS;

export const Container = styled.div`
  padding: 1rem 2rem;
  padding-left: 1rem;
  width: 100%;
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current === Theme.light ? "#000" : "#fff"};
  font-weight: 600;
  font-size: 18px;
`;

export const Content = styled.div`
  ${Styles.RBC};
  width: 100%;
  margin-bottom: 0.7rem;
  padding-left: 1rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1px;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
      }
    `}
`;

export const Row = styled.div`
  ${Styles.RBC}
`;
