import * as types from './types';

export function EquipamentsRequest(data) {
  return {
    type: types.EQUIPAMENTS_REQUEST,
    data,
  };
}

export function EquipamentsSuccess(data) {
  return {
    type: types.EQUIPAMENTS_SUCCESS,
    data,
  };
}

export function EquipamentsFailed(data) {
  return {
    type: types.EQUIPAMENTS_FAILED,
    data,
  };
}