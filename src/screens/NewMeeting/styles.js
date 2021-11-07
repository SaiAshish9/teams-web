import styled, { css } from "styled-components";

import { Styles } from "constants/index";

export const Container = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 3rem);
`;

export const Label = styled.p`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
`;

export const Input = styled.input`
  ${Styles.HideBorder};
  border: 1px solid #fff !important;
  border-radius: 0.2rem;
  padding: 0 0.7rem !important;
  line-height: normal;
  background: #000;
  margin: 0.5rem auto 0;
  width: 428px;
  font-size: 1.4rem;
  height: 36px;
  color: #fff;
  text-align: center;
`;

export const VideoContainer = styled.div`
  width: 570px;
  height: 320px;
  border: 2px solid #fff;
  margin: 3.6rem auto 4rem;
`;

export const Tag = styled.p`
  color: #fff;
  font-size: 0.72rem;
  font-weight: 500;
  text-align: center;
`;

export const Button = styled.div`
  border: 1px solid #fff;
  width: fit-content;
  padding: 0.4rem 2rem;
  cursor: pointer;
  color: #fff;
  margin: 2rem auto;
  border-radius: 0.2rem;
  &:hover {
    background: yellow;
    color: #000;
  }
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
  color: #3ff23f;
  cursor: default;
  font-size: 0.81rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  ${({ first }) =>
    first === 1 &&
    css`
      border-right: 1px solid #fff;
      color: #fff;
      cursor: pointer;
    `};
`;

export const Footer = styled.div``;
