
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function ProductCard ({product}) {

  const {addToCart} = useCart ();

  if (!product) return null;

  return (
    <div className="card h-90 border-0 shadow-sm "
     style={{ borderRadius: '20px', overflow: 'hidden', maxWidth: '280px', marginTop: '30px' }}>

      <Link to = {`/product/${product.id}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}>

        <div className="p-3 text-center" style={{ height: '200px' }}>
          
          <img src = {product.image} className="img-fluid" 
          style={{ maxHeight: '100%'}} alt= {product.name} />

        </div>

        <div className="p-3 text-center" 
        style={{ height: '200px' }}>

          <h6 className="fw-bold mb-1"> {product.name} </h6>

          <p className="text-muted mb-2" 
          style={{ fontSize: '11px', height: '33px' }}> {product.desc} </p>

          <div className="mb-3">

            <span className="fw-bold fs-5" style={{ color: '#ec0e93'}}>
              تومان {product.price}
             </span>

          </div>

        </div>
         </Link>

         <div className="px-4 pb-3">

          <button 
          onClick={(e) => {e.preventDefault ()
          addToCart (product)}}
          className="w-100 rounded-3 text-white fw-bold py-2" 
          style={{ background: 'linear-gradient(90deg,  rgba(252, 105, 193, 1) 0%, white 100%)', border: 'none' }}
          >
            افزودن به سبد

          <span style={{marginLeft: '5px'}}>
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
               <path d="M2 2H4.5L6.5 14H19L21 6H7" stroke="url(#pinkGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               <circle cx="9" cy="19" r="2" fill="#ec0e93" />
               <circle cx="17" cy="19" r="2" fill="#a011cf" />
             </svg> 
         </span>  
          
          </button>

         </div>
    </div>
  )
}
export default ProductCard;