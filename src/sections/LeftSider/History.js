import React, {Component} from 'react'

class History extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.datas = this.props.datas || [
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com", 
      "bjstdmngbdr10.thoughtworks.com"
    ];
    this.state = {
      datas: this.datas
    };
    this
      .store
      .on("history", (val) => {
        this.setState({datas: val});
      });
  }
  render() {
    let feed = 0;
    return (
      <div className="history">
        <div className="title">History</div>
        <ul>
          {this
            .state
            .datas
            .map(data => <li key={`history_li_${feed++}`} title={data}>
              <span>·</span>{data}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default History;