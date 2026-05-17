
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

function Navbar () {

  const [searchterm, setsearchterm] = useState ("");

  
  const navigate = useNavigate ();
  const {cartItems} = useCart ();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handelsearch = (e) => {
    const value = e.target.value;
    setsearchterm (value);

    if (value.trim () !== "") {
      navigate (`/shop/search/${value}`)
    }
    else {
      navigate ('/category/all')
    }

  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" dir="rtl">
      <div className="container-fluid"
       style={{ minHeight: "90px", backgroundColor: "#000", fontFamily: "vazir" }}>

        <Link className="navbar-brand d-flex align-items-center ms-3" to = "/">

          <img className="img1"
          src="/i1.jpg"
          alt="logo"
          style={{ width: "65px", height: "65px", borderRadius: "50%", marginLeft: "20px", marginRight: '130px' }}
          />

          <span style={{ fontSize: "24px" }} className="sp">
            <strong style={{ color: "white" }}> pinki </strong>
            <strong style={{ color: "rgb(236, 14, 147)" }}> girl </strong>
          </span>

         </Link>

         <button className="navbar-toggler" type="button" data-bs-toggle = "collapse" data-bs-target="#navbarNav">

          <span className="navbar-toggler-icon"> </span>

         </button>

         <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-white" to = "/"> خانه </Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                محصولات
              </a>

              <ul className="dropdown-menu text-end">
                <li>
                  <Link className="dropdown-item" to = "/category/all"> همه محصولات </Link>
                  
                </li>
                <li> <hr className="dropdown-divider" /> </li>

                <li>
                  <Link className="dropdown-item" to = "/category/cosmetic"> آرایشی </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to = "/category/perfume"> عطر و ادکلن </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to = "/category/skin"> مراقبت از پوست </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to = "/category/hair"> مراقبت از مو </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to = "/category/electric"> لوازم برقی </Link>
                </li>
              </ul>

            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to = "/About"> درباره ما </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to = "/Contact"> ارتباط با ما </Link>
            </li>

          </ul>

          <div className="input-group ms-3" 
          style={{ width: "230px" }}>

            <input 
            className="form-control border-0"
            type="search"
            placeholder=" جستجوی محصولات... "
            value={searchterm}
            onChange={handelsearch}
            style={{ borderRadius: "0 20px 20px 0", fontSize: "14px", backgroundColor: "#f5f5f5" }}
            />

            <span className="input-group-text border-0" style={{ borderRadius: "20px 0 0 20px", backgroundColor: "rgb(236, 14, 147)" }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
             </svg>
          </span>

          </div>

          <Link className="text-white position-relative ms-3" to = "/Basket">

            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M2 2H4.5L6.5 14H19L21 6H7" stroke="url(#pinkGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="19" r="2" fill="#ec0e93" />
              <circle cx="17" cy="19" r="2" fill="#a011cf" />
            </svg>

            {totalItems > 0 && (

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
              style={{ fontSize: '10px' }}>
                {totalItems}
               </span>

            )}
          </Link>

          <Link className="text-white ms-4" to = "/profile" >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginLeft: '110px'}}>
             <circle cx="12" cy="7" r="4" stroke="url(#userGradient)" strokeWidth="2" />
             <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20H5Z" stroke="url(#userGradient)" strokeWidth="2" strokeLinejoin="round" />
            </svg>

            <svg width="0" height="0">
           <defs>
             <linearGradient id="pinkGradient" x1="2" y1="2" x2="21" y2="14">
               <stop stopColor="#ec0e93" />
               <stop offset="1" stopColor="#a011cf" />
             </linearGradient>
             <linearGradient id="userGradient" x1="0" y1="0" x2="1" y2="1">
               <stop stopColor="#ec0e93" />
               <stop offset="1" stopColor="#fb85cf" />
             </linearGradient>
           </defs>
          </svg>
           </Link>

         </div>

      </div>

    </nav>
  )
}
  
export default Navbar;

