import { createAction } from "redux-starter-kit";
import mdConverter from "../utils/mdConverter";
import { CONVERT_HLJS } from "../constants";

export const setMarkup = createAction("CHANGE_TEXT");
export const changeTab = createAction("CHANGE_TAB");
export const toggleShowSettings = createAction("TOGGLE_SHOW_SETTINGS");
export const convertHljs = createAction("CONVERT_HLJS");

export const changeSettings = name => (dispatch, getState) => {
  switch (name) {
    case CONVERT_HLJS:
      dispatch(convertHljs());
      break;
    default:
      break;
  }

  const { rawText } = getState();

  dispatch(changeText(rawText));
};

export const changeText = text => (dispatch, getState) => {
  const { convertHljs } = getState();
  const settings = {
    convertHljs
  };
  dispatch({ type: "SAVE_RAW_TEXT", payload: text });
  dispatch(setMarkup(mdConverter(text, settings)));
};
