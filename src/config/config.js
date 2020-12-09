import axios from 'axios';

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
};

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 30000,
  headers,
});

export const apiUrls = {
  characters: 'character',
};

export default api;
