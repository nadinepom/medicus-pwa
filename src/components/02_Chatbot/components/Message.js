/*
Structure of the individual message.
   Version: 17/01/2019
   Author: mamoonraja
   URL: https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk/blob/master/src/Message.js
*/

import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div className={props.position === 'right' ? 'message message--from-right' : 'message message--from-left'}>
            <div className="message__content">{props.message}</div>
            {props.hasTail ? (
                <div className="message__tail">
                    <div className="message__tail-background"/>
                    <div className="message__tail-foreground"/>
                </div>
            ) : false}
        </div>
    );
}

export default Message;
