import "../App.css";
import logo from "../assets/img/logo.png";
import { Outlet, Link } from "react-router-dom";
import Topbar from "./Topbar";
import { Bag } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { ashContext } from "../App";
import { Container , Nav , Navbar , NavDropdown} from "react-bootstrap";

const SNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { categoryList, cart } = useContext(ashContext);

  const { IMG, removeFromCart } = useContext(ashContext);

  let total = cart.reduce(
    (sum, a) => (sum += parseInt(a.price * a.quantity)),
    0
  );

  const cartCountStyle = {
    color: "white",
    fontSize: 18,
    backgroundColor: "blue",
    borderRadius: 30,
    display: "inline-block",
    padding: 6,
  };

  return (
    <>
      <Topbar />

      <header className="sticky-header border-btm-black header-1">
      
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <Link href="/" className="logo-main">
                <img src={logo} loading="lazy" alt="ss" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav className="menu-list-item nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Nav>
                <NavDropdown title="Categories" className="menu-list-item nav-item" id="basic-nav-dropdown">
                  {categoryList.map((item) => (
                    <NavDropdown.Item key={item.cat_id}
                      className="nav-link-sub nav-text-sub"
                      to={"/products/" + item.cat_id}
                      as={Link}
                    > {item.catname}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav className="menu-list-item nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </Nav>
                <Nav className="menu-list-item nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </Nav>
                <Nav className="menu-list-item nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Nav>
              <Nav>
                <Nav>
                  <Link to="#" className="menu-bars">
                    <Bag color="black" size="24" onClick={showSidebar}></Bag>
                    <span style={cartCountStyle}>{cart.length}</span>
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className={sidebar ? "side-menu active" : "side-menu"}>
          <div onClick={showSidebar}>
            <div className="offcanvas-header border-btm-black">
              <h5 className="cart-drawer-heading text_16">
                Your Cart ( {cart.length} )
              </h5>
              <Link to="#" className="btn-close text-reset"></Link>
            </div>
          </div>

          <div className="cart-box">
            <div className="cart-content-area d-flex justify-content-between flex-column">
              <div className="minicart-loop custom-scrollbar">
                {cart.map((item, i) => (
                  <div key={i}>
                    <div className="minicart-item d-flex">
                      <div className="mini-img-wrapper">
                        <img
                          className="mini-img"
                          src={IMG + item.imgs[0]}
                          alt="img"
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title"> {item.name} </h2>
                        <p className="product-vendor">
                          quantity : {item.quantity}
                        </p>
                        <div className="misc d-flex align-items-end justify-content-between">
                          <div className="product-remove-area d-flex flex-column align-items-end">
                            <div className="product-price">
                              {item.price} Rs
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="product-remove"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-line"></div>
                  </div>
                ))}
              </div>

              {cart.length !== 0 ? (
                <div className="minicart-footer">
                  <div className="minicart-calc d-flex align-items-center justify-content-between">
                    <span className="cart-subtotal mb-0">Subtotal</span>
                    <span className="cart-subprice">$ {total}</span>
                  </div>

                  <p className="cart-taxes text-center my-4">
                    Taxes and shipping will be calculated at checkout.
                  </p>

                  <div className="minicart-btn-area d-flex align-items-center justify-content-between">
                    <Link to="/cart" className="minicart-btn btn-secondary">
                      View Cart
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default SNavbar;
