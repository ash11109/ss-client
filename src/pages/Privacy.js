import '../App.css';
import Footer from '../component/Footer';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import FaQCard from '../component/FaQCard';
import { ashContext } from '../App';


const Privacy = () => {
    
    const [ data , setData ] = useState([]);
    const { API } = useContext(ashContext);

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
                                <h2 className="section-heading">Privacy policy</h2>
                            </div>
                            <div className="faq-container">
                                <div className="row">

                                <h4>Privacy Policy for Sachi Sparkers E-commerce Leather Company:</h4><br></br>

                                {
                                    data.map( (item,i) => item.policyType === 'privacy' ? <FaQCard data={item} key={i}/> : '' )
                                }  
                                                             
                                </div>
                                <div className="view-all text-center">
                                    <h4>Thank you for choosing Sachi Sparkers!</h4><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </main>
            <Footer/>


        </>
    );
}

export default Privacy;