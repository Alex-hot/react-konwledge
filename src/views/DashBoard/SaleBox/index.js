import React, { Component } from "react";
import { Radio } from "antd";
const { Group, Button } = Radio;

class SaleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleType: 1,
    };
  }
  handleSaleTypeChange(e) {
    console.log("e:", e);
  }
  render() {
    return (
      <div className="sale-box">
        <div className="sale-top">
          <Group
            onChange={this.handleSaleTypeChange}
            defaultValue={this.state.saleType}
          >
            <Button value={1}>销售额</Button>
            <Button value={2}>访问量</Button>
          </Group>
        </div>
      </div>
    );
  }
}
export default SaleBox;
