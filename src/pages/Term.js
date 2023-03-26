import '../App.css';
import Footer from '../component/Footer';
import Drawermenu from '../component/Drawermenu';
import SideCart from '../component/SideCart';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import FaQCard from '../component/FaQCard';
import { ashContext } from '../App';

const Term = () => {

    const { API } = useContext(ashContext);
    const [ data , setData ] = useState([]);

    useEffect(()=>{

        axios.postForm( API , 
            {
                "type": 3
            }
        ).then( res => setData(res.data.data) );

    },[API])


    return (
        <>
            <main id="MainContent" className="content-for-layout">
                <div className="faq-section mt-100 overflow-hidden">
                    <div className="faq-inner">
                        <div className="container">
                            <div className="section-header text-center">
                                <h2 className="section-heading">Terms and Condition</h2>
                            </div>
                            <div className="faq-container">
                                <div className="row">

                                <h5>By using our website and purchasing our products, you agree to comply with these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not use our website or purchase our products.</h5><br></br>

                                {
                                    data.map( (item,i) => item.policyType === 'terms' ? <FaQCard data={item} key={i}/> : '' )
                                }  
                                                             
                                </div>
                                <div className="view-all text-center">
                                    <h4>Thank you for shopping with Sachi Sparkers!</h4><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </main>
            <Footer/>
            <Drawermenu/>
            <SideCart/>


        </>
    );

}

export default Term;