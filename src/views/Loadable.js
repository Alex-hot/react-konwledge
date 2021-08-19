/*
 * @Descripttion: react-loadable原理
 * @Author: Alex
 * @Date: 2021-08-19 16:21:07
 */

import React, { Component } from 'react';

const Loadable = ({
    loader,
    loading: Loading
}) => {
    return class LoadabledComponent extends Component {
        state = {
            LoadedComponent: null
        }
        componentDidMount() {
            loader()
                .then(resp => {
                    console.log(resp.default)
                    this.setState({
                        LoadedComponent: resp.default
                    })
                })
        }
        render() {
            const { LoadedComponent } = this.state
            return LoadedComponent ? <LoadedComponent /> : <Loading />
        }
    }
}
export default Loadable