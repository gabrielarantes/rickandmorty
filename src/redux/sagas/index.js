import {takeLatest, all} from 'redux-saga/effects';

import * as types from '../actions/types';
import {getCharacters} from '../sagas/characters';
import {setNetInfo} from '../sagas/netInfo';
import {getEpisode} from '../sagas/episode'

export default function* rootSaga() {
  return yield all([
    takeLatest(types.NET_INFO_REQUEST, setNetInfo),
    takeLatest(types.CHARACTERS_REQUEST, getCharacters),
    takeLatest(types.EPISODE_REQUEST, getEpisode),
  ]);
}
