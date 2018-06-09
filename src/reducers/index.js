import {combineReducers} from "redux";
import * as common from "./common";

const reducers = Object.assign(
    common
);

export default combineReducers({
  ...reducers
});