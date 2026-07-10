import { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger.css";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="hamburger-icon" onClick={() => setOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

  
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Side Menu */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>×</button>
        
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>

        {/* Small Footer inside menu */}
        <div className="side-footer">
          <p>© 2024 Fit For You</p>
        </div>
      </div>
    </>
  );
}
