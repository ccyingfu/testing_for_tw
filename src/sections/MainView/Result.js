import React, {Component} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import Button from '@/components/Button'
import PopupDialog from '@/components/PopupDialog'
import {getPos, ajax} from '@/utils'

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
              <div className='re-system'>
                <img src={`/static/images/${data.os.trim()}.png`}/>
              </div>
              <div className="re-info">
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
                  <Button
                    icon="icon-plus"
                    onClick={(e) => {
                    this.addResources(data, e)
                  }}/>
                  <ul className="resources">
                    {data
                      .resources
                      .map((res, i) => <li key={`result_resources_li_${feed++}`}>
                        <span>{res}
                          <i
                            className="icon-trash"
                            onClick={e => {
                            this.deleteResource(res, i, data)
                          }}></i>
                        </span>
                      </li>)
}
                  </ul>
                  <Button icon="icon-deny" className="deny-button">
                    Deny
                  </Button>
                </div>
              </div>
            </li>)
}
        </ul>
      </div>
    );
  }

  addResources(data, e) {
    removeDlgNode();
    createNodeForDlg();
    let {left, bottom} = getPos(e.target);
    let scrollTop = document
      .querySelector(".main-view")
      .scrollTop;
    render(
      <PopupDialog
      sumbit={(value) => {
      this.sumbit(value, data)
    }}
      onClose={removeDlgNode}
      style={{
      top: bottom - scrollTop + "px",
      left: left + "px"
    }}/>, document.querySelector("[name='popup_dialog']"));
  }

  sumbit(value, data) {
    data
      .resources
      .push
      .apply(data.resources, value.split(","));
    ajax
      .put(`http://localhost:3001/agents/${data.id}`, data)
      .then(res => {
        this.setState({datas: this.state.datas});
      });
  }

  componentDidMount() {
    createNodeForDlg();
  }

  deleteResource(res, idx, data) {
    data
      .resources
      .splice(idx, 1);
    ajax
      .put(`http://localhost:3001/agents/${data.id}`, data)
      .then(res => {
        this.setState({datas: this.state.datas});
      });
  }
}

export default MainView