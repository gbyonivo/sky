import { eventChannel } from 'redux-saga';
import { bindActionCreators } from 'redux';
import { WEBSOCKET_HOST, WEBSOCKET_PORT } from '../constants/api';

export default ({ subscribeData, eventHandlers }) =>
  eventChannel((emitter) => {
    const ws = new WebSocket(`${WEBSOCKET_HOST}:${WEBSOCKET_PORT}`)//eslint-disable-line
    const boundEventHandlers = bindActionCreators(eventHandlers, emitter);
    ws.onopen = () => ws.send(JSON.stringify({ type: 'subscribe', ...subscribeData }));
    ws.onmessage = boundEventHandlers.onmessage;
    return ws.close;
  });