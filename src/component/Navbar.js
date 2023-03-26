import { Outlet, Link } from "react-router-dom";
import Topbar from "./Topbar";
import { ArrowDown, Bag, List } from 'react-bootstrap-icons';
import { useContext } from "react";
import { ashContext } from "../App";

const Navbar = () => {

    const { categoryList , cart } = useContext(ashContext);

    const cartCountStyle = {
        color : "white",
        fontSize:18,
        backgroundColor:"blue",
        borderRadius:30,
        display:"inline-block",
        padding:6
    };

  return (
    <>
    <Topbar/>

      <header className="sticky-header border-btm-black header-1">
            <div className="header-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-4">
                            <div className="header-logo">
                                <Link href="/" className="logo-main">
                                    <img src="assets/img/logo.png" loading="lazy" alt="ss"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-block d-none">
                            <nav className="site-navigation">
                                <ul className="main-menu list-unstyled justify-content-center">
                                    <li className="menu-list-item nav-item has-dropdown">
                                        <Link className="nav-link" to="/">Home</Link>
                                   </li>
                                   <li className="menu-list-item nav-item has-dropdown">
                                        <div className="mega-menu-header">
                                            <Link className="nav-link" to="/">
                                                Categories
                                                <ArrowDown></ArrowDown>
                                            </Link>
                                            <span className="open-submenu">
                                                
                                            </span>
                                        </div>
                                        <div className="submenu-transform submenu-transform-desktop">
                                            <ul className="submenu list-unstyled">
                                            {
                                                categoryList.map( item => 
                                                    <li className="menu-list-item nav-item-sub" key={item.cat_id}>
                                                        <Link className="nav-link-sub nav-text-sub" to={"/products/"+item.cat_id}>{item.catname}</Link>
                                                    </li>
                                                )
                                            }
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
                        </div>
                        <div className="col-lg-3 col-md-8 col-8">
                            <div className="header-action d-flex align-items-center justify-content-end">
                                
                                <a className="header-action-item header-cart ms-4" href="#drawer-cart"
                                    data-bs-toggle="offcanvas">
                                    <Bag color="black" size="24"></Bag>
                                    <span style={cartCountStyle}>
                                        { cart.length }
                                    </span>
                                </a>
                                <a className="header-action-item header-hamburger ms-4 d-lg-none" href="#drawer-menu"
                                    data-bs-toggle="offcanvas">
                                    <List color="black" size={25}></List>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      <Outlet />
    </>
  )
};

export default Navbar;