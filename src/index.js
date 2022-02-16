import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouters';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import { store } from './store/store';
import "./styles/myStyle.css"


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
