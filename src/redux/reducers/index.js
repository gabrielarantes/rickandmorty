import * as appReducer from './appReducer';
import * as netInfoReducer from './netInfoReducer';
import * as charactersReducer from './charactersReducer';

export default Object.assign(
  appReducer,
  netInfoReducer,
  charactersReducer
);