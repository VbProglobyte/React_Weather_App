import React from 'react';
import classes from './Conditions.module.css';


const Conditions = (props) => {
    
    return (

        <div className={classes.Wrapper}>
            {props.error && <small>Please enter a valid city.</small>}
            {props.loading && <div>Loading...</div>}

            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>It is currently <em><mark> {Math.round(props.responseObj.main.temp)} degrees</mark></em> out with {props.responseObj.weather[0].description}.</p>
                     
                     <img alt="icon"
                     src={`http://openweathermap.org/img/w/${props.icon}.png`}
                     />
                     
                </div>
                : null
                   }
                   
        </div>
    )
}

export default Conditions;