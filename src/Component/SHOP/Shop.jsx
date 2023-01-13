import React, { useContext } from 'react'
import './shop.css'
import glassimg from '../../images/Glasses/glass01.PNG'
import { Link,  } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import CartDetails from '../CartDetails/CartDetails'

export default function Shop() {
let {addProduct}=useContext(CartContext);


  function toProductDetails(e){

    const baseString = e.target.src  //"localhost:3000/static/media/glass01.png"
     const fileName = baseString.split('/').pop()
     const  actualFileName = `${fileName.split('.')[0]}.PNG`
    // console.log(actualFileName)
}
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="row gy-5 mb-5">
          <div className="col-md-2">
            <div className="Shop-product">
              <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
                  <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
            <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
             <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
             <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
          <div className="col-md-2">
            <div className="Shop-product">
             <Link to={'/product'}>
              <div className="container-for-shop-img" onClick={toProductDetails}>
                <img src={glassimg} alt="" />
              </div>
              <div className="container-For-Shop-desc text-center">
                <p>Kulangot<br/> <span>salt</span></p>
                <p> $69.00</p>
              </div></Link>
              <div className="add-to-basket">
              <button onClick={addProduct}>add to basket</button>
                </div>
            </div>
            
          </div>
        </div>
        <button className='btn btn-dark '>Show More Items</button>
      </div>
      <div className="cart  d-none" id='cartdisplay' >
        <CartDetails/>
        </div>

    </React.Fragment>
  )
}
