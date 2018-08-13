import React, { Component } from 'react';
import './App.css';
import SeriesChart from './screen/SeriesChart';
import BarChart from './screen/BarChart';

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="App">
        <BarChart />
        <SeriesChart />
      </div>
    );
  }
}

export default App;
