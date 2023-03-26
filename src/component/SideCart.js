import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ashContext } from "../App";

const SideCart = () => {

  const { IMG , cart , removeFromCart } = useContext(ashContext);

  let total = cart.reduce( (sum,a) => sum+=parseInt(a.price * a.quantity) , 0 );

  return (
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="drawer-cart">
        <div className="offcanvas-header border-btm-black">
          <h5 className="cart-drawer-heading text_16">Your Cart ( { cart.length } )</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="cart-content-area d-flex justify-content-between flex-column">
            <div className="minicart-loop custom-scrollbar">


              {

                cart.map ( (item,i) =>  <div key={i}>
                <div className="minicart-item d-flex">
                <div className="mini-img-wrapper">
                  <img
                    className="mini-img"
                    src= { IMG + item.imgs[0] }
                    alt="img"
                  />
                </div>
                <div className="product-info">
                  <h2 className="product-title"> {item.name} </h2>
                  <p className="product-vendor"> quantity : {item.quantity} </p>
                  <div className="misc d-flex align-items-end justify-content-between">
                    <div className="product-remove-area d-flex flex-column align-items-end">
                      <div className="product-price"> { item.price } Rs</div>
                      <button onClick={()=>removeFromCart(item.id)} className="product-remove">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                </div>  
                
                )
              }





            </div>
            
            <div className="minicart-footer">
              <div className="minicart-calc-area">
                <div className="minicart-calc d-flex align-items-center justify-content-between">
                  <span className="cart-subtotal mb-0">Subtotal</span>
                  <span className="cart-subprice">$ {
                    total
                  } </span>
                </div>


                <p className="cart-taxes text-center my-4">
                  Taxes and shipping will be calculated at checkout.
                </p>
              </div>
              <div className="minicart-btn-area d-flex align-items-center justify-content-between">
                <Link to="/cart" className="minicart-btn btn-secondary">
                  View Cart
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideCart;
