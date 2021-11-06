import styled, { css } from "styled-components";

import { Theme, COLORS, Styles } from "constants/index";

import { BsFilter } from "react-icons/bs";

const { dustyGray } = COLORS;

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
  padding: 0 1rem;
  height: 3.6rem;
  border-bottom: 1px solid #000;
  ${Styles.RBC};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `};
`;

export const Title = styled.p`
  font-size: 1.08rem;
  font-weight: 500;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: yellow;
    `};
`;

export const StyledFilterIcon = styled(BsFilter)`
  cursor: pointer;
  width: 1.5rem;
  ${Styles.RBC};
  padding: 0.2rem;
  height: 1.5rem;
  border-radius: 0.2rem;
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #d1d1d1;
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
      &:hover {
        color: #000;
        background: yellow;
      }
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.27rem;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      ${({ chat }) =>
        chat === 1 &&
        css`
          border: 1.8px solid #fff;
          padding: 0.1rem 0.4rem;
          position: relative;
          left: -0.4rem;
          padding-right: 0.1rem;
        `};
    `};
`;

export const Label = styled.p`
  color: #8d8d8d;
  font-size: 0.6rem;
  margin: 1rem 0;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 0 1rem;
  height: calc(100% - 7.2rem);
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6.3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 9px;
  }

  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
        cursor: pointer;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      ::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #fff;
        cursor: pointer;
      }
    `};
`;

export const Footer = styled.div`
  width: calc(100% - 2rem);
  height: 3.6rem;
  margin: auto 1rem;
  border-top: 1px solid #000;
  ${Styles.RBC};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `};
`;

export const FooterLabel = styled.p`
  color: #8d8d8d;
  font-size: 0.81rem;
  margin-left: 0.1rem;
`;

export const Img = styled.img`
  width: 2rem;
`;

export const FooterCont = styled.div`
  display: flex;
  align-items: center;
`;
