import React from 'react';
import SpinnerGif from '../../assets/spinner.gif';

function Spinner() {
    return (
        <div>
            <img
                src={SpinnerGif}
                style={{
                width: '200px',
                margin: 'auto',
                display: 'block'
            }}
                alt="Loading..."/>
        </div>
    )
}

export default Spinner
