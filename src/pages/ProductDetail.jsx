
import './ProductDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetail({cartItems,setCartItems}) {
  
  const [product,setProduct]=useState(null);
  const {id}= useParams();
  const[qty,setQty]=useState(1);
  
  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL+'/products/'+id)
    .then(res => res.json())
    .then(res=>setProduct(res.product))
   },[]);

   function addToCart(){
    const itemExist=cartItems.find((item)=>item.product._id==product._id);
    if(!itemExist){
        const newItem={product,qty}; 
    setCartItems((state)=>[...state,newItem]);
        toast.success("Cart Item Added Successfuly!");
    }
   }

   // WhatsApp Buy Now function
   function buyNowWhatsApp(){
    const phoneNumber = "918525958828"; 
   const total = (Number(product.price) * qty).toFixed(2);

const message = `Hi! I want to buy:
Product: ${product.name}
Product ID: ${product._id}
Quantity: ${qty}
Price: ₹${product.price}
Total: ₹${total}

Please confirm my order. Thank you!`;


    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    

    window.open(whatsappUrl, '_blank');
   }

   function increaseQty(){
    if(product.stock==qty){
        return;
    }
    setQty((state)=> state+1)
   }
   
   function decreaseQty(){
    if(qty>1){
        setQty((state)=> state-1);
    }
   }
  
    return product &&(
        <div className="pd1">
            <div className="pd2">
                <div className="pd-img" id="product_image">
                    <img src={product.images[0].image} height="500" width="500" />
                </div>

                <div className="pd-name">
                    <h3>{product.name}</h3>
        

                    <hr />

                   <div className="rating-outer">
  <div 
    className="rating-inner" 
    style={{ width: `${(Number(product.ratings || 0) / 5) * 100}%` }}
  ></div>
</div>


                    <hr />

                    <p id="product_price">₹{product.price}</p>
                    <div className="stockCounter d-inline">
                        <span className="pd-bt-" onClick={decreaseQty}>-</span>
                        <input  type="number" className="pd-ip-box" value={qty} readOnly />
                        <span className="pd-bt+" onClick={increaseQty}>+</span>
                    </div>
                    
               
                    <div className="pd-addtocart">
                     
                        <button onClick={addToCart}>add to cart</button>
                        <button 
                            type="button" 
                            onClick={buyNowWhatsApp} 
                            disabled={product.stock==0} 
                            className="btn btn-success"
                        >
                            <i className="pd-wp-buy"></i>
                            Buy Now via WhatsApp
                        </button>
                    </div>

                    <hr />

                    <p>Status: <span id="stock_status" className={product.stock>0?'text-success':'text-danger'}>{product.stock>0?"Instock":"Out of stock"}</span></p>

                    <hr />

                    <h4 className="pd-des">Description:</h4>
                    <p>{product.description}</p>
                    <hr />
                    <p id="product_seller" className="mb-3">Sold by : <strong>{product.seller} </strong></p>
                    
                    <div className="rating w-50"></div>
                </div>
            </div>
        </div>
    );  
}
