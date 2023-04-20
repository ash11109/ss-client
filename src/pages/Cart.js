import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import { useContext } from "react";
import { ashContext } from "../App";

const Cart = () => {

  const { IMG , cart , removeFromCart } = useContext(ashContext);

  let total = cart.reduce( (sum,a) => sum+=parseInt( a.price * a.quantity ) , 0 );

    return (
        <>
        <main id="MainContent" className="content-for-layout">
            <div className="cart-page mt-100">
                <div className="container">
                    <div className="cart-page-wrapper">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-12">
                                <table className="cart-table w-100">
                                    <thead>
                                      <tr>
                                        <th className="cart-caption heading_18">Product</th>
                                        <th className="cart-caption heading_18"></th>
                                        <th className="cart-caption text-center heading_18 d-none d-md-table-cell">Quantity</th>
                                        <th className="cart-caption text-end heading_18">Price</th>
                                      </tr>
                                    </thead>
                        
                                    <tbody>

                                    {

                                      cart.map ( (item , i) => 
                                      <tr className="cart-item" key={i}>
                                          <td className="cart-item-media">
                                            <div className="mini-img-wrapper">
                                                <img className="mini-img" src={ IMG + item.imgs[0] } alt="img"/>
                                            </div>                                    
                                          </td>
                                          <td className="cart-item-details">
                                            <h2 className="product-title">{ item.name }</h2>
                                            <p className="product-vendor">{ item.color }</p>                                   
                                          </td>
                                          <td className="cart-item-quantity">
                                          <h2 className="product-title">    {item.quantity} </h2>
                                            <button onClick={()=>removeFromCart(item.id)} className="product-remove mt-2">Remove</button>                           
                                          </td>
                                          <td className="cart-item-price text-end">
                                            <div className="product-price">{item.price} RS</div>                           
                                          </td>                        
                                        </tr>
                                      )

                                    }

                                    </tbody>
                                  </table>
                            </div>
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="cart-total-area">
                                    <h3 className="cart-total-title d-none d-lg-block mb-0">Cart Totals</h3>
                                    <div className="cart-total-box mt-4">
                                        <div className="subtotal-item subtotal-box">
                                            <h4 className="subtotal-title">Subtotals:</h4>
                                            <p className="subtotal-value"> {total} RS</p>
                                        </div>
                                        <div className="subtotal-item shipping-box">
                                            <h4 className="subtotal-title">Shipping:</h4>
                                            <p className="subtotal-value">00.00</p>
                                        </div>
                                        <div className="subtotal-item discount-box">
                                            <h4 className="subtotal-title">Discount:</h4>
                                            <p className="subtotal-value">00.00</p>
                                        </div>
                                        <hr />
                                        <div className="subtotal-item discount-box">
                                            <h4 className="subtotal-title">Total:</h4>
                                            <p className="subtotal-value"> { total }</p>
                                        </div>
                                        <p className="shipping_text">Shipping & taxes calculated at checkout</p>
                                        <div className="d-flex justify-content-center mt-4">
                                            <Link to="/checkout" className="position-relative btn-primary text-uppercase">
                                                Procced to checkout
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
        </>
    );
}

export default Cart;