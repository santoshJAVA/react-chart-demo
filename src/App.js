import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import './App.css';


function generateChartData() {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 100);

      var visits = 0.0;
      var hits = 0.1;
      var views = 0.2;


  for (var i = 0; i < 100; i++) {
      var newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);

      visits = parseFloat((Math.random()*0.5).toFixed(1)) + 0.4;
      hits = parseFloat((Math.random()*0.5).toFixed(1)) + 0.6;
      views = parseFloat((Math.random()*0.5).toFixed(1)) + 0.8;

      chartData.push({
          date: newDate,
          visits: visits,
          hits: hits,
          views: views
      });
  }
  return chartData;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvider: generateChartData(),
      timer: null
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    const config = {
      "type": "serial",
      "theme": "light",
      "legend": {
          "useGraphSettings": true
      },
      "dataProvider": this.state.dataProvider,
      "synchronizeGrid":true,
      "valueAxes": [{
          "id":"v1",
          "axisColor": "#FF6600",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left"
      }],
      "graphs": [{
          "valueAxis": "v1",
          "lineColor": "#FF6600",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "Chhanel 1",
          "valueField": "visits",
      "fillAlphas": 0
      }, {
          "valueAxis": "v2",
          "lineColor": "#FCD202",
          "bullet": "square",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "Chhanel 1",
          "valueField": "hits",
      "fillAlphas": 0
      }, {
          "valueAxis": "v3",
          "lineColor": "#B0DE09",
          "bullet": "triangleUp",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "Chhanel 1",
          "valueField": "views",
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
      <div className="App">
        <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
      </div>
    );
  }
}

export default App;
