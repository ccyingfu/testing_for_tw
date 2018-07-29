import React, {Component} from 'react'
import Result from './Result'
import Input from '@/components/Input'
import {ajax, debounce} from '@/utils'

class Search extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      datas: []
    };
    this.currType = "all";
    this.getAll = this._switch.bind(this, "all");
    this.getPhysical = this._switch.bind(this, "physical");
    this.getVirual = this._switch.bind(this, "virtual");
    this.getData = this._getData.bind(this);
    this.searchByStauts = debounce(this._searchByStauts.bind(this), 300);
    let evt = this.store.on("datas", (datas) => {
      this.setState({datas});
      evt.remove();
      this.getData("all");
    });
  }

  render() {
    return (
      <div className="searchingContainer">
        <div className='searching'>
          <ul>
            <li name="all" onClick={this.getAll}>All<span className="item-select"></span>
            </li>
            <li name="physical" onClick={this.getPhysical}>Physical<span></span>
            </li>
            <li name="virtual" onClick={this.getVirual}>Virtual<span></span>
            </li>
          </ul>
          <div>
            <Input
              icon="icon-search"
              placeholder="input building or idle, if void, show all"
              style={{
              width: "300px"
            }}
            onChange={value => {this.searchByStauts(value)}}/>
          </div>
          <div className="arrangeStyle">
            <i className="icon-th-card"></i>
            <i
              className="icon-th-list"
              style={{
              color: "#00b4cf"
            }}></i>
          </div>
        </div>
        <Result store={this.store}/>
      </div>
    );
  }
  _switch(type, e) {
    if (type != this.currType) {
      let currSpan = document.querySelector(`.searching ul li[name=${type}] span`);
      let spans = document.querySelectorAll(".searching ul li span");
      spans.forEach(span => {
        span.className = "";
      });
      this.currType = type;
      currSpan.className = "item-select";
      this.getData(type);
    }
  }
  _getData(type) {
    let datas = [];
    if (type == "all") {
      datas = this.state.datas;
    } else {
      datas = this
        .state
        .datas
        .filter(data => data.type == type);
    }
    this
      .store
      .setData("datas", datas);
  }

  _searchByStauts(value){
    let datas = this.state.datas.filter(data => data.status == value);
    value ? this.store.setData("datas", datas) : this.store.setData("datas", this.state.datas);
  }
}

export default Search;