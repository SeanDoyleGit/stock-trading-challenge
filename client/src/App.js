import React, { Component } from 'react';
import ManageBalance from './containers/ManageBalance/ManageBalance';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ManageBalance />
      </div>
    );
  }
}

export default App;
