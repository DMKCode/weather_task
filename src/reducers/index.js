import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILURE } from '../actions';
import sampleData from './sample_data';

const initialState = {
  data: sampleData,
  source: 'api',
  status: null
};

export default function reducer(state = initialState, action) {
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