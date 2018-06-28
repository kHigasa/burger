import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b02b2.firebaseio.com/'
});

export default instance;
