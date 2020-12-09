import * as appReducer from './appReducer';
import * as netInfoReducer from './netInfoReducer';
import * as equipamentsReducer from './equipamentsReducer';

export default Object.assign(
  appReducer,
  netInfoReducer,
  equipamentsReducer
);