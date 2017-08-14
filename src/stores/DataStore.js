import {observable, action} from 'mobx';
import autoBind from 'react-autobind';

import contactService from '../services/contacts'
import messageService from '../services/message'

export default class DataStore {
  @observable contacts = '';
  @observable contact  = '';

  constructor() {
    autoBind(this);
  }

  @action
  fetchContacts(page) {
    return contactService.getAllContacts(page)
    .then(response => {
      this.contacts = response.data
    }) 
  }

  @action
   containContact(contact) {
    this.contact = contact
  }

  @action
  createMessage(id, message) {
    return messageService.createMessage(id, message)
    .then(response => {
      return response
    }) 
  }

}