import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { csvToObject, formatCSV } from '../utils';
import WeatherForecast from './WeatherForecast';
import { REQUEST_DATA, REQUEST_DATA_SUCCESS } from '../actions';

class WeatherDashboard extends PureComponent {
  componentDidMount() {  
  }

  handleCsvSubmit = (e) => {
    e.preventDefault(); 
  }
  
  handleApiSubmit = (e) => {
    e.preventDefault();
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

  handleFileChange = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    if (e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const csv = formatCSV(csvToObject(fileReader.result));
        dispatch({ type: REQUEST_DATA_SUCCESS, payload: { data: { list: csv }, source: "csv" } });
      };
      const csv = fileReader.readAsText(e.target.files[0]);
    }
  }


  render() {
    const { list, source } = this.props;
    return (
      <div className="weather-board">
        <header>
          <h1>5-Day Weather Forecast</h1>
        </header>
        <form onSubmit={this.handleCsvSubmit}>
          Select a csv file: <input type='file' accept='.csv' name='myFile' onChange={this.handleFileChange} />
          <br />
          <input type='submit' value='Use CSV' />
        </form>
        <p>OR</p>
        <form onSubmit={this.handleApiSubmit}>
          <input type='submit' value='Use Api' />
        </form>
        { this.props.loading ? <p>loading...</p> : null }
        <section>
          <WeatherForecast forecasts={list} source={source} />
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    list: state.data.list || [],
    source: state.source,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(WeatherDashboard);
