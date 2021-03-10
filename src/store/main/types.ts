export const LOGIN = 'MAIN/LOGIN';
export const LOGIN_SUCCESS = 'MAIN/LOGIN_SUCCESS';

export interface LoginAction {
  type: typeof LOGIN;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  loginName: string;
  displayName: string;
  roles: string[];
}

export interface MainState {
  /* 登陆账号 */
  loginName: string | null;
  /* 显示姓名 */
  displayName: string | null;
  /* 角色 */
  roles: string[];
}

export type MainActionTypes = LoginAction | LoginSuccessAction;
