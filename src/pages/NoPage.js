import '../App.css';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import Drawermenu from '../component/Drawermenu';
import SideCart from '../component/SideCart';

const NoPage = () => {
    return (
        <>
        <div className="body-wrapper">

        

        <main id="MainContent" className="content-for-layout">
            <div className="error-page mt-100">
                <div className="container">
                    <div className="error-content text-center">
                        <div className="error-img mx-auto">
                            <img src="assets/img/error/error.png" alt="error"/>
                        </div>
                        <p className="error-subtitle">Page Not Found</p>
                        <Link to="/" className="btn-primary mt-4">BACK TO HOMEPAGE</Link>
                    </div>
                </div>
            </div>            
        </main>

        <Footer/>
        <Drawermenu/>
        <SideCart/>
        </div>
        </>
    )
  };
  
  export default NoPage;