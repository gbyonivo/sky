import axios from 'axios';
import { HOST, PORT } from '../constants/api';

export const fetchFootballEventsFromApi = () => // eslint-disable-line
  axios
    .get(`${HOST}:${PORT}/football/live`)
    .then(response => response.data);