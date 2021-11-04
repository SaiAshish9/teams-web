import styled, { css } from "styled-components";

import { Theme } from "constants/index";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  padding-top: 0.9rem;
  position: relative;
  z-index: 1;
  padding-left: 15% !important;
  padding-right: 15%;

  display: flex;
  flex-direction: column;

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

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-self: flex-end;
`;
