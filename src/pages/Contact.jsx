
import React from "react";

function Contact () {

  return (

    <div className="container mt-5 pt-5 text-end" dir="rtl">

      <h2 className="fw-bold mb-5 text-center" 
      style={{ color: '#ec0e93' }}> 
      ارتباط با پینکی گرل 📞
      </h2>

      <div className="row g-4">

        <div className="col-md-4">

          <div className="card h-100 p-4 border-0 shadow-sm text-center" 
          style={{ borderRadius: '25px' }}>

            <div className="fs-1 mb-3">📍 </div>

            <h5 className="fw-bold"> آدرس ما </h5>

            <p className="text-muted"> تهران، سعادت‌آباد، برج صورتی، واحد پینکی </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card h-100 p-4 border-0 shadow-sm text-center" 
          style={{ borderRadius: '25px' }}>

            <div className="fs-1 mb-3"> 📞 </div>

            <h5 className="fw-bold"> شماره تماس </h5>

            <p className="text-muted" dir="ltr"> 0903-815-7040 </p>

            <p className="text-muted small"> شنبه تا پنجشنبه (۹ صبح تا ۶ عصر) </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card h-100 p-4 border-0 shadow-sm text-center" 
          style={{ borderRadius: '25px' }}>

            <div className="fs-1 mb-3"> 💬 </div>

            <h5 className="fw-bold"> شبکه‌های اجتماعی </h5>

            <p className="text-muted"> ما رو در اینستاگرام و تلگرام دنبال کن </p>

            <div className="d-flex justify-content-center gap-3"> 

              <span style={{color: '#ec0e93', cursor: 'pointer'}}> @PinkyGirl_Shop </span>
            </div>

          </div>

        </div>

      </div>

      <div className="mt-5 p-5 bg-white shadow-sm rounded-5">

        <h4 className="fw-bold mb-4 text-center"> ارسال پیام مستقیم به ما 💌 </h4>

        <div className="row">

          <div className="col-md-6 mb-3">

            <input type="text"
            placeholder="نام شما"
             className="form-control rounded-pill p-3 border-light bg-light"  />

           </div>

           <div className="col-md-6 mb-3">

            <input type="text" 
            placeholder= "ایمیل یا شماره تماس"
            className="form-control rounded-pill p-3 border-light bg-light"/>

          </div>

          <div className="col-12 mb-4">

            <textarea 
            placeholder= "چطور می‌تونیم کمکت کنیم؟"
            className="form-control rounded-4 p-3 border-light bg-light" rows="4"/>

          </div>

          <div className="text-center">

            <button className="btn px-5 py-3 text-white fw-bold shadow-sm" 
            style={{ backgroundColor: '#ec0e93', borderRadius: '15px' }}>
              فرستادن پیام  ✨
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Contact