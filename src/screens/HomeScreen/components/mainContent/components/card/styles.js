import styled, { css } from "styled-components";

import { COLORS, Theme } from "constants/index";

const { ebb, mineShaft3, mineShaft2, gray } = COLORS;

export const Container = styled.div`
  height: 15rem;
  width: calc(20% - 1rem);
  background: #fff;
  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 0.4rem -0.075rem rgb(0 0 0 / 10%);
  border-radius: 0.2rem;
  color: #252423;
  cursor: pointer;
  &:hover {
    background: ${ebb};
  }
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      border: 0.1px solid ${gray};
      background: ${mineShaft2};
      &:hover {
        background: ${mineShaft3};
      }
    `}
`;
