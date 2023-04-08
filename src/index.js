/*
When you load React from a <script>tag, these ReactDOM top-level APIs are globally available.
Deploying Firebase is from rwieruch.
   Version: 10/01/2019
   Author: rwieruch/ Nadine Pommerening
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/index.js
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Firebase, {FirebaseContext} from './components/Firebase';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/iphone-inline-video/dist/iphone-inline-video';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function (registration) {
      console.log('Registered:', registration);
    })
    .catch(function (error) {
      console.log('Registration failed: ', error);
    });
}

ReactDOM.render(<FirebaseContext.Provider value={new Firebase()}>
  <App/>
</FirebaseContext.Provider>,
document.getElementById('root'));
