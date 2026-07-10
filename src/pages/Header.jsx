import { Link } from "react-router-dom";
import Search from "./Search";
import "../App.css";
import Hamburger from './Hamburger'
export default function Header({ cartItems }) {
  return (
    <nav className="navbar-row">
      <div className="navbar-full">
        <div className="navbar-brand">
          <Link to="/">
            <img className="navbar-logo" src="/images/logo.png" alt="Logo" />
          </Link>
        </div>

    

     


    <div className="navbar-cart">
       <div>
        <Hamburger />
      </div>
        <img className="cartimg" src="/images/cartimg.png" alt="Cart" />

        
          <Link to="/cart">
            
            <div className="cartlength" id="cart_count">
              {cartItems?.length || 0}
            </div>
          </Link>
        </div>
      </div>
      
    </nav>
    
  );
}
