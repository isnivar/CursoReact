import React from 'react';
import '../style/Errors.css';
import FatalErrorImg from '../images/500.png';

const FatalError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 500 Unexpected Error</h1>
        <img src={FatalErrorImg} alt="500 Error Unexpected" className="Error_Image" />

    </div>
)

export default FatalError;