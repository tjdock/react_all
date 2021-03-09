import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

/*router import (BrowserRouter 或者 HashRouter) createHashHistory*/
import { createHashHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
/*****************************************************************/

/*antd-ui , local import*/
import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ConfigProvider } from 'antd';
/*antd-ui , local import****************************************************************/


/*redux import*/
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  rootReducer,
  // watchAttachment,
  // watchContract,
  // watchDict,
  // watchMain,
  // watchPerson,
  // watchUnion,
  // watchUpload
} from "./store";
/*redux import****************************************************************/


/*redux settings*/
const sagaMiddleware = createSagaMiddleware();
const history = createHashHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history))
  )
);
// sagaMiddleware.run(watchMain);
// sagaMiddleware.run(watchDict);
// sagaMiddleware.run(watchUpload);
// sagaMiddleware.run(watchPerson);
// sagaMiddleware.run(watchUnion);
// sagaMiddleware.run(watchContract);
// sagaMiddleware.run(watchAttachment);

/*antd settings*/
moment.locale('cn');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}