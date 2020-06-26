import React, {useState, useEffect} from 'react';
import {Card, CardBody} from 'reactstrap';
import Axios from 'axios';
import Info from './Info.js';
import Picture from "./Picture.js";

const APIreq = () => {
    const [spaceInfo, setSpaceInfo] = useState("");

    useEffect(() => {
    Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=hI7mvMrtmts3yLRICMpu41ASYPcS8rrPGgFYc2Qw&date")
        .then(res => { setSpaceInfo(res.data);})
        .catch(err => {console.log(err);});
    }, []);
    console.log(spaceInfo);
    
    return(
        <div className="cardMain">
            <Card>
                <Picture
                    url={spaceInfo.url}/> 
                <CardBody>
                <Info
                    key={spaceInfo.id}
                    title={spaceInfo.title}
                    date={spaceInfo.date}
                    explanation={spaceInfo.explanation}/>
                </CardBody>
            </Card>
        </div>
    )
}

export default APIreq;