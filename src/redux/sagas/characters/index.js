import {call, put} from 'redux-saga/effects';

import * as charactersAction from '../../actions/charactersActions';

import api, {apiUrls} from '../../../config/config';

const url = apiUrls.characters;

export function* getCharacters() {

  try {
    const response = yield call(api.get, url);

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
