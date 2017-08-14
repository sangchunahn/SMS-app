import axios from 'axios';
import token from './token.json';

const skipioApi = 'http://stage.skipio.com/api/v2';

export default {
  createMessage(id, message) {
    let url = `${skipioApi}/messages?token=${token.apiToken}`
    return axios.post(url, {
      recipients: `contact-${id}`,
      message: { body: message }
    })
    .then(response => {
      return response
    })
  }
}