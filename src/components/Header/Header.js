import Logo from "../Logo/Logo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import SearchBar from "../SearchBar/SearchBar";
import UploadButton from "../UploadButton/UploadButton";
import './Header.scss';

function Header() {
    return (
        <>
        <div className="header__wrapper">
        <Logo />
        <div className="header__searchBar-wrapper">
        <SearchBar />
        <div className="header__profile-picture-wrapper">
        <ProfilePicture />
        </div>
        </div>
        <UploadButton />
        <div className="header__profile-picture-two">
        <ProfilePicture />
        </div>
        </div>
        
        </>
    );
  }
  
  export default Header;