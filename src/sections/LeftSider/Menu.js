import React, {Component} from 'react'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.menus = this.props.menus || [
      {
        label: "icon-dashboard",
        text: "DASHBOARD"
      }, {
        label: "icon-sitemap",
        text: "AGENT",
        curr: true
      }, {
        label: "icon-boat",
        text: "MY CRUISE"
      }, {
        label: "icon-life-bouy",
        text: "HELP"
      }
    ];
    this.go = this
      ._go
      .bind(this);
  }
  render() {
    let feed = 0;
    return (
      <ul className="nav">
        {this
          .menus
          .map(menu => <li
            key={`leftsider_li_${feed++}`}
            onClick={this.go}
            className={menu.curr
            ? "curr"
            : ""}>
            <span className={menu.label}></span>{menu.text}</li>)
}
      </ul>
    );
  }
  _go(e) {
    let target = e.target;
    let lis = document.querySelectorAll(".nav li");
    lis.length && lis.forEach(li => {
      li.className = ""
    });
    target.className = "curr";
  }
}

export default Menu;