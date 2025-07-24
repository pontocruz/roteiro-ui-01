// ./src/api/client.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5290',
});

export default api;