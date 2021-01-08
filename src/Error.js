import React from 'react';
import './Error.css';
function Error({error}) {
    return (
        <div className="error">
            <h1 className="error-text">Error: {error}</h1>
            <h3 className="error-text">Please accept location request</h3>
        </div>
    )
}

export default Error
