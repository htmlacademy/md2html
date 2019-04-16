import { createAction } from "redux-starter-kit";
import mdConverter from "../utils/mdConverter";
import { ADD_HEADER_ID, CONVERT_HLJS, HEADER_LEVEL } from "../constants";

export const setMarkup = createAction("CHANGE_TEXT");
export const changeTab = createAction("CHANGE_TAB");
export const toggleShowSettings = createAction("TOGGLE_SHOW_SETTINGS");
export const changeLevelTitle = createAction("CHANGE_LEVEL_TITLE");
export const convertHljs = createAction(CONVERT_HLJS);
export const addHeaderId = createAction(ADD_HEADER_ID);

export const changeSettings = ({ name, value }) => (dispatch, getState) => {
  switch (name) {
    case CONVERT_HLJS:
      dispatch(convertHljs());
      break;
    case HEADER_LEVEL:
      dispatch(changeLevelTitle(value));
      break;
    case ADD_HEADER_ID:
      dispatch(addHeaderId());
      break;
    default:
      break;
  }

  const { rawText } = getState();

  dispatch(changeText(rawText));
};

export const changeText = text => (dispatch, getState) => {
  const { settings } = getState();

  dispatch({ type: "SAVE_RAW_TEXT", payload: text });
  dispatch(setMarkup(mdConverter(text, settings)));
};
