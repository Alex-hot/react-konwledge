/*
 * @Descripttion:  基于antd和react-router的面包屑
 * @Author: Alex
 * @Date: 2021-08-19 20:30:46
 */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

@withRouter
class Breadcrumbs extends Component {
    componentDidMount() {
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                面包屑
            </div>
        )
    }

}
export default Breadcrumbs
