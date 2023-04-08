/*
Used to sign out of the page.
You will automatically be redirected to the start page.
   Version: 24/02/2019
   Author: Nadine Pommerening
*/

import React from 'react';

import {withFirebase} from '../../Firebase/index';
import Link from 'react-router-dom/es/Link';
import * as ROUTES from '../../../constants/routes';
import '../index.css';

const SignOut = ({firebase}) => (

    <Link to={ROUTES.HOME} className="link-color2" onClick={firebase.doSignOut}>
        <button className="button-logout">Abmelden</button>
    </Link>

);

export default withFirebase(SignOut);
