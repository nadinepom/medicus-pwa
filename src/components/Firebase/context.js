/*
Creates a Firebase Context object.
   Version: 24/02/2019
   Author: rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/Firebase/context.js
*/

import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
