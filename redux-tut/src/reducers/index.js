import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default rootReducers;
