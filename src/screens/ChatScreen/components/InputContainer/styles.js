import styled, { css } from "styled-components";

import { Styles, COLORS, Theme } from "constants/index";

const { yellow, bigStone } = COLORS;

export const Container = styled.div`
  width: 70%;
  position: relative;

  [data-placeholder]:empty:before {
    content: attr(data-placeholder);
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        color: #fff;
        font-size: 0.8rem;
        font-weight: 300;
      `};
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        color: #d1d1d1;
        font-size: 0.8rem;
        font-weight: 300;
      `};
    ${({ theme: { current } }) =>
      current === Theme.light &&
      css`
        color: #000;
        font-size: 0.8rem;
        font-weight: 300;
      `};
  }
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
  justify-content: flex-start;
  width: 100%;
`;

export const Img = styled.img`
  height: 2.1rem;
  position: relative;
  top: 0.3rem;
  align-self: flex-start;
`;

export const Input = styled.p`
  width: 100%;
  background: transparent;
  ${Styles.HideBorder};
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
      font-size: 0.8rem;
      font-weight: 300;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #d1d1d1;
      font-size: 0.8rem;
      font-weight: 300;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
      font-size: 0.8rem;
      font-weight: 300;
    `};
  border: 2px solid transparent !important;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid #fff !important;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 300;
      &:focus {
        border-bottom: 2px solid ${yellow} !important;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: #292929;
      &:focus {
        border-bottom: 2px solid ${bigStone} !important;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: #fff;
      color: #000;
      &:focus {
        border-bottom: 2px solid ${bigStone} !important;
      }
    `};
`;

export const EmojiIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EmojiIcon = styled.img`
  width: 1rem;
  height: 100%;
`;
