import '../App.css';
import opImg from '../assets/img/op.png';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';

const OrderPlaced = () => {
    return (
        <>
        <div className="body-wrapper">

        

        <main id="MainContent" className="content-for-layout">
            <div className="error-page mt-100">
                <div className="container">
                    <div className="error-content text-center">
                        <div className="error-img mx-auto">
                            <img src={opImg} alt="img"/>
                        </div>
                        {/* <p className="error-subtitle">Order Placed</p> */}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link to="/" className="btn-primary mt-4">BACK TO HOMEPAGE</Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>            
        </main>

        <Footer/>
        </div>
        </>
    )
  };
  
  export default OrderPlaced;