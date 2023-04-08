/*
Used to create a new email adress.
   Version: 24/02/2019
   Author:  nadine pommerening
*/

import React, {Component} from 'react';
import {withFirebase} from '../../Firebase/index';
import Swal from 'sweetalert2';

const INITIAL_STATE = {
    email: '',
    error: null,
};

class EmailChangeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase.doEmailUpdate(email)
            .then(() => {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Deine E-Mail-Adresse  wurde erfolgreich geändert!!',
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
                    <label htmlFor="email">neue Email Adresse</label>
                </div>


                <div className="abstand2">
                    <button disabled={isInvalid} type="submit" className="btn submit-button">E-Mail Adresse ändern
                    </button>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(EmailChangeForm);
