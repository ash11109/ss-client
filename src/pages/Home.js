import '../App.css';
import Footer from '../component/Footer';
import Drawermenu from '../component/Drawermenu';
import SideCart from '../component/SideCart';
import Popularproduct from '../component/Popularproduct';
import Categorywiseproduct from '../component/Categorywiseproduct';

const Home = () => {

    return (
    <>
    <div className="body-wrapper">
        
        <Categorywiseproduct/>
        <Popularproduct/>
        <Footer/>
        <Drawermenu/>
        <SideCart/>
        
    </div>
    </>
    )
};
  
export default Home;