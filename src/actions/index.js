import { createAction } from "redux-starter-kit";
import mdConverter from "../utils/mdConverter";

export const setMarkup = createAction("CHANGE_TEXT");
export const changeTab = createAction("CHANGE_TAB");

export const changeText = text => dispatch =>
  dispatch(setMarkup(mdConverter(text)));
