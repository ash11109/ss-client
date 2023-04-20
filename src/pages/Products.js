import '../App.css';
import { useParams } from "react-router-dom";
import Footer from '../component/Footer';
import ProductList from '../component/ProductList';
import { useContext } from 'react';
import { ashContext } from '../App';

const Products = () => {

    const params = useParams();
    const {type} = params;
    const { categoryList } = useContext(ashContext);
    
    return (
        <>

        <main id="MainContent" className="content-for-layout">
            <div className="collection mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="filter-sort-wrapper d-flex justify-content-between flex-wrap">
                                <div className="collection-title-wrap d-flex align-items-end">
                                    <h2 className="collection-title heading_24 mb-0">All products - 
                                        { categoryList.length !== 0 ? 
                                            categoryList.find( data => data.cat_id === type ).catname : '' }
                                    </h2>
                                    <p className="collection-counter text_16 mb-0 ms-2"></p>
                                </div>
                            </div>

                            <div>
                                <ProductList data={type}/>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </main>





            <Footer/>
        </>
    );
};

export default Products;