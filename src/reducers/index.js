// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import PlanetReducer from './planet-reducer';
import SystemReducer from './system-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  planet: PlanetReducer,
  system: SystemReducer,
});

export default rootReducer;
