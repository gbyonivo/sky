import { call } from 'redux-saga/effects';
import footballEvents from './footballEventsSagas';

export default function* rootSaga() {
  yield [
    call(footballEvents)
  ];
}