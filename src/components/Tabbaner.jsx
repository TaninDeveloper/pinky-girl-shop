
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tabbaner() {

  const navigate = useNavigate();

  const slides = [

    {
      id: 1,
      image: '/makeuptab.jpeg', 
      category: 'cosmetic',
      title: 'دنیای رنگارنگ لوازم آرایشی',
      desc: 'جدیدترین برندها برای درخشش تو'
    },

    {
      id: 2,
      image: '/skintab.jpeg', 
      category: 'skin',
      title: 'مراقبت تخصصی پوست',
      desc: 'لطافت و شادابی به سبک پینکی گرل'
    },

    {
      id: 3,
      image: '/electrictab.jpeg', 
      category: 'electric',
      title: 'لوازم برقی حرفه‌ای',
      desc: 'تکنولوژی در خدمت زیبایی موهای تو'
    }

  ];


  return (

    <div id="pinkiSlider" className="carousel slide shadow-sm mt-4" data-bs-ride="carousel" 
    style={{ borderRadius: '30px', overflow: 'hidden'}}>

      <div className="carousel-indicators">

        {slides.map((_, index) => (

          <button 
            key={index}
            type="button" 
            data-bs-target="#pinkiSlider" 
            data-bs-slide-to={index} 
            className={index === 0 ? 'active' : ''}>
          </button>
        ))}

      </div>

      <div className="carousel-inner">

        {slides.map((slide, index) => (

          <div 
            key={slide.id} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            onClick={() => navigate(`/category/${slide.category}`)}
            style={{ cursor: 'pointer', height: '450px', marginTop: '80px' }}
          >
            <img 
              src={slide.image} 
              className="d-block w-100 h-100" 
              style={{ objectFit: 'cover' }} 
              alt={slide.title} 
            />

            <div className="carousel-caption d-none d-md-block" style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '20px',
              padding: '20px',
              backdropFilter: 'blur(5px)'
            }}>

              <h2 className="fw-bold text-white">{slide.title}</h2>

              <p>{slide.desc}</p>

              <button className="btn btn-light rounded-pill px-4 fw-bold" 
              style={{ color: '#ec0e93' }}>
                مشاهده محصولات
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#pinkiSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#pinkiSlider" data-bs-slide="next">

        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Tabbaner;