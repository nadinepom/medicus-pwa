/*
The upper navigation bar contains the back button, title and login button.
   Version: 10/01/2019
   Author: Nadine Pommerening
*/

import GoBack from './GoBack';
import React from 'react';
import './12_NavbarBottom.css';

export default function Navigation(props) {
    return (
        <div className="navbar navbar-nav fixed-top">
            <nav className="container">
                <div className="go-back">
                    <GoBack/>
                </div>
                <h1 className="header-text">{props.title}</h1>
            </nav>
        </div>
    );
}
