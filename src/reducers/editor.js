import { createReducer } from "redux-starter-kit";
import {
  changeTab,
  convertHljs,
  setMarkup,
  toggleShowSettings
} from "../actions";
import { Tabs } from "../constants";

const defaultText = `# Заголовок

- Список
  1. Вложенный список

      \`\`\`html
      <div>Вложенная вёрстка</div>
      \`\`\`

      \`\`\`js
      // Вложенный JS
      const sum = (a, b) => {
        return a + b;
      }
      \`\`\`
  2. Второй элемент

###big-trip

Выше - разделитель для заданий. Итоговый код прогоняется через типограф, поэтому пробелы и тире в тексте правильные. Также готовый HTML код прогоняется через бьютифаер, чтобы не было каши.
`;

const editorReducer = createReducer(
  {
    text: "",
    rawText: "",
    defaultText,
    currentTab: Tabs.code,
    showSettings: false,
    convertHljs: false
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
      state.convertHljs = !state.convertHljs;
    },
    SAVE_RAW_TEXT: (state, action) => {
      state.rawText = action.payload;
    }
  }
);

export default editorReducer;
