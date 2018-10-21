import React from 'react';
import { render, mount, shallow } from 'enzyme';

import configureStore from 'redux-mock-store';
import WeatherBoard from '../../components/WeatherBoard';
import WeatherForecast from '../../components/WeatherForecast';
import sampleData from '../../reducers/sample_data'; 

const mockStore = configureStore();
const store = {
  data: sampleData,
  source: 'api',
  status: 'success'
};

describe('<WeatherBoard />', () => {
  it('should contain app heading', () => {
    const wrapper = mount(<WeatherBoard store={mockStore(store)} />);
    const heading = <h1>5-Day Weather Forecast</h1>;
    expect(wrapper.contains(heading)).toEqual(true);
  });

  it('should receive data prop', () => {
    const wrapper = mount(<WeatherBoard data={sampleData} store={mockStore(store)} />);
    expect(wrapper.prop('data')).toBeDefined();
  });

  it('should contain a WeatherForecast', () => {
    const wrapper = mount(<WeatherBoard data={sampleData} store={mockStore(store)} />);
    expect(wrapper.find(WeatherForecast)).toHaveLength(1);
  });
});