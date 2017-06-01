import 'es6-promise';
import 'whatwg-fetch';

/**
 * post请求公共部分抽取
 * @export
 * @param {url,paramsObj}
 * @returns result
 */

export function post(url, paramsObj) {
  var result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paramsObj)
  });

  return result;
}
