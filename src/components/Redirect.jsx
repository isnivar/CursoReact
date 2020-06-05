import React from 'react'
import addR from '../images/add.png'
import {Link} from 'react-router-dom'

const Redirect = () => (
    <div>
        <Link to="/exercise/new"><img src={addR} className="Fitness-Add" alt="Ejercicios a crear"/></Link>
    </div>
)


export default Redirect;