/*
Structure of the conversation and input.
   Version: 17/01/2019
   Author: mamoonraja
   URL: https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk/blob/master/src/Conversation.js
*/

import React from 'react';
import './Conversation.css';
import Message from './Message.js';
import bot_horizontal from '../../video/Medicus_horizontal.mp4';
import {Offline} from 'react-detect-offline';
import boti2 from '../../images/3.jpg';

function Conversation(props) {

  function makeMessage(msgObj, index) {

    if (typeof msgObj.message === 'string') {
      return (
        <Message key={index} position={msgObj.position || false} label={msgObj.label || false}
          date={msgObj.date || false} message={msgObj.message} hasTail={msgObj.hasTail || false}/>
      );
    } else if (React.isValidElement(msgObj.message)) {
      return (msgObj.message);
    } else {
      return false;
    }
  }

  return (
    <div className="conversation">
      <div className="row margin0">
        <div className="conversation__messages col-md-12">
          <div className="mobile-show">
            <div className="margin-fix">
              <div id="accordion">
                <button className="medicus-button" data-toggle="collapse" data-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  <video src={bot_horizontal} autoPlay loop muted playsInline poster={boti2}/>
                </button>

                <div className="card-accordion">
                  <div id="collapseOne" className="collapse hidden" aria-labelledby="headingOne"
                    data-parent="#accordion">
                    <div className="col-xs-12 col-sm-4 col-lg-3">
                      <div>
                        <div className="card-body">
                          <p className="card-title">Du kannst mich z.B. Folgendes fragen:</p>

                          <div className="row">
                            <div className="col-2">
                              <svg width="35px" height="32px" viewBox="0 0 35 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
                                  fillRule="evenodd">
                                  <g id="W/100_FragMedicus"
                                    transform="translate(-48.000000, -368.000000)"
                                    fill="#FF6600">
                                    <g id="Card_Max"
                                      transform="translate(48.000000, 104.000000)">
                                      <g id="Group-2"
                                        transform="translate(0.000000, 192.000000)">
                                        <g id="Group"
                                          transform="translate(0.000000, 64.000000)">
                                          <g id="icons8-heart_health"
                                            transform="translate(0.000000, 8.000000)">
                                            <path
                                              d="M18.5310417,19.9374545 C18.2466667,20.2210909 17.8733333,20.3636364 17.5,20.3636364 C17.1266667,20.3636364 16.7533333,20.2210909 16.4689583,19.9374545 L9.17729167,12.6647273 C8.60708333,12.096 8.60708333,11.1767273 9.17729167,10.608 C9.7475,10.0392727 10.6691667,10.0392727 11.239375,10.608 L17.5,16.8523636 L31.8879167,2.50181818 C30.1904167,0.952727273 27.9372917,0 25.4552083,0 C20.4166667,0 17.5,4.36363636 17.5,4.36363636 C17.5,4.36363636 14.5833333,0 9.54479167,0 C4.27291667,0 0,4.26181818 0,9.52 C0,18.7432727 10.8222917,27.5650909 15.7441667,31.4138182 L15.75,31.4050909 C16.2385417,31.7730909 16.8408333,32 17.5,32 C18.1591667,32 18.7614583,31.7730909 19.25,31.4050909 L19.2558333,31.4138182 C24.1777083,27.5650909 35,18.7432727 35,9.52 C35,7.79345455 34.531875,6.17890909 33.726875,4.78254545 L18.5310417,19.9374545 Z"
                                              id="Path"/>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="col-10">
                              <p className="headline">Gesundheit</p>
                              <p className="card-text">"Wie bleibe ich gesund?"</p>
                            </div>
                          </div>
                          <div className="abstand2"/>

                          <div className="row">
                            <div className="col-2">
                              <svg width="24px" height="33px" viewBox="0 0 24 33"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
                                  fillRule="evenodd">
                                  <g id="W/100_FragMedicus"
                                    transform="translate(-54.000000, -432.000000)"
                                    fill="#73E3B9">
                                    <g id="Card_Max"
                                      transform="translate(48.000000, 104.000000)">
                                      <g id="Group-2"
                                        transform="translate(0.000000, 192.000000)">
                                        <g id="Group"
                                          transform="translate(6.000000, 128.000000)">
                                          <g id="icons8-runny_nose"
                                            transform="translate(0.000000, 8.000000)">
                                            <path
                                              d="M7.2,0 L7.2,3.66666667 C7.2,7.788 6.6996,10.2874444 4.8,12.2222222 C2.8188,12.3908889 0,14.2523333 0,17.1111111 C0,20.7777778 4.0572,20.7777778 4.8,20.7777778 C6,20.7777778 7.2,24.4444444 12,24.4444444 C16.8,24.4444444 18,20.7777778 19.2,20.7777778 C19.9428,20.7777778 24,20.7777778 24,17.1111111 C24,14.2523333 21.1812,12.3908889 19.2,12.2222222 C17.3004,10.2874444 16.8,7.788 16.8,3.66666667 L16.8,0 L7.2,0 Z M19.2,23.2222222 C19.2,23.2222222 16.8,26.7605556 16.8,28.1111111 C16.8,29.4616667 17.874,30.5555556 19.2,30.5555556 C20.526,30.5555556 21.6,29.4616667 21.6,28.1111111 C21.6,26.7605556 19.2,23.2222222 19.2,23.2222222 Z M6,25.6666667 C6,25.6666667 3.6,29.205 3.6,30.5555556 C3.6,31.9061111 4.674,33 6,33 C7.326,33 8.4,31.9061111 8.4,30.5555556 C8.4,29.205 6,25.6666667 6,25.6666667 Z"
                                              id="Shape"/>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="col-10">
                              <p className="headline">Krankheit</p>
                              <p className="card-text">"Ich habe Schnupfen."</p>
                            </div>
                          </div>
                          <div className="abstand2"/>

                          <div className="row">
                            <div className="col-2">
                              <svg width="32px" height="32px" viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
                                  fillRule="evenodd">
                                  <g id="W/100_FragMedicus"
                                    transform="translate(-50.000000, -496.000000)"
                                    fill="#00CAFF">
                                    <g id="Card_Max"
                                      transform="translate(48.000000, 104.000000)">
                                      <g id="Group-2"
                                        transform="translate(0.000000, 192.000000)">
                                        <g id="Group"
                                          transform="translate(2.000000, 192.000000)">
                                          <g id="icons8-pill"
                                            transform="translate(0.000000, 8.000000)">
                                            <path
                                              d="M22.1852894,0 C19.6684136,0 17.1516365,0.957493561 15.239215,2.87259717 L2.86863576,15.2605102 C-0.956211919,19.0907153 -0.956211919,25.3419169 2.86863576,29.1721247 C2.99319362,29.2964337 3.14106411,29.3948566 3.30374249,29.4617328 C3.3063452,29.4626104 3.30895061,29.4634801 3.31155868,29.4643417 C7.15980397,32.9120932 13.0662032,32.8718855 16.7607845,29.1721247 L29.1313637,16.7842117 C32.9562121,12.9540052 32.9562121,6.70280425 29.1313637,2.87259717 C27.2189382,0.957430776 24.7021652,0 22.1852894,0 Z M22.1852894,2.65604349 C24.0138529,2.65604349 25.8425165,3.35708997 27.2450336,4.76157117 C30.050065,7.5705337 30.050065,12.0862765 27.2450336,14.8952383 L24.3946935,17.7495723 L22.002909,20.1447082 C21.4813229,20.6670238 20.6394362,20.6682982 20.1191841,20.1473171 C18.3516608,18.3759813 14.710312,14.7282572 14.710312,14.7282572 L14.7077068,14.7282572 C13.6658498,13.6851632 11.976902,13.6851632 10.9350451,14.7282572 L6.67777355,18.9967116 C6.15618731,19.5190286 5.3116947,19.5190286 4.79144256,18.9967116 C4.27448175,18.4790274 4.27322848,17.6454095 4.78102098,17.1233931 L17.1255452,4.76157117 C18.528061,3.35708997 20.3567259,2.65604349 22.1852894,2.65604349 Z"
                                              id="Shape"/>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="col-10">
                              <p className="headline">Medikamente</p>
                              <p className="card-text">"Wie häufig darf ich Nasenspray
                                                                benutzen?"</p>
                            </div>
                          </div>
                        </div>
                        <hr className="new-hr"/>
                        <p className="card-text small-text">Zu Risiken und Nebenwirkungen lesen
                                                    Sie die Packungsbeilage und fragen Sie Ihren Arzt oder
                                                    Apotheker.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Hinweis: Die Unterhaltung wird nicht protokolliert oder gespeichert.</p>

          <div>
            {props.messageObjectList.map(makeMessage)}
          </div>
          <Offline>
            <div className="danger-color-dark container-offline">
              <offline-header>KEINE INTERNETVERBINDUNG!</offline-header>
              <br/>
              <p className="offline-text">Für den Chatbot müssen Sie eine Internetverbindung
                                herstellen.
              </p>
            </div>
          </Offline>
          <iframe
            allow="microphone;"
            width="100%"
            height="90%"
            title="chatbot"
            src="https://medicus-bot.firebaseapp.com/">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
