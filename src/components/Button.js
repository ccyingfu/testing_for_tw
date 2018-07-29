import React, {Component} from 'react'
import './style/button.css'

class Button extends Component {

  constructor(props) {
    super(props);
    this.clickEvt = this
      .click
      .bind(this);
  }

  render() {
    let type = this.props.type || "primary";
    let cn = this.props.className || "";
    cn = `button ${type} ${cn}`;
    let children = this.props.children;
    return (
      <div
        className={cn}
        onClick={this.props.click}
        style={this.props.style}
        onClick={this.clickEvt}>
        {this.props.icon && <i
          className={this.props.icon}
          style={children
          ? {
            "marginRight": "5px"
          }
          : {
            "padding": "0 5px"
          }}></i>
}
        {children}
      </div>
    );
  }

  click(e) {
    const clickFn = this.props.onClick;
    clickFn(e);
  }
}
export default Button;