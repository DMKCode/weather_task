import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILURE } from '../actions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_DATA: {
      return {
        ...state
      };
      break;
    }

    case REQUEST_DATA_SUCCESS: {
      return {
        ...state
      };
      break;
    }

    case REQUEST_DATA_FAILURE: {
      return {
        ...state
      };
      break;
    }
  }

  return state;
}