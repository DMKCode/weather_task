import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import WeatherForecast from './WeatherForecast';
import { REQUEST_DATA } from '../actions';

class WeatherDashboard extends PureComponent {
  componentDidMount() {  
    const detectLocation = new Promise((resolve,reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords);
        }, (error) => {
          if(error.code === error.PERMISSION_DENIED) {
            console.error('Error detecting location.');
          }
        });
      }
    });

    detectLocation.then((location) => {
      this.props.dispatch({ type: REQUEST_DATA, payload: location });
    }).catch(() => {
    });
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <header>
          <h1>5-Day Weather Forecast</h1>
        </header>
        <section>
          <WeatherForecast forecasts={list} />
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    list: state.data.list || []
  };
};

export default connect(mapStateToProps)(WeatherDashboard);
