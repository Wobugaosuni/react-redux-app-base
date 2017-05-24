import React from 'react';
import './index.styl';

import Input from '../../components/Input';
import List from '../../components/List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}

export default Todo;
