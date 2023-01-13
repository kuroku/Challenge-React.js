import axios from 'axios'

export const serverFetch = axios.create({
  baseURL: 'http://localhost:3000',
});

export const universityFetch = axios.create({
  baseURL: 'http://universities.hipolabs.com',
})

export const countryFetch = axios.create({
  baseURL: 'https://restcountries.com',
})