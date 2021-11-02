import styled, { css } from "styled-components";
import { Theme, COLORS, Styles } from "constants/index";

const { bigStone, melrose } = COLORS;

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
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CircularContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-left: 10px;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${bigStone};
      color: #fff;
      &:hover {
        background: ${melrose};
      }
    `};
`;

export const Img = styled.img``;

export const ArrowImg = styled.img`
  width: 1.44rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
