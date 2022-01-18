

import {createStore, combineReducers} from "redux";


import {reducer as authReducer}  from "../featuresRedux/auth/reducer";


// const rootReducer=combineReducers({
//     auth:authReducer,
//     
// })



export const store=createStore(authReducer);

console.log(store.getState())