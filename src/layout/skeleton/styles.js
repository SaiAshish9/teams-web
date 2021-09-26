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
  width: 11rem;
  margin: 0;
`;

export const Image1 = styled.img`
  width: 6rem;
  position: relative;
  bottom: 1.2rem;
  left: 0.2rem;
`;
