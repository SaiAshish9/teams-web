import styled, { css } from "styled-components";

import { COLORS, Theme, Styles } from "constants/index";

const { blue, bigStone, scampi, yellow } = COLORS;

export const Container = styled.div`
  width: 86%;
  border-radius: 0.27rem;
  position: relative;
  padding: 1rem 0.8rem;
  background: #293370;
  box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 5%);
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: ${yellow};
      border: 1px solid #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      box-shadow: rgb(0 0 0 / 50%) 0px 0.2rem 1.6rem 0px;
    `};
`;

export const Button = styled.div`
  border-radius: 0.2rem;
  width: 4.5rem;
  font-size: 0.8rem;
  height: 1.8rem;
  background: ${bigStone};
  cursor: pointer;
  margin-top: 3.2rem;
  padding: 0 0.7rem;
  padding-right: 0.6rem;
  ${Styles.RAC};
  ${({ theme: { current } }) =>
    current !== Theme.highContrast &&
    css`
      color: #fff;
      &:hover {
        background: ${scampi};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      color: #fff;
      &:hover {
        background: ${blue};
        color: #000;
      }
    `};
`;

export const Img = styled.img`
  width: 1.4rem;
`;

export const ProfileImgContainer = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 0.9rem;
  position: relative;
  ${Styles.RCC};
  cursor: pointer;
  ${({ theme: { current } }) =>
    current !== Theme.highContrast &&
    css`
      background: #293370;
      color: #fff;
      border: 2px solid transparent;
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: ${yellow};
      color: #000;
      border: 2px solid transparent;
    `};
`;

export const Item = styled.div`
  display: flex;
  margin-top: 1.26rem;
`;

export const Header = styled.div`
  color: #fff;
  font-weight: 300;
  ${Styles.RBC};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #000;
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid #000;
    `};
`;
