import React from 'react';
import '../style/Card.css';

function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.userName}</h1>
                <p>Vamos a trabajar para obtener algunas ganancias</p>
            </div>
        </div>
    );
}

export default Welcome;