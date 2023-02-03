import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {};


const persistConfig = {
  key: 'reducer',
  storage: storage,
  whitelist: ['reducer'] 
};

const presistedReducer = persistReducer(persistConfig, rootReducer );
const store = createStore(presistedReducer, 
composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };

/*const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware),
 
  ),
);

export { store };*/
