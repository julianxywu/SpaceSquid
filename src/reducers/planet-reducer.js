import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLANETS:
      return { ...state, all: action.payload };
    case ActionTypes.FETCH_PLANET:
      return { ...state, current: action.payload };
    case ActionTypes.RESET_PLANET:
      return initialState;
    default:
      return state;
  }
};
export default PlanetReducer;
