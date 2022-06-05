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
            <div className="upload-video__desktop">
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
                </form>
            </div>
            <div className="upload-video__bottom-section">
            <p className="upload-video__bottom-section-tablet">CANCEL</p>
                    <Link to="/"  className="upload-video__bottom-section-publish">
                        <button type="submit" className="upload-video__button">
                            <img src={UploadIcon} alt="upload-icon"/>
                            <h1>PUBLISH</h1>
                        </button>
                    </Link>
                    <p className="upload-video__bottom-section-cancel">CANCEL</p>
                    </div>
        </div>
        )
    }
}

export default UploadPage;