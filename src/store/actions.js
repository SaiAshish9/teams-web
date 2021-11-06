import { SET_LAYOUT, SET_THEME } from "./types";

export default function useActions(state, dispatch) {
  const setTheme = (theme) => dispatch({ type: SET_THEME, payload: theme });

  const setLayout = (layout) => dispatch({ type: SET_LAYOUT, payload: layout });

  return {
    setTheme,
    setLayout,
  };
}
