
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryCircles() {

  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'لوازم برقی', slug: 'electric', img: '/electric.jpeg' },
    { id: 2, name: 'آرایشی', slug: 'cosmetic', img: '/makeup.jpeg' },
    { id: 3, name: 'مراقبت مو', slug: 'hair', img: '/hair.jpeg' },
    { id: 4, name: 'مراقبت پوست', slug: 'skin', img: '/skin.jpeg' },
    { id: 5, name: 'عطر و ادکلن', slug: 'perfume', img: '/perfum.jpeg' },
  ];

  return (

    <div className="container my-5">

      <div className="d-flex justify-content-around align-items-center flex-wrap gap-3">
        {categories.map((cat) => (

          <div 
            key={cat.id} 
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="text-center"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
          >

            <div 
              className="category-circle-wrapper shadow-sm mb-2"
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #fff',
                outline: '2px solid #ec0e93', 
                backgroundColor: '#fff', marginTop: '80px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
           
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-100 h-100" 
                style={{ objectFit: 'cover' }} />
              
            </div>
            
            <span 
              className="fw-bold d-block mt-2" 
              style={{ fontSize: '13px', color: '#444' }}>
            
              {cat.name}

            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCircles;




