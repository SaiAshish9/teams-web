import styled, { css } from "styled-components";
import { Drawer } from "antd";
import { Theme } from "constants/index";

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        background: #292929;
        box-shadow: 1.6rem 0 1.8rem -0.4rem rgb(0 0 0 / 25%);
      `};
    padding: 12px 24px;
  }
  .ant-drawer-content {
    overflow: hidden;
  }
  .ant-drawer-content-wrapper {
    width: 21rem !important;
  }
`;
