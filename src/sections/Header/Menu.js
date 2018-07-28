import React, {Component} from 'react'

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {menus, status} = this.props;
    let cn = `menu ${status}-menu ${status}`;
    let reactid = 0;
    return (
      <ul className={cn}>
        {menus.map((menu, idx) => <li key={menu.className}>
          <span className={menu.className}></span>{menu.label}
        </li>)
        }
      </ul>
    );
  }
}

export default Menu