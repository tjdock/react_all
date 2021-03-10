import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {ConnectedRouter} from 'connected-react-router';
import {store, history} from './store';
import {Provider} from 'react-redux';


/*antd-ui , local import*/
import 'antd/dist/antd.min.css';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {ConfigProvider} from 'antd';
/*antd-ui , local import****************************************************************/


/*antd settings*/
moment.locale('cn');

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <ConnectedRouter history={history}>
                <App/>
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
