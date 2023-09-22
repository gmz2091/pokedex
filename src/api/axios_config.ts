import axios from 'axios';
import {config} from './api_config';

export const api = axios.create({
  baseURL: config.api.baseUrl,
});
