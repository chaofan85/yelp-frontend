import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
