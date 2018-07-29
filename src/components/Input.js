import React, {Component} from 'react'
import './style/input.css'

class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let icon = this.props.icon || "";
    let cn = `hw-input ${icon
      ? "input--prefix"
      : ""}`
    return (
      <div className={cn} style={this.props.style}>
        {icon && <i className={icon}></i>
        }
        <input
          className="input-inner"
          placeholder={this.props.placeholder}
          onChange={e => {
          let evt = this.props.onChange;
          evt && evt(e.target.value);
        }}/>
      </div>
    );
  }
}
export default Input;