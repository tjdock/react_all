import { MainActionTypes, MainState, LOGIN_SUCCESS } from './types';

const initialState: MainState = {
  loginName: null,
  roles: [],
  displayName: null,
};

export function mainReducer(
  state = initialState,
  action: MainActionTypes
): MainState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginName: action.loginName,
        displayName: action.displayName,
        roles: action.roles,
      };
    default:
      return state;
  }
}
