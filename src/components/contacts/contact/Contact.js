import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { observer, inject } from 'mobx-react';
import './contact.css'

@inject('dataStore')
@observer
export default class Contact extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.dataStore = this.props.dataStore;
    this.contact = this.props.contact
  } 

  contactClick(event, value) {
    this.dataStore.containContact(value)
  }

  render() {
    return (
      <div className='contact-container' onClick={event => this.contactClick(event, this.contact)}>
        <img src={this.contact.avatar_url} alt=""/>
        <div className='contact-name'>{this.contact.full_name}</div>
        <div className='contact-phone'>{this.contact.phone_mobile}</div>
      </div>
    );
  }
}
