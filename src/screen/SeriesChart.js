import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";

import chartData from '../data/SeriesChartData';

class SeriesChart extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const config = {
      "type": "serial",
      "theme": "light",
      "categoryField": "date",
      "rotate": false,
      "startDuration": 1,
      "legend": {
        "position": "right",
        "useGraphSettings": true
      },
      "dataProvider": chartData,
      "synchronizeGrid":true,
      "valueAxes": [{
          "id":"v1",
          "axisColor": "#FF0000	",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left"
      }],
      "graphs": [{
          "valueAxis": "v1",
          "lineColor": "#800000",
          "title": "TOMADA",
          "valueField": "TOMADA",
          
      }, {
          "valueAxis": "v2",
          "lineColor": "#FFFF00",
          "title": "LUZ",
          "valueField": "LUZ",
      "fillAlphas": 0
      }, {
          "valueAxis": "v3",
          "lineColor": "#808000",
          "title": "AR CONDICIONADO",
          "valueField": "AR CONDICIONADO",
      "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "#008000",
        "title": "FASE 1",
        "valueField": "FASE 1",
        "fillAlphas": 0
        }, {
          "valueAxis": "v3",
          "lineColor": "#000080",
          "title": "Channel 5",
          "valueField": "Channel 5",
      "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "#808080",
        "title": "VAZIO",
        "valueField": "VAZIO",
    "fillAlphas": 0
    }],
      "chartScrollbar": {},
      "chartCursor": {
          "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "axisColor": "#DADADA",
          "minorGridEnabled": true
      },
      "export": {
        "enabled": true,
          "position": "top-right"
       }
  };

    return (
      <div>
        <AmCharts.React style={{ width: "70%", height: "500px" }} options={config} />
      </div>
    );
  }
}

export default SeriesChart;
