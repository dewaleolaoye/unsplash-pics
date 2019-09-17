import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID bd2be4066b6fa2e2c464a7e323ec73d99c8a8f38c977e88c28a1aa3572f34c0c'
  }
});
