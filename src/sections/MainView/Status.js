import React, {Component} from 'react'
import {ajax} from '@/utils'

class Status extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      building: "",
      idle: "",
      detail: ""
    };
    ajax
      .get('http://localhost:3001/agents')
      .then(datas => {
        this.store.setData("datas", datas);
        this.setState({
          building: datas.filter(data => data.status == "building").length,
          idle: datas.filter(data => data.status == "idle").length,
          all: datas.length,
          physical: datas.filter(data => data.type == "physical").length,
          virtual: datas.filter(data => data.type == "virtual").length
        });
      })
  }
  render() {
    return (
      <div className="status">
        <div>
          <div className="building">
            <span className="title">Building</span>
            <span className="number">{this.state.building}</span>
          </div>
        </div>
        <div>
          <div className="idle">
            <span className="title">Idle</span>
            <span className="number">{this.state.idle}</span>
          </div>
        </div>
        <ul className="detail">
          <li>
            <span>ALL</span>
            <span>{this.state.all}</span>
          </li>
          <li>
            <span>PHYSICAL</span>
            <span>{this.state.physical}</span>
          </li>
          <li>
            <span>VIRTUAL</span>
            <span>{this.state.virtual}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Status;