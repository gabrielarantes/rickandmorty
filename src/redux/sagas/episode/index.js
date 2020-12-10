import {call, put} from 'redux-saga/effects';

import * as episodeAction from '../../actions/episodeActions';

import api, {apiUrls} from '../../../config/config';

const url = apiUrls.episode;

export function* getEpisode(data) {

  console.log(data)

  try {
    const response = yield call(api.get, `${apiUrls.episode}/${parseInt(data.data)}`);

    let {success} = response.data;
    if (success) {
      yield put(episodeAction.EpisodeSuccess(response.data));
    } else {
      yield put(episodeAction.EpisodeFailed(response.data));
    }
  } catch (error) {
    yield put(episodeAction.EpisodeFailed(error));
  }
}
