import styled, { css } from "styled-components";
import { Theme } from "constants/index";

export const Container = styled.div`
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #19192a;
  cursor: text;
  width: fit-content;
  align-self: ${({ left }) => (left === 1 ? "flex-start" : "flex-end")};
  ${({ theme: { current }, left }) =>
    current === Theme.light &&
    css`
      background: ${left === 1 ? "#fff" : "#e9eaf6"};
    `}
  ${({ theme: { current }, left }) =>
    current === Theme.dark &&
    css`
      border: 1px solid transparent;
      background: ${left === 1 ? "#292929" : "#323347"};
    `}
`;

export const Parent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  left: ${({ left }) => (left === 1 ? "-2.5rem" : "0rem")};
`;

export const Text = styled.p`
  color: #fff;
  font-size: 0.63rem;
  white-space: nowrap;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `}
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 0.7rem;
  white-space: nowrap;
  margin-top: 0.1rem;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `}
`;

export const Img = styled.img`
  width: 7rem;
  margin: auto;
  margin-top: 0.5rem;
`;

export const Image = styled.div`
  position: absolute;
  left: 104%;
  bottom: 0.04rem;
  z-index: 10;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const BubbleImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: 2px solid #fff;
  margin-right: 0.5rem;
`;

export const StyledInnerHtml = styled.div`
  color: #fff;
  margin: 0.2rem 0;
  height: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `}
`;
