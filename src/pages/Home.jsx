import { Fragment, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Home.css';
import { useSearchParams, Link } from 'react-router-dom';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/products' + searchParams)
      .then(res => res.json())
      .then(res => setProducts(res.products));
  }, [searchParams]);

  return ( 
    <Fragment>
      <div className='top1'>
      <h1 className='surprise'>Surprice Your Loved Ones<br/>
        With
        <span className="custom"> Custom </span>
      </h1>
      </div>

      <h1 className='lite'>
        Create Your Masterpiece
      </h1>

    <div className="img-wrapper">
  <div className="img-mask">
    <img className="head-img" src="./images/products/1.jpg" alt="product" />
  </div>
</div>


<div className='button-up'>
    <Link to="/products" className='up-but' >Shop</Link>

</div>

<div>
   <h3 className='line1'><img className='icon' src='../images/simplogos/flower.png' alt="flower"></img>Way more fun than greeting cards or flowers</h3>
   <h3 className='line1'><img className='icon' src='../images/simplogos/gift.svg' alt="Gift"></img>Great for birthdays, holidays, love notes, or just to make someone smile</h3>
   <h3 className='line1'><img className='icon' src='../images/simplogos/calender.svg' alt="Calendar"></img>Schedule your order in advance for perfect timing of delivery</h3>

</div>



      <h1 className="heading">A Print for Every Moment 📸</h1>
      <section id="products">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>


<section className="about-section1">
  <div className="about-container1">
    <div className="about-text1">
      <h2>About Us 👕</h2>
      <p>
        At <strong>Fit For You</strong>, we believe that a t-shirt can do more than
        just cover you — it can tell a story, spread laughter, and create
        memories. 🎉  
      </p>
      <p>
        Whether you’re looking for a funny gift, a bold statement, or a
        personalized surprise for your loved ones, our custom printed tees are
        designed to make people smile.  
      </p>
      <p>
        Crafted with love and premium quality, our mission is simple:
        <br /> <em>Make fashion fun, one shirt at a time!</em>
      </p>
    </div>
     <div className="about-image">
      <img src="/images/simplogos/aboutus.jpg" alt="About us" />
    </div>

   
  </div>
</section>


    </Fragment>
  );
}



