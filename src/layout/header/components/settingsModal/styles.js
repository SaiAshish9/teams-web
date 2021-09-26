import styled, { css } from "styled-components";

import { Modal } from "antd";

import { Theme, COLORS, Styles } from "constants/index";

import { IoCloseOutline } from "react-icons/io5";

const { mineShaft, white, silverChalice1, bigStone, eastBay } = COLORS;

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    height: 100vh;
    margin: 0 auto !important;
    width: 100%;
    padding: 0px;
  }
  .ant-modal-content {
    margin: auto;
    width: 54vw;
    padding: 0px;
  }
  .ant-modal-mask {
    background-color: rgba(37, 36, 35, 0.75) !important;
  }
  top: 0px;
  padding: 0;
  overflow: hidden;
  height: 100vh;
  width: 100% !important;
`;

export const Container = styled.div`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? "#292929" : white};
  height: 100%;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CloseIcon = styled(IoCloseOutline)`
  align-self: flex-end;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  color: ${silverChalice1};
  &:hover {
    color: ${bigStone};0
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  color: #d7d7d7;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
    `}
`;

export const Header = styled.div`
  ${Styles.RBC}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.5rem 0;
  overflow: hidden;
  ${Styles.RBC};
`;

export const SideBar = styled.div`
  width: 32%;
  height: 100%;
`;

export const ListItem = styled.div`
  height: 2.3rem;
  width: 100%;
  border-radius: 0.27rem;
  color: ${({ theme: { current } }) =>
    current === Theme.dark ? "#fff" : "#252423"};
  font-size: 0.8rem;
  padding-left: 0.4rem;
  ${Styles.RBC};
  justify-content: flex-start;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    background: #484644;
  }
  ${({ selected }) =>
    selected === 1 &&
    css`
      background: ${({ theme: { current } }) =>
        current === Theme.dark ? "#484644" : "#edebe9"};
    `}
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      &:hover {
        background: #edebe9;
      }
    `}
`;

export const Img = styled.img`
  margin-right: 0.2rem;
  width: 2rem;
  height: 2rem;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
    `}
`;

export const MainContent = styled.div`
  width: 80%;
  height: 100%;
  padding: 0.7rem 1.5rem;
`;

export const Row = styled.div`
  ${Styles.RBC};
  margin-bottom: 1rem;
`;

export const ThemeImg = styled.img``;

export const ThemeImgContainer = styled.div`
  width: 31%;
  cursor: pointer;
  border-bottom: solid 0.2rem transparent;
  &:hover {
    background-color: #1f1f1f !important;
    border-bottom: solid 0.2rem #9ea2ff;
    border-radius: 0 0 0.2rem 0.2rem;
  }
  ${({ selected }) =>
    selected === 1 &&
    css`
      background-color: #1f1f1f !important;
      border-bottom: solid 0.2rem #9ea2ff;
      border-radius: 0 0 0.2rem 0.2rem;
    `}
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      &:hover {
        background-color: #f0f0f0 !important;
        border-bottom: solid 0.2rem #6264a7;
      }
      ${({ selected }) =>
        selected === 1 &&
        css`
          background-color: #f0f0f0 !important;
          border-bottom: solid 0.2rem #6264a7;
        `}
    `}
`;

export const ThemeImgLabel = styled.p`
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 0.1rem 0.1rem;
  font-weight: 300;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
    `}
`;

export const Desc = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 0.7rem;
  opacity: 0.8;
  margin-bottom: 0.7rem;
`;
