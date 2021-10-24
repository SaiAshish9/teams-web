import styled, { css } from "styled-components";
import { Drawer } from "antd";
import { Theme, Styles, COLORS } from "constants/index";

const {
  melrose,
  alto1,
  gray,
  mineShaft3,
  ebb,
  yellow,
  bigStone,
  silverChalice3,
} = COLORS;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        background: #292929;
        box-shadow: 1.6rem 0 1.8rem -0.4rem rgb(0 0 0 / 25%);
      `};
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        background: #000;
        box-shadow: 1.6rem 0 1.8rem -0.4rem rgb(0 0 0 / 10%);
        border-right: 0.1rem solid #fff;
      `};

    ${({ theme: { current } }) =>
      current === Theme.light &&
      css`
        box-shadow: 1.6rem 0 1.8rem -0.4rem rgb(0 0 0 / 10%);
      `};

    padding: 12px 1.2rem;
    overflow: hidden;
  }
  .ant-drawer-content {
    overflow: hidden;
  }
  .ant-drawer-content-wrapper {
    width: 21rem !important;
    overflow: hidden;
  }
`;

export const HeaderImgContainer = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  padding: 0.4rem;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      &:hover {
        background: ${mineShaft3};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      &:hover {
        background: ${ebb};
      }
    `}
`;

export const Img = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;

export const HeadingLabel = styled.p`
  font-size: 0.8rem;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: ${yellow};
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: ${bigStone};
    `};
`;

export const Header = styled.div`
  ${Styles.RBC};
  width: 18rem !important;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${melrose};
      cursor: pointer;
    `};
`;

export const ArrowRightImg = styled.img`
  width: 2rem;
`;

export const ArrowRightImgContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  width: 100%;
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: ${alto1};
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      color: #000;
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
    `};
`;

export const AppsLabel = styled.p`
  padding: 0.5rem 0.8rem 0.5rem;
  font-size: 1rem;
`;

export const AppsContent = styled.div`
  width: 100%;
  ${Styles.RBC};
  flex-wrap: wrap;
`;

export const AppsItem = styled.div`
  padding: 0.7rem 1rem;
  width: 50%;
  text-align: center;
  cursor: pointer;
  ${Styles.RBC};
  justify-content: flex-start;
  border: 0.1px solid transparent;
  &:hover {
    border: 0.1px solid ${gray};
  }
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        border: none;
        background: #fff;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: ${yellow};
      &:hover {
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      border: 2.7px solid #fff;
      &:hover {
        box-shadow: none;
        border: 2.7px solid #eee;
      }
    `};
  ${({ theme: { current }, color }) =>
    current === Theme.light &&
    css`
      &:hover {
        color: ${color};
      }
    `};
`;

export const AppsItemImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const AppsItemLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  padding-left: 0.7rem;
`;
