import React, { Component } from 'react';
import {Provider} from 'react-redux';

import logo from './assets/logo.svg';
import './assets/App.css';
import store from './store';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Main />
        </div>
      </Provider>
      );
    }
  }

  export default App;
