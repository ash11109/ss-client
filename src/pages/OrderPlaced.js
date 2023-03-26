import '../App.css';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import Drawermenu from '../component/Drawermenu';
import SideCart from '../component/SideCart';

const OrderPlaced = () => {
    return (
        <>
        <div className="body-wrapper">

        

        <main id="MainContent" className="content-for-layout">
            <div className="error-page mt-100">
                <div className="container">
                    <div className="error-content text-center">
                        <div className="error-img mx-auto">
                            <img src="assets/img/op.png" alt="img"/>
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
        <Drawermenu/>
        <SideCart/>
        </div>
        </>
    )
  };
  
  export default OrderPlaced;