import '../App.css';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import errorImg from '../assets/img/error/error.png';

const NoPage = () => {
    return (
        <>
        <div className="body-wrapper">

        

        <main id="MainContent" className="content-for-layout">
            <div className="error-page mt-100">
                <div className="container">
                    <div className="error-content text-center">
                        <div className="error-img mx-auto">
                            <img src={errorImg} alt="error"/>
                        </div>
                        <p className="error-subtitle">Page Not Found</p>
                        <Link to="/" className="btn-primary mt-4">BACK TO HOMEPAGE</Link>
                    </div>
                </div>
            </div>            
        </main>

        <Footer/>
        </div>
        </>
    )
  };
  
  export default NoPage;