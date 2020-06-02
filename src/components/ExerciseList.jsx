import React from 'react';
import Card from './Card';

function ExerciseList(props){
    return(
        <div>
            {props.exercises.map((exercise)=>{
                return(
                    <Card 
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColors={exercise.leftColor}
                        rightColors={exercise.rightColor}
                    />
                )
            })};
        </div>
    )
}

export default ExerciseList;