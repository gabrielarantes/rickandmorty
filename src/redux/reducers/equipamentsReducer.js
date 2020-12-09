import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
};

export const equipamentsReducer = createReducer(initialState, {
  [types.EQUIPAMENTS_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.EQUIPAMENTS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.EQUIPAMENTS_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },
});
