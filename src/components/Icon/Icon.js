import React from "react";
import classes from './Icon.module.css';
// import React, { useState } from 'react';
const Icon = () => {

    return (
        <div className={classes.Icon}>
            <i className="wi wi-day-sunny"></i>
        </div>
    )
}
export default Icon;
// export default class Icon extends React.Component {
//     state = {
//         data: {
//             weather: [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10n"
//                 }
//             ]
//         }
//     };
//     render() {
//         const renderWeatherIcon = this.state.data.weather.map(item => {
//             return <img
//                 src={`http://openweathermap.org/img/wn/${item.icon}.png`}
//                 alt="weather status icon"
//             />;
//         });
//         return <div>{renderWeatherIcon}</div>;
//     }
// }

