import Logo from "../Logo/Logo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import SearchBar from "../SearchBar/SearchBar";
import UploadButton from "../UploadButton/UploadButton";

function Header() {
    return (
        <>
        <Logo />
        <SearchBar />
        <ProfilePicture />
        <UploadButton />
        </>
    );
  }
  
  export default Header;