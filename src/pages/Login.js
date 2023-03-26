import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <main id="MainContent" className="content-for-layout">
            <div className="login-page mt-100">
                <div className="container">
                    <form action="#" className="login-form common-form mx-auto">
                        <div className="section-header mb-3">
                            <h2 className="section-heading text-center">Login</h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <fieldset>
                                    <label className="label">Email address</label>
                                    <input type="email" />
                                </fieldset>
                            </div>
                            <div className="col-12">
                                <fieldset>
                                    <label className="label">Password</label>
                                    <input type="password" />
                                </fieldset>
                            </div>
                            <div className="col-12 mt-3">
                                <Link to="/" className="text_14 d-block">Forgot your password?</Link>
                                <button type="submit" className="btn-primary d-block mt-4 btn-signin">SIGN IN</button>
                                <Link to="/register" className="btn-secondary mt-2 btn-signin">CREATE AN ACCOUNT</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>            
        </main>
        </>
    );
}

export default Login;