import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `${process.env.NX_APP_API_URL || 'http://localhost:3333'}/api`
});

export default instance;
