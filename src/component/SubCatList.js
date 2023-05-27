import { useContext } from "react";
import { ashContext } from "../App";
import "../App.css";
import SubCategoryCard from "./SubCategoryCard";

const SubCatList = (props) => {

  const { subCategoryList } = useContext(ashContext);

  return (
    <>
      <div className="collection-product-container">
        <div className="featured-collection mt-10 overflow-hidden">
          <div className="collection-tab-inner">
            <div className="container">
              <div className="row">


              {
                subCategoryList.map((item,i)=> item.cat_id === props.data ? <SubCategoryCard data={item} key={i}/> : '' )
              }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCatList;