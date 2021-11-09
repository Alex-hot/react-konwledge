import React, { Component } from "react";
import { Chart, Area, Tooltip, Line, Interval } from "bizcharts";
import { Progress } from "antd";
function AreaLine(props) {
  let data = props.data.map((item, index) => {
    return {
      index: index,
      num: item,
    };
  });
  return (
    <div className="area-line">
      <Chart data={data} height={64} className="chart" autoFit pure>
        <Tooltip />
        <Area
          position="index*num"
          adjust="stack"
          color="l (90) 0.5:rgba(220,154,247, 1) 1:rgba(255,255,255, 0.3)"
          shape="smooth"
        />
        <Line
          position="index*num"
          color="rgba(211,111,251,0.8)"
          shape="smooth"
        />
      </Chart>
    </div>
  );
}
function ChartInterval(props) {
  let data = props.data.map((item, index) => {
    return {
      index: index,
      num: item,
    };
  });
  return (
    <div className="interval-line">
      <Chart data={data} height={64} className="chart" autoFit pure>
        <Tooltip />
        <Interval position="index*num" />
      </Chart>
    </div>
  );
}
class CardBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salesInfo: {
        volume: 0,
        weekCent: 0,
        dayCent: 0,
        dailyVolume: 0,
      },
      visitInfo: {
        totalNum: 0,
        data: [],
        dailyNum: 0,
      },
      payInfo: {
        cent: "",
        data: [],
        payNum: 0,
      },
      resultInfo: {
        cent: 0,
        dailyCent: 0,
        weekCent: 0,
      },
    };
  }
  componentDidMount() {
    this.setState({
      salesInfo: {
        volume: 126560,
        dailyCent: -0.11,
        weekCent: 0.12,
        dailyVolume: 1200,
      },
      visitInfo: {
        totalNum: 8846,
        data: [
          1254, 682, 590, 900, 1200, 1100, 723, 690, 789, 527, 600, 823, 724,
          790,
        ],
        dailyNum: 1234,
      },
      payInfo: {
        cent: "60%",
        payNum: 6560,
        data: [
          20, 30, 25, 35, 16, 28, 47, 32, 57, 39, 25, 31, 42, 27, 36, 29, 22,
          32, 30, 28, 36,
        ],
      },
      resultInfo: {
        cent: 0.78,
        dailyCent: -0.11,
        weekCent: 0.12,
      },
    });
  }
  render() {
    return (
      <div className="card-box">
        <div className="card-cell">
          <div className="card-info">
            <div className="title-box">
              <span className="title">总销售额</span>
            </div>
            <div className="base-num">￥{this.state.salesInfo.volume} </div>
            <div className="detail-info">
              <span className="label">周同比</span>
              <span className="cent-info">
                {(Math.abs(this.state.salesInfo.weekCent) * 100).toFixed(2)}%
                {this.state.salesInfo.weekCent === 0 ? (
                  "-"
                ) : this.state.salesInfo.weekCent > 0 ? (
                  <div className="top-tri"></div>
                ) : (
                  <div className="bottom-tri"></div>
                )}
              </span>
              <span className="label">日同比</span>
              <span className="cent-info">
                {(Math.abs(this.state.salesInfo.dailyCent) * 100).toFixed(2)}%
                {this.state.salesInfo.dailyCent === 0 ? (
                  "-"
                ) : this.state.salesInfo.dailyCent > 0 ? (
                  <div className="top-tri"></div>
                ) : (
                  <div className="bottom-tri"></div>
                )}
              </span>
            </div>
          </div>
          <div className="foot-info">
            日销售额 {this.state.salesInfo.dailyVolume}
          </div>
        </div>
        <div className="card-cell">
          <div className="card-info">
            <div className="title-box">
              <span className="title">访问量</span>
            </div>
            <div className="base-num">{this.state.visitInfo.totalNum} </div>
            <AreaLine data={this.state.visitInfo.data} />
          </div>

          <div className="foot-info">
            日访问量 {this.state.visitInfo.dailyNum}
          </div>
        </div>
        <div className="card-cell">
          <div className="card-info">
            <div className="title-box">
              <span className="title">支付笔数</span>
            </div>
            <div className="base-num">{this.state.payInfo.payNum} </div>
            <ChartInterval data={this.state.payInfo.data} />
          </div>

          <div className="foot-info">转化率 {this.state.payInfo.cent}</div>
        </div>
        <div className="card-cell">
          <div className="card-info">
            <div className="title-box">
              <span className="title">运营活动效果</span>
              <div className="base-num">
                {(this.state.resultInfo.cent * 100).toFixed(2)}%
              </div>
              <Progress
                className="progress-cell"
                percent={(this.state.resultInfo.cent * 100).toFixed(2)}
                showInfo={false}
                status="success"
              />
            </div>
          </div>

          <div className="foot-info">
            <span className="label">周同比</span>
            <span className="cent-info">
              {(Math.abs(this.state.resultInfo.weekCent) * 100).toFixed(2)}%
              {this.state.resultInfo.weekCent === 0 ? (
                "-"
              ) : this.state.resultInfo.weekCent > 0 ? (
                <div className="top-tri"></div>
              ) : (
                <div className="bottom-tri"></div>
              )}
            </span>
            <span className="label">日同比</span>
            <span className="cent-info">
              {(Math.abs(this.state.resultInfo.dailyCent) * 100).toFixed(2)}%
              {this.state.resultInfo.dailyCent === 0 ? (
                "-"
              ) : this.state.resultInfo.dailyCent > 0 ? (
                <div className="top-tri"></div>
              ) : (
                <div className="bottom-tri"></div>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default CardBox;
