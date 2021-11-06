import { SET_THEME, SET_LAYOUT } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme") ?? "dark",
  layout: localStorage.getItem("layout") ?? "grid",
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case SET_LAYOUT: {
      return {
        ...state,
        layout: action.payload,
      };
    }
    default:
      return state;
  }
}
