import './UploadButton.scss';
import { Link } from 'react-router-dom';

function UploadButton() {
    return (
        <Link to='/upload'>
        <button className="header__upload-button" type="submit"><p className='header__upload-button-text'>UPLOAD</p></button>
        </Link>
    );
  }
  
  export default UploadButton;