import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SeriesChart from './screen/SeriesChart';
import BarChart from './screen/BarChart';

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <h2>Master Projetos Demo</h2>
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>Consumption</Tab>
            <Tab>Circuits</Tab>
          </TabList>
      
          <TabPanel>
            <BarChart />
          </TabPanel>
          <TabPanel>
            <SeriesChart />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
