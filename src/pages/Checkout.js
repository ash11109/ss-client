import Footer from '../component/Footer';
import Drawermenu from '../component/Drawermenu';
import SideCart from '../component/SideCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ashContext } from '../App';

const Checkout = () => {

    const { IMG , cart } = useContext(ashContext);

    let total = cart.reduce( (sum,a) => sum+=parseInt(a.price) , 0 );

    return (
        <>
        <main id="MainContent" className="content-for-layout">
            <div className="checkout-page mt-100">
                <div className="container">
                    <div className="checkout-page-wrapper">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                <div className="section-header mb-3">
                                    <h2 className="section-heading">Check out</h2>
                                </div>


                                <div className="shipping-address-area">
                                    <h2 className="shipping-address-heading pb-1">Shipping address / Billing address</h2>
                                    <div className="shipping-address-form-wrapper">
                                        <form action="#" className="shipping-address-form common-form">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">First name</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Last name</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Email address</label>
                                                        <input type="email" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Phone number</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Company</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Country</label>
                                                        <select className="form-select">
                                                            <option selected="ca">Canada</option>
                                                            <option value="us">USA</option>
                                                            <option value="au">Australia</option>
                                                            <option value="me">Mexico</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">City</label>                                                        
                                                        <select className="form-select">
                                                            <option selected="ca">Toronto</option>
                                                            <option value="us">Quebec</option>
                                                            <option value="au">Windsor</option>
                                                            <option value="me">Calgary</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Zip code</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Address 1</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-12">
                                                    <fieldset>
                                                        <label className="label">Address 2</label>
                                                        <input type="text" />
                                                    </fieldset>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div className="shipping-address-area billing-area">
                                    <div className="minicart-btn-area d-flex align-items-center justify-content-between flex-wrap">
                                        <Link to="/cart" className="checkout-page-btn minicart-btn btn-secondary">BACK TO CART</Link>
                                        <Link to="/" className="checkout-page-btn minicart-btn btn-primary">PROCEED TO SHIPPING</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-12 col-12">
                                <div className="cart-total-area checkout-summary-area">
                                    <h3 className="d-none d-lg-block mb-0 text-center heading_24 mb-4">Order summary</h3>

                                    {
                                        cart.map( (item,i) => <div key={i}>
                                            <div className="minicart-item d-flex">
                                            <div className="mini-img-wrapper">
                                                <img className="mini-img" src={IMG+item.imgs[0]} alt="img"/>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title">{item.name}</h2>
                                                <p className="product-vendor">{item.price}</p>
                                            </div>
                                        </div>
                                        </div> )

                                    }


                                    <div className="cart-total-box mt-4 bg-transparent p-0">
                                        <div className="subtotal-item subtotal-box">
                                            <h4 className="subtotal-title">Subtotals:</h4>
                                            <p className="subtotal-value">{total} RS</p>
                                        </div>
                                        <div className="subtotal-item shipping-box">
                                            <h4 className="subtotal-title">Shipping:</h4>
                                            <p className="subtotal-value">$00.00</p>
                                        </div>
                                        <div className="subtotal-item discount-box">
                                            <h4 className="subtotal-title">Discount:</h4>
                                            <p className="subtotal-value">$000.00</p>
                                        </div>
                                        <hr />
                                        <div className="subtotal-item discount-box">
                                            <h4 className="subtotal-title">Total:</h4>
                                            <p className="subtotal-value">{total} RS</p>
                                        </div>


                                        <div className="mt-4 checkout-promo-code">
                                            <input className="input-promo-code" type="text" placeholder="Promo code" />
                                            <Link to="/" className="btn-apply-code position-relative btn-secondary text-uppercase mt-3">
                                                Apply Promo Code
                                            </Link>
                                        </div>
                                    </div>
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
        </>
    );
}
export default Checkout;