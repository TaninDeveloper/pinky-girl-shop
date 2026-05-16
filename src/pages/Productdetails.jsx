
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../Data';
import { useCart } from '../CartContext';

function ProductDetails() {

  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { cartItems, addToCart } = useCart(); 

  const product = allProducts.find(p => p.id.toString() === id.toString());

  if (!product) {

    return (

      <div className="container mt-5 pt-5 text-center">

        <h2 className="mt-5">محصول پیدا نشد! 🧐</h2>

        <p> انگار این محصول از لیست ما پریده بیرون!</p>

        <button onClick={() => navigate('/')} className="btn btn-outline-danger rounded-pill mt-3">برگشت به فروشگاه  </button>
      </div>
    );
  }

  const itemInCart = cartItems.find(item => item && item.id === product.id);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;
  const isMaxedOut = quantityInCart >= product.stock;
  const availableToBuy = product.stock - quantityInCart;

  return (

    <div className="container mt-5 pt-5 animate__animated animate__fadeIn" dir="rtl">

      <button 
        onClick={() => navigate(-1)} 
        className="btn mb-4 d-flex align-items-center gap-2 text-muted hover-pink"
        style={{ transition: '0.3s' }}
>
        <span>←</span> بازگشت به محصولات

      </button>

      <div className="row bg-white p-4 shadow-sm align-items-center border-0" 
      style={{ borderRadius: '30px' }}>

        <div className="col-md-6 text-center mb-4 mb-md-0">

          <div className="p-3 bg-light rounded-5">

            <img 
              src={product.image} 
              alt={product.name} 
              className="img-fluid" 
              style={{ maxHeight: '450px', objectFit: 'contain', transition: 'transform .3s' }} 
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
          </div>
        </div>


        <div className="col-md-6 text-end px-lg-5">

          <nav aria-label="breadcrumb">

            <ol className="breadcrumb justify-content-end bg-transparent p-0 mb-2">

              <li className="breadcrumb-item">
                <span className="badge rounded-pill bg-light text-pink px-3 py-2"
                 style={{color: '#ec0e93'}}>

                  {product.category}
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="fw-bold mb-3"
           style={{ color: '#333', fontSize: '2.5rem' }}>{product.name}</h1>

          <p className="text-muted fs-5 mb-4"
           style={{ lineHeight: '1.8', textAlign: 'justify' }}>

            {product.desc || "توضیحی برای این محصول ثبت نشده است، اما پینکی‌گرل کیفیت آن را تضمین می‌کند! 🌸"}
          </p>

          <div className="d-flex align-items-center gap-3 mb-4 bg-light p-3 rounded-4">

             <div className="text-center small text-muted border-start px-3">🚀 ارسال سریع</div>

             <div className="text-center small text-muted border-start px-3">✨ ضمانت اصالت</div>

             <div className="text-center small text-muted px-2">💖 تست شده</div>
          </div>

          <hr className="my-4 opacity-25" />

          <div className="d-flex justify-content-between align-items-center mt-4">

            <div>

              <span className="fs-1 fw-bold"
               style={{ color: '#ec0e93' }}>{product.price}</span>

              <span className="ms-2 text-muted fw-bold">تومان</span>

              <p className={`mt-2 fw-bold ${isMaxedOut ? 'text-danger' : 'text-success'}`}>

                {isMaxedOut ? "ظرفیت خرید تکمیل شد ❌" : `موجودی در انبار: ${availableToBuy} عدد ✨`}

              </p>

            </div>

            <button 
              onClick={() => addToCart(product)}
              disabled={isMaxedOut}
              className="btn btn-lg text-white px-5 py-3 shadow-lg pink-btn" 
              style={{ 
                background: isMaxedOut ? '#ccc' : 'linear-gradient(90deg, #ff4d94, #ec0e93)', 
                borderRadius: '18px', 
                border: 'none',
                transition: '0.4s',
                cursor: isMaxedOut ? 'not-allowed' : 'pointer'
              }}>
              {isMaxedOut ? "ناموجود" : "افزودن به سبد خرید 🛍️"}
            </button>
          </div>

          {quantityInCart > 0 && (
            
            <p className="mt-3 text-muted small">
              طنین جان، تعداد {quantityInCart} عدد از این محصول در سبد شماست 🌸
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;