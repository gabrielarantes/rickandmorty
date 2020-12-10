import * as appReducer from './appReducer';
import * as netInfoReducer from './netInfoReducer';
import * as charactersReducer from './charactersReducer';
import * as episodeReducer from './episodeReducer';

export default Object.assign(
  appReducer,
  netInfoReducer,
  charactersReducer,
  episodeReducer
);