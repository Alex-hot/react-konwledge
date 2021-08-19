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
    ReactState
} from '../views'

export const mainRouters = [
    {
        pathname: '/login',
        component: Login,
    }, {
        pathname: '/404',
        component: NotFound
    }
]

export const configRouters = [
    {
        pathname: '/admin/dashboard',
        component: DashBoard
    }, {
        pathname: '/admin/react-js',
        component: ReactJS
    }, {
        pathname: '/admin/react-router',
        component: ReactRouter
    }, {
        pathname: '/admin/react-state',
        component: ReactState
    }
]