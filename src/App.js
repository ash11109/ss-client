import './App.css';
import './assets/css/vendor.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SNavbar from "./component/SNavbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Term from './pages/Term';
import Privacy from './pages/Privacy';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import OrderPlaced from './pages/OrderPlaced';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ashContext = createContext();


function App() {

  const BACKEND = 'https://jbs.sysrootsolution.com/';
  // const BACKEND = 'http://localhost/shachi/';
  
  const API = BACKEND+'api/' ;
  const IMG = BACKEND ;
  
  
  const [ productList , setProductList ] = useState([]);
  const [ categoryList , setCategoryList ] = useState([]);
  const [ cart , setCart ] = useState([]);
  

  const addToCart = (item) => {

    if (cart.find( data => data.id === item.id )) {
      cart.find( data => data.id === item.id ).quantity += 1; 
      setCart([...cart]);
    } else {
      item.quantity = 1
      delete item.description;
      delete item.date;
      delete item.qty;
      delete item.size;
      delete item.status;
      setCart([...cart,item]);
    }

  }


  const removeFromCart = (id) =>{

    setCart((current) =>
      current.filter((item) => item.id !== id)
    );

  }
 
  
  
  useEffect(()=>{
    
    const getProductList = () => {
      
      axios.postForm( API , 
        {
            "type": 1
        }
        ).then( res => setProductList(res.data.data) );
  
    }
  
    const getCategoryList = () => {
      
      axios.postForm( API , 
        {
            "type": 2
        }
        ).then( res => setCategoryList(res.data.data) );
  
    }
    
    getProductList();
    getCategoryList();  

  },[API]);


  return (
    <>
      <ashContext.Provider value={{ API , IMG , productList , categoryList , cart , addToCart , removeFromCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SNavbar />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />}/>
              <Route path="register" element={<Register />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="products/:type" element={<Products />} />
              <Route path="productDetail/:id" element={<ProductDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="term" element={<Term />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Term />} />
              <Route path="orderplaced" element={<OrderPlaced />} /> 
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ashContext.Provider>
    </>
  );
}

export default App;
