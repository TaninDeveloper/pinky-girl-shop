
import React from 'react';
import FestivalTimer from '../components/FestivalTimer';
import { allProducts } from "../Data";
import Productcard from '../components/Productcard'; 
import Tabbaner from '../components/Tabbaner';
import CategoryCircles from '../components/CategoryCircles'; 

function Home() {

  const firstFour = allProducts.slice(0, 4);
  const secondFour = allProducts.slice(4, 8);

  return (
    <div style={{ backgroundColor: '#fff5f8', minHeight: '100vh', paddingBottom: '50px' }}>
      
      <FestivalTimer />

      <div className="container mt-5">
        
        <div className="text-center mb-5">

          <h2 className="fw-bold" 
          style={{ color: '#444', fontFamily: 'vazir', marginTop: '100px' }}>
            ✨  پرفروش‌ های هفته ✨
            </h2>

          <div style={{ width: '60px', height: '4px', background: '#ec0e93', margin: '20px auto', borderRadius: '10px' }}></div>
        </div>

        <div className="row g-4 mb-5"
         style={{marginTop: '50px'}}>

          {firstFour.map(item => (

            <div className="col-6 col-md-3" key={item.id}>

              <Productcard product={item} />

            </div>
          ))}
        </div>

        <div className="my-5">
           <Tabbaner />
        </div>

        <div className="my-5">
           <CategoryCircles />
        </div>

        <div className="row g-4 mt-5" >

          {secondFour.map(item => (
            
            <div className="col-6 col-md-3" key={item.id}>
              <Productcard product={item} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;

