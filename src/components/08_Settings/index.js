/*
The settings.
The page is public for all.

   Version: 09/01/2019
   Author: Nadine Pommerening
*/

import React from 'react';
import Navigation from '../Navigation';
import './index.css';
import SignOutButton from './SignOutButton';

const Settings = () => {
    return (
        <div>
            <div className="abstand3"/>
            <Navigation title="Einstellungen"/>
            <div className="container abstand2">
                <div className="row margin0">
                    <div className="col-xs-12 col-sm-8 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title">Benachrichtigungen</p>
                                <hr/>
                                <div>
                                    <p className="description3">Push-Benachrichtigung </p>
                                    <div className="custom-control custom-switch position-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                                        <label className="custom-control-label" htmlFor="customSwitches"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="abstand"/>
                    </div>

                    <div className="col-xs-12 col-sm-4 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title">Rechtliche Informationen</p>
                                <hr/>
                                <a className="description">Datenschutz </a>
                                <a className="description">AGB</a>
                                <a className="description">Impressum</a>
                                <div className="abstand-settings"/>

                                <a className="description2">Feedback senden</a>
                            </div>
                        </div>
                        <div className="abstand"/>
                        <SignOutButton/>
                    </div>
                </div>
            </div>
            <div className="abstand3"/>
            <div className="abstand2"/>
        </div>
    );
};

export default Settings;
