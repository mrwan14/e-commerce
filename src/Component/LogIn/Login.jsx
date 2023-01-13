import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi';
import axios from 'axios';



export default function Login(props) {
    let navigate= useNavigate();
    const [isLoding, setisLoding] = useState(false)
    const [errorList, seterrorList] = useState([])
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    function getUserData(e){
        let myUser ={...user};
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
    }
    
    async function submaitRegister(e){
        e.preventDefault();
        setisLoding(true);
        let validateResulte =validateRegisterForm();
        if(validateResulte.error){
            seterrorList(validateResulte.error.details)
            setisLoding(false);
        }
        else{
        let {data}= await axios.post("https://route-movies-api.vercel.app/signin",user);
         if(data.message === 'success'){
             setisLoding(false);
             props.saveUserData();
             //navigate to home
             navigate('/home')
         }
         else{
             setisLoding(false);
             setError(data.message)
         }
        }
        function validateRegisterForm (){
            let schema =Joi.object({
                email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
                password: Joi.string(),
                });
            return schema.validate(user, { abortEarly: false });
             }
        


    }



  return (
    <React.Fragment>
                <div className="error-container">
  
          {errorList.map((error , i)=> i===4?<div className="alert py-2 alert-danger ">password invalid</div>
               :<div className="alert py-2 alert-danger">{error.message}</div>)}
               
          {error.length ? <div className="alert alert-danger ">{error}</div> : ""}
</div>

        <div className="container-login d-flex   justify-content-center">
            <div className="login">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <h5 className='ps-3 fw-bold'>Sign in to Salinika</h5>
                             <form className='pt-5 ps-4' onSubmit={submaitRegister} >

                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={getUserData} className="form-control mb-2" id="email" placeholder='test@examble.com' name="email" ></input>
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={getUserData} className="form-control mb-2" id="password" placeholder='your password' name="password"></input>
                            <div className="links ms-4  d-flex justify-content-between mt-3">
                                <Link className='fw-bolder' >Forget Password?</Link>
                                <button className="btn bg-dark mx-2 text-white " to="/signup" type="submit"> {isLoding===true? <div> <i className='fas fa-spinner fa-spin'></i></div>:<div>Sign up <i class="fa-solid fa-arrow-right"></i> </div>}</button>
                            </div>
                            </form>

                          
                    </div>
                    <div className="or-layer col-md-1">
                        <p>OR</p>
                    </div>
                    <div className="social col-md-5">
                    <button className="btn  bg-primary mx-2 text-white main-button " type="submit"> <i className='fa-brands fa-facebook'></i> continue with facebook</button>
                    <button className="btn  bg-light mx-2 text-dark " type="submit"> <i className='fa-brands fa-google'></i> continue with facebook</button>
                    <button className="btn  bg-dark mx-2 text-white " type="submit"> <i className='fa-brands fa-github'></i> continue with facebook</button>


                    </div>
                </div>
                <div className="login-footer  border border-dark border-opacity-10 ">
                    <p> Don't have an account ? </p>
                    <button className="btn bg-dark mx-2 text-white" type="submit"> <Link className='forsignup ' to="/signup">sign up</Link> </button>


                </div>

            </div>
        </div>

    </React.Fragment>
  )
}
