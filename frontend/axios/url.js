import axios from 'axios';

// Reemplaza con la IP local de tu PC
const url = `192.168.1.64:8000`

const API = axios.create({
    baseURL: `http://${url}`
});

export default API;
