
import React from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "../components/Productcard";
import { allProducts } from "../Data"

function Shop () {

  const {searchterm, categoryname} = useParams ();
  let filteredProducts = allProducts;

  if (searchterm) {
    filteredProducts = allProducts.filter (p => p.name.toLowerCase ().includes (searchterm.toLowerCase ()))
  }
  else if (categoryname && categoryname !== "all") {
    filteredProducts = allProducts.filter (p => p.category === categoryname)
  }


  return (

    <div className="container mt-5 pt-5" dir="rtl"
     style={{ position: 'relative', zIndex: '5' }}>

      <h3 className="mb-5 fw-bold text-end" 
      style={{ color: '#ec0e93' }}>

        {searchterm? ` نتایج جست و جو: ${searchterm}` : " لیست محصولات "}

      </h3>
      
      <div className="row g-4">

        {filteredProducts.map (item => (

          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>

            <ProductCard product={item} />
            </div>
        ))}

      </div>

    </div>
  )
}
export default Shop
