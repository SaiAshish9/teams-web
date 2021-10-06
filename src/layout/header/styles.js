import styled, { css } from "styled-components";

import { COLORS, Theme } from "constants/index";

const { eastBay, scampi, white, codGray, yellow } = COLORS;

export const Container = styled.div`
  height: 3rem;
  background: ${({ theme: { current } }) =>
    current === Theme.dark
      ? codGray
      : current === Theme.light
      ? eastBay
      : "#000"};
  display: flex;
  width: 100%;
  align-items: center;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border-bottom: 1px solid #fff;
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 100%;
`;

export const Img = styled.img`
  height: 1.7rem;
  width: 1.8rem;
  margin: 0;
  position: relative;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${scampi};
  }
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background-color: ${yellow};
      }
    `}
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 0px;
  cursor: pointer;
  color: ${white};
  margin-left: 1.5rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: yellow;
    `}
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
`;
