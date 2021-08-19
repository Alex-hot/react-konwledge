
import React, { Component } from 'react'

import { Button } from 'antd'

const testHOC = (WrapedComponent) =>{
    return class HOCComponent extends Component {
        render(){
            return (
                <>
                <WrapedComponent />
                <div>这是高阶组建里的信息</div>
                </>
            )
        }
    }
}
@testHOC
class App extends Component {
    render() {
        return (
            <div>
                App
                <Button type='primary'>按钮</Button>
            </div>
        )
    }
}

export default App