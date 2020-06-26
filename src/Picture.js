import React, {useState, useEffect} from 'react';
import "./Picture.css";

const Picture = ({url}) => {
    return (
        <img src={url}/>
    )
}

export default Picture;