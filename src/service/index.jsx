import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const service = {
  getUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default service;
