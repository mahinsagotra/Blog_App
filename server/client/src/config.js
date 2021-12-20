import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://blog-app-mahin.herokuapp.com/api/"
})