import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // O Vite vai redirecionar para http://localhost:3000/api
});

export default api;
