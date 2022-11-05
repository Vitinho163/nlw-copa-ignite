import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.42.2:3333'
})

//ip da onde o expo está rodando.