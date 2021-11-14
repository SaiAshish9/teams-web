import styled, { css } from "styled-components";

import { COLORS, Theme, Styles } from "constants/index";

const { bigStone, scampi, yellow, melrose, gray } = COLORS;

export const Container = styled.div`
  width: 86%;
  border-radius: 0.27rem;
  position: relative;
  overflow: hidden;
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

export const SecondItemContainer = styled.div`
  display: flex;
  align-items: center;
  background: #000;
  padding-left: 0.4rem;
  top: 0.2rem;
  margin-top: 0.4rem;
  color: #fff;
  font-size: 0.72rem;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: #292929;
      color: #d6d6d6;
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: #fff;
      color: ${gray};
    `}
`;

export const ThirdItemContainer = styled.div`
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  font-size: 0.7rem;
  cursor: pointer;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: yellow;
      background: #000;
      &:hover {
        background: yellow;
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #d6d6d6;
      background: #292929;
      &:hover {
        color: ${melrose};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: #fff;
      color: ${gray};
    `};
`;

export const Content = styled.div`
  padding: 1rem 0.8rem 0rem;
  overflow: hidden;
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
      border: 2px solid #000;
      background: yellow;
      color: #000;
      &:hover {
        color: #fff;
        background: #000;
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
      background: #6164a6;
      color: #fff;
      border: 2px solid transparent;
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #201f1f;
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
