import {filter, mergeMap} from 'rxjs/operators';
import {combineEpics} from 'redux-observable';
import {LOGIN, LOGIN_SUCCESS, LoginSuccessAction, MainActionTypes} from './types';

const login = (action$: any) =>
    action$.pipe(
        filter((action: MainActionTypes) => action.type === LOGIN),
        mergeMap(async () => {
            console.log('in action merge map');
            let act: LoginSuccessAction = {type: LOGIN_SUCCESS, loginName: 'login', displayName: 'display name', roles: []};
            return act;

        })
    );

export const mainEpic = combineEpics(login);
