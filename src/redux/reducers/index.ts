import { combineReducers } from "redux";
import apiCoreReducer from "./apiCoreReducer";
import stepReducer from "./stepReducer";

const reducer = combineReducers({
  apiCoreReducer,
  stepReducer,
});

export default reducer;
