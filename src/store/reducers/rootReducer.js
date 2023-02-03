import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
const rootReducer = combineReducers({
  authRoot: authReducer,
  gameRoot: gameReducer
});

export default rootReducer;
