
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';


// const user = {
//   name: 'Israel',
//   lastname: 'Vallejo',
//   gusto: 'Programar'
// };

// function getInfo(user){
//   return `${user.name} ${user.lastname}`;
// };

// const element = (
//   <div>
//     <h1>{getInfo(user)}</h1>
//     <h3>{user.gusto}</h3>
//   </div>
// );

const container = document.getElementById('root');

ReactDOM.render(<Card 
                  title="Tecnicas de ejercicio"
                  description="Aprende excelente tecnicas de ejercicio en esta pagina"
                  img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                  leftColors="#A74CF2"
                  rightColors="#617BFB"
                  />, container);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
