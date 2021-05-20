import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api`
});

export default instance;
