import React, {Component} from 'react'
import Store from '@/store'
import Header from '@/sections/Header'
import Footer from '@/sections/Footer'
import LeftSider from '@/sections/LeftSider'
import MainView from '@/sections/MainView'

const store = new Store();

class Index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <LeftSider store={store}/>
          <MainView store={store} />
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Index;