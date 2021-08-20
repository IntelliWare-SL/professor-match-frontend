import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import lime from '@material-ui/core/colors/lime';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import rootSaga from './utils/rootSaga';
import rootReducers from './utils/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const persister = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
