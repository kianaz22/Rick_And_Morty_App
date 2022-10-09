/* eslint-disable no-param-reassign */
import axios from 'axios';


const instance = axios.create({
  baseURL:'https://rickandmortyapi.com/api',
});

instance.defaults.timeout = 20000;

export default instance;
