import React, {Component} from 'react'
import Menu from '@/sections/Header/Menu'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStatus: "icon-angle-down",
      menuSH: "hide"
    };
    this.menuToggle = this
      ._menuToggle
      .bind(this);
  }
  render() {
    const menus = [
      {
        className: "icon-th-card",
        label: "Profile"
      }, {
        className: "icon-sign-in",
        label: "Sing out"
      }
    ];
    return (
      <div className="user" onClick={this.menuToggle}>
        <span className="head"></span>
        <span className={this.state.menuStatus}></span>
        <Menu menus={menus} status={this.state.menuSH}/>
      </div>
    );
  }
  _menuToggle() {
    let isDown = this.state.menuStatus == "icon-angle-down";
    let isHide = this.state.menuSH == "hide";
    this.setState({
      menuStatus: isDown
        ? "icon-angle-up"
        : "icon-angle-down",
      menuSH: isHide
        ? "show"
        : "hide"
    });

  }
}

export default Header