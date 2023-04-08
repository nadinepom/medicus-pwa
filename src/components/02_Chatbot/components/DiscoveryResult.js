/*
Output from Discovery
   Version: 17/01/2019
   Author: mamoonraja
   URL: https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk/blob/master/src/DiscoveryResult.js
*/

import React from 'react';
import './DiscoveryResult.css';
import './Message.css';


function DiscoveryResult(props) {

    return (
        <div>
            <div className="result">
                <div className="result__title">{props.title}</div>
                <div className="abstand"/>

                <div id="accordion">
                    <div className="card">
                        <div className="card-header card-height collapsed" id="headingOne" data-toggle="collapse"
                             data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            <button className="btn btn-link card-text2">
                                <p className="result__collapseTitle">Information</p>
                            </button>
                            <i className="icon-arrow fa fa-angle-down" aria-hidden="true"/>
                        </div>

                        <div id="collapse1" className="collapse" aria-labelledby="headingOne"
                             data-parent="#accordion">
                            <div className="card-body">
                                <div className="result__text">{props.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header card-height collapsed" id="headingTwo" data-toggle="collapse"
                             data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                            <button className="btn btn-link card-text2">
                                <p className="result__collapseTitle">Dosierung</p>
                            </button>
                            <i className="icon-arrow fa fa-angle-down" aria-hidden="true"/>
                        </div>
                        <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <div className="result__text">{props.dosage}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abstand"/>
        </div>

    );
}

export default DiscoveryResult;