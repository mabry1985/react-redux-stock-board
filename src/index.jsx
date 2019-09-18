/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  eventhough those 2 dependencies are only used in development
  eslint has no way to tell that and outputs an error
*/

// react dependencies
import React from "react";
import ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";
// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import App from "./App";

import "./style.scss";

const root = document.getElementById("root");

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
