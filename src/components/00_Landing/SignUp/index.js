/*
The page to register.
I used a program code to help me.
   Version: 24/02/2019
   Author: Nadine Pommerening // rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/SignUp/index.js
*/

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {withFirebase} from '../../Firebase/index';
import * as ROUTES from '../../../constants/routes';
import Navigation from '../../Navigation';
import '../index.css';
import password_image from '../../images/Password_Image.png';
import Swal from "sweetalert2";
import {Offline} from "react-detect-offline";

const SignUpPage = () => (
    <div>
        <div className="abstand3"/>
        <Navigation title="Registrierung"/>
        <div className="container abstand2">
            <div className="row margin0">
                <div className="col-lg-4 col-sm-3 col-xs-3"/>
                <div className="col-lg-4 col-sm-6 col-xs-6">
                    <div className="card">
                        <img src={password_image} alt='login'/>
                        <Offline>
                            <div className="danger-color-dark container-offline2">
                                <offline-header>KEINE INTERNETVERBINDUNG!</offline-header>
                                <br/>
                                <p className="offline-text">Für die Registrierung müssen Sie eine Internetverbindung
                                    herstellen.
                                </p>
                            </div>
                        </Offline>
                        <div className="card-body">
                            <SignUpForm/>
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
    username: '',
    insurancenumber: '',
    email: '',
    role: 'Benutzer',
    passwordOne: '',
    passwordTwo: '',
    checkbox: false,
    error: null,
    formErrors: {email: '', passwordOne: '', passwordTwo: '', username: '', insurancenumber: ''},
    emailValid: false,
    passwordValid: false,
    userValid: false,
    insurancenumberValid: false,
    formValid: false
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `

  Ein Konto mit dieser E-Mail-Adresse existiert bereits.
  Versuchen Sie stattdessen, sich mit diesem Konto anzumelden.
`;


class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};

    }

    onSubmit = event => {
        const {username, email, passwordOne, insurancenumber, role} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email,
                    passwordOne,
                    role,
                    insurancenumber,
                });
            })

            .then(() => {
                return this.props.firebase.doSendEmailVerification();
            })
            .then(() => {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Du hast dich erfolgreich registriert!',
                    showConfirmButton: false,
                    timer: 1600
                });
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();

    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value);
            });
    };

    validateField(fieldName, value) {
        const {passwordOne, passwordTwo} = this.state;
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let userValid = this.state.userValid;
        let insurancenumberValid = this.state.insurancenumberValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                userValid = value.match(/^.{2,}$/);
                fieldValidationErrors.username = userValid ? '' : ' Der Benutzername muss mindestens aus 2 Zeichen bestehen.';
                break;
            case 'insurancenumber':
                insurancenumberValid = value.match(/^[A-Za-z0-9]{10}$/);
                fieldValidationErrors.insurancenumber = insurancenumberValid ? '' : ' Die Versichertennummer entsspricht nicht den Standards';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' Die Email Adresse entspricht nicht den Standards.';
                break;
            case 'passwordOne':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);
                fieldValidationErrors.passwordOne = passwordValid ? '' : 'Ihr Passwort muss 6 Zeichen lang sein und mindestens eine Zahl und einen Großbuchstaben enthalten.';
                break;
            case 'passwordTwo':
                passwordValid = passwordOne === passwordTwo;
                fieldValidationErrors.passwordTwo = passwordValid ? '' : 'Ihr Passwort ist nicht gleich!';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            userValid: userValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }


    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.userValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'ERROR');
    }

    onChangeCheckbox = event => {
        this.setState({[event.target.name]: event.target.checked});
    };


    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            insurancenumber,
            checkbox,
            error,

        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            insurancenumber === '' ||
            username === '' ||
            checkbox === false;


        return (
            <form onSubmit={this.onSubmit}>
                <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                    <div className="field">
                        <input
                            name="username"
                            id="username"
                            value={username}
                            onChange={this.handleUserInput}
                            type="text"
                            placeholder="mustername"
                        />
                        <label htmlFor="username">Benutzername</label>
                    </div>
                </div>
                <p className="error-text">{this.state.formErrors.username}</p>

                <div className={`form-group ${this.errorClass(this.state.formErrors.insurancenumber)}`}>
                    <div className="field">
                        <input
                            name="insurancenumber"
                            id="insurancenumber"
                            value={insurancenumber}
                            onChange={this.handleUserInput}
                            type="text"
                            placeholder="Z123456789"
                        />
                        <label htmlFor="insurancenumber">Versichertennummer</label>
                    </div>
                </div>
                <p className="error-text">{this.state.formErrors.insurancenumber}</p>

                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <div className="field">
                        <input
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleUserInput}
                            type="email"
                            placeholder="muster@beispiel.de"
                        />
                        <label htmlFor="email">E-Mail Adresse</label>
                    </div>
                </div>
                <p className="error-text">{this.state.formErrors.email}</p>

                <div className={`form-group ${this.errorClass(this.state.formErrors.passwordOne)}`}>
                    <div className="field">
                        <input
                            name="passwordOne"
                            id="passwordOne"
                            value={passwordOne}
                            onChange={this.handleUserInput}
                            type="password"
                            placeholder="P25wort"
                        />
                        <label htmlFor="passwordOne">Passwort</label>
                    </div>
                </div>
                <p className="error-text">{this.state.formErrors.passwordOne}</p>

                <div className={`form-group ${this.errorClass(this.state.formErrors.passwordTwo)}`}>
                    <div className="field">
                        <input
                            name="passwordTwo"
                            id="passwordTwo"
                            value={passwordTwo}
                            onChange={this.handleUserInput}
                            type="password"
                            placeholder="P25wort"
                        />
                        <label htmlFor="passwordTwo">Passwort bestätigen</label>
                    </div>
                </div>
                <p className="error-text">{this.state.formErrors.passwordTwo}</p>

                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="exampleCheck1"
                        name="checkbox"
                        checked={checkbox}
                        onChange={this.onChangeCheckbox}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        <p className="password-text">Ich bestätige hiermit, dass ich die
                            <a href="" target="_blank"> Nutzungsbedindungen</a> und die
                            <a href="" target="_blank"> Datenschutzerklärung</a> zur Kenntnis genommen habe.
                        </p>
                    </label>
                </div>

                <div className="error-message">
                    {error && <p>{error.message = ERROR_MSG_ACCOUNT_EXISTS}</p>}
                </div>

                <div className="abstand2">
                    <button disabled={isInvalid} type="submit" className="btn submit-button">Registrieren</button>
                    <div className="abstand"/>
                </div>
            </form>
        );
    }
}

const SignUpLink = () => (
    <p className="text-center">
        <Link to={ROUTES.SIGN_UP} className="link-text">Noch kein Mitglied? Jetzt registrieren</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export {SignUpForm, SignUpLink};
