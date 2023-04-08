/*
The home page.
It can be accessed by anyone and is linked to the individual features.
   Version: 09/01/2019
   Author: Nadine Pommerening
*/

import React from 'react';

import bot from '../video/Medicus.mp4';
import boti2 from '../images/3.jpg';

import profile_image from '../images/Profile_Image.png';
import message_image from '../images/Message_Image.png';
import sicknote_image from '../images/Sicknote_Image.png';
import contact_image from '../images/Contact_Image.png';

import Link from 'react-router-dom/es/Link';

import './Home.css';
import UserName from './UserName';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';


function createMarkup() {
  const time = new Date().getHours();
  if (time < 12 || time === 24) {
    return {__html: 'Guten Morgen '};
  } else if (time < 18) {
    return {__html: 'Guten Tag'};
  } else if (time < 22) {
    return {__html: 'Guten Abend'};
  } else if (time < 24) {
    return {__html: 'Gute Nacht'};
  }
}

const Home = () => (
  <div>
    <div className="abstand3"/>
    <Navigation title="Medicus"/>

    <div className="container abstand2">
      <div className="row margin-8" id="flex-container">
        <div className="col-xs-12 col-md-4 col-lg-4 test">
          <div className="card vh100">
            <Link to={ROUTES.CHATBOT} style={{textDecoration: 'none', color: 'black'}}>
              <div className="speech-bubble2">
                <p className="text-bot" dangerouslySetInnerHTML={createMarkup()}/>
                <UserName/>
              </div>
              <video src={bot} autoPlay loop muted playsInline poster={boti2} >Medicus Aninmation</video>
              <div className="card-body">
                <p className="card-title">Frag Medicus</p>
                <hr/>
                <p className="card-text">Medicus ist ein interaktiver Chatbot, der dir bei Fragen zu
                                    deiner Gesundheit
                                    und zu Meidkamenten weiterhilft.</p>
              </div>
            </Link>
          </div>

        </div>
        <div className="col-xs-12 col-md-8 col-lg-8 test">
          <div className="row margin-8">
            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="card vh50">
                <Link to={ROUTES.PROFILE} style={{textDecoration: 'none', color: 'black'}}><img
                  src={profile_image} alt='profile'/>
                <div className="card-body">
                  <p className="card-title">Profil</p>
                  <hr/>
                  <p className="card-text">Hier kannst du dein Profil einsehen und
                                            aktualisieren.</p>

                </div>
                </Link>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="card vh50">
                <Link to={ROUTES.MESSAGES}><img src={message_image}
                  alt='messanger'/></Link>
                <div className="card-body">
                  <p className="card-title">Mitteilung</p>
                  <a className="btn-round" style={{color: 'white'}}>1</a>
                  <hr/>
                  <p className="card-text">Deine Mitteilungen kannst du hier jederzeit einsehen.</p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="card vh50">
                <Link to={ROUTES.SICKNOTE}><img src={sicknote_image}
                  alt='finder'/></Link>

                <div className="card-body">
                  <p className="card-title">Krankmeldung</p>
                  <hr/>
                  <p className="card-text">Schnell und einfach deine Krankmeldung einreichen.</p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-6">
              <div className="card vh50">
                <Link to={ROUTES.CONTACT}><img src={contact_image}
                  alt='messanger'/></Link>
                <div className="card-body">
                  <p className="card-title">Kontakt</p>
                  <hr/>
                  <p className="card-text">Kontaktier uns, wenn du Fragen hast oder Hilfe
                                        brauchst.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abstand3"/>
  </div>
);


export default Home;
