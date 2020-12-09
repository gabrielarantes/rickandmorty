import axios from 'axios';

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
};

const api = axios.create({
  baseURL: 'https://my.api.mockaroo.com/',
  timeout: 30000,
  headers,
});

export default api;
