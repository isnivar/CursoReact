import React from 'react'
import addR from '../images/add.png'
import {Link} from 'react-router-dom'

function Redirect(){
    return(
        <div>
            <Link to="/exercise/new"><img src={addR} className="Fitness-Add"/></Link>
        </div>
    )
}

export default Redirect;