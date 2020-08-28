import { ActionTypes } from '../actions';

const initialState = {
  // default is 50 milliseconds per Earth Day
  speed: 20,
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
