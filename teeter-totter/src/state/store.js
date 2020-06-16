  
import appReducer from "./TT_Store"
import { combineReducers, compose, createStore } from "redux"

const rootReducer = combineReducers({appReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

export default store