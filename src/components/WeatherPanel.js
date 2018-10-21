import React from 'react';

import WeatherBoard from './WeatherBoard';

const WeatherPanel = ({ data }) => {  
    return (
      <div>
        <WeatherBoard data={data} />
      </div>
    );
};

export default WeatherPanel;