import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import loginReduder from "./loginReduder";
import registerReducer from "./registerReducer";

const rootReducers = combineReducers({
  login: loginReduder,
  home: homeReducer,
  register: registerReducer
});

export default rootReducers;
