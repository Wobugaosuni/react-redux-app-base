import React from 'react';
import './index.styl';

// 性能优化
import PureReanderMixin from 'react-addons-pure-render-mixin';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div role="component:Input">
        <input
          className="input-content"
          value={this.state.inputValue}
          onChange={this.onInputChange.bind(this)}
          onKeyUp={this.onInputKeyUp.bind(this)}
        />
      </div>
    );
  }

  onInputChange(event) {
    // console.log('change value', event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  onInputKeyUp(event) {
    let inputValue = event.target.value;

    if (event.keyCode === 13 && inputValue) {
      // 提交并清空数据
      this.props.onInputSubmit(inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }
}

export default Input;
