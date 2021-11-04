import styled, { css } from "styled-components";

import { Theme, Styles, COLORS } from "constants/index";

import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";

import { AiOutlinePlus } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const { yellow, bigStone, alto } = COLORS;

export const Container = styled.div`
  height: 100%;
  width: 76.6%;
  ${Styles.CBC};
`;

export const Header = styled.div`
  padding: 1.75rem 1.5rem 0;
  width: 100%;
  ${Styles.RBC};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 1);
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `};
`;

export const Img = styled.img`
  width: 1.8rem;
  font-size: 0.81rem;
  height: 1.8rem;
  margin-left: 0.18rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
      }
    `};
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  align-self: center;
  border: 1px solid #fff;
`;

export const ShiftUpwards = css`
  position: relative;
  bottom: 0.6rem;
`;

export const Label = styled.p`
  font-weight: 600;
  padding: 0px;
  line-height: 0;
  font-size: 1.08rem;
  margin-left: 0.63rem;
  margin-right: 0.63rem;
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
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  ${({ up }) =>
    up === 1 &&
    css`
      position: relative;
      bottom: 0.5rem;
    `};
`;

export const Option = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.1rem;
  margin-right: 0.1rem;
  ${Styles.RBC};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      background: #fff;
      &:hover {
        background: ${yellow};
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
      border: 1px solid #797979;
      &:hover {
        background: #292929;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      background: #fff;
      color: #000;
      border: 1px solid #d1d1d1;
      &:hover {
        background: #eee;
      }
    `};
  ${Styles.RBC};
  cursor: pointer;
`;

const iconStyle = css`
  width: 1.8rem;
  font-size: 0.81rem;
`;

export const VideoIcon = styled(FaVideo)`
  ${iconStyle};
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  ${iconStyle};
`;

export const VideoOutlinedIcon = styled(FiVideo)`
  ${iconStyle};
  font-size: 0.9rem;
`;

export const PhoneOutlinedIcon = styled(IoCallOutline)`
  ${iconStyle};
  font-size: 0.9rem;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  color: #fff;
  margin-left: 0.2rem;
  position: relative;
  bottom: 0.45rem;
  font-size: 1.2rem;
  border-radius: 0.1rem;
  padding: 0.1rem;
  cursor: pointer;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: ${yellow};
        color: #000;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      &:hover {
        color: ${bigStone};
      }
    `};
`;
