// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import PlanetReducer from './planet-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  planet: PlanetReducer,
});

export default rootReducer;
