import React  from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import  Paper from '@mui/material/Paper';

function SignInUp() {
   
   const paStyled={width:450, margin:"0px auto", height:"90vh"}
   const pStyle={padding :20,height:'85vh',width:400, margin:"0 auto"}
 


  return (
    <div>
                  <Paper elevation={15} style={pStyle} >
                   <button type="button" className="btn-close b-close" data-bs-dismiss="modal" aria-label="Close"></button>             
                   <div className="modal-body">
                    <form className="">

                      <div className="form-floating mb-1">
                        
                        <input
                          type="text"
                          className="form-control rounded-4"
                          placeholder="Tony Stark"
                        />
                        <label htmlFor="floatingInput">User Name</label>
                      </div>
                      <div className="form-floating mb-1">
                        <input
                          type="email"
                          className="form-control rounded-4"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-1">
                        <input
                          type="password"
                          className="form-control rounded-4"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control rounded-4"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">
                          Confirm Password
                        </label>
                      </div>
                      <button
                        className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                        type="submit"
                      >
                        Sign up
                      </button>
                      <small className="text-muted">
                        By clicking Sign up, you agree to the terms of use.
                      </small>
                      <hr className="my-4" />
                      <h4 className="fs-5 fw-bold mb-3">
                        Continue another way
                      </h4>
                      <button
                        className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
                        type="submit"
                      >
                        <FcGoogle className="mr-icons" />
                        Sign up with Google
                      </button>
                      <button
                        className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
                        type="submit"
                      >
                        <FaTwitter className="mr-icons" />
                        Sign up with Twitter
                      </button>
                      <button
                        className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4"
                        type="submit"
                      >
                        <FaFacebook className="mr-icons" />
                        Sign up with Facebook
                      </button>
                      <button
                        className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
                        type="submit"
                      >
                        <FaGithub className="mr-icons" />
                        Sign up with GitHub
                      </button>
                    </form>
                  </div>
                </Paper>
      
            </div>
  )
}

export default SignInUp;
