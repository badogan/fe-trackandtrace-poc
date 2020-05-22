import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import manageUsers from "./reducers/manageUsers";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(manageUsers, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" render={props => <App {...props} />} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
