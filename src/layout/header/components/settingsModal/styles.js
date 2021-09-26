import styled, { css } from "styled-components";

import { Modal, Checkbox } from "antd";

import { Theme, COLORS, Styles } from "constants/index";

import { IoCloseOutline } from "react-icons/io5";

const { mineShaft, white, silverChalice1, bigStone, eastBay } = COLORS;

export const StyledCheckbox = styled(Checkbox)`
  ${Styles.HideBorder};
  border: none !important;
  background: transparent;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #7e81b7 !important;
    border-color: #7e81b7 !important;
    box-shadow: none !important;
    outline: none !important;
    background: transparent;
  }
  box-shadow: none !important;
  .ant-checkbox {
    border-color: #7e81b7 !important;
    box-shadow: none;
  }
  .ant-checkbox-inner {
    border: 1px solid rgba(255, 255, 255, 0.7);
    outline: none;
    box-shadow: none;
    background: transparent;
    box-shadow: none !important;
    outline: none !important;
    ${({ theme: { current } }) =>
      current == Theme.light &&
      css`
        border: 1px solid #7e81b7;
      `}
  }
`;

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
  ${({ theme: { current } }) =>
    current == Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
      border-radius: 5px;
    `}
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
  ${({ theme: { current } }) =>
    current == Theme.highContrast &&
    css`
      color: #fff;
    `}
  ${({ selected }) =>
    selected === 1 &&
    css`
      background: ${({ theme: { current } }) =>
        current === Theme.dark ? "#484644" : "#edebe9"};
      ${({ theme: { current } }) =>
        current == Theme.highContrast &&
        css`
          background: #18ebff;
          color: #000;
        `}
    `}
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      &:hover {
        background: #edebe9;
      }
    `}
    ${({ theme: { current } }) =>
    current == Theme.highContrast &&
    css`
      &:hover {
        background: #18ebff;
        color: #000;
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
  padding: 0.2rem 1.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Row = styled.div`
  ${Styles.RBC};
  margin-bottom: 1rem;
  ${({ start }) =>
    start === 1 &&
    css`
      justify-content: flex-start;
    `}
`;

export const ThemeImg = styled.img``;

export const ThemeImgContainer = styled.div`
  width: 31%;
  margin-right: 1rem;
  cursor: pointer;
  border-bottom: solid 0.2rem transparent;
  padding: 0.4rem;
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
    ${({ theme: { current } }) =>
    current == Theme.highContrast &&
    css`
      &:hover {
        background-color: #ffff00 !important;
        border-bottom: solid 0.2rem #ffff00;
      }
      ${({ selected }) =>
        selected === 1 &&
        css`
          background-color: #000 !important;
          border-bottom: solid 0.2rem #ffff00;
        `}
    `}
`;

export const ThemeImgLabel = styled.p`
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 0rem 0.1rem;
  font-weight: 300;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
    `}
  ${({ theme: { current } }) =>
    current == Theme.highContrast &&
    css`
      &:hover {
        color: #000;
      }
    `}
`;

export const Desc = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 0.7rem;
  opacity: 0.8;
  margin-bottom: 0.7rem;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
    `}
  ${({ check }) =>
    check === 1 &&
    css`
      margin-bottom: 0rem;
      margin-left: 0.4rem;
    `}
`;

export const InputLabel = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 0.68rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
    `}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

export const InputContainer = styled.div`
  border-radius: 0.4rem;
  height: 2.1rem;
  background: #1f1f1f;
  width: 60%;
  padding: 0.2rem;
  color: #fff;
  margin-bottom: 0.7rem;
  ${Styles.RBC};
  padding: 0 0.5rem;
  font-size: 0.8rem;
  font-weight: 300;
  ${({ theme: { current } }) =>
    current == Theme.light &&
    css`
      color: #000;
      background: #edebe9;
    `}
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #000;
      border: 1px solid #fff;
    `}
`;

export const InputImg = styled.img`
  width: 2rem;
  position: relative;
  left: 0.5rem;
  opacity: 0.8;
`;
