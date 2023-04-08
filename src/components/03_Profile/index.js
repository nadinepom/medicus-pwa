/*
The profile page.
You have to login to use this function.
Changes from an example.
   Version: 25/02/2019
   Author: rwieruch
   URL: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/blob/master/src/components/Account/index.js
*/

import React, {Component} from 'react';
import {compose} from 'recompose';

import {
    AuthUserContext,
    withAuthorization,
    withEmailVerification,
} from '../Session';
import {withFirebase} from '../Firebase';
import PasswordChangeForm from '../00_Landing/PasswordChange';
import Navigation from '../Navigation';
import profile_image from '../images/Profile_Image.png';
import './index.css';
import EmailChangeForm from '../00_Landing/EmailChange';


const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <div className="abstand3"/>
                <Navigation title="Profil"/>

                <div className="container abstand2">
                    <div className="row margin0">
                        <div className="col-lg-4 col-sm-3 col-xs-3"/>
                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="card">
                                <img src={profile_image} alt='login'/>
                                <div className="card-body">
                                    <p className="headline-account">Accountname</p>
                                    <p className="account-name">{authUser.username}</p>
                                    <hr className="new-hr"/>
                                    <p className="label-account">Passwort ändern</p>
                                    <PasswordChangeForm/>
                                    <hr className="new-hr"/>
                                    <p className="label-account">E-Mail Adresse ändern</p>
                                    <EmailChangeForm/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-xs-3"/>
                    </div>
                </div>
                <div className="abstand3"/>

                <LoginManagement authUser={authUser}/>
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
)(AccountPage);
