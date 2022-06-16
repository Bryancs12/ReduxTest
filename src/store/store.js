import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import { championReducer } from "../reducers/championReducer";
import { productReducer } from "../reducers/productReducer"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    products : productReducer,
    champions : championReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)