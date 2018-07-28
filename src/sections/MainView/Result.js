import React, {Component} from 'react'
import Status from './Status'
import Search from './Search'

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
                    ? <div className="re-status"><span className="s-building">building</span></div>
                    : <div className="re-status"><span className="s-idle">idle</span></div>}
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
                <div className="plus">
                  <span className="icon-plus"></span>
                </div>
                <ul className="resources">
                  {data
                    .resources
                    .map(res => <li>
                      <span>{res}<i className="icon-trash"></i></span>
                    </li>)
                  }
                </ul>
                <div className="deny-button">
                  <i className="icon-deny"></i>
                  Deny
                </div>
              </div>
            </li>)
}
        </ul>
      </div>
    );
  }
}

export default MainView