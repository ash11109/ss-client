import { CarFront, ReplyAll, Wallet2 } from 'react-bootstrap-icons';
import '../App.css';

const GuaranteedCheckout = () => {
    return (
        <>
            <div className='gc-container'>
                <h4>our specialties</h4>
                <div className='gc-container-body'>
                    <div className='gc-container-card'>
                        <p>
                            <CarFront size={30}></CarFront>
                        </p>
                        <p>Free Delivery </p>
                    </div>
                    <div className='gc-container-card'>
                        <p>
                            <Wallet2 size={30}></Wallet2>
                        </p>
                        <p>Pay on Delivery </p>
                    </div>
                    <div className='gc-container-card'>
                        <p>
                            <ReplyAll size={30}></ReplyAll>
                        </p>
                        <p>7 Days replacement </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GuaranteedCheckout;