import React from 'react';

function SecondsCounter(props) {
    return (
        <div className="seconds-counter">
            <div className="icon"><i className="fa fa-clock-o"></i></div>
            <div className="digits">{props.seconds}</div>
        </div>
    );
}

export default SecondsCounter;
