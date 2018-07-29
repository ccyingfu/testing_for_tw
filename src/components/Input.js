import React, {Component} from 'react'
import './style/input.css'

class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hw-input">
        <input placeholder="input resource name, please." />
      </div>
    );
  }
}
export default Input;