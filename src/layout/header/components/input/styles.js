import styled, { css } from "styled-components";

import { COLORS, Styles, Theme } from "constants/index";

const {
  white8,
  kimberly,
  white,
  silverChalice,
  mineShaft,
  gray,
  blue,
  mineShaft2,
  alto,
  gallery,
  mineShaft3,
} = COLORS;

export const Icon = styled.img`
  height: 100%;
  position: relative;
  z-index: 2;
`;

export const Inp = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  top: 0;
  padding: 0 0.7rem;
  bottom: 0;
  left: 0;
  outline: none !important;
  box-shadow: none !important;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${white8};
    `}
  &::placeholder {
    position: relative;
    left: 1.2rem;
    color: ${kimberly};
    opacity: 0.8;
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        color: ${gray};
      `}
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        color: ${white};
      `}
  }
  ${({ focussed, theme: { current } }) =>
    focussed === 1 &&
    css`
      background: ${current === Theme.highContrast ? "#000" : white};
      &::placeholder {
        left: 0rem;
        color: ${silverChalice};
      }
      ${({ theme: { current } }) =>
        current === Theme.dark &&
        css`
          background: ${mineShaft2};
        `}
    `}
  &:hover {
    &::placeholder {
      ${({ theme: { current }, focussed }) =>
        current === Theme.dark &&
        focussed === 0 &&
        css`
          color: ${white8};
        `}
    }
  }
  ${({ theme: { current }, focussed }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid #fff;
      border-radius: 0.2rem;
      ${focussed === 1 &&
      css`
        border: 1px solid ${blue};
        &::placeholder {
          color: #fff;
        }
      `}
    `}
`;

export const Container = styled.div`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? mineShaft : white8};
  width: 50vw;
  height: 2rem;
  ${Styles.RBC}
  border-radius: 0.2rem;
  padding: 0 0.1rem;
  position: relative;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
    `};
`;

export const DropdownContent = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 2.07rem;
  cursor: pointer;
  z-index: 3;
  padding: 1rem 0.7rem;
  border-radius: 0.2rem;
  font-weight: 300;
  ${Styles.RBC};
  justify-content: start;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
      border-top: none;
      color: #fff;
      &:hover {
        background: ${blue};
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: ${mineShaft2};
      box-shadow: rgb(0 0 0 / 50%) 0px 0.2rem 1.6rem 0px;
      color: ${alto};
      &:hover {
        background: ${mineShaft3};
      }
    `}
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: ${white};
      box-shadow: 0 0.2rem 1.6rem 0 rgb(37 36 35 / 30%);
      &:hover {
        background: #f5f5f5;
      }
    `}
`;

export const SearchContainer = styled.div`
  border-radius: 0.2rem;
  padding: 0.1rem;
  width: 2rem;
  height: 2rem;
  margin-right: 0.54rem;
  ${({ theme: { current }, hovered }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid ${hovered === 1 ? "#000" : "#fff"};
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: ${gallery};
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: #000;
    `};
`;
