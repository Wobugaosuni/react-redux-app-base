import React from 'react';
import './index.styl';

// 性能优化
import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);

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
