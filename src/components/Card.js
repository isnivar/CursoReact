import React from 'react';
import excerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png'; 
import '../style/Card.css';


export default class Card extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state= {
    //         img: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
    //     }
    // }


    // componentDidMount(){
    //     setTimeout(() =>{
    //         this.setState({
    //             img:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
    //         });
    //     }, 5000);
    // }
    
    render(){
        const {title, description, img, leftColors, rightColors} = this.props;

        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColors}, ${rightColors})`,
                    margin: '15px'
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
        <                   p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
