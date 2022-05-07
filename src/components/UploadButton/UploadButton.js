import UploadIcon from "../../assets/images/upload.svg"
function UploadButton() {
    return (
        <>
        <button type="submit"><img src={UploadIcon}></img>Upload</button>
        </>
    );
  }
  
  export default UploadButton;