import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import appReducer from "./appReducer";

const reducers = {
    appReducer,
    formReducer
}

export default combineReducers(reducers);
