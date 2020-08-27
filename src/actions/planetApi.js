import axios from 'axios';
import { ActionTypes, ROOT_URL } from './index';

// export function getPlanet(id) {
//   return (dispatch) => {
//     return new Promise((resolve, reject) => {
//       const url = `${ROOT_URL}/planets/${id}`;
//       console.log(`GET: ${url}`);
//       //   const headers = { Authorization: `JWT ${localStorage.getItem('token')}` };
//       axios.get(url)
//         .then((resp) => {
//           const { response } = resp.data;
//           dispatch({ type: ActionTypes.FETCH_PLANET, payload: response });
//           resolve(response);
//         })
//         .catch((error) => {
//           dispatch({ type: ActionTypes.ERROR_SET, error });
//           reject(error);
//         });
//     });
//   };
// }

export function getPlanet(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/planets/${id}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLANET, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

// export function getPlanets() {
//   /*
//    * Params should look like:
//    * {
//    *    RecipeName: str
//    * }
//    */
//   console.log('INSIDE GETPLANETS');
//   return (dispatch) => {
//     console.log('inside dispatch');
//     return new Promise((resolve, reject) => {
//       const url = `${ROOT_URL}/planets`;
//       console.log(url);
//       console.log(`GET: ${url}`);
//       //   const headers = { Authorization: `JWT ${localStorage.getItem('token')}` };
//       axios.get(url)
//         .then((resp) => {
//           console.log(resp);
//           const { response } = resp.data;
//           console.log('response');
//           console.log(response);
//           dispatch({ type: ActionTypes.FETCH_PLANETS, payload: response });
//           resolve(response);
//         })
//         .catch((error) => {
//           dispatch({ type: ActionTypes.ERROR_SET, error });
//           reject(error);
//         });
//     });
//   };
// }

export function getPlanets() {
  // ActionCreator returns a function
  // that gets called with dispatch
  // remember (arg) => { } is a function
  return (dispatch) => {
    axios.get(`${ROOT_URL}/planets`)
      .then((response) => {
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCH_PLANETS, payload: response.data });
        // console.log(response.data);
      })
      .catch((error) => {
        // whaaat?
        // dispatch an error, use it in a separate error reducer. this is the beauty of redux.
        // have an error component somewhere show it
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function createPlanet() {
  const fields = {
    id: 2,
    planetName: 'Ego2',
    distanceFromSun: 10000000,
    diameter: 4000,
    mass: 650000,
    density: 50,
  };
  return (dispatch) => {
    axios.post(`${ROOT_URL}/planets`, fields)
      .then((response) => {
        dispatch({ type: ActionTypes.CREATE_PLANET, payload: response.data });
        // history.push('/');
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

// export function getPlanets() {
//   // ActionCreator returns a function
//   // that gets called with dispatch
//   // remember (arg) => { } is a function
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/planets`)
//       .then((response) => {
//         console.log(response);
//         // once we are done fetching we can dispatch a redux action with the response data
//         dispatch({ type: ActionTypes.FETCH_PLANETS, payload: response.data });
//         // console.log(response.data);
//       })
//       .catch((error) => {
//         // whaaat?
//         // dispatch an error, use it in a separate error reducer. this is the beauty of redux.
//         // have an error component somewhere show it
//         dispatch({ type: ActionTypes.ERROR_SET, error });
//         // might you also want an ERROR_CLEAR action?
//       });
//   };
// }
