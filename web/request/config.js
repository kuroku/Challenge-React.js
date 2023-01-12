import axios from 'axios'

export const serverFetch = axios.create({
  baseURL: 'http://localhost:3000',
});