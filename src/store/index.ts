import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createHashHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createEpicMiddleware} from "redux-observable";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {menuReducer} from './menu/reducers';
import {mainReducer} from './main/reducers';
import {mainEpic} from "./main/actions";

export const history = createHashHistory();
const epicMiddleware = createEpicMiddleware();

//reducer
const rootReducer = combineReducers({
    router: connectRouter(history),
    menu: menuReducer,
    main: mainReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(epicMiddleware, routerMiddleware(history))
    )
);

//middleware
epicMiddleware.run(mainEpic);

export type RootState = ReturnType<typeof rootReducer>;
