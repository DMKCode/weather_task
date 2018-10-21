import React from 'react';

import * as actions from '../../actions';
import reducer from '../../reducers';
import { initialState } from '../../store';

import sampleData from '../../reducers/sample_data';
describe('data reducer', () => {
  
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_DATA', () => {
    const action = {
      type: actions.REQUEST_DATA
    };

    expect(reducer(initialState, action)).toEqual({ ...initialState, loading: true });
  });

  it('should handle REQUEST_DATA_SUCCESS', () => {
    const action = {
      type: actions.REQUEST_DATA_SUCCESS,
      payload: { data: sampleData, source: 'api' }
    };

    expect(reducer(initialState, action)).toEqual({ ...initialState, data: sampleData, status: 'success' });
  });

  it('should handle REQUEST_DATA_FAILURE', () => {
    const action = {
      type: actions.REQUEST_DATA_FAILURE,
      payload: sampleData
    };

    expect(reducer(initialState, action)).toEqual({ ...initialState, status: 'failure' });
  });
});