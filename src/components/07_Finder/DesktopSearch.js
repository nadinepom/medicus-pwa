/*
The doctor's finder.
The page is public for all.
   Version: 13/02/2019
   Author: Nadine Pommerening
*/

import React from 'react';
import './finder.css';
import {InputWithButton} from 'watson-react-components';

import doctor_image from '../images/icon-doctor.png';


const DesktopSearch = () => {
    return (
        <div className="mobile-hide">
            <div id="bottom-sheet" className="col-xs-12 col-sm-6 col-lg-6">
                <div className="card">
                    <div className="conversation">
                        <div className="row margin0">
                            <div className="conversation__input-container top col-md-12">
                                <InputWithButton className="conversation__input form-control"
                                                 placeholder="Suchen"/>
                            </div>

                            <div className="conversation__messages finder">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="dropdown">
                                            <button className="button-style dropdown-toggle text-position float-left"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Entfernung
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-color dropdown-item">Entfernung</a>
                                                <a className="dropdown-item">Fachgebiet</a>
                                                <a className="dropdown-item">Öffnungszeiten</a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-position float-right">5 Ergebnisse</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2 box-background box-radius-left">
                                        <img src={doctor_image} alt='icon-doctor'/>
                                    </div>
                                    <div className="col-9 box-background">
                                        <p className="headline">Arzt</p>
                                        <p className="card-text">Fachgebiet <br/> Adresse, Öffnungszeiten</p>
                                    </div>
                                    <div className="col-1 box-background box-radius-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                             viewBox="0 0 44 44"
                                             className="svg-image">
                                            <path fill="#6F7182" fillRule="nonzero"
                                                  d="M32.189 26.43l3.625-3.625a1 1 0 0 0-.002-1.592l-.212-.211V21l-3.293-3.293a1 1 0 1 1 1.415-1.414l4.91 4.91a1 1 0 0 1 .002 1.592l-4.912 4.912a1 1 0 0 1-1.533-1.278z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="abstand2"/>
                                <div className="row">
                                    <div className="col-2 box-background box-radius-left">
                                        <img src={doctor_image} alt='icon-doctor'/>
                                    </div>
                                    <div className="col-9 box-background">
                                        <p className="headline">Arzt</p>
                                        <p className="card-text">Fachgebiet <br/> Adresse, Öffnungszeiten</p>
                                    </div>
                                    <div className="col-1 box-background box-radius-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                             viewBox="0 0 44 44"
                                             className="svg-image">
                                            <path fill="#6F7182" fillRule="nonzero"
                                                  d="M32.189 26.43l3.625-3.625a1 1 0 0 0-.002-1.592l-.212-.211V21l-3.293-3.293a1 1 0 1 1 1.415-1.414l4.91 4.91a1 1 0 0 1 .002 1.592l-4.912 4.912a1 1 0 0 1-1.533-1.278z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="abstand2"/>
                                <div className="row">
                                    <div className="col-2 box-background box-radius-left">
                                        <img src={doctor_image} alt='icon-doctor'/>
                                    </div>
                                    <div className="col-9 box-background">
                                        <p className="headline">Arzt</p>
                                        <p className="card-text">Fachgebiet <br/> Adresse, Öffnungszeiten</p>
                                    </div>
                                    <div className="col-1 box-background box-radius-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                             viewBox="0 0 44 44"
                                             className="svg-image">
                                            <path fill="#6F7182" fillRule="nonzero"
                                                  d="M32.189 26.43l3.625-3.625a1 1 0 0 0-.002-1.592l-.212-.211V21l-3.293-3.293a1 1 0 1 1 1.415-1.414l4.91 4.91a1 1 0 0 1 .002 1.592l-4.912 4.912a1 1 0 0 1-1.533-1.278z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="abstand2"/>
                                <div className="row">
                                    <div className="col-2 box-background box-radius-left">
                                        <img src={doctor_image} alt='icon-doctor'/>
                                    </div>
                                    <div className="col-9 box-background">
                                        <p className="headline">Arzt</p>
                                        <p className="card-text">Fachgebiet <br/> Adresse, Öffnungszeiten</p>
                                    </div>
                                    <div className="col-1 box-background box-radius-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                             viewBox="0 0 44 44"
                                             className="svg-image">
                                            <path fill="#6F7182" fillRule="nonzero"
                                                  d="M32.189 26.43l3.625-3.625a1 1 0 0 0-.002-1.592l-.212-.211V21l-3.293-3.293a1 1 0 1 1 1.415-1.414l4.91 4.91a1 1 0 0 1 .002 1.592l-4.912 4.912a1 1 0 0 1-1.533-1.278z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="abstand2"/>
                                <div className="row">
                                    <div className="col-2 box-background box-radius-left">
                                        <img src={doctor_image} alt='icon-doctor'/>
                                    </div>
                                    <div className="col-9 box-background">
                                        <p className="headline">Arzt</p>
                                        <p className="card-text">Fachgebiet <br/> Adresse, Öffnungszeiten</p>
                                    </div>
                                    <div className="col-1 box-background box-radius-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                             viewBox="0 0 44 44"
                                             className="svg-image">
                                            <path fill="#6F7182" fillRule="nonzero"
                                                  d="M32.189 26.43l3.625-3.625a1 1 0 0 0-.002-1.592l-.212-.211V21l-3.293-3.293a1 1 0 1 1 1.415-1.414l4.91 4.91a1 1 0 0 1 .002 1.592l-4.912 4.912a1 1 0 0 1-1.533-1.278z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="abstand3"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="abstand"/>
            </div>
        </div>
    );
};

export default DesktopSearch;

