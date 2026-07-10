import './Aboutus.css'
export default function Aboutus(){
    return(
<section className="about-section">
  <div className="about-container">
    <div className="about-text">
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
      <img src="/images/about-us.jpg" alt="About us" />
    </div>
  </div>
</section>
    )
}