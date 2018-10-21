import React, { PureComponent } from 'react';

class WeatherForecast extends PureComponent {

  groupByDays = (data=[]) => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {}));
  };

  getDayInfo = data => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

  getHour = time => time ? new Date(time).getHours() : new Date().getHours();
  getDate = date => date ? new Date(date).getDate() : new Date().getDate();

  render() {

    const { forecasts } = this.props;
    const tiles = Object.values(this.groupByDays(forecasts));
    const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;
    return (
      <div>
        {forecastTiles.map((item, i) => (
          <div
            key={i}
            ref={`div-${i}`}
          >
            <div>
              {this.getDayInfo(item)}
            </div>
            <div key={i}>
              {item.map((nItem, l) => (
                <div key={l}>
                  <div>
                    {`${Math.round(nItem.main.temp)}°C`}
                  </div>
                  <div>
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