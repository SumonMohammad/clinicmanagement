import {createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import { patientsReducer, patientDetailsReducers } from "./reducers/patientReucer";

const reducer = combineReducers({
    patients:patientsReducer,
    patientDetails:patientDetailsReducers

})

let initialState ={};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;