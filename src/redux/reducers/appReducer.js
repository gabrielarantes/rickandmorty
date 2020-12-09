import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
  darkMode: false,
};

export const appReducer = createReducer(initialState, {
  [types.APP_SET_DARK_MODE](state, action) {
    return {
      ...state,
      darkMode: action.data,
    };
  },
});
