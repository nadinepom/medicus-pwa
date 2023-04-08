/*
DesktopMessages for the user.
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
import Navigation from "../Navigation";
import DesktopMessages from './DesktopMessages';
import MobileMessages from './MobileMessages';


const MessagesPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <div className="abstand3"/>
                <Navigation title="Mitteilung"/>
                <DesktopMessages/>
                <MobileMessages/>
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
)(MessagesPage);
