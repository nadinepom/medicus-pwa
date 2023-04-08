/*
Used to create a new password.
   Version: 24/02/2019
   Author:  rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/PasswordChange/index.js
*/

import React, {Component} from 'react';
import {withFirebase} from '../../Firebase/index';
import Swal from 'sweetalert2';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {passwordOne} = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Dein Passwort wurde erfolgreich geändert!',
                    showConfirmButton: false,
                    timer: 1600
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
        const {passwordOne, passwordTwo, error} = this.state;
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <input
                        name="passwordOne"
                        id="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder=" "
                    />
                    <label htmlFor="passwordOne">neues Passwort</label>
                </div>
                <div className="abstand"/>
                <div className="field">
                    <input
                        name="passwordTwo"
                        id="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder=" "
                    />
                    <label htmlFor="passwordTwo">neues Passwort bestätigen</label>
                </div>

                <div className="abstand2">
                    <button disabled={isInvalid} type="submit" className="btn submit-button">Passwort ändern</button>
                </div>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
