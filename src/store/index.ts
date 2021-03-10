import { combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { takeEvery } from 'redux-saga/effects';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { menuReducer } from './menu/reducers';
import { mainReducer } from './main/reducers';
import { mainEpic } from './main/actions';

export const rootReducer = combineReducers({
  router: connectRouter(createHashHistory()),
  menu: menuReducer,
  main: mainReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
