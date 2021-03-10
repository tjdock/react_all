import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

/*router import (BrowserRouter 或者 HashRouter) createHashHistory*/
import { createHashHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store';

/*****************************************************************/

/*antd-ui , local import*/
import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ConfigProvider } from 'antd';
/*antd-ui , local import****************************************************************/

/*redux import*/
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { mainEpic } from './store/main/actions';

/*redux import****************************************************************/

/*redux settings*/
const epicMiddleware = createEpicMiddleware();
const history = createHashHistory();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  )
);
epicMiddleware.run(mainEpic);

/*antd settings*/
moment.locale('cn');

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}
