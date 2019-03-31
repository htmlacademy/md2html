import { configureStore } from "redux-starter-kit";
import editorReducer from "./reducers/editor";

const store = configureStore({
  reducer: editorReducer
});

export default store;
