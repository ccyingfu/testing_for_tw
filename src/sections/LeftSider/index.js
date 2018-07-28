import React, {Component} from 'react'
import Menu from './Menu'
import History from './History'

class LeftSider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;
  }
  render() {
    return (
      <div className="left-sider">
        <Menu />
        <History store={this.store}/>
      </div>
    );
  }
  _sendMsg() {
    // this
    //   .store
    //   .setData("test", "test" + Math.random());
  }
}

export default LeftSider