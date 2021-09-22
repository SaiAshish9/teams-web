import styled, { css } from "styled-components";

import { Modal } from "antd";

import { Theme, COLORS, Styles } from "constants/index";

import { IoCloseOutline } from "react-icons/io5";

const { mineShaft, white, silverChalice1, bigStone } = COLORS;

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
  top: 0px;
  padding: 0;
  overflow: hidden;
  height: 100vh;
  width: 100% !important;
`;

export const Container = styled.div`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? mineShaft : white};
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
  width: 27%;
  height: 100%;
`;

export const ListItem = styled.div`
  height: 2.2rem;
  width: 100%;
  border-radius: 0.27rem;
  color: #fff;
  font-size: 0.8rem;
  padding-left: 0.4rem;
  ${Styles.RBC};
  cursor: pointer;
  font-weight: 300;
  &:hover {
    background: #484644;
  }
  ${({ selected }) =>
    selected === 1 &&
    css`
      background: #484644;
    `}
`;
