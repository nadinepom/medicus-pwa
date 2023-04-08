/*
Differentiation between Login - and Logout Button, whether the user is logged in or out.
As an example of the structure I used the code of rwieruch.
   Version: 25/02/2019
   Author: Nadine Pommerening
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/Navigation/index.js
*/

import React from 'react';

import {AuthUserContext} from '../Session/index';
import SignOut from '../00_Landing/SignOut';

const SignOutButton = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser}/>
            ) : (
                <NavigationNonAuth/>
            )
        }
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({authUser}) => (
    <SignOut/>
);

const NavigationNonAuth = () => (
    <p/>
);

export default SignOutButton;
