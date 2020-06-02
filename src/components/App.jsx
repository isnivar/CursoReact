import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Exercises from '../pages/Exercises';
import ExerciseNew from '../components/ExerciseNew';
import NotFound from '../components/NotFound';


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/exercise' component={Exercises}></Route>
                <Route exact path='/exercise/new' component={ExerciseNew}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )

}

export default App;