import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";

           

class RealtimeChart extends Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    const config = {
      "type": "serial",
    "theme": "light",
    
      "dataProvider": [ {
        "day": 1,
        "value": 120
      }, {
        "day": 2,
        "value": 124
      }, {
        "day": 3,
        "value": 127
      }, {
        "day": 4,
        "value": 122
      }, {
        "day": 5,
        "value": 121
      }, {
        "day": 6,
        "value": 123
      }, {
        "day": 7,
        "value": 118
      }, {
        "day": 8,
        "value": 113
      }, {
        "day": 9,
        "value": 122
      }, {
        "day": 10,
        "value": 125,
        "bullet": "round"
      } ],
      "categoryField": "day",
      "autoMargins": false,
      "marginLeft": 0,
      "marginRight": 5,
      "marginTop": 0,
      "marginBottom": 0,
      "graphs": [ {
        "valueField": "value",
        "bulletField": "bullet",
        "showBalloon": false,
        "lineColor": "#a9ec49"
      } ],
      "valueAxes": [ {
        "gridAlpha": 0,
        "axisAlpha": 0
      } ],
      "categoryAxis": {
        "gridAlpha": 0,
        "axisAlpha": 0,
        "startOnAxis": true
      }
    }

    return (
      <AmCharts.React style={{ width: "100px", height: "100px", marginTop:30 }} options={config} />
    );
  }
}

export default RealtimeChart;
