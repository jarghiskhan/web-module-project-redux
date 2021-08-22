import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./reducers/index";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
