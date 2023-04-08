/*
Combine the different functions on one page.
   Version: 08/01/2019
   Author: Nadine Pommerening

*/

import React from 'react';
import Application from './Application';
import Navigation from '../Navigation';

const Chatbot = () => {
    return (
        <div>
            <div className="abstand3"/>
            <Navigation title="Frag Medicus"/>
            <Application/>
        </div>
    );
};

export default Chatbot;


