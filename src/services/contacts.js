import axios from 'axios';
import token from './token.json';

const skipioApi = 'http://stage.skipio.com/api/v2';
const per = 10;

export default {
  getAllContacts(page) {
    let url = `${skipioApi}/contacts?token=${token.apiToken}&page=${page}&per=${per}`
    return axios.get(url)
    .then(response => {
      return response.data
    })
  }
}