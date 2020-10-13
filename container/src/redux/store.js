import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import menuReducer from './reducers/menuReducer'


// para poder aplicar mas de un middleware
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    menu: menuReducer,
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;