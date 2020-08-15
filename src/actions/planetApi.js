import axios from 'axios';
import { ActionTypes, ROOT_URL } from './index';

export function getPlanet(id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = `${ROOT_URL}/planet/${id}`;
      console.log(`GET: ${url}`);
      //   const headers = { Authorization: `JWT ${localStorage.getItem('token')}` };
      axios.get(url)
        .then((resp) => {
          const { response } = resp.data;
          dispatch({ type: ActionTypes.FETCH_PLANET, payload: response });
          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: ActionTypes.ERROR_SET, error });
          reject(error);
        });
    });
  };
}

export function getPlanets() {
  /*
   * Params should look like:
   * {
   *    RecipeName: str
   * }
   */
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = `${ROOT_URL}/planets`;
      console.log(`GET: ${url}`);
      //   const headers = { Authorization: `JWT ${localStorage.getItem('token')}` };
      axios.get(url)
        .then((resp) => {
          const { response } = resp.data;
          dispatch({ type: ActionTypes.FETCH_PLANETS, payload: response });
          resolve(response);
        })
        .catch((error) => {
          dispatch({ type: ActionTypes.ERROR_SET, error });
          reject(error);
        });
    });
  };
}
