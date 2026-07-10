import { Link } from 'react-router-dom';
import '../App.css'; 

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.images[0].image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h4><Link to={`/product/${product._id}`}>{product.name}</Link></h4>
        <p><strike>₹999</strike> ₹{product.price} RS</p>
       <div className="rating-outer">
  <div 
    className="rating-inner" 
    style={{ width: `${(Number(product.ratings || 0) / 5) * 100}%` }}
  ></div>
</div>

      </div>
    </div>
  );
}
