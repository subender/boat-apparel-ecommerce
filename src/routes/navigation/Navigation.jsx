import React, {  useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../../components/cart-icon/CartIcon";
import { UserContext } from "../../context/User";
import { signOutUser } from "../../utils/firebase/Firebase";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);

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

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
