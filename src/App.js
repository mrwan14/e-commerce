import React, { useEffect, useState } from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Shop from './Component/SHOP/Shop'
import Featured from './Component/Featured/Featured'
import Recomended from './Component/Recomended/Recomended'
import Footer from './Component/Footer/Footer'
import NotFoundPage from './Component/NotFoundPage/NotFoundPage'
import Login from './Component/LogIn/Login'
import Signup from './Component/SignUp/Signup'
import jwtDecode from "jwt-decode";
import Product from './Component/Product/Product'
import Cart from './Component/Cart/Cart'
import CartDetails from './Component/CartDetails/CartDetails'


export default function App() {
  const [userData, setUserData] = useState(null)
  function saveUserData(){
    let encodeToken= localStorage.getItem('userToken');
    let decodedToken=jwtDecode(encodeToken);
    setUserData(decodedToken);
  }
  //refreshing
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      saveUserData();
    }
  },[])


  return ( <React.Fragment>
    

    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop/>} />
      <Route path='featured' element={<Featured/>} />
      <Route path='recomended' element={<Recomended/>} />
      <Route path='login' element={<Login saveUserData={saveUserData}/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='product' element={<Product/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='cartdetails' element={<CartDetails/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    <Footer/>
    </React.Fragment>
  )
}
