import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import store from "./store";
import "./assets/css/main.css";

import App from "./app.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
    </BrowserRouter>
  </Provider>,
  rootElement
);
