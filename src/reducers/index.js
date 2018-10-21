import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILURE } from '../actions';
import { initialState } from '../store'; 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA: {
      return {
        ...state,
        loading: true
      };
      break;
    }

    case REQUEST_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        source: action.payload.source || state.source,
        status: 'success',
        loading: false
      };
      break;
    }

    case REQUEST_DATA_FAILURE: {
      return {
        ...state,
        status: 'failure',
        loading: false
      };
      break;
    }

    default:
      return state;
  }

  return state;
}