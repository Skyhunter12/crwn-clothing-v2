import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// // import {thunk} from "redux-thunk";
import reduxSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const middlewares = [];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}
const sagaMiddleware = reduxSagaMiddleware();
middlewares.push(sagaMiddleware);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // Optionally blacklist user state if you don't want to persist it
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const componsedEnhancers = composeEnhancer(
  applyMiddleware(...middlewares)
);

export const store = 
createStore(
  persistedReducer,
  undefined,
  componsedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
