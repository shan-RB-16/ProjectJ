import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        <div className="footer-brand">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <p className="tagline">Funny Custom T-Shirts for Every Occasion 🎁</p>
        </div>

    
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Shop</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact</a>
        </div>

 
        <div className="footer-social">
          <a href="#"><img src="/images/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/images/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/images/icons/whatsapp.svg" alt="Whatsapp" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024-2025 Fit For You. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
