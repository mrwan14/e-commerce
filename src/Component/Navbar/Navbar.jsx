import React from 'react'
import { Link,  } from 'react-router-dom'
import logo from '../../images/logo.png'; 
import Cart from '../Cart/Cart';
import './navbar.css';


export default function Navbar() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light p-3">
            <div className="container-fluid  bg-white text-muted">
                 <Link className="navbar-brand " to="home">
                    <img src={logo} alt="Logo" className='w-100' />
                 </Link>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bolder active" to="home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  table-active" to="shop">Shop</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link " to="featured">Featured</Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link " to="recomended">Recommended</Link>
                                </li>
                           </ul>
                      </div> 
                      <div className="d-flex p-4 align-items-center form-sub" role="search">
                        <input className="form-control me-2  " type="search" placeholder= "  search product" aria-label="Search"/>

                        <Cart/>
                        <div className="nav-buttons d-flex m-2 ">
                        <button className="btn bg-dark mx-2 text-white"     type="submit"> <Link className='forsignup ' to="signup">sign up</Link> </button>
                        <button className="btn btn2 text-dark"  type="submit"> <Link className='forlogin'  to="login">sign in</Link> </button>

                        </div>

                    </div>


                </div>
        </nav>


    </React.Fragment>
  )
}
