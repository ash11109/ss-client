import '../App.css';
import Footer from '../component/Footer';
import Popularproduct from '../component/Popularproduct';
import Categorywiseproduct from '../component/Categorywiseproduct';

const Home = () => {

    return (
    <>
    <div className="body-wrapper">
        
        <Categorywiseproduct/>
        <Popularproduct/>
        <Footer/>
        
    </div>
    </>
    )
};
  
export default Home;