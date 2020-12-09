import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
};

export const charactersReducer = createReducer(initialState, {
  [types.CHARACTERS_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.CHARACTERS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.CHARACTERS_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },
});
