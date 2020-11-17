import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API
});

export default Api;