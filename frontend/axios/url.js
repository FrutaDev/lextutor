import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config()

const url = process.env.URL

const API = axios.create({
    baseURL: `http://${url}`
});

export default API;
