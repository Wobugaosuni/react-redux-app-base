import { get } from './get';
import { post } from './post';

export function getData() {
  var result = get('api/get');

  result.then(response => {
    return response.json();
  }).then(json => {
    console.log('get data success', json);
  });
}

export function postData() {
  var result = post('/api/post', {
    a: 100,
    b: 200
  });

  result.then(response => {
    return response.json();
  }).then(json => {
    console.log('post data success', json);
  });
}
