import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from "bootstrap";
import { useState } from 'react';
import { Tabs, Tab, Typography, Box, Paper} from '@mui/material';
import Login from './Login';
  
export default function Header() {

   const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const paStyled={width:520, margin:"20px auto", height:"800px"}
    const taStyled={width:100}
    const pStyle={padding :20,height:'85vh',width:380, margin:"0 auto"}
  
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }


  var userAuthenticate = false;
  return (
    <>
    <header className="p-3 bg-dark ">
      <div className="/">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
              <h3>HAMPER YARD</h3>
            </a>
          }

          <ul className="nav col-12 col-lg-auto mr mb-2 justify-content-center mb-md-0">
            {/* <li><a href="/" classNeme="nav-link px-2 text-white">Home</a></li> */}
            <li>
              <a href="/" className="nav-link px-20 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-20 text-white">
                Orders
              </a>
            </li>
            <li>
              <a
                href="/"
                className="nav-link d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/grid"></use></svg> */}
                Products
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Shirts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    T-shirts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Jeans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Formal Clothes
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Contact" className="nav-link px-20 text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-20 text-white">
                About Us
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {!userAuthenticate && (
            <div className="text-end">
              <a href="/Login">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </a>
          {/* <a href="">
                <button type="button" onClick={newsignup()} className="btn btn-warning">
                  Sign-up
                </button>
              </a> */}
            </div>
          )}
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Sign-In
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                  <Paper style={paStyled}>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Sign-In"  />
        <Tab label="Sign-Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
           <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Paper elevation={15} style={pStyle} >
      <div className="modal-body">
                    <form className="">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

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
      </TabPanel>
      </Paper>
                  </div>
                  </div>
              </div>
          </div> 
          </div>
        </div> 
        </div>
      
    </header>
           
    </>
  );
}
