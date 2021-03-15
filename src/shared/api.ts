import { defer, Observable, of, from, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $: any;
const async: boolean = true;

const simulateLogin = <T>(username: string): Observable<T> => {
  console.log('simulateLogin');

  //todo
  return defer(() => {
    return $().SPServices({
      debug: true,
      webURL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
      async: async,
      operation: 'Login',
      username: username,
      password: 'Subin!@#',
      // completefunc: function (xData: any, Status: any) {
      //   //console.log('completefunc', xData);
      //   return true;
      // },
    });
  }).pipe(
    map((result: any) => {
      console.log('result in pipe', result);
      return result.data;
    })
  );
};

export default { simulateLogin };
