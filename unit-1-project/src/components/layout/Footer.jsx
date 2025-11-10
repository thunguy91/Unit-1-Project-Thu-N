import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


export default function Footer(){

    return(
        <footer>
          <div>
            <h2>
              Radii
            </h2>
            <nav>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </nav>
              <div>
                <a href="https://instagram.com"><FaInstagram/></a>
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://twitter.com"><FaTwitter/></a>
              </div>
          </div>
          <div>
            <p>© 2025 Radii. All rights reserved.</p>
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms of Service</a>
          </div>
        </footer>
    )
}
