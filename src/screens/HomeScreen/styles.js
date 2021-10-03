import styled from "styled-components";

import { Styles, Theme } from "constants/index";

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current === Theme.light ? "#000" : "#fff"};
  font-weight: 600;
  font-size: 18px;
`;

export const Content = styled.div`
  ${Styles.RBC};
`;
