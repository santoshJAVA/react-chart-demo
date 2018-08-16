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
      "dataProvider": chartData,
      "categoryField": "date",
      "rotate": false,
      "startDuration": 1,
      "categoryAxis": {
          "labelRotation": 45,
          "gridPosition": "start",
          "position": "left",
          "autoGridCount": false,
      },
      "trendLines": [],
      "graphs": [ {
        "balloonText": "[[title]]: [[value]]",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "title": "Chhanel 1",
        "type": "column",
        "valueField": "chhanel1"
      }, {
        "balloonText": "[[title]]: [[value]]",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "title": "Chhanel 2",
        "type": "column",
        "valueField": "chhanel2"
      }, {
        "balloonText": "[[title]]: [[value]]",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "title": "Chhanel 3",
        "type": "column",
        "valueField": "chhanel3"
      }, {
        "balloonText": "[[title]]: [[value]]",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "title": "Chhanel 4",
        "type": "column",
        "valueField": "chhanel4"
      }, {
        "balloonText": "[[title]]: [[value]]",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "title": "Chhanel 5",
        "type": "column",
        "valueField": "chhanel5"
      }, {
        "balloonText": "[[title]]: [[value]]",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "title": "Chhanel 6",
        "type": "column",
        "valueField": "chhanel6"
      }],
      "chartScrollbar": {  },
      "legend": {
          "align": "center",
          "position": "right",
          "markerType": "square",
          "right": 6,
          "labelText": "[[title]]",
          "valueText": "",
          "valueWidth": 80,
          "textClickEnabled": true,
          "rollOverColor": "blue",
          "fontSize": 13,
          "useGraphSettings": true

      },
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "position": "left",
          "axisAlpha": 0
        }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "export": {
        "enabled": true
      },
    };

    return (
      <div>
        <AmCharts.React style={{ width: "70%", height: "500px" }} options={config} />
      </div>
    );
  }
}

export default BarChart;
