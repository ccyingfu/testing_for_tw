import React, {Component} from 'react'
import ReactSVG from 'react-svg'
import User from '@/sections/Header/User'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="logo">
          <ReactSVG
            path="/static/logo.svg"
            svgStyle={{
            width: 100
          }}/>
        </div>
        <User />
      </div>
    );
  }
}

export default Header