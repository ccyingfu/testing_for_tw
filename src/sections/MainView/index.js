import React, {Component} from 'react'
import Status from './Status'
import Search from './Search'

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;
  }
  render() {
    return (
      <div className="main-view">
        <Status store={this.store} />
        <Search store={this.store} />
      </div>
    );
  }
}

export default MainView