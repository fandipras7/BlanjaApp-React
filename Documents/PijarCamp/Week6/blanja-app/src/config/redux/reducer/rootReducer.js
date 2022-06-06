import { combineReducers } from "redux";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  search: searchReducer,
});

export default rootReducer;
