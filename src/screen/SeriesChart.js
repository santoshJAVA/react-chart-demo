import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import AmStockChart from "amstock3/amcharts/amstock";


import {chartData1, chartData2, chartData3, chartData4, chartData5, chartData6} from '../data/SeriesChartData';

class SeriesChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const config = {
      type: "stock",
      "theme": "light",
    
      dataSets: [{
          title: "TOMADA",
          fieldMappings: [{
            fromField: "value",
            toField: "value"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          dataProvider: chartData1,
          categoryField: "date"
        },
    
        {
          title: "LUZ",
          fieldMappings: [{
            fromField: "value",
            toField: "value"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          dataProvider: chartData2,
          categoryField: "date"
        },
    
        {
          title: "AR CONDICIONADO",
          fieldMappings: [{
            fromField: "value",
            toField: "value"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          dataProvider: chartData3,
          categoryField: "date"
        },
    
        {
          title: "FASE 1",
          fieldMappings: [{
            fromField: "value",
            toField: "value"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          dataProvider: chartData4,
          categoryField: "date"
        },
        {
          title: "Channel 5",
          fieldMappings: [{
            fromField: "value",
            toField: "value"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          dataProvider: chartData5,
          categoryField: "date"
        },
        {
          title: "VAZIO",
          fieldMappings: [{
            fromField: "value",
            toField: "value"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          dataProvider: chartData6,
          categoryField: "date"
        }
      ],
    
      panels: [{
    
          showCategoryAxis: false,
          title: "Channel",
          percentHeight: 70,
    
          stockGraphs: [{
            id: "g1",
    
            valueField: "value",
            comparable: true,
            compareField: "value",
            balloonText: "[[title]]:<b>[[value]]</b>",
            compareGraphBalloonText: "[[title]]:<b>[[value]]</b>"
          }],
    
          stockLegend: {
            
          }
        },
    
        {
          title: "Channel",
          percentHeight: 30,
          stockGraphs: [{
            valueField: "volume",
            type: "column",
            showBalloon: false,
            fillAlphas: 1
          }],
    
          stockLegend: {
          }
        }
      ],
    
      chartScrollbarSettings: {
        graph: "g1"
      },
    
      chartCursorSettings: {
        valueBalloonsEnabled: true,
        fullWidth: true,
        cursorAlpha: 0.1,
        valueLineBalloonEnabled: true,
        valueLineEnabled: true,
        valueLineAlpha: 0.5
      },
    
      periodSelector: {
        position: "left",
        periods: [{
          period: "MM",
          selected: true,
          count: 1,
          label: "1 month"
        }, {
          period: "YYYY",
          count: 1,
          label: "1 year"
        }, {
          period: "YTD",
          label: "YTD"
        }, {
          period: "MAX",
          label: "MAX"
        }]
      },
    
      dataSetSelector: {
        position: "right"
      },
      "export": {
        "enabled": true
      },
      "responsive": {
        "enabled": true
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
