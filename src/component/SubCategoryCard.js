import { useContext } from "react";
import { Link } from "react-router-dom";
import { ashContext } from "../App";


const SubCategoryCard = (props) => {

  const { IMG } = useContext(ashContext);

  return (
    <>
      <div className="col-lg-3 col-md-6 col-6">
        <div className="product-card">
          <div className="product-card-img">
            <Link className="hover-switch" to={"/products/"+props.data.id} >
              <img
                className="primary-img"
                src={IMG+props.data.catImage}
                alt="product-img"
              />
            </Link>

          </div>
          <div className="product-card-details text-center">
            <h3 className="product-card-title">
              <Link to={"/products/"+props.data.id}> {props.data.catname} </Link>
            </h3>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategoryCard;