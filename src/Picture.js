import React from 'react';
import "./Picture.css";
import Axios from 'axios';

const Picture = () => {
Axios.get('https://api.nasa.gov/planetary/apod?api_key=hI7mvMrtmts3yLRICMpu41ASYPcS8rrPGgFYc2Qw')
    .then(response => {
        console.log(response.data);
        let ret = <img src={response.data.url}/>;
})
    .catch(error => {
        console.log("Error from Info.js: " + error);
});
    // return (
    //     // <img src={nasaData.data.url}/>
    //     <div></div>
    // )
    return ret;
}

export default Picture;