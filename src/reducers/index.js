import { combineReducers } from 'redux';

export function movies(state = { loading: true }, { type, payload }) {
  switch (type) {
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ movies });

export default rootReducer;
