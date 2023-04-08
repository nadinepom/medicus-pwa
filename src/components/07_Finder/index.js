/*
The doctor's finder.
The page is public for all.l
   Version: 13/02/2019
   Author: Nadine Pommerening
*/

import React from 'react';
import Navigation from '../Navigation';
import './finder.css';

import MobileSearch from './MobileSearch';
import DesktopSearch from './DesktopSearch';


const Finder = () => {
    return (
        <div className="background-finder">
            <div className="abstand3"/>
            <Navigation title="Ärztefinder"/>

            <div className="container abstand2">
                <div className="row margin0">
                    <DesktopSearch/>
                    <MobileSearch/>


                    <div className="col-xs-12 col-sm-6 col-lg-6"/>
                </div>
            </div>
            <div className="abstand3"/>
        </div>
    );
};

export default Finder;

