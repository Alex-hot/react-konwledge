/*
 * @Descripttion: 
 * @Author: Alex
 * @Date: 2021-08-19 11:10:35
 */
import React, { Component } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { configRouters } from "./routes";
import PageLayout from "./Layout";
@withRouter
class App extends Component {
    render() {
        return (
            <PageLayout>
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
            </PageLayout>
        )
    }
}

export default App