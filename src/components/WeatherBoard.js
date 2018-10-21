import React, { PureComponent } from "react";

class WeatherDashboard extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <h1>5-Day Weather Forecast</h1>
        </header>
        <section>
          <div>
            Days go here
          </div>
        </section>
      </div>
    );
  }
};

export default WeatherDashboard;
