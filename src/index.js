/*
 * @Author: your name
 * @Date: 2021-08-19 11:08:43
 * @LastEditTime: 2021-08-19 13:22:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-konwledge/src/index.js
 */
import React from 'react'
import {
    render
} from 'react-dom'

import App from './App'
import './index.less'
render(
    <App />,
    document.querySelector('#root')
)