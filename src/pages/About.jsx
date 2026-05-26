

import React from "react";

function About() {

  const aboutImage = "/image_2338102702.png"; 

  return (

    <div className="container my-5 py-5" dir="rtl">

      <div className="row align-items-center">

        <div className="col-lg-7 text-end order-2 order-lg-1">

          <h1 className="fw-bold mb-4"
           style={{ color: '#ec0e93', fontSize: '2.5rem' }}>
            داستان پینکی گرل <span
             style={{ fontSize: '1.5rem' }}>🎀</span>
          </h1>

          <div className="pe-3"
           style={{ borderRight: '5px solid #ec0e93' }}>

            <p className="lh-lg fs-5"
             style={{ color: '#444', textAlign: 'justify' }}>
              سلام دوستم! خوشحالیم که اینجا هستی. 
              <br />
              <strong style={{color: '#ec0e93'}}>پینکی</strong> <strong> گرل </strong>
             فقط یک فروشگاه نیست، یک دنیای صورتیه که با عشق برای شما ساخته شده. 
              ما از سال ۱۴۰۵ با این هدف شروع کردیم که بهترین برندهای آرایشی و بهداشتی رو با قیمتی که لبخند روی لباتون بیاره، فراهم کنیم.
            </p>

            <p className="lh-lg fs-5 mt-3" 
            style={{ color: '#444', textAlign: 'justify' }}>
              تمام محصولات ما با دقت انتخاب شدن تا کیفیت و اصالت رو به میز آرایش شما هدیه بدن. 
              چون معتقدیم هر دختری لایق درخشیدنه! ✨
            </p>

          </div>

          <div className="p-4 mt-5 shadow-sm text-center" 
               style={{ 
                 backgroundColor: '#fff0f6', 
                 borderRadius: '20px', 
                 border: '1px dashed #ec0e93' 
               }}>

            <h4 className="mb-0 fw-bold" 
            style={{ color: '#ec0e93' }}>
              🌸 شعار ما: صورتی باش و بدرخش! 🌸
            </h4>
          </div>
        </div>

        <div className="col-lg-5 mb-5 mb-lg-0 order-1 order-lg-2 text-center">

          <div className="position-relative d-inline-block">

            <div className="position-absolute"
             style={{top: '10px', left: '10px', right: '-10px', bottom: '-10px',
              backgroundColor: '#ffd6e7', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              zIndex: -1}}>

            </div>

            <img 
              src={aboutImage} 
              alt="دنیای پینکی گرل" 
              className="img-fluid shadow-lg"
              style={{ 
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
                border: '10px solid white',
                maxWidth: '100%',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}/>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .text-end { text-align: center !important; }
          .pe-3 { border-right: none !important; padding-right: 0 !important; }
        }`}
        </style>
    </div>
  );
}


export default About;



