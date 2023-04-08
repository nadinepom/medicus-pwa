/*
The contact page.
The page is public for all.
   Version: 09/01/2019
   Author: Nadine Pommerening
*/

import React from 'react';
import Navigation from '../Navigation';
import contact_image from '../images/Contact_Image.png';
import './index.scss';

const Contact = () => {
    return (
        <div>
            <div className="abstand3"/>
            <Navigation title="Kontakt"/>
            <div className="container abstand2">
                <div className="row margin0">
                    <div className="col-lg-4 col-sm-3 col-xs-3"/>
                    <div className="col-lg-4 col-sm-6 col-xs-6">
                        <div className="card">
                            <img src={contact_image} alt='contact'/>
                            <div className="card-body">
                                <p className="contact__headline" style={{marginBottom: '0'}}>Adresse:</p>
                                <a href="https://goo.gl/maps/LhQf7D79Jxu" target="_blank" rel="noopener noreferrer"
                                   className="contact__text">Rotherstraße 19, 10245 Berlin</a>
                                <hr className="new-hr"/>
                                <p className="contact__headline" style={{marginBottom: '0'}}>Telefon:</p>
                                <a href="tel:493057608500" className="contact__text">+49 30 5760-8500</a>
                                <hr className="new-hr"/>
                                <p className="contact__headline" style={{marginBottom: '0'}}>E-Mail:</p>
                                <a href="mailto:kontakt@krankenkasse.de"
                                   className="contact__text">kontakt@krankenkasse.de</a>
                                <hr className="new-hr"/>
                                <p className="contact__headline" style={{marginBottom: '0'}}>Webseite:</p>
                                <a href="https://www.adesso-mobile.de/" target="_blank" rel="noopener noreferrer"
                                   className="contact__text">www.adesso-mobile.de</a>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-3 col-xs-3"/>
                </div>
            </div>
            <div className="abstand3"/>
        </div>
    );
};

export default Contact;

