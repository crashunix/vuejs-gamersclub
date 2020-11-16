import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://strapi-hltv.herokuapp.com/'
});

export default Api;