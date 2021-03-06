/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';

    readonly REACT_APP_ADMIN_NAME: string;
    readonly REACT_APP_API_URL: string;
    readonly REACT_APP_DOMAIN: string;
    readonly REACT_APP_ASHX_URL: string;
    readonly REACT_APP_SIGN_OUT_URL: string;
    readonly REACT_APP_LOGIN_ANOTHER_URL: string;
    readonly REACT_APP_SEND_EMAIL_URL: string;
    readonly REACT_APP_SUPER_ADMIN_NAME: string;
  }
}