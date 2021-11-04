import styled, { css } from "styled-components";

import { Styles, Theme, COLORS } from "constants/index";
import { AiOutlineSearch } from "react-icons/ai";

const { yellow } = COLORS;

export const Container = styled.div`
  width: 420px;
  height: 480px;
  background: #000;
  border: 1px solid #fff;
  borderradius: 0.2rem;
  position: absolute;
  bottom: 2.8rem;
  left: -14%;
  z-index: 12;
  padding: 1rem;
  padding-bottom: 0px;
`;

export const Label = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 0.81rem;
  font-weight: 400;
`;

export const InputContainer = styled.input``;

export const EmojiIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0.6rem;
  height: 74%;
  margin-top: 0.6rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6.3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 9px;
  }

  ${({ theme: { current } }) =>
    current === Theme.light &&
    css`
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
        cursor: pointer;
      }
    `};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      ::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #fff;
        cursor: pointer;
      }
    `};
`;

export const EmojiIcon = styled.div`
  border: 1px solid transparent;
  padding: 0.4rem;
  color: #fff;
  width: fit-content;
  border-radius: 0.1rem;
  ${Styles.RBC};
  cursor: pointer;
`;

export const EmojiIconImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const InputCont = styled.input`
  border-radius: 0.2rem;
  ${Styles.HideBorder};
  background: transparent;
  width: 100%;
  border: 1px solid #fff !important;
  padding: 0.2rem 0.6rem;
  color: #fff;
  height: 100%;
  &::placeholder {
    color: #999;
    font-size: 0.8rem;
    font-weight: 300;
  }
  &:focus {
    border-bottom: 2px solid ${yellow} !important;
  }
`;

export const ParentInputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 2rem;
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  right: 0.6rem;
  top: 0.4rem;
  font-size: 1.2rem;
  color: #fff;
`;

export const RedCont = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    border: 1px solid yellow;
  }
`;

export const Row = styled.div`
  ${Styles.RBC};
  position: absolute;
  bottom: 0px;
`;
