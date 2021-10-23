import styled, { css } from "styled-components";

import { Theme, COLORS } from "constants/index";

export const Container = styled.div`
  padding: 1rem 1.5rem;
  height: 100%;
  width: 76.6%;
  position: relative;
  z-index: 0;
`;

export const Label = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
`;
