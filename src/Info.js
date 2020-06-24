import React from 'react';
import "./Info.css";
import Axios from 'axios';

const Info = () => {
Axios.get('https://api.nasa.gov/planetary/apod?api_key=hI7mvMrtmts3yLRICMpu41ASYPcS8rrPGgFYc2Qw')
.then(response => {
    console.log(response.data);
    let nasaData = response;
})
.catch(error => {
    console.log("Error from Info.js: " + error);
});

    return (
        <div>
            
        </div>
    )
}

export default Info;