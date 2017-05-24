import React from 'react';
import { render } from 'react-dom';

import './common/stylus/index.styl'; // 引入公共样式

import Todo from './containers/Todo';

render (
  <Todo />,
  document.getElementById('root')
);
