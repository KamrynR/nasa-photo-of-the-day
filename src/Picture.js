import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import "./Picture.css";

const Picture = () => {
    const [spacePic, setSpacePic] = useState("");
    
    useEffect(() => {
    Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=hI7mvMrtmts3yLRICMpu41ASYPcS8rrPGgFYc2Qw&date")
        .then(res => { setSpacePic(res.data.url)})
        .catch(err => {console.log(err);});
    }, []);
    console.log(spacePic);
    return (
        <img src={spacePic}/>
    )
}

export default Picture;