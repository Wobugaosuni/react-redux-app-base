import 'es6-promise';
import 'whatwg-fetch';

/**
 * get请求公共部分抽取
 * @export
 * @param {url}
 * @returns result
 */

export function get(url) {
  var result = fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  });

  return result;
}
