import { createReducer } from "redux-starter-kit";
import { changeTab, changeText } from "../actions";
import { Tabs } from "../constants";

const editorReducer = createReducer(
  {
    text: "",
    defaultText: "# Тестовый заголовок",
    currentTab: Tabs.code
  },
  {
    [changeText]: (state, action) => {
      state.text = action.payload;
      return state;
    },
    [changeTab]: (state, action) => {
      state.currentTab = action.payload;
    }
  }
);

export default editorReducer;
