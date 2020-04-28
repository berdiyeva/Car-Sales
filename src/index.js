import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/";

import 'bulma/css/bulma.css';
import './styles.scss';

// wrap to the App with <provider store=(store)> <provider>
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
