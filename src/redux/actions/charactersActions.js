import * as types from './types';

export function CharactersRequest(data) {
  return {
    type: types.CHARACTERS_REQUEST,
    data,
  };
}

export function CharactersSuccess(data) {
  return {
    type: types.CHARACTERS_SUCCESS,
    data,
  };
}

export function CharactersFailed(data) {
  return {
    type: types.CHARACTERS_FAILED,
    data,
  };
}
