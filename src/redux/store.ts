import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { AppState, rootReducer } from "./reducers";

const persistConfig = {
  key: "main",
  storage,
  blacklist: ["estimate"],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer<AppState, any>(
  persistConfig,
  rootReducer
);

const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
persistor.purge();
export { store, persistor };
