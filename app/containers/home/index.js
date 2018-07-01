import React from 'react';
import {Link} from 'react-router-dom';

import './index.styl';

// 性能优化
import PureReanderMixin from 'react-addons-pure-render-mixin';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div role="containers:Home">
        <Link to="/todo">make a todo list</Link>
      </div>
    );
  }

}

export default Home;
