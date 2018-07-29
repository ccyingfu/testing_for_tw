import React, {Component} from 'react'
import Button from './Button'
import Input from './Input'

import './style/popup_dialog.css'

class PopupDialog extends Component {
  constructor(props) {
    super(props);
    this.click = this._click.bind(this);
  }
  render() {
    return (
      <div className="popup-dialog down" style={this.props.style}>
       <div className="top">
          <i className="icon-close close" onClick={this.click}></i>
        </div>
        <div>Separate multiple resuorces with commas.</div>
        <div>
          <Input />
        </div>
        <div>
          <Button style={{marginRight: "10px"}}>Add Resources</Button>
          <Button type="secondary">Cancel</Button>
        </div>
      </div>
    );
  }

  componentWillUnmount(){
    console.log("dlg destory")
  }

  _click(e){
    let fn = this.props.onClose;
    fn(e);
  }
}
export default PopupDialog;