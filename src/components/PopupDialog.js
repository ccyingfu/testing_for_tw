import React, {Component} from 'react'
import Button from './Button'
import Input from './Input'

import './style/popup_dialog.css'

class PopupDialog extends Component {
  constructor(props) {
    super(props);
    this.close = this
      ._close
      .bind(this);
    this.onChange = this
      ._onChange
      .bind(this);
    this.value = "";
    this.confirm = this
      ._confirm
      .bind(this);
    this.value = "";
    
  }
  render() {
    return (
      <div className="popup-dialog down" style={this.props.style}>
        <div className="top">
          <i className="icon-close close" onClick={this.close}></i>
        </div>
        <div>Separate multiple resuorces with commas.</div>
        <div>
          <Input
            style={{
            width: "550px"
          }}
            onChange={this.onChange} placeholder="input value"/>
        </div>
        <div>
          <Button
            style={{
            marginRight: "10px"
          }}
            onClick={(e) => this.confirm(this.value)}>Add Resources</Button>
          <Button type="secondary" onClick={this.close}>Cancel</Button>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("dlg destory")
  }

  _confirm(value){
    this.props.sumbit(this.value);
    this.close();
  }

  _close(e) {
    this
      .props
      .onClose(e);
  }

  _onChange(value) {
    this.value = value;
  }
}
export default PopupDialog;