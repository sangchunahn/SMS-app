import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { observer, inject } from 'mobx-react';
import './message.css'

@inject('dataStore')
@observer
export default class Messages extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.dataStore = this.props.dataStore;
    this.contact = this.dataStore.contact;
    this.state = {
      message: '',
      contact: ''
    }
    console.log('this.dataStore.contact: ', this.dataStore.contact);
  }

  messageChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  sendMessage() {
    if (this.state.message.length > 320) {
      alert('This message is longer than 320 characters')
    } else {
      this.dataStore.createMessage(this.contact.id, this.state.message)
      .then((response) => {
        if (response.status === 200) {
          alert(`Message has been successfully sent to ${this.contact.full_name} ` )
        } 
      })
    }
  }

  render() {
    console.log('this.state.contact: ', this.state.contact);
    return (
      <div className='messages-container'>
        <div className='messages-header'>Send {this.contact.first_name} a Message!</div>
        <textarea onChange={this.messageChange} placeholder='Type message here (Max character of 320)'/>
        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}
