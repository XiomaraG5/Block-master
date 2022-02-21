import { createStore,combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/LoginReducer";
import registerReducer from "../reducers/registerReducer";
import UserMoviesReducer from "../reducers/UserMoviesReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login:loginReducer,
    register:registerReducer,
    user: UserMoviesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)