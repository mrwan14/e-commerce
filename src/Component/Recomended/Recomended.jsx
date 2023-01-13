import React from 'react'
import './recommended.css'
import glassimg1 from '../../images/Glasses/glass01.PNG'
import glassimg3 from '../../images/Glasses/glass03.PNG'
import glassimg4 from '../../images/Glasses/glass04.PNG'
import glassimg5 from '../../images/Glasses/glass05.PNG'
import glassimg6 from '../../images/Glasses/glass06.PNG'

export default function Recomended() {
  return (
    <React.Fragment>

<div className="container recommended-banner   d-flex ">
          <div className='col-md-6 recommended-banner-desc'>
            <h1> Recommended Products</h1>
          </div>
          <div className="col-md-5  offset-1 recommended-banner-img">
          </div>
        </div>

        <div className="recommended-products container bg-white ">
          <div className="title d-flex justify-content-between">
             <h3 className='fw-bold'>Recommended Products</h3>
              <a  className='fw-bold' href="##">SEE ALL</a>
          </div>
          <div className="row gy-3">
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
                <img src={glassimg6} alt="glass"  />

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
