/*
This page is used for the submission of sick certificates.
You have to login to use this function.
   Version: 09/01/2019
   Author: Nadine Pommerening
*/

import React, {Component} from 'react';
import {compose} from 'recompose';

import {
    AuthUserContext,
    withAuthorization,
    withEmailVerification,
} from '../Session';
import {withFirebase} from '../Firebase';
import Navigation from '../Navigation';
import UploadDocument from './UploadDocument';
import sicknote_image from '../images/Sicknote_Image.png';
import './style.css';
import {Offline} from "react-detect-offline";


const SickNote = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <div className="abstand3"/>
                <Navigation title="Krankmeldung"/>
                <div className="container abstand2">
                    <div className="row margin0">
                        <div className="col-lg-4 col-sm-3 col-xs-3"/>
                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="card">
                                <img src={sicknote_image} alt='sicknote'/>
                                <Offline>
                                    <div className="danger-color-dark container-offline2">
                                        <offline-header>KEINE INTERNETVERBINDUNG!</offline-header>
                                        <br/>
                                        <p className="offline-text">Für das Einreichen von Krankmeldungen müssen Sie
                                            eine Internetverbindung
                                            herstellen.
                                        </p>
                                    </div>
                                </Offline>
                                <div className="card-body">
                                    <p className="headline-sicknote">Krankmeldung einreichen?</p>
                                    <p className="sicknote-text">Nutze Deine Kamera oder wähle ein Foto aus deiner
                                        Bibliothek aus.</p>
                                    <UploadDocument/>
                                    <LoginManagement authUser={authUser}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-xs-3"/>
                    </div>
                </div>
                <div className="abstand3"/>
            </div>

        )}
    </AuthUserContext.Consumer>
);


class LoginManagementBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSignInMethods: [],
            error: null,
        };
    }

    componentDidMount() {
        this.fetchSignInMethods();
    }

    fetchSignInMethods = () => {
        this.props.firebase.auth
            .fetchSignInMethodsForEmail(this.props.authUser.email)
            .then(activeSignInMethods =>
                this.setState({activeSignInMethods, error: null}),
            )
            .catch(error => this.setState({error}));
    };

    render() {

        return (
            <div>
            </div>
        );
    }
}

const LoginManagement = withFirebase(LoginManagementBase);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(SickNote);
