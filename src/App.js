import React, { Component } from 'react';
import {mapStateToProps, store} from './redux/store';
import {Provider, connect} from 'react-redux';
import Search from './components/Search';
import Matches from './components/Matches';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search />
        </div>
        <Matches />
      </div>
    );
  }
}

const Container = connect(mapStateToProps, null)(App);

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;
