import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { observer, inject } from 'mobx-react';
import Contact from './contact/Contact'
import _ from 'lodash';
import './contactList.css';

@inject('dataStore')
@observer
export default class ContactList extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.dataStore = this.props.dataStore;
  }

  componentDidMount() {
    let page = 1;
    this.dataStore.fetchContacts(page);
  }

  render() {
    return (
      <div className='contacts-container'>
        <div className='contacts-header'>Contacts</div>
        {_.map(this.dataStore.contacts, contact => {
          return (
            <div className='contact-container' key={contact.id}>
              <Contact contact={contact}/>
            </div>
          )
        })}
      </div>
    );
  }
}
