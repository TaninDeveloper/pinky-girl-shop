
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';

function BasketPage() {

  const { cartItems, addToCart, removeFromCart, deleteItem, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const [userInfo, setUserInfo] = useState({ name: '', phone: '', address: '' });

  useEffect(() => {
    const savedData = localStorage.getItem('pinkyUser');
    if (savedData) {
      setUserInfo(JSON.parse(savedData));
    }

  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {

    const price = parseInt(item.price.replace(/,/g, ''));
    return acc + (price * item.quantity);

  }, 0);

  const handlePayment = () => {
    if (!userInfo.name || !userInfo.address) {
      alert(" لطفاً نام و آدرس رو در پروفایل یا همین‌جا وارد کن 🌸");

      return;
    }

    alert(`سفارش شما با موفقیت ثبت شد! \n تحویل گیرنده: ${userInfo.name} \n پینکی گرل بزودی با شما تماس می‌گیرد. 🌸`);

    clearCart(); 

    setShowCheckout(false);

  };


  return (

    <div className="container mt-5 pt-5 text-end" dir="rtl" 
    style={{ minHeight: '80vh' }}>

      <h2 className="fw-bold mb-4" 
      style={{ color: '#ec0e93' }}>سبد خرید شما 🛍️</h2>

      {cartItems.length === 0 ? (

        <div className="text-center py-5 shadow-sm bg-white rounded-4">
          
          <h4>سبد خریدت خالیه! 🌸</h4>

          <p className="text-muted">یه سری به محصولات بزن، پشیمون نمی‌شی!</p>

        </div>

      ) : (
        <div className="row">

          <div className="col-lg-8">

            {cartItems.map(item => (

              <div key={item.id} className="card mb-3 p-3 shadow-sm border-0" 
              style={{ borderRadius: '20px' }}>

                <div className="row align-items-center">

                  <div className="col-3 col-md-2">

                    <img src={item.image} className="img-fluid rounded"
                     style={{ maxHeight: '80px' }} alt={item.name} />

                  </div>

                  <div className="col-5 col-md-4">

                    <h6 className="fw-bold mb-1">{item.name}</h6>

                    <small className="text-muted">{item.price} تومان</small>

                  </div>

                  <div className="col-4 col-md-3">

                    <div className="d-flex align-items-center justify-content-center bg-light rounded-pill p-1">

                      <button onClick={() => addToCart(item)} className="btn btn-sm text-success fw-bold">
                        +
                        </button>

                      <span className="mx-3 fw-bold">{item.quantity}</span>

                      <button onClick={() => removeFromCart(item.id)} className="btn btn-sm text-danger fw-bold">
                        -
                        </button>
                        
                    </div>
                  </div>

                  <div className="col-12 col-md-3 text-start">

                    <button onClick={() => deleteItem(item.id)} className="btn btn-sm text-danger border-0 bg-transparent">
                      حذف محصول
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">

            <div className="card p-4 shadow-sm border-0"
             style={{ borderRadius: '25px', backgroundColor: '#fdf0f6' }}>

              <h5 className="fw-bold mb-4">خلاصه صورت‌ حساب</h5>

              <div className="d-flex justify-content-between mb-3">
                
                <span>جمع محصولات:</span>
                <span>{totalPrice.toLocaleString()} تومان</span>

              </div>

              <div className="d-flex justify-content-between mb-3 border-top pt-3 fw-bold">
                <span>قابل پرداخت:</span>
                <span style={{ color: '#ec0e93' }}>
                  {totalPrice.toLocaleString()} تومان
                  </span>

              </div>

              {!showCheckout ? (

                <button 
                  onClick={() => setShowCheckout(true)}
                  className="btn w-100 mt-3 text-white fw-bold py-3" 
                  style={{ background: 'linear-gradient(90deg, #ff4d94, #ec0e93)', borderRadius: '15px', border: 'none' }}
                >
                  تکمیل نهایی خرید
                </button>
              ) : (

                <div className="mt-4 animate__animated animate__fadeIn">
                  
                  <p className="small fw-bold text-muted mb-2">اطلاعات ارسال (بر اساس پروفایل):</p>

                  <input 
                    type="text" 
                    className="form-control mb-2 rounded-pill border-0 p-3 shadow-sm" 
                    placeholder="نام و نام خانوادگی"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  />

                  <input 
                    type="text" 
                    className="form-control mb-2 rounded-pill border-0 p-3 shadow-sm" 
                    placeholder="شماره تماس"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                  />

                  <textarea 
                    className="form-control mb-3 rounded-4 border-0 p-3 shadow-sm" 
                    placeholder="آدرس دقیق برای ارسال"
                    rows="3"
                    value={userInfo.address}
                    onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                  ></textarea>

                  <button 
                    onClick={handlePayment}
                    className="btn w-100 text-white fw-bold py-3" 
                    style={{ background: '#28a745', borderRadius: '15px', border: 'none' }}
                  >
                    ثبت نهایی و پرداخت ✅
                  </button>

                  <button 
                    onClick={() => setShowCheckout(false)}
                    className="btn btn-sm w-100 text-muted mt-2 border-0"
                  >
                    انصراف
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketPage;
