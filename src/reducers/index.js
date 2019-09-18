import { combineReducers } from "redux";
import apiData from "./api.js";
import symbols from "./symbols.js";

export default combineReducers({
  apiData,
  symbols
});
