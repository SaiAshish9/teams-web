import styled, { css } from "styled-components";

import { COLORS } from "constants/index";

const { white, bigStone, dustyGray, gallery, boulder, gallery1, alto } = COLORS;

export const Container = styled.div`
  height: calc(100% - 3rem);
  width: 4rem;
  background: ${gallery};
  box-shadow: 0 0 3px ${dustyGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  height: 2rem;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0;
  padding-left: 1px;
  cursor: pointer;
  color: ${({ selected }) => (selected === 1 ? bigStone : boulder)};
  &:hover {
    background: ${white};
    color: ${bigStone};
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  ${({ selected, last }) =>
    selected === 1 &&
    last !== 1 &&
    css`
      border-left: 0.15rem solid ${bigStone};
    `}
`;

export const ListItemLabel = styled.p`
  font-size: 0.6rem;
  color: ${({ selected }) => (selected === 1 ? bigStone : boulder)};
`;

export const FirstItemsContent = styled.div``;

export const SecondItemsContent = styled.div`
  width: 100%;
`;

export const DownloadIconContainer = styled.div`
  margin: 0.4rem 0.2rem;
  width: calc(100% - 0.4rem);
  border-radius: 0.4rem;
  border: 0.1rem solid ${alto};
  height: 2.4rem;
  background: ${gallery1};
  cursor: pointer;
  &:hover {
    background: ${white};
  }
`;
