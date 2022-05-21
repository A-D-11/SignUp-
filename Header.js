import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Tabs, Tab, Typography, Box, Paper} from '@mui/material';
import Login from './Login';
import SignInUp from "./SignInUp";
  
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
            <div className="modal fade"
              id="staticBackdrop"data-bs-backdrop="static"
              data-bs-keyboard="false"tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                   <SignInUp />
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
