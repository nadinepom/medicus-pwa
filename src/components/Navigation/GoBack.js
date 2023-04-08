/*
The back button in the upper navigation bar.
   Version: 10/01/2019
   Author: Nadine Pommerening
*/

import React from 'react';
import {withRouter} from 'react-router-dom';


class GoBack extends React.Component {
    render() {
        const {goBack} = this.props.history;
        return (
            <div>
                <a className="go-back" onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                        <path fillRule="evenodd"
                              d="M25.9802762,11.0004375 C25.7204776,11.0081786 25.4738979,11.1167578 25.2927762,11.3031719 L15.292776,21.3031721 C14.902408,21.6937019 14.902408,22.3267043 15.292776,22.7172341 L25.2927762,32.7172341 C25.5435928,32.9784749 25.9160432,33.0837097 26.2664853,32.9923529 C26.6169274,32.9009961 26.8906002,32.6273232 26.9819571,32.2768811 C27.0733139,31.9264391 26.968079,31.5539887 26.7068382,31.3031721 L17.4138692,22.0102031 L26.7068382,12.7172343 C27.0025986,12.4297429 27.091527,11.9901684 26.9307728,11.6103216 C26.7700187,11.2304748 26.3925597,10.9882791 25.9802762,11.0004375 Z"/>
                    </svg>
                </a>{' '}
            </div>
        );
    }
}

export default withRouter(GoBack);