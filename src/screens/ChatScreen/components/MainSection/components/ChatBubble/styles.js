import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #19192a;
  width: fit-content;
  align-self: flex-end;
`;

export const Parent = styled.div`
  position: relative;
  z-index: 1;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 0.63rem;
  white-space: nowrap;
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 0.63rem;
  white-space: nowrap;
  margin-top: 0.1rem;
`;

export const Img = styled.img`
  width: 7rem;
  margin: auto;
  margin-top: 0.5rem;
`;

export const Image = styled.div`
  position: absolute;
  left: 104%;
  bottom: 0.04rem;
  z-index: 10;
`;
