/*
Swipeable Bottom Sheet for mobile devices.
   Version: 12/02/2019
   Author:  manufont
   URL: https://github.com/manufont/react-swipeable-bottom-sheet/blob/master/example/src/scroll.js

*/

import React from 'react';
import {Component} from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import {InputWithButton} from 'watson-react-components';

import email_image from '../images/email.png';

import '../07_Finder/finder.css';


class MobileMessages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    openBottomSheet(open) {
        this.setState({open});
    }

    toggleBottomSheet() {
        this.openBottomSheet(!this.state.open);
    }


    render() {

        return (
            <div className="mobile-show container abstand2">
                <div className="row margin0">

                    <div className="col-xs-12">
                        <div className="card">
                            <div className="conversation">
                                <div className="row margin0">
                                    <div className="conversation__input-container top col-md-12">
                                        <InputWithButton className="conversation__input form-control"
                                                         placeholder="Suchen"/>
                                    </div>

                                    <div className="conversation__messages">
                                        <div className="row">
                                            <div className="col-6">

                                                <div className="dropdown">
                                                    <button className="button-style dropdown-toggle" type="button"
                                                            id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        Datum
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-color dropdown-item">Datum</a>
                                                        <a className="dropdown-item">Absender</a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-6">
                                                <p className="text-position float-right">2 insgesamt, 1 ungelesen</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2 box-background box-radius-left">
                                                <button className="btn-message"/>
                                                <img src={email_image} alt='icon-email'/>
                                            </div>
                                            <div className="col-8 box-background">
                                                <p className="headline">Krankmeldung</p>
                                                <p className="card-text">Eingangsbestätigung <br/> 03.04.2019</p>
                                            </div>
                                            <div className="col-2 box-background box-radius-right">
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
                                            <div className="col-2 box-background box-radius-left left-border">
                                                <img src={email_image} alt='icon-email'/>
                                            </div>
                                            <div className="col-8 box-background middle-border">
                                                <p className="headline">Medicus: Willkommen...</p>
                                                <p className="card-text">Lieber Benutzer, schön das
                                                    Sie... <br/> 03.04.2019</p>
                                            </div>
                                            <div className="col-2 box-background box-radius-right right-border">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                                     viewBox="0 0 44 44"
                                                     className="svg-image">
                                                    <path fill="#6F7182" fillRule="nonzero"
                                                          d="M32.189 26.43l3.625-3.625a1 1 0 0 0-.002-1.592l-.212-.211V21l-3.293-3.293a1 1 0 1 1 1.415-1.414l4.91 4.91a1 1 0 0 1 .002 1.592l-4.912 4.912a1 1 0 0 1-1.533-1.278z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <SwipeableBottomSheet
                        overflowHeight={130}
                        open={this.state.open}
                        onChange={this.openBottomSheet.bind(this)}
                    >

                        <div className="row" onClick={this.toggleBottomSheet.bind(this)}>
                            <div className="col-1 box-background">
                            </div>
                            <div className="col-2 box-background">
                                <img className="message-icon" src={email_image} alt='icon-email'/>
                            </div>
                            <div className="col-9 box-background">
                                <p className="headline">Medicus: Willkommen...</p>
                            </div>

                            <div className="abstand2"/>
                        </div>

                        <div className="conversation__messages">
                            <div className="row">
                                <div className="abstand"/>
                                <p className="card-text">03.04.2019</p>
                                <p className="card-title">Medicus: Willkommen bei der App</p>
                                <div className="abstand2"/>
                                <p className="card-text">Lieber Benutzer,</p>
                                <div className="abstand"/>
                                <p className="card-text">schön, dass Du Interesse an unserem innovativen Produkt hast.
                                    Medicus ist ein
                                    interaktiver Chatbot, der dir bei Fragen zu deiner Gesundheit und zu Meidkamenten
                                    weiterhilft.</p>
                                <div className="abstand"/>
                                <p className="card-text">Viele Grüße <br/> Dein Medicus Team </p>
                            </div>
                        </div>

                    </SwipeableBottomSheet>
                </div>
                <div className="abstand3"/>
            </div>
        );
    }
}

export default MobileMessages;
