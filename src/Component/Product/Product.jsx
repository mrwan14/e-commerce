/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './product.css';
import glassimg1 from '../../images/Glasses/glass01.PNG'
import glassimg3 from '../../images/Glasses/glass03.PNG'
import glassimg4 from '../../images/Glasses/glass04.PNG'
import glassimg5 from '../../images/Glasses/glass05.PNG'
import glassimg6 from '../../images/Glasses/glass06.PNG'
import Home from '../Home/Home';
export default function Product(props) {

// console.log(props)
  return (
    <React.Fragment>
        <div className="container product-view    position-relative">
            <Link to='/shop' className='to-shop'>  <i class="fa-solid fa-arrow-left m-1"></i> Back to shop</Link>

            <div className="row">
              <div className="product-model  d-flex">
              <div className="col-md-2 product-model-collection border border-dark border-opacity-10" >
                <div className="prodect-model-collection-item border border-dark border-opacity-10">
                  {/* <img src={props.imgSrc} alt=""  className='w-100'/> */}
                  <img src={require('../../images/Glasses/glass01.PNG')} alt="glass" className='w-100' />

                  {/* <img src={require(`../../images/Glasses/${props.imgSrc}`)} alt="glass"  className='w-100'/> */}


                </div>
              </div>
              <div className="col-md-5 product-model-img border border-dark border-opacity-10">
              {/* <img src={require(`../../images/Glasses/${props.imgSrc}`)} alt="glass"  className='w-100'/> */}

              {/* <img src={glassimg1} alt=""  className='w-100'/> */}
              {/* {props.img} */}
              <img src={require('../../images/Glasses/glass01.PNG')} alt="glass" className='w-100' />


              </div>
              <div className="col-md-5 prduct-mode-desc border border-dark border-opacity-10">
                <p> Yezyow</p>
                <h2>Quake Overload</h2>
              <p>Lorem ipsum dlque dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.</p>
              <div className="brdr bg-opacity-10 bg-dark">  </div>
              <div className="drop-down-area">
                <p>Lens Width and Frame Size</p>


                  <select name="size" id="size-select">
                      <option value="">--your size--</option>
                      <option value="36">36mm</option>
                      <option value="44">44mm</option>
                      <option value="54">54mm</option>

                  </select>


                <h2>$80.00</h2>
                <button className='btn ms-2 btn-dark '>add to basket</button>
              </div>
              </div>

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
              <div className="product">
                <div className="containerForImg">
                <img src={glassimg6} alt="glass"  />

                </div>
                <div className="product-desc">
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>

                </div>

              </div>
            </div>
            <div className="col-md-4 ">
              <div className="product">
                <div className="containerForImg">
                <img src={glassimg5} alt="glass"  />

                </div>
                <div className="product-desc">
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>

                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="product">
                <div className="containerForImg">
                <img src={glassimg4} alt="glass"  />

                </div>
                <div className="product-desc">
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>

                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="product">
                <div className="containerForImg">
                <img src={glassimg3} alt="glass"  />

                </div>
                <div className="product-desc">
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>

                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="product">
                <div className="containerForImg">
                <img src={glassimg5} alt="glass"  />

                </div>
                <div className="product-desc">
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>

                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="product">
                <div className="containerForImg">
                <img src={glassimg1} alt="glass"  />

                </div>
                <div className="product-desc">
                <h4>Burnikk<br/> <span className='desc'>Sexbomb</span></h4>

                </div>
              </div>
            </div>
          </div>
        </div>

    </React.Fragment>
  )
}
