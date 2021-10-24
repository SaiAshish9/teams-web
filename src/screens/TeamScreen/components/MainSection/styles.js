import styled, { css } from "styled-components";

import { Theme, Styles } from "constants/index";

export const Container = styled.div`
  padding: 1rem 1.5rem;
  height: 100%;
  width: 76.6%;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  ${Styles.RBC};
  justify-content: flex-start;
  align-items: center !important;
  height: 2rem;
`;

export const Label = styled.p`
  font-weight: 600;
  padding: 0px;
  line-height: 0;
  font-size: 1.08rem;
  margin-left: 0.9rem;
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
  border: 2px solid transparent;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 2px solid white;
    `};
`;

export const Tabs = styled.div``;

export const TabOption = styled.div``;
