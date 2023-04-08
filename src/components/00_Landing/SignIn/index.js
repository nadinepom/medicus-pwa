/*
For the users ("benutzer") to login.
Modified to fit me.
   Version: 24/02/2019
   Author:  rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/SignIn/index.js
*/

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {SignUpLink} from '../SignUp/index';
import {PasswordForgetLink} from '../PasswordForget/index';
import {withFirebase} from '../../Firebase/index';
import * as ROUTES from '../../../constants/routes';
import Navigation from '../../Navigation';
import '../index.css';
import login_image from '../../images/Login_Image.png';
import {Offline} from "react-detect-offline";


const SignInPage = () => (
    <div>
        <div className="abstand3"/>
        <Navigation title="Anmeldung"/>
        <div className="container abstand2">
            <div className="row margin0">
                <div className="col-lg-4 col-sm-3 col-xs-3"/>
                <div className="col-lg-4 col-sm-6 col-xs-6">
                    <div className="card">
                        <img src={login_image} alt='login'/>
                        <Offline>
                            <div className="danger-color-dark container-offline2">
                                <offline-header>KEINE INTERNETVERBINDUNG!</offline-header>
                                <br/>
                                <p className="offline-text">Für die Anmeldung müssen Sie eine Internetverbindung
                                    herstellen.
                                </p>
                            </div>
                        </Offline>
                        <div className="card-body">
                            <SignInForm/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-3 col-xs-3"/>
            </div>
        </div>
        <div className="abstand3"/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};


const ERROR_MSG_ACCOUNT_FALSE = `
  Überprüfen Sie Ihre Eingabe. Ihre Email Adresse oder Ihr Passwort ist falsch`;


class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();

    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <input
                        name="email"
                        id="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="email">E-Mail Adresse</label>
                </div>

                <div className="field">
                    <input
                        name="password"
                        id="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder=" "
                    />
                    <label htmlFor="password">Passwort</label>
                </div>
                <div className="abstand"/>
                <PasswordForgetLink/>

                {error && <p>{error.message = ERROR_MSG_ACCOUNT_FALSE}</p>}
                <div className="abstand2">
                    <button disabled={isInvalid} type="submit" className="btn submit-button">Anmelden</button>
                    <div className="abstand"/>
                    <SignUpLink/>
                </div>
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);


export default SignInPage;

export {SignInForm};
