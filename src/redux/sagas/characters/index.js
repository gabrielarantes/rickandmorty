import {call, put} from 'redux-saga/effects';

import * as charactersAction from '../../actions/charactersActions';

import api, {apiUrls} from '../../../config/config';

import {isNull} from 'lodash';

const url = apiUrls.characters;

export function* getCharacters(givenUrl) {
  try {
    const response = yield call(
      api.get,
      isNull(givenUrl.data)
        ? url
        : givenUrl.data.replace('https://rickandmortyapi.com/api/', ''),
    );

    let {success} = response.data;
    if (success) {
      yield put(charactersAction.CharactersSuccess(response.data));
    } else {
      yield put(charactersAction.CharactersFailed(response.data));
    }
  } catch (error) {
    yield put(charactersAction.CharactersFailed(error));
  }
}
