import {filter, mergeMap, switchMap, map} from 'rxjs/operators';
import {combineEpics} from 'redux-observable';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LoginSuccessAction,
} from './types';
import api from '../../shared/api';

const login = (action$: any) =>
  action$.ofType(LOGIN)
    .pipe(
      switchMap(() =>
        api.simulateLogin('刘备')
          .pipe(
            map(res => {
              console.log('res = ', res);

              let act: LoginSuccessAction = {
                type: LOGIN_SUCCESS,
                loginName: 'login',
                displayName: 'display name',
                roles: [],
              };
              return act;
            })
          )
      )
    )


export const mainEpic = combineEpics(login);

