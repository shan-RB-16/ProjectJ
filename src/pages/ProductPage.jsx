import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../App.css";

export default function ProductPage() {
  const { id } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="products-page">
      <h1 className="heading">All Products</h1>
      <section id="products">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}
