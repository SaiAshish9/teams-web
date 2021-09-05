import styled from "styled-components";

import { COLORS } from "constants/index";

const { eastBay, scampi } = COLORS;

export const ParentContainer = styled.div``;

export const Container = styled.div`
  width: 2rem;
  margin-right: 1rem;
  cursor: pointer;
  height: 100%;
  position: relative;
  &:hover {
    background-color: ${scampi};
  }
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
