/*
Session to confirm your e-mail address. This will verify that the email address is correct.
   Version: 10/01/2019
   Author: rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/Session/withEmailVerification.js
*/

import React from 'react';

import AuthUserContext from './context';
import {withFirebase} from '../Firebase';
import Navigation from "../Navigation";
import password2_image from "../images/Password2_Image.png";


const needsEmailVerification = authUser =>
    authUser &&
    !authUser.emailVerified &&
    authUser.providerData
        .map(provider => provider.providerId)
        .includes('password');

const withEmailVerification = Component => {
    class WithEmailVerification extends React.Component {
        constructor(props) {
            super(props);

            this.state = {isSent: false};
        }

        onSendEmailVerification = () => {
            this.props.firebase
                .doSendEmailVerification()
                .then(() => this.setState({isSent: true}));
        };

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        needsEmailVerification(authUser) ? (
                            <div>
                                <div className="abstand3"/>
                                <Navigation title="E-Mail Verifizierung"/>
                                <div className="container abstand2">
                                    <div className="row margin0">
                                        <div className="col-lg-4 col-sm-3 col-xs-3"/>
                                        <div className="col-lg-4 col-sm-6 col-xs-6">
                                            <div className="card">
                                                <img src={password2_image} alt='login'/>
                                                <div className="card-body">

                                                    {this.state.isSent ? (

                                                        <p className="password-text">
                                                            <p className="headline-password">E-Mail-Bestätigung
                                                                gesendet:</p>
                                                            Überprüfen Sie Ihre E-Mails
                                                            (einschließlich Spam-Ordner) auf eine Bestätigungs-E-Mail.
                                                            Aktualisieren Sie diese Seite, nachdem Sie Ihre E-Mail
                                                            bestätigt haben.
                                                            <div className="abstand2"/>
                                                        </p>

                                                    ) : (
                                                        <p className="password-text">
                                                            <p className="headline-password">Überprüfen Sie Ihre E-Mail
                                                                Adresse:</p>
                                                            Überprüfen Sie Ihre E-Mails (einschließlich Spam-Ordner) auf
                                                            eine Bestätigungs-E-Mail oder senden Sie eine andere
                                                            Bestätigungs-E-Mail.
                                                            <div className="abstand2"/>
                                                        </p>
                                                    )}

                                                    <button
                                                        className="btn submit-button"
                                                        onClick={this.onSendEmailVerification}
                                                        disabled={this.state.isSent}
                                                    >
                                                        Bestätigungs-E-Mail senden
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-3 col-xs-3"/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Component {...this.props} />
                        )
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
