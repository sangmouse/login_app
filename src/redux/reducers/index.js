import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import loginReduder from "./loginReduder";

const rootReducers = combineReducers({
  login: loginReduder,
  home: homeReducer,
});

export default rootReducers;
