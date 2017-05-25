import React from 'react';
import './index.styl';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div role="component:List">
        <ul>
          {
            this.props.todoList.map(item => {
              return (
                <li
                  key={item.id}
                  onClick={this.onLiClick.bind(this, item.id)}
                >
                  { item.value }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  onLiClick(id) {
    this.props.deleteItem(id);
  }
}
