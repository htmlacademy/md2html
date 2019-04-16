import { createReducer } from "redux-starter-kit";
import {
  changeLevelTitle,
  changeTab,
  convertHljs,
  setMarkup,
  toggleShowSettings
} from "../actions";
import { defaultText, Tabs } from "../constants";

const editorReducer = createReducer(
  {
    text: "",
    rawText: "",
    defaultText,
    currentTab: Tabs.code,
    showSettings: false,
    settings: {
      convertHljs: false,
      levelHeader: 3
    }
  },
  {
    [setMarkup]: (state, action) => {
      state.text = action.payload;
      return state;
    },
    [changeTab]: (state, action) => {
      state.currentTab = action.payload;
    },
    [toggleShowSettings]: state => {
      state.showSettings = !state.showSettings;
    },
    [convertHljs]: state => {
      state.settings.convertHljs = !state.settings.convertHljs;
    },
    [changeLevelTitle]: (state, action) => {
      state.settings.levelHeader = action.payload;
    },
    SAVE_RAW_TEXT: (state, action) => {
      state.rawText = action.payload;
    }
  }
);

export default editorReducer;
