import { Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <>
            <div className="announcement-bar bg-1 py-1 py-lg-2">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3 d-lg-block d-none">
                            <div className="announcement-call-wrapper">
                                <div className="announcement-call">
                                    <span className="announcement-text text-white" >Call: +1 234 5678</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="announcement-text-wrapper d-flex align-items-center justify-content-center">
                                <p className="announcement-text text-white"></p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-lg-block d-none">
                            <div className="announcement-meta-wrapper d-flex align-items-center justify-content-end">
                                <div className="announcement-meta d-flex align-items-center">
                                    <Link className="announcement-login announcement-text text-white" to="/login">
                                        <Person size={22}></Person>
                                        <span>Login</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  };
  
  export default Topbar;