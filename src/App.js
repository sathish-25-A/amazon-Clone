import React from 'react';
import './App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import ComprareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refundpolicy from './pages/Refundpolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout />}> 
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="store" element={<OurStore />}/>
        <Route path="blogs" element={<Blogs />}/>
        <Route path="blog" element={<SingleBlog />}/>
        <Route path="compare-product" element={<ComprareProduct />}/>
        <Route path="Wishlist" element={<Wishlist />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="forgot-password" element={<Forgotpassword />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="reset-password" element={<Resetpassword />}/>
        <Route path="privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="refund-policy" element={<Refundpolicy />}/>
        <Route path="shipping-policy" element={<ShippingPolicy />}/>
        <Route path="term-condition" element={<TermAndConditions />}/>
        <Route path="single-product" element={<SingleProduct />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="checkout" element={<Checkout />}/>
        
        
        
        

      </Route>

    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
