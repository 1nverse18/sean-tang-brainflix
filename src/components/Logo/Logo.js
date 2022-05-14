import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg'
import './Logo.scss'
function Logo() {
    return (
        <div className="header__logo">
        <img src={BrainFlixLogo} ></img>
        </div>
    );
  }
  
  export default Logo;