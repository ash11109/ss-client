import "../App.css";
import Footer from "../component/Footer";
import Drawermenu from "../component/Drawermenu";
import SideCart from "../component/SideCart";
import GuaranteedCheckout from "../component/GuaranteedCheckout";
import Slider from "react-slick";
import RatingComponent from "../component/RatingComponent";
import { Dash, Plus } from "react-bootstrap-icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ashContext } from "../App";
import { useParams } from "react-router-dom";


const ProductDetail = () => {

  const { API , IMG , productList , addToCart } = useContext(ashContext);
  const [ faq , setFaq ] = useState([]);

  const params = useParams();
  const {id} = params;

  const item = productList.find( item => item.id === id );

  useEffect(()=>{

      axios.postForm( API , 
          {
              "type": 3
          }
      ).then( res => setFaq(res.data.data) );

  },[API])


  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={ IMG+item.imgs[i] } alt="product img" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <main id="MainContent" className="content-for-layout">
        <div className="product-page mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-gallery product-gallery-vertical d-flex">
                  <div className="slider-container">
                    <Slider {...settings}>
                    { 
                      item.imgs.map( (x,i) => 
                        <div key={i}>
                          <img src={ IMG+x } alt="product img" />
                        </div>
                      )
                    }
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-details ps-lg-4">
                  <div className="mb-3">
                    <span className="product-availability">
                        { item.status === 'Enable' ? 'In Stock' : 'Out of Stock' } 
                      </span>
                  </div>
                  <h2 className="product-title mb-3"> { productList.find(item => item.id === id ).name } </h2>
                  <div className="product-rating d-flex align-items-center mb-3">
                    <span className="star-rating">
                      <RatingComponent data={3} />
                    </span>
                    <span className="rating-count ms-2">(22)</span>
                  </div>
                  <div className="product-price-wrapper mb-4">
                    <span className="product-price regular-price">
                      $ { productList.find(item => item.id === id ).price }
                    </span>
                    <del className="product-price compare-price ms-2">
                      $ { productList.find(item => item.id === id ).fake_price }
                    </del>
                  </div>
                  <div className="product-sku product-meta mb-1">
                    <strong className="label">SKU:</strong> 401
                  </div>
                  <div className="product-vendor product-meta mb-3">
                    <strong className="label">Color :
                    { productList.find(item => item.id === id ).color }
                    </strong> 
                  </div>

                  <div className="misc d-flex align-items-end justify-content-between mt-4">
                    <div className="quantity d-flex align-items-center justify-content-between">
                      <button className="qty-btn dec-qty">
                        <Plus></Plus>
                      </button>
                      <input
                        className="qty-input"
                        type="number"
                        name="qty"
                        value="1"
                        min="0"
                        onChange={() => {}}
                      />
                      <button className="qty-btn inc-qty">
                        <Dash></Dash>
                      </button>
                    </div>
                  </div>

                    <div className="product-form-buttons d-flex align-items-center justify-content-between mt-4"></div>
                    <div className="buy-it-now-btn mt-2">
                      <button
                        type="submit"
                        onClick={ () => addToCart(productList.find(item => item.id === id )) }
                        className="position-relative btn-atc btn-buyit-now"
                      >
                        ADD TO CART
                      </button>
                    </div>

                  <GuaranteedCheckout />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tab-section mt-100">
          <div className="container">
            <div className="tab-list product-tab-list">
              <nav className="nav product-tab-nav">
                <a
                  className="product-tab-link tab-link active"
                  href="#pdescription"
                  data-bs-toggle="tab"
                >
                  Description
                </a>
                <a
                  className="product-tab-link tab-link"
                  href="#pshipping"
                  data-bs-toggle="tab"
                >
                  Shipping & Returns
                </a>
                <a
                  className="product-tab-link tab-link"
                  href="#pstyle"
                  data-bs-toggle="tab"
                >
                  Faq :
                </a>
                <a
                  className="product-tab-link tab-link"
                  href="#preview"
                  data-bs-toggle="tab"
                >
                  Reviews
                </a>
              </nav>
            </div>
            <div className="tab-content product-tab-content">
              <div id="pdescription" className="tab-pane fade show active">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12">
                    <div className="desc-content">
                      <h4 className="heading_18 mb-3">
                        { productList.find(item => item.id === id ).description }
                      </h4>
                      <p className="text_16 mb-4">
                        {  }
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-12">
                    <div className="desc-img">
                      <img src={ IMG+item.imgs[0] } alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="desc-content mt-4">
                      <p className="text_16">
                        { }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pshipping" className="tab-pane fade">
                <div className="desc-content">
                  <h4 className="heading_18 mb-3">
                    Returns within the European Union
                  </h4>
                  <p className="text_16 mb-4">
                    The European law states that when an order is being
                    returned, it is mandatory for the company to refund the
                    product price and shipping costs charged for the original
                    shipment. Meaning: one shipping fee is paid by us.
                  </p>
                  <p className="text_16 mb-4">
                    Standard Shipping: If you placed an order using "standard
                    shipping" and you want to return it, you will be refunded
                    the product price and initial shipping costs. However, the
                    return shipping costs will be paid by you.
                  </p>
                  <p className="text_16">
                    Free Shipping: If you placed an order using "free shipping"
                    and you want to return it, you will be refunded the product
                    price, but since we paid for the initial shipping, you will
                    pay for the return.
                  </p>
                </div>
              </div>
              <div id="pstyle" className="tab-pane fade">
                <h4>Frequently Asked Questions (FAQ) for Sachi Sparkers E-commerce Leather Company:</h4><br></br>
                <div className="desc-content">
                {
                  faq.map( item => item.policyType === 'FaQ' ? 
                  <div key={item.id}>
                    <h4 className="heading_18 mb-3">{ item.title }</h4>
                    <p className="text_16 mb-4">{ item.content }</p>
                  </div>
                  : '' )
                }  
                </div>
              </div>
              <div id="preview" className="tab-pane fade">
                <div className="review-area accordion-parent">
                  <h4 className="heading_18 mb-3">Customer Reviews</h4>
                  <div className="review-header d-flex justify-content-between align-items-center">
                    <p className="text_16">No reviews yet.</p>
                    <button
                      className="text_14 bg-transparent text-decoration-underline write-btn"
                      type="button"
                    >
                      Write a review
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Drawermenu />
      <SideCart />
    </>
  );
};
export default ProductDetail;
