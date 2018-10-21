import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import WeatherPanel from '../../components/WeatherPanel';
import WeatherBoard from '../../components/WeatherBoard';
import sampleData from '../../reducers/sample_data'; 

const mockStore = configureStore();

describe('<WeatherPanel />', () => {
  it('should contain a weatherboard', () => {
    const wrapper = shallow(<WeatherPanel data={sampleData} />);
    expect(wrapper.find(WeatherBoard)).toHaveLength(1);
  });
});