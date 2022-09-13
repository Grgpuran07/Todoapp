import { combineReducers } from "redux";
import { addDeletereducer } from "./addDeletereducer";

export const rootReducer = combineReducers({
  datas: addDeletereducer,
});
