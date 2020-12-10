import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
};

export const episodeReducer = createReducer(initialState, {
  [types.EPISODE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.EPISODE_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.EPISODE_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },
});
