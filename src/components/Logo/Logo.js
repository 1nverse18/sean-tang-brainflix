import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg'
import './Logo.scss'
import { Link } from 'react-router-dom'

function Logo() {
    return ( 
        <Link to="/">
        <div className="header__logo">
        <img src={BrainFlixLogo} ></img>
        </div>
        </Link>
    );
  }
  
  export default Logo;