import React, {Component} from 'react'

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "123"
    };
    this.store = this.props.store;
    this
      .store
      .on("test", (val) => {
        this.setState({test: val});
        window.ss = this.store;
      });

  }
  render() {
    return (
      <div>
        <span className='icon-desktop'></span>
        {this.state.test}
      </div>
    );
  }
}

export default Bar