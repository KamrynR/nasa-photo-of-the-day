import React from 'react';

const Info = ({title, date, explanation}) => {
    return (
        <div className="infoCont">
            <p><cite>{title}</cite></p>
            <p><b>Date Taken: </b><br/>{date}</p>
            <p><b>About This Image: </b><br/>{explanation}</p>
        </div>
    )
}

export default Info;