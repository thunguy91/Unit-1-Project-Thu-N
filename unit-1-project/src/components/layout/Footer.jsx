import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import DropPin from '../../assets/DropPin.png'
import { Link } from "react-router";

export default function Footer(){

    return(
        <footer className="footer">
          <div className="footer-top">
            <h2 className="footer-logo">
              <img src={DropPin} alt="magnifying glass in drop pin" width={30} height={35}/>Radii
            </h2>
            <nav className="footer-nav">
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </nav>
              <div className="footer-social"> 
                <a href="https://instagram.com"><FaInstagram/></a>
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://twitter.com"><FaTwitter/></a>
              </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Radii. All rights reserved.</p>
          </div>
        </footer>
    )
}
