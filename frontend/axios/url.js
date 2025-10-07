import axios from 'axios';
import urlString from './urlString';

const url = urlString

const API = axios.create({
    baseURL: url
});

export default API;
