import { eventChannel } from 'redux-saga';
import { bindActionCreators } from 'redux';

export default ({ subscribeData, eventHandlers }) =>
  eventChannel((emitter) => {
    const ws = new WebSocket('ws://192.168.99.100:8889')//eslint-disable-line
    const boundEventHandlers = bindActionCreators(eventHandlers, emitter);
    ws.onopen = () => ws.send(JSON.stringify({ type: 'subscribe', ...subscribeData }));
    ws.onmessage = boundEventHandlers.onmessage;
    return ws.close;
  });