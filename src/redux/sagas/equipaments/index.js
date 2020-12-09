import {call, put} from 'redux-saga/effects';

import api from '../../../config/config'

const url = `epilist?key=52d6c330`; 

import * as equipamentsAction from '../../actions/equipamentsActions';

export function* getEquipaments() {

  try {
    const response = yield call(api.get, url);

    let {success} = response.data;
    if (success) {
      yield put(equipamentsAction.EquipamentsSuccess(response.data));
    } else {
      yield put(equipamentsAction.EquipamentsFailed(response.data));
    }
  } catch (error) {
    yield put(equipamentsAction.EquipamentsFailed(error));
  }
}