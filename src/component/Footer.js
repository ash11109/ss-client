import '../App.css';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <>
    <div className='footer-ash'>
        <div className='footer-ash-1'>
            <div>
              <img src={logo} loading="lazy" alt="ss" className='footer-ash-logo'/>
            </div>
            <div>
              <div className='footer-ash-social'>
                <div>
                  <a href="https://twitter.com/" target='_blank' rel="noreferrer"><Twitter color='white' size={21} className='ash-icon'></Twitter></a>
                </div>
                <div>
                  <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><Facebook color='white' size={21} className='ash-icon'></Facebook></a>
                </div>
                <div>
                  <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><Instagram color='white' size={21} className='ash-icon'></Instagram></a>
                </div>
                <div>
                  <a href="https://www.youtube.com/" target='_blank' rel="noreferrer"><Youtube color='white' size={21} className='ash-icon'></Youtube></a>
                </div>
              </div>
            </div>
        </div>
        <div className='footer-ash-2'>
            <div>
              <div>SHOPPING INFORMATION</div>
              <p><Link to="/cart">Cart</Link></p>
              <p><Link to="/login">Login</Link></p>
            </div>
            <div>
              <div>CUSTOMER SERVICE</div>
              <p><Link to="/Privacy">Privacy policy</Link></p>
              <p><Link to="/Terms">Terms & Conditions</Link></p>
            </div>
            <div>
              <div>BUSİNESS</div>
              <p><Link to="/about">About</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
            <div>
              <div>SUBSCRIBE TO OUR NEWSLETTER</div>
              <p>Be the first to get the latest news about trends, promotions and much more!</p>
              <div className='news-letter-ash'>
                <input
                  placeholder='Enter your Email'
                />
                <button>Send</button>
              </div>
            </div>
        </div>
        <div className='footer-ash-3'>
            <div>
              <img src="https://cdn.ticimax.com/Uploads/hazirSablonResimleri/footerImg/konsept1banka.png" loading="lazy" alt="ss"/>
            </div>
            <div>
              <p>© WWW.SHACHI.COM - ALL RIGHTS RESERVED</p>
            </div>
        </div>
        <div className='footer-ash-4'>
            <a href='https://sysrootsolution.com/' target='_blank' rel="noreferrer">
              ©<span className="current-year"></span>2023 SR SOLURION.
            </a>
        </div>
    </div>
    </>
  );
};

export default Footer;
