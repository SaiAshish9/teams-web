import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 3rem);
  width: 4rem;
  background: #ebebeb;
  box-shadow: 0 0 3px #999;
`;

export const Img = styled.img`
  width: 54%;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0;
  &:hover {
    background: #fff;
  }
`;

export const ListItemLabel = styled.p`
  font-size: 0.6rem;
  color: #797979;
`;
