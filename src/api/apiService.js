import axios from 'axios';
import { HOST, PORT } from '../constants/api';

export const fetchFootballEventsFromApi = () => // eslint-disable-line
  axios
    .get(`${HOST}:${PORT}/football/live`, { params: { primaryMarkets: true } })
    .then(response => response.data);