import {defer, Observable, of, from, Subject, fromEvent, AsyncSubject} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';

declare var $: any;
const async: boolean = true;

const simulateLogin = <T>(username: string): Observable<T> => {
  console.log('simulateLogin');

  //todo
  return defer(() => {
    let sub = new AsyncSubject();

    $().SPServices({
      debug: true,
      webURL: import.meta.env.SNOWPACK_PUBLIC_API_URL,
      async: async,
      operation: 'Login',
      username: username,
      password: 'Subin!@#',
      completefunc: function (xData: any, Status: any) {
        sub.next(xData);
        sub.complete();
      },
    });

    return sub;
  }).pipe(
    map((result: any) => {
      let errorCode = $(result.responseXML).SPFilterNode('ErrorCode')[0];
      return $(errorCode).text();
    })
  );
};

const spServiceGet = <T>(listName: string,
                         query?: string | null,
                         mappingOverrides?: object | null,
                         mapping?: any | null,
                         fields?: string,
                         rowLimit?: number,
                         url?: string): Observable<T> => {
  let bb = $().SPServices.SPGetListItemsJson({
    webURL: url || import.meta.env.SNOWPACK_PUBLIC_API_URL,
    operation: 'GetListItem',
    async: async,
    listName: listName,
    CAMLQuery: query || '',
    CAMLViewFields: fields || '',
    mappingOverrides: mappingOverrides || null,
    mapping: mapping || null,
    debug: true,
    CAMLRowLimit: rowLimit || 0
  });

  return defer(() => {
    let sub = new AsyncSubject();
    $.when(bb).done(function () {
      // @ts-ignore
      sub.next(this.data);
      sub.complete();
    });

    return sub;
  })
    .pipe(
      map((result: any) => result
      )
    )
}

export default {simulateLogin, spServiceGet};
