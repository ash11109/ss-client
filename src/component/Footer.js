import '../App.css';
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <>
      <footer className="mt-100 overflow-hidden ash-mt">
        <div className="footer-bottom bg-4">
          <div className="container">
            <div className="footer-bottom-inner d-flex flex-wrap justify-content-md-between justify-content-center align-items-center">
              <ul className="footer-bottom-menu list-unstyled d-flex flex-wrap align-items-center mb-0">
                <li className="footer-menu-item">
                  <Link to="/Privacy">Privacy policy</Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="/Terms">Terms & Conditions</Link>
                </li>
              </ul>
              <div className="footer-social-wrapper">
                <ul className="footer-social list-unstyled d-flex align-items-center flex-wrap mb-0">
                  <li className="footer-social-item">
                    <Link to="/">
                      <Twitter color='white' size={21}></Twitter>
                    </Link>
                  </li>
                  <li className="footer-social-item">
                    <Link to="/">
                      <Facebook color='white' size={21}></Facebook>
                      </Link>
                  </li>
                  <li className="footer-social-item">
                    <Link to="/">
                      <Instagram color='white' size={21}></Instagram>
                      </Link>
                  </li>
                  <li className="footer-social-item">
                    <Link to="/">
                      <Youtube color='white' size={21}></Youtube>
                      </Link>
                  </li>
                </ul>
              </div>
              <p className="copyright footer-text">
                ©<span className="current-year"></span>2023 SR SOLURION.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
