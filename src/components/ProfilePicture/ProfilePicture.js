import ProfilePhoto from '../../assets/images/Mohan-muruge.jpg'
import './ProfilePicture.scss'
function ProfilePicture() {
    return (
        <>
        <img src={ProfilePhoto} className="header__profile-picture"></img>
        </>
    );
  }
  
  export default ProfilePicture;