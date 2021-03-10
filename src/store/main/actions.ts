import { filter, mergeMap } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { LOGIN, LOGIN_SUCCESS, MainActionTypes } from './types';

const login = (action$: any) =>
  action$.pipe(
    filter((action: MainActionTypes) => action.type === LOGIN),
    mergeMap(async () => {
      console.log('in action merge map');
      return { type: LOGIN_SUCCESS, loginName: '', displayName: '', roles: [] };
    })
  );

export const mainEpic = combineEpics(login);
