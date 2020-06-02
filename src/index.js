
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';

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

ReactDOM.render(<App />, container);


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
