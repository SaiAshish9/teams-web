import { SET_THEME } from "./types";

export default function useActions(state, dispatch) {
  const setTheme = (theme) => dispatch({ type: SET_THEME, payload: theme });

  return {
    setTheme,
  };
}
