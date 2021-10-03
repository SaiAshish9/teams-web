import styled from "styled-components";
import { Styles } from "constants/index";

export const Container = styled.div`
  padding-top: 1.4rem;
  overflow-y: scroll;
  height: 90%;
  padding-bottom: 3rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Label = styled.p`
  font-size: 0.72rem;
  font-weight: 300;
  margin-bottom: 0.7rem;
`;

export const Content = styled.p`
  ${Styles.RBC};
  flex-wrap: wrap;
`;
