import { ArrowDown, Person, Phone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Drawermenu = () => {
    return (
    <>
        <div className="offcanvas offcanvas-start d-flex d-lg-none" tabIndex="-1" id="drawer-menu">
            <div className="offcanvas-wrapper">
                <div className="offcanvas-header border-btm-black">
                    <h5 className="drawer-heading">Shachi</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0 d-flex flex-column justify-content-between">
                    <nav className="site-navigation">
                        <ul className="main-menu list-unstyled">
                        <li className="menu-list-item nav-item has-dropdown">
                                        <Link className="nav-link" to="/">Home</Link>
                                   </li>
                                   <li className="menu-list-item nav-item has-dropdown">
                                        <div className="mega-menu-header">
                                            <Link className="nav-link" to="/">
                                                Categories
                                                <ArrowDown></ArrowDown>
                                            </Link>
                                        </div>
                                        <div className="submenu-transform submenu-transform-desktop">
                                            <ul className="submenu list-unstyled">
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/backpacks">Back Packs</Link>
                                                </li>
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/bodybags">Body Bags</Link>
                                                </li>
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/clutches">Clutches</Link>
                                                </li>
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/laptopbags">Laptop Bags</Link>
                                                </li>
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/slingbags">Sling Bags</Link>
                                                </li>
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/wallets">Wallets</Link>
                                                </li>
                                                <li className="menu-list-item nav-item-sub">
                                                    <Link className="nav-link-sub nav-text-sub" to="/products/womenbags">Women Bags</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-list-item nav-item">
                                        <Link className="nav-link" to="/cart">Cart</Link>
                                    </li>
                                    <li className="menu-list-item nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="menu-list-item nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                            
                        </ul>
                    </nav>
                    <ul className="utility-menu list-unstyled">
                        <li className="utilty-menu-item">
                            <a className="announcement-text" href="tel:+1-078-2376">
                                <span className="utilty-icon-wrapper">
                                <Phone size={24}></Phone>
                                </span>
                                Call: +1 234 5776
                            </a>
                        </li>
                        <li className="utilty-menu-item">
                            <Link className="announcement-login announcement-text" to="/login">
                                <span className="utilty-icon-wrapper">
                                <Person size={24}></Person>
                                </span>
                                <span>Login</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Drawermenu;