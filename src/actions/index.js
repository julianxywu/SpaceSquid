export const ROOT_URL = 'http://localhost:3000';

// keys for actiontypes
export const ActionTypes = {
  FETCH_PLANETS: 'FETCH_PLANETS',
  FETCH_PLANET: 'FETCH_PLANET',
  RESET_PLANET: 'RESET_PLANET',
  ERROR_SET: 'ERROR_SET',
  SPEED_SET: 'SPEED_SET',
};

export function changeSpeed(speed) {
  return {
    type: ActionTypes.SPEED_SET,
    payload: speed,
  };
}
