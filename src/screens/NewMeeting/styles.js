import styled, { css } from "styled-components";

import { Styles, COLORS, Theme } from "constants/index";
import { Switch, Tooltip } from "antd";

const { blue, bigStone } = COLORS;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 3rem);
  position: relative;
`;

export const Label = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #fff;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #c4c4c4;
    `};
`;

export const Input = styled.input`
  ${Styles.HideBorder};
  border-radius: 0.2rem;
  padding: 0 0.7rem !important;
  line-height: normal;
  margin: 0.5rem auto 0;
  width: 428px;
  font-size: 1.4rem;
  height: 36px;
  font-weight: 500;
  text-align: center;
  background: transparent;
  color: #fff;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      border: 1px solid #fff !important;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      background: rgba(32, 31, 31, 0.32);
      &:focus {
        border-bottom: 2px solid #c6c9ff !important;
      }
    `};
`;

export const VideoContainer = styled.div`
  width: 570px;
  height: 320px;
  border: 2px solid #fff;
  margin: 3.6rem auto 4rem;
`;

export const Tag = styled.p`
  font-size: 0.72rem;
  font-weight: 500;
  text-align: center;

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

export const Button = styled.div`
  border: 1px solid #fff;
  width: fit-content;
  padding: 0.4rem 2rem;
  cursor: pointer;
  color: #fff;
  margin: 2rem auto;
  border-radius: 0.2rem;

  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      &:hover {
        background: yellow;
        color: #000;
      }
    `};

  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      &:hover {
        background: #323131;
      }
    `};
`;

export const ProfileImg = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin: 4rem auto 0;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1.5rem 1.8rem;
  ${Styles.RBC};
  flex-direction: row-reverse;
`;

export const FooterCont = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const FooterOption = styled.div`
  padding: 0.3rem 2rem;
  cursor: default;
  font-size: 0.81rem;
  font-weight: 300;
  display: flex;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #3ff23f;
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #585757;
    `};
  align-items: center;
  ${({ first }) =>
    first === 1 &&
    css`
      ${({ theme: { current } }) =>
        current === Theme.highContrast &&
        css`
          border-right: 1px solid #fff;
          color: #fff;
        `};
      ${({ theme: { current } }) =>
        current === Theme.dark &&
        css`
          border-right: 1px solid #585757;
          color: #c4c4c4;
          &:hover {
            color: ${bigStone};
          }
        `};
      cursor: pointer;
    `};
`;

export const Footer = styled.div`
  justify-self: end;
  position: absolute;
  bottom: 0px;
`;

export const OptionsLabel = styled.p`
  color: #fff;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 60%;
`;

export const SettingsCont = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  font-size: 0.7rem;
  height: 2rem;
  font-weight: 300;
  padding: 0 0.2rem;
  ${({ checked }) =>
    checked === 1 &&
    css`
      .ant-switch-checked {
        background-color: ${blue} !important;
      }
      .ant-switch-handle::before {
        background: #000;
      }
    `};
  ${({ checked }) =>
    checked !== 1 &&
    css`
      .ant-switch-checked {
        background-color: #000 !important;
      }
      .ant-switch-handle::before {
        background-color: #000 !important;
        border: 1px solid #fff !important;
      }
      .ant-switch {
        border: 1px solid #fff !important;
        background-color: #000 !important;
      }
    `};

  &:hover {
    background: yellow;
    color: #000;
  }
`;

export const SettingsImg = styled.img`
  width: 2rem;
`;

export const SettingsLabel = styled.p``;

export const StyledSwitch = styled(Switch)`
  height: 24px;
`;

export const StyledTooltip = styled(Tooltip)``;
