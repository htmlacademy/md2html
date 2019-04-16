import { createReducer } from "redux-starter-kit";
import {
  addHeaderId,
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
      levelHeader: 3,
      addHeaderId: false
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
    [addHeaderId]: state => {
      state.settings.addHeaderId = !state.settings.addHeaderId;
    },
    SAVE_RAW_TEXT: (state, action) => {
      state.rawText = action.payload;
    }
  }
);

export default editorReducer;
