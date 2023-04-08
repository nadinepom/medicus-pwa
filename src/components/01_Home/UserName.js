/*
Transfer of the user name for the start page.
   Version: 09/01/2019
   Author: Nadine Pommerening
*/

import React from 'react';
import {AuthUserContext} from '../Session';
import './Home.css';


const UserName = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <p className="text-bot2">{authUser.username}!</p>
            ) : (
                <p/>
            )
        }
    </AuthUserContext.Consumer>
);

export default UserName;
