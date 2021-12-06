import React, { Component } from "react";
import { DatePicker } from "antd";
import { Chart, Interval, Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";
import moment from "moment";
const { RangePicker } = DatePicker;

class SaleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleType: 1,
      curType: 3,
      intervalData: [
        { year: "2010 年", value: 38 },
        { year: "2011 年", value: 52 },
        { year: "2012 年", value: 61 },
        { year: "2013 年", value: 45 },
        { year: "2014 年", value: 48 },
        { year: "2015 年", value: 42 },
        { year: "2016 年", value: 38 },
        { year: "2017 年", value: 43 },
        { year: "2018 年", value: 27 },
        { year: "2019 年", value: 37 },
        { year: "2020 年", value: 29 },
        { year: "2021 年", value: 32 },
      ],
      listData: [
        {
          storeName: "工专路0号店",
          num: 323234,
        },
        {
          storeName: "工专路1号店",
          num: 323234,
        },
        {
          storeName: "工专路2号店",
          num: 323234,
        },
        {
          storeName: "工专路3号店",
          num: 323234,
        },
        {
          storeName: "工专路4号店",
          num: 323234,
        },
        {
          storeName: "工专路5号店",
          num: 323234,
        },
        {
          storeName: "工专路6号店",
          num: 323234,
        },
      ],
      startDate: "",
      endDate: "",
    };
  }
  componentDidMount() {
    let myDate = new Date();
    var tYear = myDate.getFullYear();
    this.setState({
      startDate: tYear + "/01/01",
      endDate: tYear + "/12/31",
    });
  }
  handleSaleTypeChange(value) {
    if (this.state.saleType === value) {
      return;
    }
    const intervalData =
      value === 1
        ? [
            { year: "2010 年", value: 38 },
            { year: "2011 年", value: 52 },
            { year: "2012 年", value: 61 },
            { year: "2013 年", value: 45 },
            { year: "2014 年", value: 48 },
            { year: "2015 年", value: 42 },
            { year: "2016 年", value: 38 },
            { year: "2017 年", value: 43 },
            { year: "2018 年", value: 27 },
            { year: "2019 年", value: 37 },
            { year: "2020 年", value: 29 },
            { year: "2021 年", value: 32 },
          ]
        : [
            { year: "2010 年", value: 20 },
            { year: "2011 年", value: 25 },
            { year: "2012 年", value: 31 },
            { year: "2013 年", value: 38 },
            { year: "2014 年", value: 46 },
            { year: "2015 年", value: 54 },
            { year: "2016 年", value: 64 },
            { year: "2017 年", value: 75 },
            { year: "2018 年", value: 87 },
            { year: "2019 年", value: 100 },
            { year: "2020 年", value: 114 },
            { year: "2021 年", value: 125 },
          ];
    this.setState({
      intervalData,
      saleType: value,
    });
  }
  handleDateTypeChange(val) {
    if (this.state.curType === val) {
      return;
    }
    this.setState({
      curType: val,
    });
  }
  handleDateChange(date, dateString) {
    console.log("date:", date);
    console.log("dateString:", dateString);
  }
  render() {
    const { intervalData, saleType, listData, curType, startDate, endDate } =
      this.state;
    const dateType = ["今日", "本周", "本月", "本年"];
    const ds = new DataSet();
    let dv = ds.createView().source(intervalData);
    const dateFormat = "YYYY/MM/DD";

    return (
      <div className="sale-box">
        <div className="sale-box-header">
          <div className="left-header">
            <div
              className={`type-btn ${saleType === 1 ? "type-btn-active" : ""}`}
              onClick={this.handleSaleTypeChange.bind(this, 1)}
            >
              销售额
              {saleType === 1 ? <span className="line" /> : null}
            </div>
            <div
              className={`type-btn ${saleType === 2 ? "type-btn-active" : ""}`}
              onClick={this.handleSaleTypeChange.bind(this, 2)}
            >
              访问量
              {saleType === 2 ? <span className="line"></span> : null}
            </div>
          </div>
          <div className="right-header">
            <div className="date-list">
              {dateType.map((item, index) => (
                <span
                  className={`date-cell ${
                    curType === index ? "date-cell-active" : ""
                  }`}
                  key={index}
                  onClick={this.handleDateTypeChange.bind(this, index)}
                >
                  {item}
                </span>
              ))}
            </div>
            <RangePicker
              format={dateFormat}
              onChange={this.handleDateChange.bind(this)}
            />
          </div>
        </div>
        <div className="sale-box-content">
          <div className="left-content">
            <Chart
              height={300}
              autoFit
              padding={[0, 0, 25, 0]}
              data={dv}
              interactions={["active-region"]}
            >
              <Interval position="year*value" />
              <Tooltip shared />
            </Chart>
          </div>
          <div className="right-content">
            <div className="list-title">
              门店{saleType === 1 ? "销售额" : "访问量"}排名
            </div>
            <div className="store-list">
              {listData.map((item, index) => {
                return (
                  <div className="store-cell" key={index}>
                    <div className="store-info">
                      <span
                        className={`store-index  ${
                          index <= 2 ? "store-index-active" : ""
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="store-name">{item.storeName}</span>
                    </div>
                    <span className="store-num">{item.num}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SaleBox;
