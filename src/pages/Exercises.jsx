import React from 'react';
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import Redirect from '../components/Redirect';
import Loading from '../components/Loading';
import FatalError from './500'

class Exercises extends React.Component{
    
    state = {
        data: [],
        loading: true,
        err: null
    }

    async componentDidMount(){
        await this.fetchExercises();
    }

    fetchExercises = async () => {

        try {
            
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
    
            this.setState({
                data,
                loading: false
            });

        } catch (err) {
            this.setState({
                loading: false,
                err
            })
        }
    }

    render(){

        if(this.state.loading)
            return <Loading />

        if(this.state.err)
            return <FatalError />

        return(
            <div>
                <Welcome userName='Israel'/>
                <ExerciseList exercises={this.state.data} />
                <Redirect />
            </div>
        );
    }
}

export default Exercises;