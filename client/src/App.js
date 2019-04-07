import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Header from './components/Header/Header';
import NavItem from './components/NavItem/NavItem';
import Portfolio from './containers/Portfolio/Portfolio';
import ManageShares from './containers/ManageShares/ManageShares';
import ManageBalance from './containers/ManageBalance/ManageBalance';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[900] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header>
            <NavItem link="/" exact>Portfolio</NavItem>
            <NavItem link="/balance" exact>Balance</NavItem>
            <NavItem link="/shares" exact>Shares</NavItem>
          </Header>
          
          <div className="main">
            <Switch>
              <Route path="/balance" component={ManageBalance} />
              <Route path="/shares" component={ManageShares} />
              <Route path="/" component={Portfolio} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
