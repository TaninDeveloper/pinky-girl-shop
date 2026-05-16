
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-5 pt-5 pb-4"
     style={{ backgroundColor: '#fff0f6', borderTop: '5px solid #ffdeeb' }}>

      <div className="container text-end" dir="rtl" >

        <div className="row">

          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-3" 
             style={{ color: '#ec0e93' }}> 
             <strong style={{color: 'black'}}> pinki </strong> <strong> girl </strong>🎀</h5>
           
             <p className="text-muted small"
              style={{ lineHeight: '2' }}>
              ما اینجا هستیم تا بهترین و باکیفیت‌ترین لوازم آرایشی و بهداشتی رو با قیمتی مناسب به دستت برسونیم. زیبایی تو، اولویت ماست ! ✨
            </p>

          </div>

          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-3"
             style={{ color: '#ec0e93' }}>دسترسی سریع</h5>

            <ul className="list-unstyled p-0">

              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-muted hover-pink">صفحه اصلی</Link>
                </li>

              <li className="mb-2">
                <Link to="/profile" className="text-decoration-none text-muted hover-pink">پروفایل من</Link>
                </li>

              <li className="mb-2">
                <Link to="/basket" className="text-decoration-none text-muted hover-pink">سبد خرید</Link>
                </li>

            </ul>

          </div>

          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-3" 
            style={{ color: '#ec0e93' }}>ارتباط با ما</h5>

            <p className="text-muted small mb-2">📍 آدرس: کرج - فردیس- خیابان امام حسن- بنبست اقدسی- پلاک 115 </p>

            <p className="text-muted small mb-3">📞 پشتیبانی: 09038157040</p>

            <div className="d-flex gap-3 justify-content-end">

              <a href="#" className="text-pink fs-4"><i className="bi bi-instagram"></i></a>

              <a href="#" className="text-pink fs-4"><i className="bi bi-telegram"></i></a>

              <a href="#" className="text-pink fs-4"><i className="bi bi-whatsapp"></i></a>

            </div>
          </div>

        </div>

        <hr className="my-4 opacity-25" />

        <div className="text-center">

          <p className="text-muted small mb-0">
            تمامی حقوق برای <span className="fw-bold" 
            style={{ color: '#ec0e93' }}>پینکی گرل</span> محفوظ است | ۱۴۰۴ 💖
          </p>

        </div>
      </div>

      <style>{`
        .hover-pink:hover { color: #ec0e93 !important; padding-right: 5px; transition: 0.3s; }
        .text-pink { color: #ec0e93; transition: 0.3s; }
        .text-pink:hover { transform: translateY(-3px); display: inline-block; }`}
        </style>
        
    </footer>
  );
}

export default Footer;