import styled, { css } from "styled-components";

import { Styles, COLORS } from "constants/index";

const { yellow } = COLORS;

export const Container = styled.div`
  width: 70%;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.4rem;
  background: transparent;
  ${Styles.HideBorder};
  border: 1px solid #fff !important;
  border-radius: 0.2rem;
  padding: 0.5rem 0.8rem;
  color: #fff;
  &::placeholder {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 300;
  }
  &:focus {
    border-bottom: 2px solid ${yellow} !important;
  }
`;

export const EmojiCont = styled.div`
  width: 100%;
  height: 2.4rem;
  ${Styles.RBC};
`;

export const Image = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  ${Styles.RBC};
  margin-right: ${({ last }) => (last !== 1 ? "0.2rem" : "0rem")};
  border-radius: 0.2rem;
  &:hover {
    background: yellow;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
