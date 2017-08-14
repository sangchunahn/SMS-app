import React, { Component } from 'react';
import ContactList from './contacts/ContactList';
import Message from './message/Message'
import { observer, inject } from 'mobx-react';
import './App.css';

@inject('dataStore')
@observer
class App extends Component {
  constructor(props) {
  super(props);
  this.dataStore = this.props.dataStore;
} 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Skipio SMS App</h2>
        </div>
        <div className='main-container'>
          <ContactList/>
          {this.dataStore.contact ? 
            <Message/> : <div className='send-message'>Click on a contact to send them a message!</div>
          } 
        </div>
      </div>
    );
  }
}

export default App;
