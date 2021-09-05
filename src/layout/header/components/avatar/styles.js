import styled from "styled-components";

import { COLORS } from "constants/index";

const { eastBay } = COLORS;

export const Container = styled.div`
  justify-content: flex-end;
  width: 2rem;
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
`;

export const Img = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

export const CheckmarkContainer = styled.div`
  position: absolute;
  padding: 2px;
  bottom: -2px;
  right: -2px;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: ${eastBay};
`;

export const StyledCheckmarkImg = styled.img`
  width: 100%;
  height: 100%;
`;
