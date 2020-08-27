import { ActionTypes } from '../actions';

const initialState = {
  // default is 100 milliseconds per Earth Day
  speed: 100,
};

const SystemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SPEED_SET:
      return { speed: action.payload };
    default:
      return state;
  }
};

export default SystemReducer;
