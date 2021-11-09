/*
 * @Descripttion:
 * @Author: Alex
 * @Date: 2021-08-19 14:33:36
 */

import React, { Component } from "react";
import CardBox from "./CardBox";
import SaleBox from "./SaleBox";
import "./dashboard.less";
class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <CardBox  />
        <SaleBox />
      </div>
    );
  }
}
export default DashBoard;
