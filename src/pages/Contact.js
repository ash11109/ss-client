import '../App.css';
import Footer from '../component/Footer';
import { ChatRightHeart, Geo, Phone } from 'react-bootstrap-icons';

const Contact = () => {
    return (
        <>
        <main id="MainContent" className="content-for-layout">
            <div className="contact-page">

                <div className="contact-box mt-100">
                    <div className="contact-box-wrapper">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <ChatRightHeart size={40}/>                                     
                                        </div>
                                        <div className="contact-details">
                                            <h2 className="contact-title">Mail Address</h2>
                                            <a className="contact-info" href="mailto:info@example.com">info@example.com</a>
                                            <a className="contact-info" href="mailto:info2@example.com">info2@example.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <Geo size={40}/>                                      
                                        </div>
                                        <div className="contact-details">
                                            <h2 className="contact-title">Office Location</h2>
                                            <p className="contact-info">2715 Ash Dr. San Jose, South Dakota 83475</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <Phone size={40}/>                                    
                                        </div>
                                        <div className="contact-details">
                                            <h2 className="contact-title">Phone Number</h2>
                                            <a className="contact-info" href="tel:(201) 555-0124">(201) 555-0124</a>
                                            <a className="contact-info" href="tel:(307) 555-0133">(307) 555-0133</a>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section mt-100">
                    <div className="container">
                        <div className="contact-form-area">
                            <div className="section-header mb-4">
                                <h2 className="section-heading">Drop us a line</h2>
                                <p className="section-subheading">We would like to hear from you.</p>
                            </div>
                            <div className="contact-form--wrapper">
                                <form action="#" className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <fieldset>
                                                <input type="text" placeholder="Full name" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <fieldset>
                                                <input type="email" placeholder="Email Address*" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <fieldset>
                                                <input type="text" placeholder="Type a subject" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <fieldset>
                                                <input type="text" placeholder="Phone Number" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <fieldset>
                                                <textarea cols="20" rows="6" placeholder="Write your message here*"></textarea>
                                            </fieldset>
                                            <button type="submit" className="position-relative review-submit-btn contact-submit-btn">SEND MESSAGE</button>
                                        </div>
                                    </div>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>            
        </main>

        <Footer/>
        </>
    );
}

export default Contact;