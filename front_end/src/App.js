import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Saved } from './Pages/Saved';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import hoodie_banner from './Components/Assets/hoodie_banner.png'
import hat_banner from './Components/Assets/hat_banner.png'
import shirt_banner from './Components/Assets/shirt_banner.png'
import sneaker_banner from './Components/Assets/sneaker_banner.png'
import sweatpants_banner from './Components/Assets/sweatpants_banner.png'
import { PrivacyPolicyPage } from './Pages/PrivacyPolicyPage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    [
      hoodie_banner,
      hat_banner,
      shirt_banner,
      sneaker_banner,
      sweatpants_banner
    ].forEach(src => new Image().src = src);
  }, []);


  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/hoodies' element = {<ShopCategory banner={hoodie_banner} category="hoodies"/>}/>
        <Route path='/hats' element = {<ShopCategory banner={hat_banner} category="hats"/>}/>
        <Route path='/shirts' element = {<ShopCategory banner={shirt_banner} category="shirts"/>}/>
        <Route path='/sweatpants' element = {<ShopCategory banner={sweatpants_banner} category="sweatpants"/>}/>
        <Route path='/sneakers' element = {<ShopCategory banner={sneaker_banner} category="sneakers"/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productID' element = {<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/saved' element = {<Saved/>}/>
        <Route path='/login' element = {<LoginSignup/>}/>
        <Route path='/privacypolicy' element = {<PrivacyPolicyPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
