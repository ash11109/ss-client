import '../App.css';
import Footer from '../component/Footer';
import Drawermenu from '../component/Drawermenu';
import SideCart from '../component/SideCart';

const About = () => {
    return (
        <>

        <div className="body-wrapper">


        <main id="MainContent" className="content-for-layout">
            <div className="about-page">
                <div className="about-hero mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="about-hero-content">
                                    <h2 className="about-hero-title">We Provide Expert Service and aim to have a long term with you</h2>
                                    <p className="about-hero-subtitle">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter</p>
                                    <ul className="about-hero-action p-0">
                                        <li className="action-item d-flex">
                                            <div className="action-count">01</div>
                                            <div className="action-content">
                                                <h4 className="action-title">Get A Quote</h4>
                                                <p className="action-subtitle">Through True Rich Attended does no end it his mother since real had half every.</p>
                                            </div>
                                        </li>
                                        <li className="action-item d-flex">
                                            <div className="action-count">02</div>
                                            <div className="action-content">
                                                <h4 className="action-title">Book An Appointment</h4>
                                                <p className="action-subtitle">Through True Rich Attended does no end it his mother since real.</p>
                                            </div>
                                        </li>
                                        <li className="action-item d-flex">
                                            <div className="action-count">03</div>
                                            <div className="action-content">
                                                <h4 className="action-title">Lorem Ipsum</h4>
                                                <p className="action-subtitle">Ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="about-hero-img">
                                    <img src="assets/img/about/about-hero.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </main>



        <Footer/>
        <Drawermenu/>
        <SideCart/>

        </div>

        </>
    );
  };
  
  export default About;