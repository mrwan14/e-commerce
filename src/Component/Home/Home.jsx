import React, { useContext, useState } from 'react'

import {Link, useNavigate} from 'react-router-dom'
import './home.css'
import Product from '../Product/Product'
import CartDetails from '../CartDetails/CartDetails'
import Cart from '../Cart/Cart'
import { CartContext } from '../Context/CartContext'

export default function Home() {
  let {close} =useContext(CartContext)

    let navigate =useNavigate();
      // let [actualFileName, setactualFileName] = useState('')
    // const actualFileName ='name'
    function toProductDetails(e){
        const baseString = e.target.src   //"localhost:3000/static/media/glass01.png"
        const fileName = baseString.split('/').pop()
        const  actualFileName = `${fileName.split('.')[0]}.PNG`
        // console.log(actualFileName)

    }
    function productDesc(e){
      console.log(e.target)

    }
    // console.log(actualFileName)





  return (
    <React.Fragment > 
          {/* <Product  imgSrc={toProductDetails}/>   */}
          {/* <CartDetails /> */}
      <div className="home position-relative "  onClick={close}>
        <div className="container banner   d-flex ">
          <div className='banner-desc col-md-6' >
            <div className="main-text">
            <h1> <span>See</span>  everything </h1>
            <h1>with <span>Clarity</span> </h1>
            </div>
            <p className='text-muted'> Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
            <button className="btn bg-dark ms-4 text-white"  type="submit" to="/shop">   
            <Link  className='fw-bold btn bt-dark text-white'  to="/shop" >SHOP NOW</Link>
            <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="col-md-5  offset-1 banner-img">
          </div>
        </div>
       

        
        <div className="featured-products container bg-white ">
          <div className="title d-flex justify-content-between">
             <h3 className='fw-bold'>Featured Products</h3>
              <Link  className='fw-bold'  to="/featured" >SEE ALL</Link>
          </div>
          <div className="row gy-3">
            <div className="col-md-4 ">
              <Link to={'/product'}>
              <div className="product"   >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass05.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" onClick={productDesc}>
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass03.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass06.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass05.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass04.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass01.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
          </div>
        </div>
        <div className="recomended-products container bg-white ">
          <div className="title d-flex justify-content-between">
             <h3 className='fw-bold'>Recommended Products</h3>
             <Link  className='fw-bold'  to="/recomended" >SEE ALL</Link>
          </div>
          <div className="row gy-3">
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass01.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass06.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass01.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass03.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass04.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div></Link>
            </div>
            <div className="col-md-4 ">
            <Link to={'/product'}>
              <div className="product"  >
                <div className="containerForImg" >
                      <img src={require('../../images/Glasses/glass05.PNG')} alt="glass" onClick={toProductDetails} /> 
                </div>
                <div className="product-desc" >
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>
                </div>
             </div>
             </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="cart  d-none" id='cartdisplay' >
        <CartDetails/>
        </div>

    </React.Fragment>
  )
  }
