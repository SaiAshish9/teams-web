import styled, { css } from "styled-components";

import { COLORS, Theme, Styles } from "constants/index";

const { bigStone, silverChalice1 } = COLORS;

export const Container = styled.div`
  height: 100%;
  width: 23.4%;
  padding: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: #141414;
    `};
`;

export const Label = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #c9c9c9;
      &:hover {
        color: ${bigStone};
      }
    `};
`;

export const Span = styled.span`
  position: relative;
  top: 1.26px;
  left: 0.36rem;
`;

export const Img = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 0.4rem;
  margin-top: 1.35rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice1};
    `};
`;

export const Title1 = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${silverChalice1};
    `};
`;

export const Row = styled.div`
  ${Styles.RBC};
  margin-top: 1.8rem;
`;

export const DotsImg = styled.img`
  width: 1.7rem;
  cursor: pointer;
  position: relative;
  top: 3.6px;
`;

export const OptionsCont = styled.div`
  padding: 1.8rem 0.27rem;
  font-weight: 300;
  font-size: 0.8rem;
  opacity: 0.72;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #c9c9c9;
    `};
`;

export const ListItem = styled.p`
  margin-bottom: 0.5rem;
  cursor: pointer;
`;
