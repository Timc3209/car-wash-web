import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { AppState, rootReducer } from "./reducers";

const persistConfig = {
  key: "main",
  storage,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer<AppState, any>(
  persistConfig,
  rootReducer
);

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
// persistor.purge();
export { store, persistor };
