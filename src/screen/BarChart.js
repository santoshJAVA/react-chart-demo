import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";

import chartData from '../data/BarChartData';

            

class BarChart extends Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    const config = {
      "type": "serial",
      "theme": "light",
      "dataProvider": [ {
        "country": "Chhanel 1",
        "visits": 14
      }, {
        "country": "Chhanel 2",
        "visits": 10
      }, {
        "country": "Chhanel 3",
        "visits": 13
      }, {
        "country": "Chhanel 4",
        "visits": 12
      }, {
        "country": "Chhanel 5",
        "visits": 9
      }, {
        "country": "Chhanel 6",
        "visits": 11
      }],
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      } ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      },
      "export": {
        "enabled": true
      }
    }

    return (
      <div style={{ width: "70%"}}>
        <select style={{marginLeft: 1000}}>
          <option value="new Date()">Today</option>
          <option value="12-01-2017">Last 24 hours</option>
          <option value="12-01-2017">Previous Week</option>
          <option value="12-01-2017">Last 30 Days</option>
          <option value="12-01-2017">Previous Month</option>
        </select>
        <AmCharts.React style={{ height: "500px" }} options={config} />
      </div>
    );
  }
}

export default BarChart;
