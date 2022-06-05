import { Component } from "react";
import './UploadPage.scss';
import { Link } from 'react-router-dom';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';
import UploadIcon from '../../assets/images/publish.svg'

class UploadPage extends Component {

    componentWillUnmount(){
        window.alert("Video Uploaded");
    }

    render(){

        return (
        <div className="upload-video">
            <h1 className="upload-video__title">Upload Video</h1>
            <h1 className="upload-video__thumbnail-title">VIDEO THUMBNAIL</h1>
            <div>
                <img src={Thumbnail} className="upload-video__thumbnail"/>
                <form className="upload-video__form">
                    <div className="upload-video__input-field">
                    <label form="title">Title Your Video</label>
                    <input type="text" name="title" id="title" placeholder="Add a title to your video"></input>
                    </div>
                    <div className="upload-video__form">
                        <label form="description">Add a Video Desctiption</label>
                        <textarea name="description" id="description" placeholder="Add a description to your video"></textarea>
                    </div>
                    <Link to="/" className="publish-button">
                        <button type="submit" className="upload-video__button">
                            <img src={UploadIcon} alt="upload-icon"/>
                            <h1>PUBLISH</h1>
                        </button>
                    </Link>
                    <p>CANCEL</p>
                </form>
            </div>
        </div>
        )
    }
}

export default UploadPage;