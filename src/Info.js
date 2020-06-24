import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import "./Info.css";

const Info = () => {
    const [spaceInfo, setSpaceInfo] = useState("");

    useEffect(() => {
    Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=hI7mvMrtmts3yLRICMpu41ASYPcS8rrPGgFYc2Qw&date")
        .then(res => { setSpaceInfo(res.data);})
        .catch(err => {console.log(err);});
    }, []);
    console.log(spaceInfo);
    return (
        <div>
            <p>title: {spaceInfo.title}</p>
            <p>date: {spaceInfo.date}</p>
            <p>explanation: {spaceInfo.explanation}</p>
        </div>
    )
}

export default Info;