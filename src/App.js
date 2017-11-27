import React, { Component } from 'react';
import {Provider} from 'react-redux';

import book from './assets/address-book.svg';
import './assets/App.css';
import store from './store';
import ContactsForm from './components/ContactsForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={book} className="App-logo" alt="logo" />
            <h1 className="App-title">Contacts App</h1>
          </header>
          <ContactsForm />
        </div>
      </Provider>
      );
    }
  }

  export default App;
