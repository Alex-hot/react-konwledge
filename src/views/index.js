/*
 * @Descripttion: 
 * @Author: Alex
 * @Date: 2021-08-19 14:27:08
 */
import Loadable from 'react-loadable';
import { Loading } from '../components';

const DashBoard = Loadable({
    loader: () => import('./DashBoard'),
    loading: Loading,
})
const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading,
})
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
})
const ReactJS = Loadable({
    loader: () => import('./ReactJS'),
    loading: Loading,
})
const ReactRouter = Loadable({
    loader: () => import('./ReactRouter'),
    loading: Loading,
})
const ReactState = Loadable({
    loader: () => import('./ReactState'),
    loading: Loading,
})

export {
    DashBoard,
    Login,
    NotFound,
    ReactJS,
    ReactRouter,
    ReactState

}

