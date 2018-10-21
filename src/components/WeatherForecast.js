import React, { PureComponent } from 'react';

class WeatherForecast extends PureComponent {

  groupByDays = (data=[]) => {
    return (data.reduce((list, item) => {
      const forecastTxt = item.dt_txt || item.dt_iso || '';
      const forecastDate = forecastTxt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {}));
  };

  getHour = time => time ? new Date(time).getHours() : new Date().getHours();
  getDate = date => date ? new Date(date).getDate() : new Date().getDate();

  render() {

    const { forecasts, source } = this.props;
    const tiles = Object.values(this.groupByDays(forecasts));
    const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;
    console.log(source);
    return (
      <div className="forecasts">
        {forecastTiles.map((item, i) => (
          <div
            className="forecast"
            key={i}
            ref={`div-${i}`}
          >
            <div className="forecast-date">
              { source === 'csv' ? item[0].dt_iso.split(' ')[0] : item[0].dt_txt.split(' ')[0]}
            </div>
            <div className="hourly" key={i}>
              {item.map((nItem, l) => (
                <div className="hourly-info" key={l}>
                  <div className="hour-temperature ">
                    {`${ source === 'csv' ? Math.round(nItem.temp) : Math.round(nItem.main.temp)}°C`}
                  </div>
                  <div className="hour-of-the-day">
                    {`${this.getHour(nItem.dt * 1000)}:00`}
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default WeatherForecast;