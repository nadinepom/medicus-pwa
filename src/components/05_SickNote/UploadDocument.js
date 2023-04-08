/*
Function to upload a photo.
   Version: 14/02/2019
   Author:  ikramhasib007
   URL: https://github.com/ikramhasib007/react-drawer/blob/image-upload/src/components/ImageUpload.jsx
*/
import React, {Component} from 'react';
import {withFirebase} from '../Firebase';
import Swal from 'sweetalert2';
import './style.css';

class UploadDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            Benutzer: '',
            progress: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {

        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));

            const path = image.name;
            this.setState({path});

        }
    };

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(function (benutzer) {
            if (benutzer) {
                console.log('angemeldeter Benutzer:');

                const uid = benutzer.uid;
                console.log(uid);

                this.setState({uid});
            } else {
                console.log('Kein Benutzer');
            }
        }.bind(this));
    }


    handleUpload = () => {
        const {image, uid} = this.state;

        if (image !== null) {
            const uploadTask =
                this.props.firebase.storage.ref(`Dokument/${uid}/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progress function ....

                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({progress});
                    console.log('Upload is ' + progress + '% done');
                    Swal({
                        position: 'top-end',
                        type: 'success',
                        title: 'Ihre Krankmeldung wurde erfolgreich hochgeladen!',
                        showConfirmButton: false,
                        timer: 1600
                    });
                },
                (error) => {
                    // error function ....
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <div>
                <div className="text-center">

                    <progress value={this.state.progress} max="100"/>
                    <br/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <h4 className="text-file">Datei auswählen...</h4>
                        <input id="file-upload" type="file" onChange={this.handleChange}/>
                        <a>{this.state.path}</a>
                    </label>
                </div>
                <div className="abstand2">
                    <button onClick={this.handleUpload} className="btn submit-button">Krankmeldung hochladen</button>
                    <div className="abstand"/>
                </div>
            </div>

        );
    }
}

export default withFirebase(UploadDocument);