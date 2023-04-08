/*
Function if the user ("benutzer") has forgotten his password.
   Version: 24/02/2019
   Author:  rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/PasswordForget/index.js
*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withFirebase} from '../../Firebase/index';
import * as ROUTES from '../../../constants/routes';
import Navigation from '../../Navigation';
import Swal from 'sweetalert2';
import '../index.css';
import password2_image from '../../images/Password2_Image.png';

const PasswordForgetPage = () => (
    <div>
        <div className="abstand3"/>
        <Navigation title="Passwort zurücksetzen"/>
        <div className="container abstand2">
            <div className="row margin0">
                <div className="col-lg-4 col-sm-3 col-xs-3"/>
                <div className="col-lg-4 col-sm-6 col-xs-6">
                    <div className="card">
                        <img src={password2_image} alt='login'/>
                        <div className="card-body">
                            <p className="headline-password">Passwort vergessen?</p>
                            <p className="password-text">Gib deine E-Mail Adresse ein, um das Passwort zurückzusetzen.
                                Eventuell muss
                                Du den Spamordner überprüfen.</p>
                            <PasswordForgetForm/>
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
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Dir wurde eine Email gesendet!',
                    showConfirmButton: false,
                    timer: 1700
                });
                this.setState({...INITIAL_STATE});
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
        const {email, error} = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <input
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="email">Email Adresse</label>
                </div>
                <div className="abstand2">
                    <button disabled={isInvalid} type="submit" className="btn submit-button">Passwort zurücksetzen
                    </button>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetLink = () => (
    <p className="text-center">
        <Link to={ROUTES.PASSWORD_FORGET} className="link-text">Passwort vergessen?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export {PasswordForgetForm, PasswordForgetLink};
