/*
 * @Descripttion: 路由配置文件
 * @Author: Alex
 * @Date: 2021-08-19 15:00:51
 */

import {
  DashBoard,
  Login,
  NotFound,
  ReactJS,
  ReactRouter,
  ReactState,
  HelloWorld,
} from "../views";

export const mainRouters = [
  {
    pathname: "/login",
    component: Login,
  },
  {
    pathname: "/404",
    component: NotFound,
  },
];

export const configRouters = [
  {
    pathname: "/admin/dashboard",
    component: DashBoard,
    title: "仪表盘",
  },
  {
    pathname: "/admin/react-js",
    component: ReactJS,
    title: "reactJS",
    auth: true,
    children: [
      {
        component: HelloWorld,
        pathname: "/admin/react-js/hello-world",
        title: "Hello World",
        exact: true,
        auth: true,
      },
    ],
  },
  {
    pathname: "/admin/react-router",
    component: ReactRouter,
    title: "react-routere",
  },
  {
    pathname: "/admin/react-state",
    component: ReactState,
    title: "react状态管理",
  },
];
