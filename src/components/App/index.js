/*
Browser router for the different pages.
Also a loader when the page is loaded.
   Version: 09/01/2019
   Author: Nadine Pommerening
   URL for the loader: https://www.w3schools.com/howto/howto_css_loader.asp
*/

import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import SignUpPage from '../00_Landing/SignUp';
import SignInPage from '../00_Landing/SignIn';
import PasswordForgetPage from '../00_Landing/PasswordForget';
import AccountPage from '../03_Profile';
import HomePage from '../01_Home';
import ChatbotPage from '../02_Chatbot';
import FinderPage from '../07_Finder';
import SettingsPage from '../08_Settings';
import ContactPage from '../06_Contact';
import SickNotePage from '../05_SickNote';
import MessagesPage from '../04_Messages';


import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Session';
import * as firebase from 'firebase';
import NavbarBottom from '../Navigation/12_NavbarBottom';

import './index.css';

class App extends Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        });
    }

    state = {loading: true};

    render() {
        const {loading} = this.state;

        if (loading) {
            return (
                <div className="loading">
                    <h3>Laden</h3>
                    <div className="loader"/>
                </div>
            );
        }
        return (
            <Router>
                <div>
                    <Route exact path={ROUTES.HOME} component={HomePage}/>
                    <Route exact path={ROUTES.CHATBOT} component={ChatbotPage}/>
                    <Route exact path={ROUTES.FINDER} component={FinderPage}/>
                    <Route exact path={ROUTES.SETTINGS} component={SettingsPage}/>
                    <Route exact path={ROUTES.CONTACT} component={ContactPage}/>
                    <Route exact path={ROUTES.SICKNOTE} component={SickNotePage}/>
                    <Route exact path={ROUTES.MESSAGES} component={MessagesPage}/>
                    <Route path={ROUTES.PROFILE} component={AccountPage}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>

                    <NavbarBottom/>
                </div>
            </Router>
        );
    }
}

export default withAuthentication(App);
