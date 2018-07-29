import React, {Component} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import Button from '@/components/Button'
import PopupDialog from '@/components/PopupDialog'
import {getPos} from '@/utils'

function createNodeForDlg(vm) {
  var p = document.createElement('div');
  p.setAttribute("name", "popup_dialog")
  document
    .body
    .appendChild(p);
}

function removeDlgNode(vm) {
  let div = document.querySelector("[name='popup_dialog']");
  if (div) {
    // unmountComponentAtNode(vm, div)
    div
      .parentNode
      .removeChild(div);
  }
}

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
    this.store = this.props.store;
    this
      .store
      .on("datas", datas => {
        console.log(datas)
        this.setState({datas});
      });
  }
  render() {
    let feed = 0;
    return (
      <div className="result-container">
        <ul className="result-list">
          {this
            .state
            .datas
            .map(data => <li key={`result_li_${feed++}`}>
              <ul>
                <li>
                  <span className="icon-desktop re-icon"></span>
                  <span className="bold re-name">{data.name}</span>
                </li>
                <li>
                  {data.status == "building"
                    ? <div className="re-status">
                        <span className="s-building">building</span>
                      </div>
                    : <div className="re-status">
                      <span className="s-idle">idle</span>
                    </div>}
                </li>
                <li>
                  <span className="icon-info re-icon"></span>
                  <span className="bold re-name">{data.ip}</span>
                </li>
                <li>
                  <span className="icon-folder re-icon"></span>
                  <span className="bold re-name">{data.location}</span>
                </li>
              </ul>
              <div>
                <Button icon="icon-plus" onClick={this.addResources}/>
                <ul className="resources">
                  {data
                    .resources
                    .map(res => <li key={`result_resources_li_${feed++}`}>
                      <span>{res}
                        <i className="icon-trash"></i>
                      </span>
                    </li>)
}
                </ul>
                <Button icon="icon-deny" className="deny-button">
                  Deny
                </Button>
              </div>
            </li>)
}
        </ul>
      </div>
    );
  }

  addResources(e) {
    removeDlgNode();
    createNodeForDlg();
    let {left, bottom} = getPos(e.target);
    render(
      <PopupDialog
      onClose={removeDlgNode}
      style={{
      top: bottom + "px",
      left: left + "px"
    }}/>, document.querySelector("[name='popup_dialog']"));
  }

  componentDidMount() {
    createNodeForDlg();
  }

}

export default MainView