import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import appReducer from "./appReducer";

const reducers = {
    appReducer,
    form: formReducer
};

export default combineReducers(reducers);
