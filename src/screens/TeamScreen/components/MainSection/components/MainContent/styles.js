import styled from "styled-components";

import { COLORS } from "constants/index";

const { white } = COLORS;

export const Container = styled.div`
  width: 100%;
  height: 72vh;
  margin-top: 0rem;
  padding-top: 2rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainComponent = styled.div`
  height: 90vh;
`;

export const Title = styled.p`
  color: ${white};
  text-align: center;
  margin-top: 3.6rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Description = styled.p`
  color: ${white};
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const Img = styled.img`
  width: 231px;
  margin: 2rem auto 3rem;
`;

export const Item = styled.div`
  border: 1px solid #fff;
  padding: 0.7rem 0.7rem;
  width: 86%;
  border-bottom-right-radius: 0.27rem;
  border-bottom-left-radius: 0.27rem;
`;

export const ItemContainer = styled.div`
  display: flex;
`;

export const ProfileImgContainer = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 0.9rem;
  position: relative;
  top: 0.5rem;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ItemTitle = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 0.75rem;
`;
