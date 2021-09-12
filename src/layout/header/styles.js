import styled from "styled-components";

import { COLORS, Theme } from "constants/index";

const { eastBay, scampi, white, codGray } = COLORS;

export const Container = styled.div`
  height: 3rem;
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? codGray : eastBay};
  display: flex;
  width: 100%;
  align-items: center;
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
  width: 4rem;
  cursor: pointer;

  &:hover {
    background-color: ${scampi};
  }
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 0px;
  color: ${white};
  margin-left: 1.5rem;
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
`;
