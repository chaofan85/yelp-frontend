import { combineReducers } from "redux";
import restaurantsReducer from "./restaurantsReducer";
import locationReducer from "./locationReducer";
// import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  location: locationReducer
});

export default rootReducer;
//
