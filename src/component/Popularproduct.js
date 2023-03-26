import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ashContext } from "../App";
import ProductCard from "./ProductCard";

const Popularproduct = () => {

    const { API } = useContext(ashContext);

    const [ popProductList , setPopProductList ] = useState([]);

    useEffect(() => {
        axios.postForm( API , 
            {
                "type": 4
            }
            ).then( res => setPopProductList(res.data.data) );
    }, [API]);
    
    return (
        <>
            <div className="featured-collection mt-100 overflow-hidden">
                <div className="collection-tab-inner">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="section-heading">Popular Products</h2>
                        </div>
                        <div className="row">

                        {
                            popProductList.map((item,i)=><ProductCard data={item} key={i}/> )
                        }


                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Popularproduct;