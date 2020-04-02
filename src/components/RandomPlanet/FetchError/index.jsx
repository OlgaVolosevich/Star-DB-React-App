import React from 'react';
import './FetchError.scss';

export default function FetchError() {
    return (
        <div className="errorText">
            <h3>OOPS!</h3>
            <p>Something has gone terribly wrong!</p>
            <p>But we've already sent drones to fix it!</p>
        </div>
    )
}
