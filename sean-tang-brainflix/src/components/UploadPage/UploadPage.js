import { Component } from "react";
import './UploadPage.scss';
import axios from "axios";


let apiKey = "21f250aa-1b72-4cf4-8711-95c9fb6f8d5f";

class UploadPage extends Component {

    uploadNewVideo = (e) => {
        e.preventDefault();
        window.alert("Video Uploaded");
        axios.post("http://localhost:8080/videos?api_key=" + apiKey, {
        title: this.form.title.value,
        description: this.form.description.value,})
      .then((data) => {
        console.log(data);
      });

    this.form.reset();
};

    render(){

        return (
        <div className="upload-video">
            <h1 className="upload-video__title">Upload Video</h1>
            <h1 className="upload-video__thumbnail-title">VIDEO THUMBNAIL</h1>
            <div className="upload-video__desktop">
                <img src={"http://localhost:8080/images/Upload-video-preview.jpg"} className="upload-video__thumbnail"/>
                <form className="upload-video__form" onSubmit={this.uploadNewVideo} ref={(form) => (this.form = form)}>
                    <div className="upload-video__input-field">
                    <label form="title">Title Your Video</label>
                    <input type="text" name="title" id="title" placeholder="Add a title to your video"></input>
                    </div>
                    <div className="upload-video__form">
                        <label form="description">Add a Video Desctiption</label>
                        <textarea name="description" id="description" placeholder="Add a description to your video"></textarea>
                        <div className="upload-video__bottom-section">
                        <button type="submit" className="upload-video__button">
                            <img src={"http://localhost:8080/images/publish.svg"} alt="upload-icon"/>
                            <h1>PUBLISH</h1>
                        </button>
                        <p className="upload-video__cancel">Cancel</p>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
        )
    }
}

export default UploadPage;