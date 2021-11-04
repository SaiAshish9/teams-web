import styled, { css } from "styled-components";

import { Styles, COLORS, Theme } from "constants/index";

const { yellow, bigStone, gray } = COLORS;

export const Container = styled.div`
  width: 70%;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.4rem;
  background: transparent;
  ${Styles.HideBorder};
  border-radius: 0.2rem;
  padding: 0.5rem 0.8rem;
  color: #fff;
  border: 2px solid transparent !important;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid #fff !important;
      &::placeholder {
        color: #fff;
        font-size: 0.8rem;
        font-weight: 300;
      }
      &:focus {
        border-bottom: 2px solid ${yellow} !important;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: #292929;
      &::placeholder {
        color: #d1d1d1;
        font-size: 0.8rem;
        font-weight: 300;
      }
      &:focus {
        border-bottom: 2px solid ${bigStone} !important;
      }
    `};
`;

export const EmojiCont = styled.div`
  width: 100%;
  height: 2.4rem;
  ${Styles.RBC};
`;

export const Image = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  ${Styles.RBC};
  padding: 0.1rem;
  margin-right: ${({ last }) => (last !== 1 ? "0.1rem" : "0rem")};
  border-radius: 0.2rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: yellow;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      opacity: 0.81;
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
