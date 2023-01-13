import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './cartdetails.css'
import '../Home/home.css'

export default function CartDetails() {
    let {ProductCountainer,colse}= useContext(CartContext)
    let price =66.00;
    function clear (){
        localStorage.removeItem('myProducts');
    }
    

    
    
    
  return (
    <React.Fragment>
        

          <div className="cart-body container-fluid position-relative border border-dark border-opacity-50">
            <div className="header d-flex justify-content-between">
                <h4 className='fw-bold mt-4 ms-3 fs-4'>My Basket  <span>( {ProductCountainer.length }  item)</span></h4>
                <div className="buttons">
                <button onClick={clear} className='btn btn-outline-dark m-3'>clear</button>
                <button onClick={colse} className='btn btn-outline-dark m-3'>close</button>
                </div>


            </div>
        
            {ProductCountainer.length > 0  ?
            <div >
            {ProductCountainer.map(( ) => (
                <div className="cart-product w-100 h-25 border border-dark mb-2 border-opacity-10 d-flex">
                <div className="product-img col-md-3 border-end border-dark border-opacity-10 w-25    ">
                    <img src={require('../../images/Glasses/glass06.PNG')} alt="glass" className='w-75 ' />
                </div>
                <div className="product-desc-price  col-md-9 d-flex position-relative">
                        <h3> Model : <span>Kulangot</span></h3>
                        <h4 className='fw-bolder  '>${price}.00</h4>
                    </div>
                    </div>
                ))}
                </div>
             :   
                                <p className=' lead text-center mt-5  fs-6'> Your basket is empty</p>
                }




            <div className="footer bg-white  position-relative d-flex justify-content-between position-absolute bottom-0">
                <div className="product-price  ">
                <p className=''>Subtotal Amout:</p>
                <h4 className='ms-4 fw-bolder'> ${price*ProductCountainer.length}.00</h4>
                </div>
                <button  className='btn btn-dark m-3 mt-5 '>check out</button>
            </div>
        </div>
     </React.Fragment>
  )
        }