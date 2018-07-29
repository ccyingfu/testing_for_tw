import React, {Component} from 'react'
import Result from './Result'
import Input from '@/components/Input'

class Search extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      datas: []
    };
    this.currType = "all";
    this.getAll = this
      ._switch
      .bind(this, "all");
    this.getPhysical = this
      ._switch
      .bind(this, "physical");
    this.getVirual = this
      ._switch
      .bind(this, "virtual");
    this.getData = this
      ._getData
      .bind(this);
    let evt = this
      .store
      .on("datas", (datas) => {
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
          {/* <Input /> */}
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
}

export default Search;