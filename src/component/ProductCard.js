import { useContext } from "react";
import { Link } from "react-router-dom";
import { ashContext } from "../App";


const ProductCard = (props) => {

  const { IMG , addToCart } = useContext(ashContext);

  return (
    <>
      <div className="col-lg-3 col-md-6 col-6">
        <div className="product-card">
          <div className="product-card-img">
            <Link className="hover-switch" to={"/productDetail/"+props.data.id}>
              <img
                className="secondary-img"
                src={IMG+props.data.imgs[0]}
                alt="product-img"
              />
              <img
                className="primary-img"
                src={IMG+props.data.imgs[1]}
                alt="product-img"
              />
            </Link>

            <div className="product-card-action product-card-action-2">
              <button onClick={ () => addToCart(props.data)} className="addtocart-btn btn-primary">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="product-card-details text-center">
            <h3 className="product-card-title">
              <Link to="/productDetail">{ props.data.name }</Link>
            </h3>
            <div className="product-card-price">
              <span className="card-price-regular">
                $ { props.data.price }
              </span>
              <span className="card-price-compare text-decoration-line-through">
                $ { props.data.fake_price }
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
