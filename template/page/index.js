import React from 'react';
import './index.styl';

import Input from '../../components/Input';
import List from '../../components/List';

// 性能优化
import PureReanderMixin from 'react-addons-pure-render-mixin';

class {{pageName}} extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      todoList: []
    };
  }

  render() {
    return (
      <div role="containers:{{pageName}}">
        <h2>To Do List Demo</h2>
        <Input onInputSubmit={this.onInputSubmit.bind(this)} />
        <List todoList={this.state.todoList} deleteItem={this.deleteItem.bind(this)} />
      </div>
    );
  }

  onInputSubmit(inputValue) {
    let id = this.state.todoList.length;

    this.setState({
      todoList: this.state.todoList.concat({
        id: id,
        value: inputValue
      })
    });
  }

  deleteItem(id) {
    this.setState({
      todoList: this.state.todoList.filter((element, index) => {
        return id !== index;
      })
    });
  }
}

export default {{pageName}};
