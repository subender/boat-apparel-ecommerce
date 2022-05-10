import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/logo.svg'
import './Navigation.styles.scss'


const Navigation = () => {
  return (
    <>
      <div className="navigation">
 
        <Link className="logo-container" to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
