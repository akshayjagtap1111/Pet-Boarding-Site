import { legacy_createStore as createStore, combineReducers,applyMiddleware,compose } from "redux";

import { current_reducer } from "./current/reducer";
import { login_reducer } from "./login/reducer";
import { petsReducer } from "./pets/reducer";
import { placesReducer } from "./places/reducer";

import thunk from "redux-thunk";
import { admin_login_reducer } from "./admin_log/reducer";



const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const rootreducer = combineReducers({
  login: login_reducer,
  current:current_reducer,
  pets:petsReducer,
  place:placesReducer,
  admin:admin_login_reducer
});

export const store = createStore(rootreducer,enhancer);