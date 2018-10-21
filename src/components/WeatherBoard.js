import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import WeatherForecast from './WeatherForecast';

class WeatherDashboard extends PureComponent {
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
    list: state.data.list || {}
  };
};

export default connect(mapStateToProps)(WeatherDashboard);
