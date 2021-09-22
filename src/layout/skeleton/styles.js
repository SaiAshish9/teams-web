import styled from "styled-components";
import { Styles } from "constants/index";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${Styles.CCC};
  position: absolute;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 12rem;
  margin: 0;
`;

export const Image1 = styled.img`
  width: 7rem;
  position: relative;
  bottom: 1.2rem;
`;
