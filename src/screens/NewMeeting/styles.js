import styled, { css } from "styled-components";

import { Styles } from "constants/index";

export const Container = styled.div`
  width: 100%;
  background: #000;
  ${Styles.CCC};
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
  margin-top: 0.5rem;
  width: 428px;
  font-size: 1.6rem;
  height: 39px;
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
  //   min-width: 9.6rem;
  width: fit-content;
  padding: 0.4rem 2rem;
  cursor: pointer;
  color: #fff;
  margin: 2rem auto;
  &:hover {
    background: yellow;
    color: #000;
  }
`;
