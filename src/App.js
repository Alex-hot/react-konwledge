/*
 * @Descripttion: 
 * @Author: Alex
 * @Date: 2021-08-19 11:10:35
 */
import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { configRouters } from "./routes";
class App extends Component {
    render() {
        return (
            <div>
                这里是公共部分
                <Switch>
                    {
                        configRouters.map(route => {
                            return (
                                <Route
                                    key={route.pathname}
                                    path={route.pathname}
                                    exact={route.exact}
                                    render={(routerProps) => {
                                        return <route.component  {...routerProps} />
                                    }} />
                            )
                        })
                    }
                    <Redirect to={configRouters[0].pathname} from='/admin' exact />
                    <Redirect to='/404' />
                </Switch>
            </div>
        )
    }
}

export default App