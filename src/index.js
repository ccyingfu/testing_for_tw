import React, {Component} from 'react'
import Store from '@/store'
import Bar from '@/sections/Bar'
import LeftSider from '@/sections/LeftSider'

const store = new Store();

class Index extends Component {
    render() {
        return (
            <div>
                <Bar store={store}/>
                <LeftSider store={store}/>
            </div>
        );
    }
}
export default Index;