import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import manageSearch from "./reducers/manageSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  manageSearch,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" render={props => <App {...props} />} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
