import axios from 'axios';
import { HOST, PORT } from '../constants/api';

export const fetchFootballEventsFromApi = () => // eslint-disable-line
  axios
    .get(`${HOST}:${PORT}/football/live`, { params: { primaryMarkets: true } })
    .then(response => response.data);

export const fetchFootballEventFromApi = eventId => // eslint-disable-line
  axios
    .get(`${HOST}:${PORT}/sportsbook/event/${eventId}`)
    .then(response => response.data);

export const fetchMarketFromApi = marketId => // eslint-disable-line
  axios
    .get(`${HOST}:${PORT}/sportsbook/market/${marketId}`)
    .then(response => response.data);