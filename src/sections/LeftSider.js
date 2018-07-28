import React, {Component} from 'react'

class LeftSider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;
    this.sendMsg = this
      ._sendMsg
      .bind(this);
  }
  render() {
    return (
      <span className='icon-boat' onClick={this.sendMsg}></span>
    );
  }
  _sendMsg() {
    this
      .store
      .setData("test", "test" + Math.random());
  }
}

export default LeftSider