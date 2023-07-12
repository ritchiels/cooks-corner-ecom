import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./Reducer";
import thunk from 'redux-thunk';

/*
  Redux is synchronous by default

  Action -> [Dispatcher -> Middleware -> Reducer -> State] -> View
  [] = store

  Redux thunk allows us to use ASYNC redux flow
*/

const store = configureStore({
    reducer: MyReducer,
    middleware: [thunk],
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;