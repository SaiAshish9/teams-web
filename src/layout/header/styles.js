import styled from "styled-components";

import { COLORS } from "constants/index";

const { eastBay, scampi } = COLORS;

export const Container = styled.div`
  height: 3rem;
  background: ${eastBay};
  display: flex;
`;

export const Img = styled.img`
  height: 1.7rem;
  width: 1.8rem;
  margin: 0;
  position: relative;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4rem;
  cursor: pointer;

  &:hover {
    background-color: ${scampi};
  }
`;
