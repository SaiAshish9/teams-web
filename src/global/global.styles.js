import { createGlobalStyle, css } from "styled-components";
import { Theme } from "constants/index";

const GlobalStyles = createGlobalStyle`
  .ant-drawer-mask {
    background-color: transparent !important;
  };
   
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      .ant-tooltip-inner {
        background-color: yellow !important;
        color: #000;
        font-size: 0.8rem;
        font-weight: 300;
      }
      .ant-tooltip-arrow-content {
        background-color: yellow !important;
      }
    `};

    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        .ant-tooltip-inner {
          background-color: #f4f4fc !important;
          color: #000;
          font-size: 0.8rem;
          font-weight: 300;
        }
        .ant-tooltip-arrow-content {
          background-color: #f4f4fc !important;
        }
      `};

`;

export default GlobalStyles;
