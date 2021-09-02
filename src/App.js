/*
 * @Descripttion:
 * @Author: Alex
 * @Date: 2021-08-19 11:10:35
 */
import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { configRouters } from "./routes";
import PageLayout from "./Layout";
@withRouter
class App extends Component {
  generateRoute(item) {
    if (item.children && item.children.length) {
      let routeView = (
        <Route
          key={item.pathname}
          path={item.pathname}
          exact={item.exact}
          render={(routerProps) => {
            return <item.component {...routerProps} />;
          }}
        />
      );
      // 生成当前路由的子路由
      let children = item.children.map((route) => {
        return this.generateRoute(route);
      });
      children.push(routeView);
      return children;
    }
    // 生成当前路由
    return (
      <Route
        key={item.pathname}
        path={item.pathname}
        exact={item.exact}
        render={(routeProps) => {
          return <item.component {...routeProps} />;
        }}
      ></Route>
    );
  }
  render() {
    return (
      <PageLayout>
        <Switch>
          {configRouters.map((route) => {
            return this.generateRoute(route);
            // return (
            //     <Route
            //         key={route.pathname}
            //         path={route.pathname}
            //         exact={route.exact}
            //         render={(routerProps) => {
            //             return <route.component  {...routerProps} />
            //         }} />
            // )
          })}
          <Redirect to={configRouters[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </PageLayout>
    );
  }
}

export default App;
