import React, { Component } from 'react';
import {Provider} from 'react-redux';

import logo from './assets/logo.svg';
import './assets/App.css';
import store from './store';
import ContactsForm from './components/ContactsForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Contacts App</h1>
          </header>
          <ContactsForm />
        </div>
      </Provider>
      );
    }
  }

  export default App;
