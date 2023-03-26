import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ashContext } from '../App';

const CategoryCard = (props) => {

  const { IMG } = useContext(ashContext);

  return (
    <div key={props.data.cat_id}>
      <div className="ash-catg-items">
        <div className="ash-catg-items-container">
          <img
            className="ash-catg-items-img"
            src={ IMG+props.data.catImage }
            alt="cat img"
          />
          <p className="ash-catg-items-title"> 
            { props.data.catname } 
          </p>
          <div className="ash-catg-items-overlay"></div>
          <div className="ash-catg-items-button">
            <Link className="ash-catg-items-link" to={"/products/"+props.data.cat_id} >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
