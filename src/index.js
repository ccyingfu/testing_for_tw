import React, {Component} from 'react'
import Store from '@/store'
import Header from '@/sections/Header'
import Footer from '@/sections/Footer'
import Bar from '@/sections/Bar'
import LeftSider from '@/sections/LeftSider'

const store = new Store();

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bar store={store}/>
                <LeftSider store={store}/>
                <Footer/>
            </div>
        );
    }
}
export default Index;