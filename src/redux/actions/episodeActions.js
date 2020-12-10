import * as types from './types';

export function EpisodeRequest(data) {
  return {
    type: types.EPISODE_REQUEST,
    data,
  };
}

export function EpisodeSuccess(data) {
  return {
    type: types.EPISODE_SUCCESS,
    data,
  };
}

export function EpisodeFailed(data) {
  return {
    type: types.EPISODE_FAILED,
    data,
  };
}
