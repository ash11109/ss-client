import { useContext } from "react";
import { ashContext } from "../App";
import "../App.css";
import ProductCard from "./ProductCard";

const ProductList = (props) => {

  const { productList } = useContext(ashContext);

  return (
    <>
      <div className="collection-product-container">
        <div className="featured-collection mt-100 overflow-hidden">
          <div className="collection-tab-inner">
            <div className="container">
              <div className="row">


              {
                productList.map((item,i)=> item.category === props.data ? <ProductCard data={item} key={i}/> : '' )
              }


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;